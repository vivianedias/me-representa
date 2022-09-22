import React from "react"
import { useTranslation } from "react-i18next"
import NextLink from "next/link"
import Image from "next/image"
import { Heading, Text } from "@chakra-ui/react"
import homeStyles from "../home.module.css"

import hero from "/public/imgs/home/imagem_hero.png"


const AjudeEleitores = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "home.ajudeEleitores",
  })
  return (
    <section className={homeStyles.container}>
      <div className={homeStyles.left}>
        <Heading as="h1" size="2xl" className={homeStyles.title}>
          {t("titulo")}
        </Heading>
        <Text className={`${homeStyles.body}`}>{t("querAparecer")}</Text>
        <div className={homeStyles.btnGroup}>
          <NextLink href="/candidato/login" passHref>
            <a className={`${homeStyles.btnLink} ${homeStyles.btnLinkPink}`}>
              {t("btnSouCandidato")}
            </a>
          </NextLink>
          {/* <NextLink href="/home" passHref>
            <a className={`${homeStyles.btnLink} ${homeStyles.btnLinkTeal}`}>{t("btnSouVoluntario")}</a>
          </NextLink> */}
          <NextLink href="/eleitores" passHref>
            <a className={`${homeStyles.btnLink}`}>{t("btnSouEleitor")}</a>
          </NextLink>
        </div>
      </div>
      <div className={homeStyles.right}>
        <Image src={hero} alt={t("imgDescricao")} />
      </div>
    </section>
  );
}

export default AjudeEleitores
