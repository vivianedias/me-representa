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
                    }
                }
            }
        }
    }
})

export default i18n