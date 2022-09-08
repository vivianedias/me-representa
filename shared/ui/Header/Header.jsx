import React, { useState } from "react";

import NextLink from "next/link";

import logo from "/public/imgs/logotipo.png";
import Image from "next/image";
import { Button, IconButton, SlideFade } from "@chakra-ui/react";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

const MenuIcon = () => {
  return (
  <>
    <svg
      fill="#fd006c"
      width="32px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
    </svg>
  </>
)};

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const handleToggle = () => setIsVisible(!isVisible);
  const { t } = useTranslation('translation', {keyPrefix: "header"}) 
  const btnText = t("navbar.menu", {estado: isVisible ? t("navbar.menuFechar") : t("navbar.menuAbrir")})
  const menuClass = isVisible ? "" : styles.menuClosed 
  const routeChange = () => {
    console.log("route change");
  };

  return (
    <header className={styles.container}>
      <div className={styles.logoContainer}>
        <NextLink href="/">
          <Image id="logo" src={logo} alt={t("imgDescricao")} />
        </NextLink>
        <span className={styles.menuBtn}>
          <IconButton
            aria-label={btnText}
            icon={<MenuIcon />}
            variant="ghost"
            colorScheme="pink"
            onClick={handleToggle}
          />
        </span>
      </div>
      <nav className={`${styles.navBar} ${menuClass}`}>
        <SlideFade in={isVisible}>
          <ul>
            <li>
              <NextLink href="/">{t("navbar.sobre")}</NextLink>
            </li>
            <li>
              <NextLink href="#">{t("navbar.voluntaria")}</NextLink>
            </li>
            <li>
              <NextLink href="#">{t("navbar.eleitora")}</NextLink>
            </li>
            <li>
              <NextLink href="/cadastro/candidato-pautas">{t("navbar.pautas")}</NextLink>
            </li>
            <li>
              <NextLink href="#">{t("navbar.perguntas")}</NextLink>
            </li>
            <li>
              <Button onClick={routeChange} colorScheme="pink">
              {t("navbar.candidata")}
              </Button>
            </li>
          </ul>
        </SlideFade>
      </nav>
    </header>
  );
};

export default Header;
