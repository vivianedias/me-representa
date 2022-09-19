import "../../shared/locales/i18n";
import Head from "next/head";
import NextLink from "next/link";
import { useEffect, useMemo, useState } from "react";
import { unstable_getServerSession } from "next-auth";
import { Form, Field } from "react-final-form";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  chakra,
  Stack,
  Heading,
  FormLabel,
  FormErrorMessage,
  Text,
  FormHelperText,
  Image,
  Spinner,
  Flex,
  Grid,
  GridItem,
  Select,
  RadioGroup,
  Radio,
  HStack,
  Checkbox,
  Link,
  Icon,
} from "@chakra-ui/react";
import { FaUserAlt, FaRegTimesCircle, FaExternalLinkAlt } from "react-icons/fa";
import validations from "../../utils/validations";
import useUploadS3 from "../../shared/hooks/useUploadS3";
import fetcher from "../../utils/apiClient";
import { authOptions } from "../api/auth/[...nextauth]";

function EmailField({ t }) {
  const CFaUserAlt = chakra(FaUserAlt);
  const { required, email, composeValidators } = validations(t);

  return (
    <Field name="email" validate={composeValidators(required, email)}>
      {({ input, meta }) => {
        return (
          <FormControl isInvalid={meta.error && meta.touched}>
            <FormLabel>{t("email.label")}</FormLabel>
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
        );
      }}
    </Field>
  );
}

