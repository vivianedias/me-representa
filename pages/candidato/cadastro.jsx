import "../../shared/locales/i18n";
import Head from "next/head";
import { useSession, signIn } from "next-auth/react";
import { Form, Field } from "react-final-form";
import { useTranslation } from "react-i18next";
import useSWR from "swr";
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
  VStack,
  Image,
  Spinner,
  Center,
  Flex,
} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import validations from "../../utils/validations";
import useUploadS3 from "../../shared/hooks/useUploadS3";
import fetcher from "../../utils/apiClient";

export default function CadastroCandidato() {
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });
  const { candidate, mutate } = useSWR(
    `/api/candidate/${session?.user?.id}`,
    fetcher
  );

  const router = useRouter();
  const { imageUrl, uploadS3, isLoading } = useUploadS3(session);
  const { t } = useTranslation("translation", { keyPrefix: "cadastro" });
  const { required, email, composeValidators, cpf, length } = validations(t);
  const CFaUserAlt = chakra(FaUserAlt);

  const handleFileInput = (e, onChange) => {
    const file = e.target.files[0];
    uploadS3(file);
    onChange(e);
  };

  const onSubmit = async (data) => {
    try {
      await mutate({
        ...data,
        image: imageUrl,
      });
      router(`/candidato/${session?.user?.id}`);
    } catch (error) {
      // Handle an error while updating the user here
    }
  };

  if (status === "loading") {
    return <Text>{t("loading")}</Text>;
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
              email: session?.user?.email,
              image: null,
              cpf: "",
            }}
            render={({ handleSubmit, submitting, submitError }) => {
              return (
                <Box as="form" onSubmit={handleSubmit} my={10}>
                  <Stack spacing={4} align="center">
                    <Field
                      name="email"
                      validate={composeValidators(required, email)}
                    >
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
                    <Field
                      name="cpf"
                      validate={composeValidators(required, cpf, length(11))}
                    >
                      {({ input, meta }) => {
                        return (
                          <FormControl isInvalid={meta.error && meta.touched}>
                            <FormLabel>{t("cpf.label")}</FormLabel>
                            <InputGroup>
                              <Input
                                {...input}
                                type="cpf"
                                placeholder={t("cpf.placeholder")}
                              />
                            </InputGroup>
                            <FormErrorMessage>{meta.error}</FormErrorMessage>
                          </FormControl>
                        );
                      }}
                    </Field>
                    <Field name="image" validate={required}>
                      {({ input, meta }) => {
                        return (
                          <>
                            <Text align="left" fontSize="18px" fontWeight={700}>
                              {t("image.label")}
                            </Text>
                            <FormControl isInvalid={meta.error && meta.touched}>
                              <Stack
                                spacing={10}
                                align="center"
                                direction={{ base: "column", md: "row" }}
                              >
                                <>
                                  <Center boxSize="300px" position="absolute">
                                    {isLoading ? <Spinner size="xl" /> : null}
                                  </Center>
                                  <Image
                                    borderRadius="full"
                                    boxSize="300px"
                                    alt="Profile photo selected by the candidate"
                                    src={imageUrl}
                                    fallbackSrc="https://via.placeholder.com/300"
                                  />
                                </>
                                <VStack>
                                  <Input
                                    {...input}
                                    onChange={(e) =>
                                      handleFileInput(e, input.onChange)
                                    }
                                    type="file"
                                    placeholder={t("image.placeholder")}
                                  />
                                  <FormHelperText>
                                    {t("image.helperText")}
                                  </FormHelperText>
                                  <FormErrorMessage>
                                    {meta.error}
                                  </FormErrorMessage>
                                </VStack>
                              </Stack>
                            </FormControl>
                          </>
                        );
                      }}
                    </Field>
                  </Stack>
                  <Flex justifyContent="flex-end" mt={8}>
                    <Button
                      type="submit"
                      isLoading={submitting}
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
