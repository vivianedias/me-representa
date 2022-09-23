import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Box, Text } from "@chakra-ui/layout";
import Mosaic from "/shared/ui/Mosaic/Mosaic";
import MosaicItem from "/shared/ui/Mosaic/MosaicItem/MosaicItem";
import styles from "./styles.module.css";
import Image from "next/image";

import raca from "/public/imgs/home/imagem_raca.png";
import povos from "/public/imgs/home/imagem_povos_originarios.png";
import lgbt from "/public/imgs/home/imagem_lgbt.png";
import { Heading } from "@chakra-ui/react";
import homeStyles from "../home.module.css";

const Pautas = () => {
  const { t } = useTranslation("home", { keyPrefix: "pautas" });
  return (
    <Box as="section" w="100%">
      <Heading
        as="h1"
        size="2xl"
        className={homeStyles.title}
        textAlign="center"
      >
        <Trans i18nKey="titulo">
          Entenda as{" "}
          <Text display="inline-block" color="pink.400">
            #pautas
          </Text>{" "}
          em debate
        </Trans>
      </Heading>
      <Mosaic>
        {/* Genero */}
        <MosaicItem>
          {({ colors, getBoxProps }) => (
            <Box bg={colors.pink} {...getBoxProps()}>
              <Text className={styles.text}>{t("genero")}</Text>
            </Box>
          )}
        </MosaicItem>
        {/* Genero */}

        {/* LGBT+ */}
        <MosaicItem>
          {({ colors, getBoxProps }) => (
            <Box bg={colors.blue} {...getBoxProps()}>
              <Text className={styles.text}>{t("lgbt")}</Text>
            </Box>
          )}
        </MosaicItem>
        {/* LGBT+ */}

        {/* LGBT+ Img */}
        <MosaicItem>
          {({ getBoxProps }) => (
            <Box {...getBoxProps()}>
              <Image
                src={raca}
                alt={t("imgsAlt.raca")}
                layout="fill"
                objectFit="cover"
                objectPosition="left top"
              />
            </Box>
          )}
        </MosaicItem>
        {/* LGBT+ Img */}

        {/* Raça */}
        <MosaicItem>
          {({ colors, getBoxProps }) => (
            <Box bg={colors.yellow} {...getBoxProps()}>
              <Text className={styles.text}>{t("raca")}</Text>
            </Box>
          )}
        </MosaicItem>
        {/* Raça */}

        {/* Povos */}
        <MosaicItem>
          {({ colors, getBoxProps }) => (
            <Box bg={colors.blue} {...getBoxProps()}>
              <Text className={styles.text}>{t("povos")}</Text>
            </Box>
          )}
        </MosaicItem>
        {/* Povos */}

        {/* Povos img*/}
        <MosaicItem>
          {({ getBoxProps }) => (
            <Box {...getBoxProps()}>
              <Image
                src={povos}
                alt={t("imgsAlt.povos")}
                layout="fill"
                objectFit="cover"
                objectPosition="left top"
              />
            </Box>
          )}
        </MosaicItem>
        {/* Povos img*/}

        {/* Politicas sociais*/}
        <MosaicItem>
          {({ colors, getBoxProps }) => (
            <Box bg={colors.yellow} {...getBoxProps()}>
              <Text className={styles.text}>{t("politicasSociais")}</Text>
            </Box>
          )}
        </MosaicItem>
        {/* Politicas sociais*/}

        {/* Segurança Publica*/}
        <MosaicItem>
          {({ colors, getBoxProps }) => (
            <Box bg={colors.pink} {...getBoxProps()}>
              <Text className={styles.text}>{t("segurancaPublica")}</Text>
            </Box>
          )}
        </MosaicItem>
        {/* Segurança Publica*/}

        {/* Drogas */}
        <MosaicItem>
          {({ colors, getBoxProps }) => (
            <Box bg={colors.yellow} {...getBoxProps()}>
              <Text className={styles.text}>{t("drogas")}</Text>
            </Box>
          )}
        </MosaicItem>
        {/* Drogas */}

        {/* Comunicação */}
        <MosaicItem>
          {({ colors, getBoxProps }) => (
            <Box bg={colors.blue} {...getBoxProps()}>
              <Text className={styles.text}>{t("comunicacao")}</Text>
            </Box>
          )}
        </MosaicItem>
        {/* Comunicação */}

        {/* Democracia */}
        <MosaicItem>
          {({ colors, getBoxProps }) => (
            <Box bg={colors.pink} {...getBoxProps()}>
              <Text className={styles.text}>{t("demoracracia")}</Text>
            </Box>
          )}
        </MosaicItem>
        {/* Democracia */}

        {/* Meio Ambiente */}
        <MosaicItem>
          {({ colors, getBoxProps }) => (
            <Box bg={colors.yellow} {...getBoxProps()}>
              <Text className={styles.text}>{t("meioAmbiente")}</Text>
            </Box>
          )}
        </MosaicItem>
        {/* Meio Ambiente */}

        {/* LGBT img
        <MosaicItem>
          {({ getBoxProps }) => (
            <Box {...getBoxProps()}>
              <Image
                src={lgbt}
                alt={t("imgsAlt.lgbt")}
                layout="fill"
                objectFit="cover"
                objectPosition="left top"
              />
            </Box>
          )}
        </MosaicItem> */}
        {/* LGBT img*/}
      </Mosaic>
    </Box>
  );
};

export default Pautas;
