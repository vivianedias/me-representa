import { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { unstable_getServerSession } from "next-auth";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Form } from "react-final-form";
import { useTranslation } from "react-i18next";
import {
  Box,
  Button,
  chakra,
  Stack,
  Heading,
  Text,
  Flex,
  HStack,
  useToast,
  Container,
} from "@chakra-ui/react";
import { FaRegTimesCircle } from "react-icons/fa";
import {
  EmailField,
  CpfField,
  ImageField,
  SexualOrientationField,
  TermsAndConditionsField,
} from "../../shared/ui/Fields";

import { authOptions } from "../api/auth/[...nextauth]";
import useUploadS3 from "../../shared/hooks/useUploadS3";
import fetcher from "../../utils/apiClient";
import { event, DEFAULT_EVENTS } from "../../shared/analytics/utils";

function formatInitialValues({ candidate, session }) {
  const parseToAnswer = ({ lgbtConfirm }) =>
    lgbtConfirm === true ? "yes" : "no";

  return {
    email: session?.user?.email || "",
    image: null,
    cpf: candidate?.cpf || "",
    lgbtConfirm: candidate ? parseToAnswer(candidate) : null,
    lgbt: candidate?.lgbt || "",
    acceptedTerms: candidate?.acceptedTerms ? ["yes"] : [],
  };
}

export default function CadastroCandidato(props) {
  const { session, candidate } = props;

  const router = useRouter();
  const toast = useToast();
  const { t } = useTranslation("cadastro");
  const s3Props = useUploadS3({ candidate, session });

  const [initialValues, setInitialValues] = useState(
    formatInitialValues(props)
  );
  const [submitError, setSubmitError] = useState(false);
  const [tseCandidate, setTseCandidate] = useState(null);

  const memoedInitialValues = useMemo(() => initialValues, [initialValues]);
  const CFaRegTimesCircle = chakra(FaRegTimesCircle);
  const { imageUrl } = s3Props;

  const updateCandidate = async (newCandidate) => {
    await fetcher("/api/candidate/register", {
      method: "POST",
      body: newCandidate,
    });
  };

  const onSubmit = async (values) => {
    try {
      setSubmitError(false);

      if (!imageUrl) {
        return { image: t("image.validation") };
      }

      if (!tseCandidate && values.cpf !== candidate.cpf) {
        return {
          cpf: t("cpf.requiredCandidate"),
        };
      }

      const newCandidate = {
        ...values,
        image: imageUrl,
        userId: session?.user?.id,
        tseCandidate,
      };

      await updateCandidate(newCandidate);

      if (!candidate) {
        event({
          action: DEFAULT_EVENTS.signup,
          description: `User ${session.user.id} has finished signing up.`,
        });
        router.push("/candidato/prioridades");
      } else {
        setInitialValues(
          formatInitialValues({
            candidate: newCandidate,
            session,
          })
        );

        toast({
          title: t("success"),
          description: t("successUpdate"),
          status: "success",
          duration: 9000,
          isClosable: true,
          variant: "left-accent",
          position: "top-right",
        });
      }
    } catch (e) {
      console.error(e);
      setSubmitError(true);
      event({
        action: DEFAULT_EVENTS.error,
        description: `Error submitting sign up form for user ${session.user.id}: ${e}`,
        fatal: false,
      });
    }
  };

  useEffect(() => {
    router.prefetch("/candidato/prioridades");
  }, []);

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta property="og:title" content={t("title")} key="title" />
      </Head>

      <Container>
        <Stack spacing={3} align="center">
          <Heading as="h1" size="xl" align="center">
            {t("heading.hello")}
          </Heading>
          <Text fontSize="18px" align="center">
            {t("heading.thanks")} {t("heading.validationMessage")}
          </Text>
        </Stack>
        <Form
          onSubmit={onSubmit}
          initialValues={memoedInitialValues}
          subscription={{ submitting: true, pristine: true }}
          render={({ handleSubmit, submitting, pristine }) => {
            return (
              <Box as="form" onSubmit={handleSubmit} marginTop={8}>
                <Stack spacing={5} align="center">
                  <EmailField t={t} isDisabled={true} />
                  <CpfField
                    t={t}
                    tseCandidate={tseCandidate}
                    setTseCandidate={setTseCandidate}
                  />
                  <SexualOrientationField t={t} />
                  <ImageField t={t} {...s3Props} />
                  {candidate?.acceptedTerms ? null : (
                    <TermsAndConditionsField
                      t={t}
                      termsInitialValue={initialValues.terms}
                    />
                  )}
                  <Flex
                    justifyContent="flex-end"
                    direction="column"
                    gap={4}
                    w="100%"
                  >
                    {submitError ? (
                      <HStack justifyContent="flex-end">
                        <CFaRegTimesCircle w={5} h={5} color="red.500" />
                        <Text color="red.600">{t("submitError")}</Text>
                      </HStack>
                    ) : null}
                    <Button
                      type="submit"
                      isLoading={submitting}
                      disabled={submitting || pristine}
                      loadingText="Enviando"
                      variant="solid"
                      colorScheme="pink"
                      size="md"
                      alignSelf="flex-end"
                    >
                      {t("button")}
                    </Button>
                  </Flex>
                </Stack>
              </Box>
            );
          }}
        />
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: "/cadastro/login",
        permanent: false,
      },
    };
  }

  const t = ["cadastro", "header", "footer", "common"];

  try {
    const candidate = await fetcher(`/api/candidate/${session.user.id}`);

    return {
      props: {
        ...(await serverSideTranslations(context.locale, t)),
        session,
        candidate,
      },
    };
  } catch (e) {
    console.error("error", e);
    return {
      props: {
        ...(await serverSideTranslations(locale, t)),
        session,
        candidate: null,
      },
    };
  }
}
