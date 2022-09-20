import { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import {
  Button,
  IconButton,
  SlideFade,
  Flex,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import logo from "/public/imgs/logotipo.svg";
import styles from "./styles.module.css";

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
  );
};

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useTranslation("translation", { keyPrefix: "header" });
  const { status, data } = useSession();
  const router = useRouter();

  const isAuth = status === "authenticated";
  const handleToggle = () => setIsVisible(!isVisible);
  const btnText = t("navbar.menu", {
    estado: isVisible ? t("navbar.menuFechar") : t("navbar.menuAbrir"),
  });
  const menuClass = isVisible ? "" : styles.menuClosed;

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
              <NextLink href="/">{t("navbar.home")}</NextLink>
            </li>
            {/* <li>
              <NextLink href="#">{t("navbar.voluntaria")}</NextLink>
            </li> */}
            <li>
              <NextLink href="/eleitores">{t("navbar.eleitora")}</NextLink>
            </li>
            {/* <li>
              <NextLink href="#">{t("navbar.perguntas")}</NextLink>
            </li> */}
            <li>
              {isAuth ? (
                <Flex alignItems={"center"}>
                  <Menu>
                    <MenuButton
                      as={Button}
                      rounded={"full"}
                      variant={"link"}
                      cursor={"pointer"}
                      minW={0}
                    >
                      <Avatar size={"sm"} src={data?.user?.image} />
                    </MenuButton>
                    <MenuList>
                      <MenuItem
                        onClick={() => router.push("/candidato/cadastro")}
                      >
                        {t("navbar.auth.profile")}
                      </MenuItem>
                      <MenuItem
                        onClick={() =>
                          router.push("/candidato/cadastro/pautas")
                        }
                      >
                        {t("navbar.auth.pautas")}
                      </MenuItem>
                      <MenuItem onClick={() => signOut({ callbackUrl: "/" })}>
                        {t("navbar.auth.logout")}
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
              ) : (
                <Button
                  onClick={() => router.push("/candidato/login")}
                  colorScheme="pink"
                >
                  {t("navbar.candidata")}
                </Button>
              )}
            </li>
          </ul>
        </SlideFade>
      </nav>
    </header>
  );
};

export default Header;
