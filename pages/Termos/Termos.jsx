import { Container, Heading, List, ListItem, Box } from "@chakra-ui/layout";
import { Button, Checkbox } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

const Termos = () => {
  const { t } = useTranslation("translation", { keyPrefix: "termos" });
  return (
    <>
      <Container minW="lg" as="section">
        <Box marginBottom={6} as="article">
          <Heading as="h2">{t("tituloTermos")}</Heading>
          <List spacing={6}>
            <ListItem>{t("termos.item1")}</ListItem>
            <ListItem>{t("termos.item2")}</ListItem>
            <ListItem>{t("termos.item3")}</ListItem>
            <ListItem>{t("termos.item4")}</ListItem>
          </List>
        </Box>
        <Box marginBottom={6} as="article">
          <Heading as="h2">{t("tituloUso")}</Heading>
          <List spacing={6}>
            <ListItem>{t("uso.item1")}</ListItem>
            <ListItem>{t("uso.item2")}</ListItem>
            <ListItem>{t("uso.item3")}</ListItem>
            <ListItem>{t("uso.item4")}</ListItem>
            <ListItem>{t("uso.item5")}</ListItem>
            <ListItem>{t("uso.item6")}</ListItem>
          </List>
        </Box>
      </Container>
      <div className={styles.checkboxContainer}>
        <div className={styles.fixedContainer}>
          <Checkbox colorScheme="pink">{t("labelCheckbox")}</Checkbox>
          <Button variant="solid" disabled>
            {t("labelBtn")}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Termos;
