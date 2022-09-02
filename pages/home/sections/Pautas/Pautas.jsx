import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Text } from "@chakra-ui/layout";
import Mosaic from "../../../../shared/ui/Mosaic/Mosaic";
import MosaicItem from "../../../../shared/ui/Mosaic/MosaicItem/MosaicItem";
import styles from './styles.module.css'

const Pautas = () => {
  const { t } = useTranslation("translation", { keyPrefix: "home.pautas" });
  return (
    <section>
      <h1>{t("titulo")}</h1>
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
              <picture>
                <source
                  srcSet="http://localhost:3001/static/media/raca.9ba1c7d5.png"
                  type="image/webp"
                />
                <img
                  alt={t("imgsAlt.raca")}
                  src="http://localhost:3001/static/media/raca.9ba1c7d5.png"
                />
              </picture>
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
            <Box bg={colors.pink} {...getBoxProps()}>
              <Text className={styles.text}>{t("povos")}</Text>
            </Box>
          )}
        </MosaicItem>
        {/* Povos */}

        {/* Povos img*/}
        <MosaicItem>
          {({ getBoxProps }) => (
            <Box {...getBoxProps()}>
              <picture>
                <source
                  srcSet="http://localhost:3001/static/media/povos-originarios.56c22ff1.png"
                  type="image/webp"
                />
                <img
                  alt={t("imgsAlt.povos")}
                  src="http://localhost:3001/static/media/povos-originarios.56c22ff1.png"
                />
              </picture>
            </Box>
          )}
        </MosaicItem>
        {/* Povos img*/}

        {/* Politicas sociais*/}
        <MosaicItem>
          {({ colors, getBoxProps }) => (
            <Box bg={colors.pink} {...getBoxProps()}>
              <Text className={styles.text}>{t("politicasSociais")}</Text>
            </Box>
          )}
        </MosaicItem>
        {/* Politicas sociais*/}

        {/* Segurança Publica*/}
        <MosaicItem>
          {({ colors, getBoxProps }) => (
            <Box bg={colors.yellow} {...getBoxProps()}>
              <Text className={styles.text}>{t("segurancaPublica")}</Text>
            </Box>
          )}
        </MosaicItem>
        {/* Segurança Publica*/}

        {/* Drogas */}
        <MosaicItem>
          {({ colors, getBoxProps }) => (
            <Box bg={colors.blue} {...getBoxProps()}>
              <Text className={styles.text}>{t("drogas")}</Text>
            </Box>
          )}
        </MosaicItem>
        {/* Drogas */}

        {/* Comunicação */}
        <MosaicItem>
          {({ colors, getBoxProps }) => (
            <Box bg={colors.yellow} {...getBoxProps()}>
              <Text className={styles.text}>{t("comunicacao")}</Text>
            </Box>
          )}
        </MosaicItem>
        {/* Comunicação */}

        {/* Democracia */}
        <MosaicItem>
          {({ colors, getBoxProps }) => (
            <Box bg={colors.blue} {...getBoxProps()}>
              <Text className={styles.text}>{t("demoracracia")}</Text>
            </Box>
          )}
        </MosaicItem>
        {/* Democracia */}

        {/* Meio Ambiente */}
        <MosaicItem>
          {({ colors, getBoxProps }) => (
            <Box bg={colors.pink} {...getBoxProps()}>
              <Text className={styles.text}>{t("meioAmbiente")}</Text>
            </Box>
          )}
        </MosaicItem>
        {/* Meio Ambiente */}

        {/* LGBT img*/}
        <MosaicItem>
          {({ getBoxProps }) => (
            <Box {...getBoxProps()}>
              <picture>
                <source
                  srcSet="	http://localhost:3001/static/media/lgbt.45c642e3.png"
                  type="image/webp"
                />
                <img
                  alt={t("imgsAlt.lgbt")}
                  src="	http://localhost:3001/static/media/lgbt.45c642e3.png"
                />
              </picture>
            </Box>
          )}
        </MosaicItem>
        {/* LGBT img*/}
      </Mosaic>
    </section>
  );
};

export default Pautas;
