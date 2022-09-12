import i18n from "i18next";
import { initReactI18next } from "react-i18next"

i18n.
    use(initReactI18next)
    .init({
    fallbackLng: 'pt-BR',
    lng: 'pt-BR',
    resources: {
        'pt-BR': {
            translation: {
                login: {
                    title: "Login",
                    email: {
                        placeholder: "endereço de e-mail",
                        validation: {
                            required: "Campo obrigatório"
                        },
                        verificationEmail: {
                            title: "Cheque seu e-mail!",
                            body: "Um link mágico para login acaba de ser enviado!",
                            error: "Houve um erro ao enviar o link. Tente novamente mais tarde."
                        },
                        button: "Entrar com e-mail"
                    },
                },
                header: {
                    imgDescricao: "Logotipo do MeRepresenta",
                    navbar: {
                        sobre: "Sobre",
                        voluntaria: "Voluntária/o",
                        eleitora: "Eleitor/a",
                        pautas: "Pautas",
                        perguntas: "Perguntas?",
                        candidata: "Sou Candidata/o",
                        menu: "Clique para {{estado}} o menu",
                        menuAbrir: "abrir",
                        menuFechar: "fechar"
                    },
                },
                footer: {
                    sobre: {
                        titulo: "Sobre",
                        quemSomos: "Quem somos",
                        impacto: "Impacto",
                        transparencia: "Transparência"
                    },
                    participar: {
                        titulo: "Participar",
                        candidato: "Candidato",
                        eleitor: "Eleitor",
                        voluntario: "Voluntário"
                    },
                    financiamento: {
                        titulo: "Financiamento",
                        iniciativa: "uma iniciativa de",
                        imgsAlt: {
                            ciudadania: "Ciudadania Inteligente",
                            altec: "Uma iniciativa de Altec",
                            undef: "Undef",
                            avina: "Avina",
                            omidyar: "Omidyar"
                        }
                    },
                    apoio: {
                        titulo: "Apoio",
                        imgsAlt: {
                            zoly: "Saiba Mais Zoly",
                            mattos: "Mattos Filho",
                            silveira: "Silveira Andrade",
                            casa1: "Casa 1",
                            tiniguimaraes: "Tini e Guimarães",
                            dataLabel: "Data Label"

                        }
                    },
                    direitos: {
                        titulo: "#Todos os direitos reservados a #MeRepresenta 2022"
                    }
                }
            }
        }
    }
})

export default i18n