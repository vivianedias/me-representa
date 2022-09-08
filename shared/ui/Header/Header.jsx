import React, { useState } from "react";

import NextLink from "next/link";

import logo from "/public/imgs/logotipo.png";
import Image from "next/image";
import { Button, IconButton, SlideFade } from "@chakra-ui/react";
import styles from "./styles.module.css";

const MenuIcon = () => (
  <>
    <svg
      fill="#fd006c"
      width="32px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
    </svg>
  </>
);

const Header = () => {
  const [show, setShow] = useState(true);
  const handleToggle = () => setShow(!show);

  const routeChange = () => {
    console.log("route change");
  };

  return (
    <header className={styles.container}>
      <div className={styles.logoContainer}>
        <NextLink href="/">
          <Image id="logo" src={logo} alt="Logotipo MeRepresenta" />
        </NextLink>
        <span className={styles.menuBtn}>
          <IconButton
            aria-label="Search database"
            icon={<MenuIcon />}
            variant="ghost"
            colorScheme="pink"
            onClick={handleToggle}
          />
        </span>
      </div>
      <nav className={styles.navBar}>
        <SlideFade in={show}>
          <ul>
            <li>
              <NextLink href="/">Sobre</NextLink>
            </li>
            <li>
              <NextLink href="/login">Candidata/o</NextLink>
            </li>
            <li>
              <NextLink href="#">Voluntária/o</NextLink>
            </li>
            <li>
              <NextLink href="#">Eleitor/a</NextLink>
            </li>
            <li>
              <NextLink href="/cadastro/candidato-pautas">Pautas</NextLink>
            </li>
            <li>
              <NextLink href="#">Perguntas?</NextLink>
            </li>
            <li>
              <Button onClick={routeChange} colorScheme="pink">
                Sou Candidata/o
              </Button>
            </li>
          </ul>
        </SlideFade>
      </nav>
    </header>
  );
};

export default Header;
