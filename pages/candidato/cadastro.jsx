import "../../shared/locales/i18n";
import Head from "next/head";
import { useSession, signIn } from "next-auth/react";
import { Form, Field } from "react-final-form";
import { useTranslation } from "react-i18next";
import useSWR from "swr";
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
  VStack,
  Image,
  Spinner,
  Center,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import validations from "../../utils/validations";
import useUploadS3 from "../../shared/hooks/useUploadS3";
import fetcher from "../../utils/apiClient";

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
        return (
          <>
            <Text align="left" fontSize="18px" fontWeight={700}>
              {t("image.label")}
            </Text>
            <FormControl isInvalid={meta.error && meta.touched}>
              <Grid
                align="center"
                templateColumns={{ base: "1fr", md: "400px 1fr" }}
                templateRows={{ base: "repeat(2, 1fr)", md: "1fr" }}
              >
                <GridItem>
                  <Box
                    bgColor="gray.200"
                    overflow="hidden"
                    borderRadius="full"
                    position="relative"
                    boxSize="300px"
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
                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </GridItem>
              </Grid>
            </FormControl>
          </>
        );
      }}
    </Field>
  );
}

export default function CadastroCandidato() {
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });
  const {
    data: candidate,
    mutate,
    isValidating,
  } = useSWR(session?.user?.id ? `/api/candidate/${session.user.id}` : null);

  const s3Props = useUploadS3({ candidate, session });
  const { imageUrl } = s3Props;
  const { t } = useTranslation("translation", { keyPrefix: "cadastro" });

  const updateCandidate = (newCandidate) => {
    fetcher("/api/candidate/register", {
      method: "POST",
      body: newCandidate,
    });
  };

  const onSubmit = async (values) => {
    if (!imageUrl) {
      return { image: t("image.validation") };
    }

    const candidate = {
      ...values,
      image: imageUrl,
      userId: session?.user?.id,
    };

    await mutate(updateCandidate(candidate), {
      revalidate: false,
      rollbackOnError: true,
      optimisticData: candidate,
    });
  };

  if (status === "loading" || (isValidating && !candidate)) {
    return <Text>{t("loading")}...</Text>;
  }

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
        p="1rem"
        backgroundColor="whiteAlpha.900"
        boxShadow="md"
        py={8}
      >
        <Box as="section" bgColor="white" w={{ base: "90%", md: "768px" }}>
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
            initialValues={{
              email: session?.user?.email || "",
              image: null,
              cpf: candidate?.cpf || "",
            }}
            render={({ handleSubmit, submitting, pristine }) => {
              return (
                <Box as="form" onSubmit={handleSubmit} my={10}>
                  <Stack spacing={4} align="center">
                    <EmailField t={t} />
                    <CpfField t={t} />
                    <ImageField t={t} {...s3Props} />
                  </Stack>
                  <Flex justifyContent="flex-end" mt={8}>
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
                </Box>
              );
            }}
          />
        </Box>
      </Stack>
    </>
  );
}
