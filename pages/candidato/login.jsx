import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Form } from "react-final-form";
import { signIn, useSession } from "next-auth/react";
import { FORM_ERROR } from "final-form";
import { useTranslation } from "react-i18next";
import { log } from "next-axiom";

import {
  Heading,
  Box,
  Button,
  Text,
  Stack,
  chakra,
  VStack,
  HStack,
  Container,
} from "@chakra-ui/react";
import {
  FaRegTimesCircle,
  FaTwitterSquare,
  FaRegEnvelope,
} from "react-icons/fa";

import { EmailField } from "../../shared/ui/Fields";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "login",
        "header",
        "footer",
        "common",
      ])),
    },
  };
}

function Login() {
  const { status } = useSession();
  const router = useRouter();
  const [verificationEmailSent, setVerificationEmailStatus] = useState(false);
  const CFaRegTimesCircle = chakra(FaRegTimesCircle);
  const { t } = useTranslation("login");

  useEffect(() => {
    router.prefetch("/candidato/cadastro");
  }, []);

  const onSubmit = async ({ email }) => {
    try {
      const sendingVerificationEmail = await signIn("email", {
        email,
        redirect: false,
        callbackUrl: "/candidato/cadastro",
      });

      if (sendingVerificationEmail.error !== null) {
        throw new Error("Problems with singin");
      }

      setVerificationEmailStatus(true);
    } catch (e) {
      log.error(`User with '${email}' wasn't able to login`, e);
      setVerificationEmailStatus(false);
      return { [FORM_ERROR]: e };
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/candidato/cadastro");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>{t("loading")}...</div>;
  }

  if (status === "authenticated") {
    return <div>{t("redirect")}...</div>;
  }

  return (
    <>
      <Head>
        <title>{t("pageTitle")}</title>
        <meta property="og:title" content={t("title")} key="title" />
      </Head>

      <Container>
        <Heading as="h1" color="pink.500" mb="6">
          {t("title")}
        </Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, submitting, submitError }) => (
              <Box as="form" onSubmit={handleSubmit}>
                <Stack spacing={4} align="center">
                  <EmailField t={t} isDisabled={submitting} hasLabel={false} />
                  {verificationEmailSent ? (
                    <VStack>
                      <Heading as="h2" size="md">
                        {t("email.verificationEmail.title")}
                      </Heading>
                      <Text>{t("email.verificationEmail.body")}</Text>
                    </VStack>
                  ) : null}
                  {!verificationEmailSent && submitError ? (
                    <HStack>
                      <CFaRegTimesCircle w={5} h={5} color="red.500" />
                      <Text color="red.600">
                        {t("email.verificationEmail.error")}
                      </Text>
                    </HStack>
                  ) : null}
                  <Button
                    type="submit"
                    isLoading={submitting}
                    loadingText="Enviando"
                    variant="solid"
                    colorScheme="pink"
                    width="full"
                    leftIcon={<FaRegEnvelope />}
                  >
                    {t("email.button")}
                  </Button>
                  <Button
                    width="full"
                    leftIcon={<FaTwitterSquare />}
                    variant="solid"
                    colorScheme="twitter"
                    onClick={() =>
                      signIn("twitter", {
                        callbackUrl: "/candidato/cadastro",
                      })
                    }
                  >
                    {t("twitter.button")}
                  </Button>
                </Stack>
              </Box>
            )}
          />
        </Box>
      </Container>
    </>
  );
}

export default Login;
