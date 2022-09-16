import { validation, placeholder } from "../../i18n";

const login = {
  loading: "Carregando",
  redirect: "Redirecionando",
  title: "Login",
  twitter: {
    button: "Entrar com Twitter",
  },
  validation,
  email: {
    placeholder: placeholder.email,
    verificationEmail: {
      title: "Cheque seu e-mail!",
      body: "Um link mágico para login acaba de ser enviado!",
      error: "Houve um erro ao enviar o link. Tente novamente mais tarde.",
    },
    button: "Entrar com Email",
  },
};

export default login;
