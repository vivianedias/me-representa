import React from "react"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import styles from './styles.module.css'


import abglt from '/public/imgs/home/logo_abglt.png'
import alianca from '/public/imgs/home/logo_aliancia_lgbti.png'
import apoinme from '/public/imgs/home/logo_apoinme.png'
import cfemea from '/public/imgs/home/logo_cfemea.png'
import conaq from '/public/imgs/home/logo_conaq.png'
import gn from '/public/imgs/home/logo_gn.png'
import instutoSouDaPaz from '/public/imgs/home/logo_sou_da_paz.png'
import intervozes from '/public/imgs/home/logo_intervozes.png'
import ittc from '/public/imgs/home/logo_ittc.png'
import mst from '/public/imgs/home/logo_mst.png'
import pbpd from '/public/imgs/home/logo_pbpd.png'
import sistemaPolitico from '/public/imgs/home/logo_sistema_politico.png'
import redeJusticaCriminal from '/public/imgs/home/logo_rede_justica_criminal.png'
import azMina from '/public/imgs/home/logo_azmina.png'
import movimentoTransparencia from '/public/imgs/home/logo_movimento_transparencia.png'
import monabot from '/public/imgs/home/logo_mona_bot.png'


const Parcerias = () => {
    const { t } = useTranslation("translation", {keyPrefix: "home.parcerias"})
    return (
        <section>
            <h1>{t('titulo')}</h1>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image src={abglt} alt={t('imgsAlt.abglt')}  layout="responsive"/>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={alianca} alt={t('imgsAlt.aliancaNacionalLGBTI')} />
                </div>
                <div className={styles.imageContainer}>
                    <Image src={apoinme} alt={t('imgsAlt.apoinme')}  layout="responsive"/>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={cfemea} alt={t('imgsAlt.cfemea')} />
                </div>
                <div className={styles.imageContainer}>
                    <Image src={conaq} alt={t('imgsAlt.conaq')}  layout="responsive"/>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={gn} alt={t('imgsAlt.gn')}  layout="responsive"/>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={instutoSouDaPaz} alt={t('imgsAlt.instutoSouDaPaz')}  layout="responsive"/>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={intervozes} alt={t('imgsAlt.intervozes')}  layout="responsive"/>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={ittc} alt={t('imgsAlt.ittc')}  layout="responsive"/>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={mst} alt={t('imgsAlt.mst')}  layout="responsive"/>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={pbpd} alt={t('imgsAlt.pbpd')}  layout="responsive"/>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={sistemaPolitico} alt={t('imgsAlt.sistemaPolitico')}  layout="responsive"/>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={redeJusticaCriminal} alt={t('imgsAlt.redeJusticaCriminal')}  layout="responsive"/>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={azMina} alt={t('imgsAlt.azMina')}  layout="responsive"/>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={movimentoTransparencia} alt={t('imgsAlt.movimentoTransparencia')}  layout="responsive"/>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={monabot} alt={t('imgsAlt.monabot')} layout="responsive"/>
                </div>
            </div>
        </section>
    )
}

export default Parcerias
