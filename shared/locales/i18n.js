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
                    titulo: "Ajude seus eleitores chegarem até você!",
                    querAparecer: "Quer aparecer para as eleitoras e eleitores que se preocupam com as mesmas pautas que você? Cadastre-se e traga mais visibilidade para sua candidatura.",
                    btnSouCandidato: "Sou candidata/o",
                    btnSouVoluntario: "Quero ser voluntária/o",
                    btnSouEleitor: "Sou eleitor/a",
                    imgDescricao: "Eleitores diversos com balões de fala dizendo 'voto!' e '#me representa'"
                }
            }
        }
    }
})

export default i18n