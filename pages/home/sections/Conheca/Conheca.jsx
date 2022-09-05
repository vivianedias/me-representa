import React from "react";
import { Heading, Text} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import homeStyles from "../home.module.css";
import styles from "./styles.module.css";

const Conheca = () => {
  const { t } = useTranslation("translation", { keyPrefix: "home.conheca" });
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.left}`}>
        <iframe
          id="videoRep"
          width="560"
          height="400"
          src="https://www.youtube.com/embed/xNSkAwC5TZo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={`${styles.right}`}>
        <Heading as="h1" size="2xl" className={`${homeStyles.title} ${styles.title}`}>
          {t("titulo")}
        </Heading>
        <Text className={`${styles.body}`}>{t("oMeRepresenta")}</Text>
        <Text className={`${styles.body}`}>{t("aNovaPlataforma")}</Text>
      </div>
    </section>
  );
};

export default Conheca;
