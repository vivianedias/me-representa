import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import login from "./pt-BR/candidato/login.json";
import home from "./pt-BR/home.json";
import cadastro from "./pt-BR/candidato/cadastro.json";

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
        home,
        global: {
          contador: "Pauta {{current}} de {{max}}",
          posicionamento: "Qual o seu posicionamento?",
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
        termos: {
          tituloTermos: "Termos Simplificados",
          labelCheckbox: "Li e concordo com os termos de uso",
          labelBtn: "Continuar",
          termos: {
            item1:
              "Dados preenchidoos aqui poderão ser pesquisados durante e após o período eleitoral.",
            item2:
              "Não fazemos pesquisa de intenção de votos, nem campanha eleitoral.",
            item3:
              "Você pode alterar suas respostas ao questionário até 30 dias antes do 1o turno das eleições.",
            item4: "Você pode apagar seus dados da plataforma quando quiser.",
          },
          tituloUso: "Uso e armazenamento de dados pessoais:",
          uso: {
            item1:
              "De acordo com a vigência da Lei Geral de Proteção de Dados, a plataforma #MeRepresenta atualizou seus prootocolos pensando na proteção de usuáries. Veja noossos termos de uso para mais informações.",
            item2:
              "Nós respeitamos sua privacidade, portanto, os dados pessoais fornecidos serão utilizados de forma anonimizada de acordo com a finalidade prevista nos termos de uso da organização.",
            item3:
              "Os dados concedidos serão armazenados, tratados e geridos de forma segura e transparente para as finalidades previsas pela organização.",
            item4:
              "Os dados sensíveis fornecidos podem ser utilizados para a realização de estudos e levantamento estatísticos de modo anônimo.",
            item5:
              "Para tais dados, naão há pedidoo de consentimento dos usuários, de acordo com os termos de uso da plataforma.",
            item6:
              "Os dados pessoais cujo acesso é público serão colhidos das bases de informações da Justiça Eleitoral.",
          },
        },
      },
    },
  },
});

export default i18n;
