import NextLink from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useSession, signOut } from "next-auth/react";
import logo from "/public/imgs/logotipo.svg";

const NavLink = ({ children, link }) => (
  <NextLink href={link} passHref>
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      {children}
    </Link>
  </NextLink>
);

export default function Header() {
  const { t } = useTranslation("translation", { keyPrefix: "header" });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { status, data } = useSession();
  const isAuth = status === "authenticated";
  const Links = [
    { name: t("navbar.home"), link: "/" },
    { name: t("navbar.eleitora"), link: "/eleitores" },
  ];

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <Icon as={MdClose} /> : <Icon as={FaBars} />}
            aria-label={t("botaoHamburgues")}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            colorScheme="pink"
            variant="ghost"
          />
          <HStack
            spacing={8}
            alignItems={"center"}
            justifyContent={{ base: "center", md: "unset" }}
          >
            <Box
              style={{
                position: "relative",
                width: "300px",
                height: "64px",
              }}
            >
              <NextLink href="/">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={logo}
                  alt={t("imgDescricao")}
                />
              </NextLink>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map(({ name, link }) => (
                <NavLink key={link} link={link}>
                  {name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {isAuth ? (
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
                  <MenuItem>
                    <NextLink href="/candidato/cadastro">
                      {t("navbar.auth.profile")}
                    </NextLink>
                  </MenuItem>
                  <MenuItem>
                    <NextLink href="/candidato/perguntas">
                      {t("navbar.auth.pautas")}
                    </NextLink>
                  </MenuItem>
                  <MenuItem>
                    <NextLink href="/candidato/prioridades">
                      {t("navbar.auth.prioridades")}
                    </NextLink>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={() => signOut({ callbackUrl: "/" })}>
                    {t("navbar.auth.logout")}
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Button
                onClick={() => router.push("/candidato/login")}
                variant={"solid"}
                colorScheme={"pink"}
                size={"sm"}
                mr={4}
                display={{ base: "none", md: "initial" }}
              >
                {t("navbar.candidata")}
              </Button>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map(({ name, link }) => (
                <NavLink key={link} link={link}>
                  {name}
                </NavLink>
              ))}
              <Box>
                <Button
                  onClick={() => router.push("/candidato/login")}
                  variant={"solid"}
                  colorScheme={"pink"}
                  size={"sm"}
                  mr={4}
                >
                  {t("navbar.candidata")}
                </Button>
              </Box>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
