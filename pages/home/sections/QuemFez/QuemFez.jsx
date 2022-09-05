import { Box } from "@chakra-ui/layout"
import Image from "next/image"
import React from "react"
import { useTranslation } from "react-i18next"
import Mosaic from "/shared/ui/Mosaic/Mosaic"
import MosaicItem from "/shared/ui/Mosaic/MosaicItem/MosaicItem"

import mulheresNegras from '/public/imgs/home/logo_mulheres_negras.png'
import blogueirasNegras from '/public/imgs/home/logo_blogueiras_negras.png'
import redeFeminista from '/public/imgs/home/logo_feminista_juristas.png'
import cidadaniaInteligente from '/public/imgs/home/logo_cidadania_inteligente.png'
import voteLGBT from '/public/imgs/home/logo_vote_lgbt.png'

const QuemFez = () => {
  const { t } = useTranslation("translation", { keyPrefix: "home.quemFez" })
  return (
    <section>
      <div>
        <h1>{t("titulo")}</h1>
      </div>
      <Mosaic>
        <MosaicItem>
          {({getBoxProps}) => (
          <Box {...getBoxProps()}>
            <Image src={mulheresNegras} alt={t("imgsAlt.mulheresNegras")}/>
          </Box>
          )}
        </MosaicItem>
        <MosaicItem>
          {({getBoxProps}) => (
          <Box {...getBoxProps()}>
            <Image src={blogueirasNegras} alt={t("imgsAlt.blogueirasNegras")}/>
          </Box>
          )}
        </MosaicItem>
        <MosaicItem>
          {({getBoxProps}) => (
          <Box {...getBoxProps()}>
            <Image src={redeFeminista} alt={t("imgsAlt.redeFeminista")}/>
          </Box>
          )}
        </MosaicItem>
        <MosaicItem>
          {({getBoxProps}) => (
          <Box {...getBoxProps()}>
            <Image src={cidadaniaInteligente} alt={t("imgsAlt.cidadaniaInteligente")}/>
          </Box>
          )}
        </MosaicItem>
        <MosaicItem>
          {({getBoxProps}) => (
          <Box {...getBoxProps()}>
            <Image src={voteLGBT} alt={t("imgsAlt.voteLGBT")}/>
          </Box>
          )}
        </MosaicItem>
      </Mosaic>
    </section>
  )
}

export default QuemFez
