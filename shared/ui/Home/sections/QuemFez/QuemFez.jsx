import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import ChakraNextImage from "../../../components/ChakraNextImage";

import mulheresNegras from "/public/imgs/home/logo_mulheres_negras.png";
import blogueirasNegras from "/public/imgs/home/logo_blogueiras_negras.png";
import redeFeminista from "/public/imgs/home/logo_feminista_juristas.png";
import cidadaniaInteligente from "/public/imgs/home/logo_cidadania_inteligente.png";
import voteLGBT from "/public/imgs/home/logo_vote_lgbt.png";
import homeStyles from "../home.module.css";

const QuemFez = () => {
  const { t } = useTranslation("home", { keyPrefix: "quemFez" });

  return (
    <Box as="section" w="100%" paddingBottom={"5rem"}>
      <div>
        <Heading
          as="h1"
          size="2xl"
          className={homeStyles.title}
          textAlign="center"
        >
          {t("titulo")}
        </Heading>
      </div>
      <Flex flexWrap={"wrap"} gap={8} justify="center">
        <ChakraNextImage
          boxSize={[100, 150]}
          src={mulheresNegras}
          alt={t("imgsAlt.mulheresNegras")}
        />
        <ChakraNextImage
          height={[100, 150]}
          width={[200, 300]}
          src={blogueirasNegras}
          alt={t("imgsAlt.blogueirasNegras")}
        />
        <ChakraNextImage
          boxSize={[100, 150]}
          src={redeFeminista}
          alt={t("imgsAlt.redeFeminista")}
        />
        <ChakraNextImage
          boxSize={[100, 150]}
          src={cidadaniaInteligente}
          alt={t("imgsAlt.cidadaniaInteligente")}
        />
        <ChakraNextImage
          boxSize={[100, 150]}
          src={voteLGBT}
          alt={t("imgsAlt.voteLGBT")}
        />
      </Flex>
    </Box>
  );
};

export default QuemFez;
