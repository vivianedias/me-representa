import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import login from "./pt-BR/candidato/login.json";
import home from "./pt-BR/home.json";
import terms from "./pt-BR/terms.json";
import cadastro from "./pt-BR/candidato/cadastro.json";
import wizard from "./pt-BR/wizard.json";
import eleitores from "./pt-BR/eleitores.json";
import perguntas from "./pt-BR/candidato/perguntas.json";
import prioridades from "./pt-BR/candidato/prioridades.json";

export const validation = {
  required: "Campo obrigatório",
  cpf: "CPF inválido",
  email: "Insira um e-mail válido",
  length: "Formato inválido",
};

i18n.use(initReactI18next).init({
  fallbackLng: "pt-BR",
  lng: "pt-BR",
  resources: {
    "pt-BR": {
      translation: {
        cadastro: {
          ...cadastro,
          validation,
        },
        login: {
          ...login,
          validation,
        },
        wizard,
        home,
        eleitores,
        terms,
        prioridades: {
          ...prioridades,
          validation,
        },
        global: {
          contador: "Pauta {{current}} de {{max}}",
          posicionamento: "Qual o seu posicionamento?",
          validation,
        },
        header: {
          imgDescricao: "Logotipo do MeRepresenta",
          navbar: {
            home: "Home",
            voluntaria: "Voluntária/o",
            eleitora: "Eleitor/a",
            perguntas: "Perguntas?",
            candidata: "Sou Candidata/o",
            menu: "Clique para {{estado}} o menu",
            menuAbrir: "abrir",
            menuFechar: "fechar",
            auth: {
              profile: "Editar perfil",
              logout: "Sair",
              pautas: "Pautas",
            },
          },
        },
        footer: {
          sobre: {
            titulo: "Sobre",
            quemSomos: "Quem somos",
            impacto: "Impacto",
            transparencia: "Transparência",
          },
          participar: {
            titulo: "Participar",
            candidato: "Candidato",
            eleitor: "Eleitor",
            voluntario: "Voluntário",
          },
          financiamento: {
            titulo: "Financiamento",
            iniciativa: "uma iniciativa de",
            imgsAlt: {
              ciudadania: "Ciudadania Inteligente",
              altec: "Uma iniciativa de Altec",
              undef: "Undef",
              avina: "Avina",
              omidyar: "Omidyar",
            },
          },
          apoio: {
            titulo: "Apoio",
            imgsAlt: {
              zoly: "Saiba Mais Zoly",
              mattos: "Mattos Filho",
              silveira: "Silveira Andrade",
              casa1: "Casa 1",
              tiniguimaraes: "Tini e Guimarães",
              dataLabel: "Data Label",
            },
          },
          direitos: {
            titulo: "#Todos os direitos reservados a #MeRepresenta 2022",
          },
        },
        perguntas,
      },
    },
  },
});

export default i18n
