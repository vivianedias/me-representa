import "../../shared/locales/i18n";
import { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { unstable_getServerSession } from "next-auth";
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
} from "@chakra-ui/react";
import { FaRegTimesCircle } from "react-icons/fa";
import useUploadS3 from "../../shared/hooks/useUploadS3";
import fetcher from "../../utils/apiClient";
import { authOptions } from "../api/auth/[...nextauth]";
import {
  EmailField,
  CpfField,
  ImageField,
  SexualOrientationField,
  TermsAndConditionsField,
} from "../../shared/ui/Fields";

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
  const [initialValues, setInitialValues] = useState(
    formatInitialValues(props)
  );
  const [submitError, setSubmitError] = useState(false);
  const { t } = useTranslation("translation", { keyPrefix: "cadastro" });
  const s3Props = useUploadS3({ candidate, session });
  const [tseCandidate, setTseCandidate] = useState(null);
  const memoedInitialValues = useMemo(() => initialValues, [initialValues]);
  const CFaRegTimesCircle = chakra(FaRegTimesCircle);

  const { imageUrl } = s3Props;

  const updateCandidate = async (newCandidate) => {
    try {
      await fetcher("/api/candidate/register", {
        method: "POST",
        body: newCandidate,
      });
    } catch (e) {
      console.error(e);
      setSubmitError(true);
    }
  };

  const onSubmit = async (values) => {
    setSubmitError(false);

    if (!imageUrl) {
      return { image: t("image.validation") };
    }

    if (!tseCandidate) {
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
      router.push("/candidato/perguntas");
    }

    setInitialValues(
      formatInitialValues({
        candidate: newCandidate,
      })
    );
  };

  useEffect(() => {
    router.prefetch("/candidato/perguntas");
  }, []);

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta property="og:title" content={t("title")} key="title" />
      </Head>
      <Stack
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        backgroundColor="whiteAlpha.900"
        boxShadow="md"
        p={8}
      >
        <Box as="section" bgColor="white" w={{ base: "90%", lg: "768px" }}>
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
                    <SexualOrientationField
                      t={t}
                      lgbtConfirmInitialValue={initialValues.lgbtConfirm}
                    />
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
        </Box>
      </Stack>
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

  try {
    const candidate = await fetcher(`/api/candidate/${session.user.id}`);

    return {
      props: {
        session,
        candidate,
      },
    };
  } catch (e) {
    console.error("error", e);
    return {
      props: {
        session,
        candidate: null,
      },
    };
  }
}
