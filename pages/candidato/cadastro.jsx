import "../../shared/locales/i18n";
import { useSession } from "next-auth/react";
import { Form, Field } from "react-final-form";
import { useTranslation } from "react-i18next";
import {
  Box,
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
  HStack,
  Center,
} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import validations from "../../utils/validations";
import useUploadS3 from "../../shared/hooks/useUploadS3";

export default function CadastroCandidato({ data }) {
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });
  const { imageUrl, uploadS3, isLoading } = useUploadS3();
  const CFaUserAlt = chakra(FaUserAlt);
  const { t } = useTranslation("translation", { keyPrefix: "cadastro" });
  const { required, email, composeValidators, cpf, length } = validations(t);

  const handleFileInput = (e, onChange) => {
    const file = e.target.files[0];
    uploadS3(file);
    onChange(e);
  };

  const onSubmit = (data) => console.log({ data });

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <Stack
      flexDir="column"
      mb="2"
      justifyContent="center"
      alignItems="center"
      p="1rem"
      backgroundColor="whiteAlpha.900"
      boxShadow="md"
    >
      <Box as="section" bgColor="white" w={{ base: "90%", md: "768px" }}>
        <Heading as="h1" size="2xl" align="center">
          Candidato
        </Heading>
        <Form
          onSubmit={onSubmit}
          initialValues={{
            email: session?.user?.email,
            image: session?.user?.image,
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
                        <Stack spacing={4}>
                          <Text align="center" fontSize="20px" fontWeight={700}>
                            {t("image.label")}
                          </Text>
                          <FormControl isInvalid={meta.error && meta.touched}>
                            <HStack spacing={10} align="centers">
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
                              </VStack>
                            </HStack>
                            <FormErrorMessage>{meta.error}</FormErrorMessage>
                          </FormControl>
                        </Stack>
                      );
                    }}
                  </Field>
                </Stack>
              </Box>
            );
          }}
        />
      </Box>
    </Stack>
  );
}
