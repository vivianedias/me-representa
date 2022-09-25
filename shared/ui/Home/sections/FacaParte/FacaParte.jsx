import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { Trans, useTranslation } from "react-i18next";
import { Heading } from "@chakra-ui/layout";
import { Box, Container, Text, useTheme, Stack } from "@chakra-ui/react";
import homeStyles from "../home.module.css";
import styles from "./styles.module.css";

import facaParte from "/public/imgs/home/imagem_faca_parte.png";

const FacaParte = () => {
  const { t } = useTranslation("home", { keyPrefix: "facaParte" });

  return (
    <section className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={facaParte} alt={t("imgDescricao")} layout="responsive" />
      </div>
      <div className={styles.btnsContainer}>
        <Heading
          as="h1"
          size="2xl"
          className={homeStyles.title}
          textAlign="center"
        >
          <Trans i18nKey="titulo">
            Faça parte do{" "}
            <Text display="inline-block" color="blue.500">
              #MeRepresenta
            </Text>
          </Trans>
        </Heading>
        <div className={homeStyles.btnGroup}>
          <NextLink href="/home" passHref>
            <a className={`${homeStyles.btnLink} ${homeStyles.btnLinkTeal}`}>
              {t("btnVoluntario")}
            </a>
          </NextLink>
          <NextLink href="/home" passHref>
            <a className={`${homeStyles.btnLink}`}>{t("btnSaberMais")}</a>
          </NextLink>
        </div>
      </div>
    </section>
  );
};

export default FacaParte;
