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
                    }
                }
            }
        }
    }
})

export default i18n