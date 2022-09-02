import { Box } from "@chakra-ui/layout";
import React from "react";
import { useTranslation } from "react-i18next";
import Mosaic from "../../../../shared/ui/Mosaic/Mosaic";
import MosaicItem from "../../../../shared/ui/Mosaic/MosaicItem/MosaicItem";

const QuemFez = () => {
  const { t } = useTranslation("translation", { keyPrefix: "home.quemFez" });
  return (
    <section>
      <div>
        <h1>{t("titulo")}</h1>
      </div>
      <Mosaic>
        <MosaicItem>
          {({getBoxProps}) => (
          <Box {...getBoxProps()}>
            <picture>
              <source
                srcSet="http://localhost:3001/static/media/vote_geral%20(1).e3171f96.png"
                type="image/webp"
              />
              <img
                alt={t("imgsAlt.mulheresNegras")}
                src="http://localhost:3001/static/media/vote_geral%20(1).e3171f96.png"
              />
            </picture>
          </Box>
          )}
        </MosaicItem>
        <MosaicItem>
          {({getBoxProps}) => (
          <Box {...getBoxProps()}>
            <picture>
              <source
                srcSet="http://localhost:3001/static/media/blogueiras-negras.02d0ef07.png"
                type="image/webp"
              />
              <img
                alt={t("imgsAlt.blogueirasNegras")}
                src="http://localhost:3001/static/media/blogueiras-negras.02d0ef07.png"
              />
            </picture>
          </Box>
          )}
        </MosaicItem>
        <MosaicItem>
          {({getBoxProps}) => (
          <Box {...getBoxProps()}>
            <picture>
              <source
                srcSet="http://localhost:3001/static/media/feminista-juristas.36661af2.png"
                type="image/webp"
              />
              <img
                alt={t("imgsAlt.redeFeminista")}
                src="http://localhost:3001/static/media/feminista-juristas.36661af2.png"
              />
            </picture>
          </Box>
          )}
        </MosaicItem>
        <MosaicItem>
          {({getBoxProps}) => (
          <Box {...getBoxProps()}>
            <picture>
              <source
                srcSet="http://localhost:3001/static/media/cidadania-inteligente.6ec87d83.png"
                type="image/webp"
              />
              <img
                alt={t("imgsAlt.cidadaniaInteligente")}
                src="http://localhost:3001/static/media/cidadania-inteligente.6ec87d83.png"
              />
            </picture>
          </Box>
          )}
        </MosaicItem>
        <MosaicItem>
          {({getBoxProps}) => (
          <Box {...getBoxProps()}>
            <picture>
              <source
                srcSet="http://localhost:3001/static/media/vote-lgbt.6b89e444.png"
                type="image/webp"
              />
              <img
                alt={t("imgsAlt.voteLGBT")}
                src="http://localhost:3001/static/media/vote-lgbt.6b89e444.png"
              />
            </picture>
          </Box>
          )}
        </MosaicItem>
      </Mosaic>
    </section>
  );
};

export default QuemFez;
