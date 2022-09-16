import { validation, label, placeholder, lgbtOptions } from "../../i18n";

const cadastro = {
  submitError: "Houve um erro ao enviar o formulário",
  loading: "Carregando",
  button: "Enviar",
  validation,
  email: {
    label: label.email,
    placeholder: placeholder.email,
  },
  cpf: {
    label: label.cpf,
    placeholder: placeholder.cpf,
  },
  title: "Cadastro",
  lgbt: {
    options: lgbtOptions,
    placeholder: placeholder.lgbt,
    confirm: {
      true: "Sim",
      false: "Não",
    },
  },
  heading: {
    hello: "Olá, Candidata(o)!",
    thanks: "Obrigada por ingressar na nossa plataforma!",
    validationMessage:
      "Para sua segurança, precisamos cadastrar e validar o seu perfil.",
  },
  image: {
    label: label.image,
    placeholder: placeholder.image,
    helperText:
      "Insira a foto que será usado na divulgação da sua campanha, caso faça parte de uma candidatura coletiva, você deverá usar a imagem com todos os integrantes.",
    validation: "Por favor, faça o upload de uma foto da candidata(o)",
  },
};

export default cadastro;
