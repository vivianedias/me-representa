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
                home: {
                    ajudeEleitores: {
                        titulo: "Ajude seus eleitores chegarem até você!",
                        querAparecer: "Quer aparecer para as eleitoras e eleitores que se preocupam com as mesmas pautas que você? Cadastre-se e traga mais visibilidade para sua candidatura.",
                        btnSouCandidato: "Sou candidata/o",
                        btnSouVoluntario: "Quero ser voluntária/o",
                        btnSouEleitor: "Sou eleitor/a",
                        imgDescricao: "Eleitores diversos com balões de fala dizendo 'voto!' e '#me representa'"
                    },
                    conheca: {
                        titulo: "Conheça o #MeRepresenta",
                        oMeRepresenta: "O #MeRepresenta é uma união de coletivos formados por mulheres, pessoas negras e LGBT+. Nosso objetivo é diminuir a distância entre eleitoras/es e candidatas/os comprometidas/os com os direitos sociais, civis e políticos da população.",
                        aNovaPlataforma: "A nova plataforma #MeRepresenta Eleições 2020 foi elaborada com a participação de 16 organizações da sociedade civil. Veja abaixo quem está com a gente!"
                    },
                    pautas: {
                        titulo: "Entenda as #pautas em debate",
                        genero: "#Gênero",
                        lgbt: "#LGBT+",
                        raca: "#Raça", 
                        povos: "#Povos Tradicionais",
                        politicasSociais: "#Políticas Sociais",
                        segurancaPublica: "#Segurança Pública",
                        drogas: "#Drogas",
                        comunicacao: "#Comunicação",
                        demoracracia: "#Democracia",
                        meioAmbiente: "#Meio Ambiente",
                        imgsAlt: {
                            raca: "Pessoas negras marcham com punho erguido e sorrindo",
                            povos: "Indigenas com os corpos pintados em protesto",
                            lgbt: "Bandeira do movimento LGBT+ balançada em frente a grande público em passeata"
                        }
                    },
                    facaParte: {
                        titulo: "Faça parte do #MeRepresenta",
                        btnVoluntario: "Quero ser voluntario",
                        btnSaberMais: "Quero saber mais",
                        imgDescricao: "Ilustração com 3 pessoas com balões de fala dizendo '#me representa'"
                    },
                    quemFez: {
                        titulo: "Quem fez isso possível?",
                        imgsAlt: {
                            mulheresNegras: "Logo com a frase 'mulheres negras decidem' em maiusculas",
                            blogueirasNegras: "Logo com uma mulher negra a esquerda em fundo amarelo e o título 'Blogueiras Negras'",
                            redeFeminista: "Logo com uma arte em linhas finas e o título 'Rede Feminista de Juristas'",
                            cidadaniaInteligente: "Logo com uma arte de uma lâmpada e pontos coloridos com o título 'Cidadania Inteligente'",
                            voteLGBT: "Logo com o título '#VoteLGBT'",
                        }
                    },
                    parcerias: {
                        titulo: "Parcerias",
                        imgsAlt: {
                            ABGLT: "",
                            aliancaNacionalLGBTI: "",
                            apoinme: "",
                            cfemea: "",
                            conaq: "",
                            gn: "",
                            instutoSouDaPaz: "",
                            intervozes: "",
                            ittc: "",
                            mtrst: "",
                            pbpd: "",
                            sistemaPolitico: "",
                            redeJusticaCriminal: "",
                            azMina: "",
                            movimentoTransparencia: "",
                            monabot: ""
                        }
                    }
                }
            }
        }
    }
})

export default i18n