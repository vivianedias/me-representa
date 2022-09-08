import React from "react";

import youtube from "/public/imgs/footer/youtube.svg";
import facebook from "/public/imgs/footer/facebook.svg";
import altec from "/public/imgs/footer/altec.png";
import tiniguimaraes from "/public/imgs/footer/tiniguimaraes.png";
import casa1 from "/public/imgs/footer/casa-1.png";
import zoly from "/public/imgs/footer/saibamais-zoly.png";
import undef from "/public/imgs/footer/undef.png";
import ciudadania from "/public/imgs/footer/cidadania-inteligente.png";
import avina from "/public/imgs/footer/avina.png";
import omidyar from "/public/imgs/footer/omidyar.png";
import mattos from "/public/imgs/footer/mattos-filho-veiga-filho-marrey-jr-e-quiroga-advogados-original.png";
import dataLabel from "/public/imgs/footer/data-lavel.png";
import silveira from "/public/imgs/footer/silveira_andrade.png";
import logoInsta from "/public/imgs/footer/logoinsta.png";

import styles from "./styles.module.css";
import Image from "next/image";
import NextLink from "next/link"
import { useTranslation } from "react-i18next";

const Footer = () => {
	const {t} = useTranslation("translation", {keyPrefix: "footer"})
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerNavigations}>
          <div className={styles.about}>
            <span>{t("sobre.titulo")}</span>
            <nav>
              <ul>
                <li>
                  <NextLink href="#">{t("sobre.quemSomos")}</NextLink>
                </li>
                <li>
                  <NextLink href="#">{t("sobre.impacto")}</NextLink>
                </li>
                <li>
                  <NextLink href="#">{t("sobre.transparencia")}</NextLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.join}>
            <span>{t("participar.titulo")}</span>
            <nav>
              <ul>
                <li>
                  <NextLink href="#">{t("participar.candidato")}</NextLink>
                </li>
                <li>
                  <NextLink href="#">{t("participar.eleitor")}</NextLink>
                </li>
                <li>
                  <NextLink href="#">{t("participar.voluntario")}</NextLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.financing}>
            <span>{t("financiamento.titulo")}</span>
            <ul>
              <li>
                <Image src={ciudadania} alt={t("financiamento.imgsAlt.ciudadania")} />
              </li>
              <li>
                <Image src={altec} alt={t("financiamento.imgsAlt.altec")} />
              </li>
              <li>
                <Image src={undef} alt={t("financiamento.imgsAlt.undef")} />
              </li>
              <li>
                <p id="iniciativa-titulo">{t("financiamento.iniciativa")}</p>
              </li>
              <li>
                <Image src={avina} alt={t("financiamento.imgsAlt.avina")} />
                <Image src={omidyar} alt={t("financiamento.imgsAlt.avina")} />
              </li>
            </ul>
          </div>
          <div className={styles.support}>
            <span>{t("apoio.titulo")}</span>
            <div className={styles.supportWrapper}>
              <Image src={zoly} alt={t("apoio.imgsAlt.zoly")} />
              <Image src={mattos} alt={t("apoio.imgsAlt.mattos")} />
              <Image src={silveira} alt={t("apoio.imgsAlt.silveira")} />
              <Image src={casa1} alt={t("apoio.imgsAlt.casa1")}/>
              <Image src={tiniguimaraes} alt={t("apoio.imgsAlt.tiniguimaraes")} />
            </div>
            <Image src={dataLabel} alt={t("apoio.imgsAlt.dataLabel")} />
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.copyrightWrapper}>
          <p>{t("direitos.titulo")}</p>
          <div className={styles.socialḾedia}>
            <nav>
              <ul>
                <li>
                  <NextLink
										target="_blank"
                    href="https://www.youtube.com/channel/UCKNpPOIOdhY5gI42fuVVr_g"
                  >
                    <Image src={youtube} alt="YouTube" width={25} height={25}/>
                  </NextLink>
                </li>
                <li>
                  <NextLink
                    target="_blank"
                    href="https://www.instagram.com/me_representaa/?hl=pt-br"
                  >
                    <Image id="logoinstastyle" src={logoInsta} alt="Instagram" width={25} height={25}/>
                  </NextLink>
                </li>

                <li>
                  <NextLink
                    target="_blank"
                    href="https://www.facebook.com/merepresenta.org.br"
                  >
                    <Image src={facebook} alt="Facebook" width={25} height={25}/>
                  </NextLink>
                </li>
                <li>
                  <NextLink href="#">Contato</NextLink>
                </li>
                <li>
                  <NextLink href="#">Perguntas?</NextLink>
                </li>
                <li>
                  <NextLink href="#">Termos de Uso</NextLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
