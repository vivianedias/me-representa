import React from "react"
import { useTranslation } from "react-i18next"

const Conheca = () => {
  const { t } = useTranslation("translation", { keyPrefix: "home.conheca" })
  return (
    <>
      <div>
        <iframe id="videoRep" width="560" height="400" src="https://www.youtube.com/embed/xNSkAwC5TZo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div>
        <h1>{t("titulo")}</h1>
        <p>{t("oMeRepresenta")}</p>
        <p>{t("aNovaPlataforma")}</p>
      </div>
    </>
  )
}

export default Conheca
