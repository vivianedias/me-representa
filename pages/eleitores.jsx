import fetchClient from "../utils/apiClient";
import "../shared/locales/i18n";
import { Form } from "react-final-form";
import Head from "next/head";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  AddIcon,
  Box,
  Button,
  Heading,
  MinusIcon,
  Stack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import React from "react";
import ExpandingFilters from "../shared/ui/Filters/ExpandingFilters";

export default function EleitoresDashboard({ data }) {
  const { t } = useTranslation("translation", { keyPrefix: "eleitores" });

  const parties = [
    { value: "pt", label: "PT" },
    { value: "psol", label: "PSOL" },
    { value: "pcdob", label: "PCdoB" },
  ];

  const states = [
    { value: "sp", label: "SP" },
    { value: "rj", label: "RJ" },
    { value: "es", label: "ES" },
  ];

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta property="og:title" content={t("title")} key="title" />
      </Head>
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
        p="1rem"
        backgroundColor="whiteAlpha.900"
        boxShadow="md"
      >
        <Box bgColor="white" w={{ base: "85vw", md: "768px" }}>
          <ExpandingFilters t={t} parties={parties} states={states} />
        </Box>
      </Stack>
    </>
  );
}

export async function getServerSideProps(req, res) {
  // Fetch data from external API
  // const data = await fetchClient("/api/users");

  // Pass data to the page via props
  return { props: { data: [] } };
}
