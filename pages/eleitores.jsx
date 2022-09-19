import fetchClient from "../utils/apiClient";
import "../shared/locales/i18n";
import { Form } from "react-final-form";
import Head from "next/head";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import React from "react";
import ExpandingFilters from "../shared/ui/Filters/ExpandingFilters";
import WhoRepresentsYou from "../shared/ui/CandidateCard/WhoRepresentsYou";
import CandidatesCount from "../shared/ui/CandidateCard/CandidatesCount";
import CandidateCard from "../shared/ui/CandidateCard/CandidateCard";

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

  const candidatesCount = 10;

  const candidate = {
    image:
      "https://midias.correiobraziliense.com.br/_midias/jpg/2022/04/23/fq_iq4ixsacx3qp-7832244.jpg",
    name: "Lulinha",
    party: "PT",
    coalitionScore: 10.0,
    state: "BR",
    city: "São Bernardo",
  };

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
          <Stack spacing={8}>
            <ExpandingFilters t={t} parties={parties} states={states} />
            <WhoRepresentsYou t={t} />
            <CandidatesCount t={t} candidatesCount={candidatesCount} />
            <CandidateCard t={t} {...candidate} />
          </Stack>
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
