import Image from "next/image"
import React from "react"
import { useTranslation } from "react-i18next"
import facaParte from '/public/imgs/home/imagem_faca_parte.png'

const FacaParte = () => {
  const { t } = useTranslation("translation", { keyPrefix: "home.facaParte" })
  return (
    <section>
      <div>
        <Image src={facaParte} alt={t("imgDescricao")} />
      </div>
      <div>
        <h1>{t("titulo")}</h1>
        <a href="#">{t("btnVoluntario")}</a>
        <a href="#">{t("btnSaberMais")}</a>
      </div>
    </section>
  )
}

export default FacaParte
