import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Text,
  Tooltip,
  VisuallyHidden,
} from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import "/shared/locales/i18n";

const Cadastro = () => {
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      // signIn();
      console.log("deslogado");
    },
  });

  // if (status === "loading") {
  //   return <p>Loading...</p>;
  // }

  const handleSubmit = () => {};
  const onSendPhoto = () => {};

  return (
    <Container as="section">
      <Box marginBottom="4" marginTop="4">
        <VisuallyHidden>
          <Heading as="h1">Cadastro</Heading>
        </VisuallyHidden>
        <Heading as="h2" size="md">
          Olá, Candidato! Obrigada por ingressar na nossa plataforma! Para sua
          segurança precisamos cadastrar e validar o seu perfil.
        </Heading>
      </Box>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <Heading className="cadastroInputsHeading" as="h2" size="lg">
            Dados da candidatura
          </Heading>
          <label htmlFor="email">
            <span>Nome de Urna </span>
            <Input
              id="name"
              isRequired
              name="name"
              onChange={(event) => {
                setFieldValue(event.target.name, event.target.value);
              }}
            />
          </label>
          <label htmlFor="cpf">
            <span>CPF</span>
            <Input
              id="cpf"
              name="cpf"
              isRequired
              onChange={(event) => {
                setFieldValue(event.target.name, event.target.value);
              }}
            />
          </label>
          <label htmlFor="secao">
            <span>
              Seção Eleitoral(
              <Tooltip label="Localizada no título de eleitor, a seção eleitoral é composta por uma sequência de 4 dígitos">
                ?
              </Tooltip>
              )
            </span>
            <Input
              id="secao"
              name="secao"
              isRequired
              onChange={(event) => {
                setFieldValue(event.target.name, event.target.value);
              }}
            />
          </label>
        </div>

        <div className="form-group">
          <Heading className="cadastroInputsHeading" as="h2" size="lg">
            Para mantermos contato:
          </Heading>
          <label htmlFor="telefone">
            <span>Telefone Celular com DDD</span>
            <Input
              id="telefone"
              name="telefone"
              isRequired
              placeholder="+55 21925640835"
              onChange={(event) => {
                setFieldValue(event.target.name, event.target.value);
              }}
            />
          </label>
          <label htmlFor="email">
            <span>E-mail</span>
            <Input
              id="email"
              name="email"
              isRequired
              onChange={(event) => {
                setFieldValue(event.target.name, event.target.value);
              }}
            />
          </label>
        </div>

        <div className="form-group">
          <Heading className="cadastroInputsHeading" as="h2" size="lg">
            Como encontramos sua candidatura nas redes sociais?
          </Heading>
          <label htmlFor="telefone">
            <span>Facebook</span>
            <Input
              id="facebook"
              name="facebook"
              placeholder="www.facebook.com"
              onChange={(event) => {
                setFieldValue(event.target.name, event.target.value);
              }}
            />
          </label>
          <label htmlFor="instagram">
            <span>Instagram</span>
            <Input
              id="instagram"
              name="instagram"
              placeholder="www.instagram.com"
              onChange={(event) => {
                setFieldValue(event.target.name, event.target.value);
              }}
            />
          </label>
          <label htmlFor="twitter">
            <span>Twitter</span>
            <Input
              id="twitter"
              name="twitter"
              placeholder="www.twitter.com"
              onChange={(event) => {
                setFieldValue(event.target.name, event.target.value);
              }}
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="preenchimentoCandidato">
            <Heading className="cadastroInputsHeading" as="h2" size="lg">
              Quem está preenchendo o cadastro é a/o própria/o candidata/o?
            </Heading>
            <RadioGroup
              name="preenchimentoCandidato"
              isRequired
              onChange={(event) =>
                setFieldValue(event.target.name, event.target.value)
              }
            >
              <Radio value="Sim">Sim</Radio>
              <Radio value="Nao">Não</Radio>
            </RadioGroup>
          </label>
        </div>

        <div className="form-group">
          <Heading className="cadastroInputsHeading" as="h2" size="lg">
            Cadastre uma senha para acesso futuro
          </Heading>
          <label htmlFor="email">
            <span>Senha</span>
            <Input
              id="password"
              name="password"
              isRequired
              type="password"
              onChange={(event) => {
                setFieldValue(event.target.name, event.target.value);
              }}
            />
          </label>
          <label htmlFor="cpf">
            <span>Confirme sua senha</span>
            <Input
              id="confirmaSenha"
              name="confirmaSenha"
              isRequired
              type="password"
              onChange={(event) => {
                setFieldValue(event.target.name, event.target.value);
              }}
            />
          </label>
        </div>

        <div className="form-group">
          <Heading className="cadastroInputsHeading" as="h2" size="lg">
            Anexar sua foto de candidatura
          </Heading>
          <Box className="cadastroInputs">
            {/* <Thumb file={photoFile} /> */}
            <Text className="helperTextUpload">
              Insira a foto que será usado na divulgação da sua campanha, caso
              faça parte de uma candidatura coletiva você deverá usar a imagem
              com todos os integrantes.
            </Text>
          </Box>
          <input
            id="photo"
            name="photo"
            className="inputPhoto"
            required
            type="file"
            onChange={onSendPhoto}
          />
        </div>

        <Box className="cadastroButtons">
          <Button
            // isLoading={isLoading}
            // isDisabled={!values.photo}
            loadingText="Enviando"
            variantColor="pink"
            type="submit"
          >
            Enviar
          </Button>
          {/* <Text>
                    Ao enviar seus dados você receberá um código de validação, insira-o na tela a seguir
                  </Text> */}
        </Box>
      </form>
    </Container>
  );
};

export default Cadastro;
