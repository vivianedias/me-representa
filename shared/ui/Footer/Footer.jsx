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
import { FaGithub } from "react-icons/fa";

import styles from "./styles.module.css";
import Image from "next/image";
import NextLink from "next/link";
import { chakra, Flex, Icon, Link, Stack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("translation", { keyPrefix: "footer" });
  const githubIcon = chakra(FaGithub);
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerNavigations}>
          <div className={styles.about}>
            <span>{t("sobre.titulo")}</span>
            <nav>
              <ul>
                <li>
                  <NextLink
                    href="https://merepresenta.org.br/#sobre"
                    passHref
                    isExternal
                  >
                    <Link isExternal color="pink.600" target="_blank">
                      {t("sobre.quemSomos")}
                    </Link>
                  </NextLink>
                </li>
                <li>
                  <NextLink
                    href="https://merepresenta.org.br/#impacto"
                    passHref
                    isExternal
                  >
                    <Link isExternal color="pink.600" target="_blank">
                      {t("sobre.impacto")}
                    </Link>
                  </NextLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.join}>
            <span>{t("participar.titulo")}</span>
            <nav>
              <ul>
                <li>
                  <NextLink href="/candidato/login" passHref>
                    <Link color="pink.600" target="_blank">
                      {t("participar.candidato")}
                    </Link>
                  </NextLink>
                </li>
                <li>
                  <NextLink href="/eleitores" passHref>
                    <Link color="pink.600" target="_blank">
                      {t("participar.eleitor")}
                    </Link>
                  </NextLink>
                </li>
                <li>
                  <NextLink
                    href="https://merepresenta.org.br/voluntariado"
                    passHref
                    isExternal
                  >
                    <Link isExternal color="pink.600" target="_blank">
                      {t("participar.voluntario")}
                    </Link>
                  </NextLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.financing}>
            <span>{t("financiamento.titulo")}</span>
            <Stack direction={"row"} wrap="wrap" align="start">
              <Flex wrap="wrap" gap={4}>
                <Image
                  src={ciudadania}
                  alt={t("financiamento.imgsAlt.ciudadania")}
                />
                <Image src={altec} alt={t("financiamento.imgsAlt.altec")} />
                <Image src={undef} alt={t("financiamento.imgsAlt.undef")} />
              </Flex>
            </Stack>
          </div>
          <div className={styles.financing}>
            <span>{t("financiamento.iniciativa")}</span>
            <Stack direction={"row"} wrap="wrap" align="start">
              <Flex wrap="wrap" gap={10}>
                <Image src={avina} alt={t("financiamento.imgsAlt.avina")} />
                <Image src={omidyar} alt={t("financiamento.imgsAlt.avina")} />
              </Flex>
            </Stack>
          </div>
          <div className={styles.support}>
            <span>{t("apoio.titulo")}</span>
            <div className={styles.supportWrapper}>
              <Stack direction={"row"} wrap="wrap" align="start">
                <Flex wrap="wrap" gap={6}>
                  <Image src={zoly} alt={t("apoio.imgsAlt.zoly")} />
                  <Image src={mattos} alt={t("apoio.imgsAlt.mattos")} />
                  <Image src={silveira} alt={t("apoio.imgsAlt.silveira")} />
                  <Image src={casa1} alt={t("apoio.imgsAlt.casa1")} />
                  <Image
                    src={tiniguimaraes}
                    alt={t("apoio.imgsAlt.tiniguimaraes")}
                  />
                  <Image src={dataLabel} alt={t("apoio.imgsAlt.dataLabel")} />
                </Flex>
              </Stack>
            </div>
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
                    href="https://www.youtube.com/channel/UCKNpPOIOdhY5gI42fuVVr_g"
                    passHref
                    isExternal
                  >
                    <Link isExternal color="pink.600" target="_blank">
                      <Image
                        src={youtube}
                        alt="YouTube"
                        width={25}
                        height={25}
                      />
                    </Link>
                  </NextLink>
                </li>
                <li>
                  <NextLink
                    href="https://www.instagram.com/me_representaa/?hl=pt-br"
                    passHref
                    isExternal
                  >
                    <Link isExternal color="pink.600" target="_blank">
                      <Image
                        id="logoinstastyle"
                        src={logoInsta}
                        alt="Instagram"
                        width={25}
                        height={25}
                      />
                    </Link>
                  </NextLink>
                </li>

                <li>
                  <NextLink
                    href="https://www.facebook.com/merepresenta.org.br"
                    passHref
                    isExternal
                  >
                    <Link isExternal color="pink.600" target="_blank">
                      <Image
                        src={facebook}
                        alt="Facebook"
                        width={25}
                        height={25}
                      />
                    </Link>
                  </NextLink>
                </li>
                <li>
                  <NextLink
                    href="https://github.com/vivianedias/me-representa"
                    passHref
                    isExternal
                  >
                    <Link isExternal color="pink.600" target="_blank">
                      <Icon as={githubIcon} w={6} h={6} color="gray.200" />
                    </Link>
                  </NextLink>
                </li>
                <li>
                  <NextLink
                    href="https://merepresenta.org.br/faq"
                    passHref
                    isExternal
                  >
                    <Link isExternal color="pink.600" target="_blank">
                      Perguntas?
                    </Link>
                  </NextLink>
                </li>
                <li>
                  <NextLink href="/termos" passHref>
                    <Link color="pink.600" target="_blank">
                      Termos de Uso
                    </Link>
                  </NextLink>
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
