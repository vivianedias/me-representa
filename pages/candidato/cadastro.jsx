import "../../shared/locales/i18n";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { Form, Field } from "react-final-form";
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
} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import validations from "../../utils/validations";
import { useTranslation } from "react-i18next";

export default function CadastroCandidato({ data }) {
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      // signIn();
      console.log("logoff");
    },
  });
  const CFaUserAlt = chakra(FaUserAlt);
  const { t } = useTranslation("translation", { keyPrefix: "cadastro" });
  const { required } = validations(t);

  // if (status === "loading") {
  //   return <p>Loading...</p>;
  // }

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (data) => {
    await sleep(300);
    console.log({ data });
  };

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
        <Box as="section" bgColor="white" minW={{ base: "90%", md: "768px" }}>
          <Stack spacing={3} align="center">
            <Heading as="h1" size="xl" align="center">
              {t("heading.hello")}
            </Heading>
            <Heading as="h1" size="xl" align="center">
              {t("heading.thanks")}
            </Heading>
            <Heading as="h2" size="md" align="center">
              {t("heading.validationMessage")}
            </Heading>
          </Stack>

          <Form
            onSubmit={onSubmit}
            initialValues={{
              email: session?.user?.email,
            }}
            render={({ handleSubmit, submitting, submitError }) => {
              return (
                <Box as="form" onSubmit={handleSubmit} my={10}>
                  <Stack spacing={4} align="center">
                    <Field name="email" validate={required}>
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
                    <Field name="cpf" validate={required}>
                      {({ input, meta }) => {
                        return (
                          <FormControl isInvalid={meta.error && meta.touched}>
                            <FormLabel>{t("cpf.label")}</FormLabel>
                            <InputGroup>
                              <InputLeftElement pointerEvents="none">
                                <CFaUserAlt color="gray.300" />
                              </InputLeftElement>
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
                    <Button
                      type="submit"
                      isLoading={submitting}
                      loadingText="Enviando"
                      variant="solid"
                      colorScheme="pink"
                      width="20%"
                    >
                      {t("button")}
                    </Button>
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
