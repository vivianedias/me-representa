import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import { Trans, useTranslation } from "react-i18next";
import homeStyles from "../home.module.css";
import styles from "./styles.module.css";

const Conheca = () => {
  const { t } = useTranslation("home", { keyPrefix: "conheca" });
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.videoContainer}`}>
        <div className={styles.videoWrapper}>
          <iframe
            className={styles.iframe}
            id="videoRep"
            src="https://www.youtube.com/embed/xNSkAwC5TZo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className={`${styles.textContainer}`}>
        <Heading
          as="h1"
          size="2xl"
          className={`${homeStyles.title} ${styles.title}`}
        >
          <Trans i18nKey="titulo">
            Conheça o <Text display="inline-block" color="yellow.400">#MeRepresenta</Text>
          </Trans>
        </Heading>
        <Text className={`${styles.body}`}>{t("oMeRepresenta")}</Text>
        <Text className={`${styles.body}`}>{t("aNovaPlataforma")}</Text>
      </div>
    </section>
  );
};

export default Conheca;
