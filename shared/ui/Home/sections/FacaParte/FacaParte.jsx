import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { Trans, useTranslation } from "react-i18next";
import { Heading } from "@chakra-ui/layout";
import { SimpleGrid, Text, useTheme, VStack } from "@chakra-ui/react";
import homeStyles from "../home.module.css";

import facaParte from "/public/imgs/home/imagem_faca_parte.png";

const FacaParte = () => {
  const { t } = useTranslation("translation", { keyPrefix: "home.facaParte" });
  const theme = useTheme();
  return (
    <SimpleGrid as="section" width="100%" minChildWidth={theme.breakpoints.sm}>
      <div>
        <Image src={facaParte} alt={t("imgDescricao")} layout="responsive" />
      </div>
      <VStack justify="center">
        <VStack align="stretch">
          <Heading
            as="h1"
            size="2xl"
            className={homeStyles.title}
            textAlign="left"
          >
            <Trans i18nKey="titulo">
              Faça parte do{" "}
              <Text display="inline-block" color="blue.500">
                #MeRepresenta
              </Text>
            </Trans>
          </Heading>
          <NextLink href="/home" passHref>
            <a className={`${homeStyles.btnLink} ${homeStyles.btnLinkTeal}`}>
              {t("btnVoluntario")}
            </a>
          </NextLink>
          <NextLink href="/home" passHref>
            <a className={`${homeStyles.btnLink}`}>{t("btnSaberMais")}</a>
          </NextLink>
        </VStack>
      </VStack>
    </SimpleGrid>
  );
};

export default FacaParte;
