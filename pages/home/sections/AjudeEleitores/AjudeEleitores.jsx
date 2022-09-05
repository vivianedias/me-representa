import React from "react"
import { useTranslation } from "react-i18next"
import NextLink from "next/link"
import Image from "next/image"
import { Heading, Text, Button } from "@chakra-ui/react"
import styles from "../home.module.css"

import hero from "/public/imgs/home/imagem_hero.png"


const AjudeEleitores = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "home.ajudeEleitores",
  })
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <Heading as="h1" size="2xl" className={styles.title}>
          {t("titulo")}
        </Heading>
        <Text className={`${styles.body}`}>{t("querAparecer")}</Text>
        <div className={styles.btnGroup}>
          <NextLink href="/home" passHref>
            <a className={`${styles.btnLink} ${styles.btnLinkPink}`}>{t("btnSouCandidato")}</a>
          </NextLink>
          <NextLink href="/home" passHref>
            <a className={`${styles.btnLink} ${styles.btnLinkTeal}`}>{t("btnSouVoluntario")}</a>
          </NextLink>
          <NextLink href="/home" passHref>
            <a className={`${styles.btnLink}`}>{t("btnSouEleitor")}</a>
          </NextLink>
        </div>
      </div>
      <div className={styles.right}>
        <Image src={hero} alt={t("imgDescricao")} />
      </div>
    </section>
  )
}

export default AjudeEleitores
