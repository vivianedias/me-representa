import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import login from "./pt-BR/candidato/login";
import home from "./pt-BR/home.json";
import cadastro from './pt-BR/candidato/cadastro'

export const validation = {
  required: "Campo obrigatório",
  cpf: "CPF inválido",
  email: "Insira um e-mail válido",
  length: "Formato inválido",
};

export const placeholder = {
  email: "endereço de e-mail",
  cpf: "cpf do candidato",
  image: "Inserir foto da candidatura",
  lgbt: "LGBT"
};

export const label = {
  email: "E-mail",
  cpf: "CPF",
  image: "Anexar sua foto de candidatura",
};

export const lgbtOptions = {
  lesbian: "Lésbica",
  bissexual: "Bissexual",
  gay: "Gay",
  trans: "Trans",
  other: "Outro",
}

i18n.use(initReactI18next).init({
	fallbackLng: "pt-BR",
	lng: "pt-BR",
	resources: {
		"pt-BR": {
			translation: {
        cadastro,
        login,
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
			},
		},
	},
});

export default i18n;