function CpfField({ t }) {
  const { required, composeValidators, cpf, length } = validations(t);

  return (
    <Field name="cpf" validate={composeValidators(required, cpf, length(11))}>
      {({ input, meta }) => {
        return (
          <FormControl isInvalid={meta.error && meta.touched}>
            <FormLabel>{t("cpf.label")}</FormLabel>
            <InputGroup>
              <Input {...input} type="cpf" placeholder={t("cpf.placeholder")} />
            </InputGroup>
            <FormErrorMessage>{meta.error}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
}

function ImageField({ t, isLoading, uploadS3, imageUrl }) {
  const handleFileInput = (e, onChange) => {
    const file = e.target.files[0];
    uploadS3(file);
    onChange(e);
  };

  return (
    <Field name="image">
      {({ input, meta }) => {
        const hasError = (meta.error || meta.submitError) && meta.touched;
        return (
          <Stack w="100%" spacing={4}>
            <FormControl isInvalid={hasError}>
              <FormLabel>{t("image.label")}</FormLabel>
              <Grid
                align="center"
                templateColumns={{ base: "1fr", md: "300px 1fr" }}
                templateRows={{ base: "repeat(2, 100%)", md: "1fr" }}
              >
                <GridItem>
                  <Box
                    bgColor="gray.200"
                    overflow="hidden"
                    borderRadius="full"
                    position="relative"
                    boxSize="200px"
                    mb={{ base: 10, md: 0 }}
                  >
                    <Box
                      position="absolute"
                      top="50%"
                      left="50%"
                      transform="translate(-50%, -50%)"
                      zIndex={1}
                    >
                      {isLoading ? <Spinner color="white" size="xl" /> : null}
                    </Box>
                    <Image
                      position="absolute"
                      top="50%"
                      left="50%"
                      transform="translate(-50%, -50%)"
                      objectFit="cover"
                      alt="Profile photo selected by the candidate"
                      src={imageUrl}
                      fallbackSrc="https://via.placeholder.com/300"
                    />
                  </Box>
                </GridItem>
                <GridItem>
                  <Input
                    {...input}
                    onChange={(e) => handleFileInput(e, input.onChange)}
                    type="file"
                    placeholder={t("image.placeholder")}
                    accept="image/*"
                  />
                  <FormHelperText textAlign="left">
                    {t("image.helperText")}
                  </FormHelperText>
                  <FormErrorMessage>
                    {meta.error || meta.submitError}
                  </FormErrorMessage>
                </GridItem>
              </Grid>
            </FormControl>
          </Stack>
        );
      }}
    </Field>
  );
}

const Condition = ({ when, is, children }) => {
  return (
    <Field name={when} subscription={{ value: true }}>
      {({ input: { value } }) => (value === is ? children : null)}
    </Field>
  );
};

function SelectSexualOrientation({ t, lgbtConfirmInitialValue }) {
  const { required } = validations(t);

  return (
    <>
      <Field validate={required} type="radio" name="lgbtConfirm">
        {({ input, meta }) => (
          <FormControl isInvalid={meta.error && meta.touched}>
            <FormLabel>{t("lgbt.confirm.label")}</FormLabel>
            <RadioGroup
              colorScheme="yellow"
              defaultValue={lgbtConfirmInitialValue}
            >
              <Stack direction="row" spacing={4}>
                <Radio
                  {...input}
                  value="yes"
                  isInvalid={meta.error && meta.touched}
                >
                  {t("lgbt.confirm.true")}
                </Radio>
                <Radio
                  {...input}
                  value="no"
                  isInvalid={meta.error && meta.touched}
                >
                  {t("lgbt.confirm.false")}
                </Radio>
              </Stack>
              <FormErrorMessage>{meta.error}</FormErrorMessage>
            </RadioGroup>
          </FormControl>
        )}
      </Field>
      <Condition when="lgbtConfirm" is="yes">
        <Field name="lgbt" validate={required}>
          {({ input, meta }) => {
            return (
              <FormControl isInvalid={meta.touched && meta.error}>
                <Select {...input}>
                  <option value="">{t("lgbt.options.default")}</option>
                  <option value="lesbian">{t("lgbt.options.lesbian")}</option>
                  <option value="bissexual">
                    {t("lgbt.options.bissexual")}
                  </option>
                  <option value="gay">{t("lgbt.options.gay")}</option>
                  <option value="trans">{t("lgbt.options.trans")}</option>
                  <option value="other">{t("lgbt.options.other")}</option>
                </Select>
                <FormErrorMessage>{meta.error}</FormErrorMessage>
              </FormControl>
            );
          }}
        </Field>
      </Condition>
    </>
  );
}

function AgreeTermsCheckbox({ t, termsInitialValue }) {
  const { minLength } = validations(t);

  function TermsLink() {
    return (
      <NextLink href="/termos" passHref>
        <Link color="pink.600" target="_blank">
          {t("terms.termsAndConditions")}{" "}
          <Icon as={FaExternalLinkAlt} color="pink.600" boxSize={3} />.
        </Link>
      </NextLink>
    );
  }

  return (
    <Field
      name="acceptedTerms"
      value="yes"
      type="checkbox"
      validate={minLength(1, "terms.error")}
    >
      {({ input, meta }) => {
        return (
          <FormControl isInvalid={meta.error && meta.touched}>
            <Checkbox
              {...input}
              isInvalid={meta.error && meta.touched}
              colorScheme="yellow"
            >
              {t("terms.label")} <TermsLink />
            </Checkbox>
            <FormErrorMessage>{meta.error}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
}

function formatInitialValues({ candidate, session }) {
  const parseToAnswer = ({ lgbtConfirm }) =>
    lgbtConfirm === true ? "yes" : "no";

  return {
    email: candidate?.email || session?.user?.email || "",
    image: null,
    cpf: candidate?.cpf || "",
    lgbtConfirm: candidate ? parseToAnswer(candidate) : null,
    lgbt: candidate?.lgbt || "",
    acceptedTerms: [],
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
  const { imageUrl } = s3Props;

  const memoedInitialValues = useMemo(() => initialValues, [initialValues]);
  const CFaRegTimesCircle = chakra(FaRegTimesCircle);

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

    const newCandidate = {
      ...values,
      image: imageUrl,
      userId: session?.user?.id,
      lgbtConfirm: values.lgbtConfirm === "yes",
      acceptedTerms: values.acceptedTerms[0] === "yes",
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
    // Prefetch the dashboard page
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
            render={({ handleSubmit, submitting, pristine }) => {
              return (
                <Box as="form" onSubmit={handleSubmit} marginTop={8}>
                  <Stack spacing={5} align="center">
                    <EmailField t={t} />
                    <CpfField t={t} />
                    <SelectSexualOrientation
                      t={t}
                      lgbtConfirmInitialValue={initialValues.lgbtConfirm}
                    />
                    <ImageField t={t} {...s3Props} />
                    {candidate?.acceptedTerms ? null : (
                      <AgreeTermsCheckbox
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