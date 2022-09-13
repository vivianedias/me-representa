import "../../shared/locales/i18n";
import Head from "next/head";
import {
  Heading,
  Box,
  Button,
  Text,
  Stack,
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
  chakra,
  FormErrorMessage,
  VStack,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { Form, Field } from "react-final-form";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FORM_ERROR } from "final-form";
import {
  FaUserAlt,
  FaRegTimesCircle,
  FaGoogle,
  FaLinkedinIn,
  FaTwitterSquare,
  FaFacebook,
  FaRegEnvelope,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Login() {
  const [verificationEmailSent, setVerificationEmailStatus] = useState(false);
  const CFaUserAlt = chakra(FaUserAlt);
  const CFaRegTimesCircle = chakra(FaRegTimesCircle);
  const { t } = useTranslation("translation", { keyPrefix: "login" });

  const onSubmit = async ({ email }) => {
    try {
      const sendingVerificationEmail = await signIn("email", {
        email,
        redirect: false,
        callbackUrl: "/cadastro",
      });

      if (sendingVerificationEmail.error !== null) {
        throw new Error("Problems with singin");
      }

      setVerificationEmailStatus(true);
    } catch (e) {
      console.log({ e });
      setVerificationEmailStatus(false);
      return { [FORM_ERROR]: e };
    }
  };
  const required = (value) =>
    value ? undefined : t("email.validation.required");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta property="og:title" content={t("title")} key="title" />
      </Head>
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
        p="1rem"
        backgroundColor="whiteAlpha.900"
        boxShadow="md"
      >
        <Heading as="h1" color="pink.500" mb="6">
          {t("title")}
        </Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, submitting, submitError }) => (
              <Box as="form" onSubmit={handleSubmit}>
                <Stack spacing={4} align="center">
                  <Field name="email" validate={required}>
                    {({ input, meta }) => (
                      <FormControl isInvalid={meta.error && meta.touched}>
                        <InputGroup>
                          <InputLeftElement pointerEvents="none">
                            <CFaUserAlt color="gray.300" />
                          </InputLeftElement>
                          <Input
                            {...input}
                            type="email"
                            placeholder={t("email.placeholder")}
                          />
                        </InputGroup>
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
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
                    borderRadius={0}
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
                        callbackUrl: "/cadastro",
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
      </Stack>
    </>
  );
}

export default Login;
