import "../shared/locales/i18n";
import React from "react";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { Flex, Stack, Container } from "@chakra-ui/react";
import ExpandingFilters from "../shared/ui/Filters/ExpandingFilters";
import WhoRepresentsYou from "../shared/ui/CandidateCard/WhoRepresentsYou";
import CandidatesCount from "../shared/ui/CandidateCard/CandidatesCount";
import CandidateCard from "../shared/ui/CandidateCard/CandidateCard";
import fetchClient from "../utils/apiClient";
import useSWR, { SWRConfig } from "swr";

function Eleitores({ parties = [], t }) {
  const { data, mutate } = useSWR("/api/candidates/all");

  const candidates = data?.candidates || [];
  const count = data?.count || 0;

  return (
    <Container maxW={"100ch"}>
      <Stack spacing={8}>
        <ExpandingFilters t={t} parties={parties} mutate={mutate} />
        <WhoRepresentsYou t={t} />
        <CandidatesCount t={t} candidatesCount={count} />
        <Flex
          flexWrap={"wrap"}
          gap={{ base: 6, lg: 0 }}
          justifyContent="space-between"
        >
          {candidates.map((candidate) => {
            return <CandidateCard key={candidate._id} t={t} {...candidate} />;
          })}
        </Flex>
      </Stack>
    </Container>
  );
}

export default function EleitoresDashboard({ parties, fallback }) {
  const { t } = useTranslation("translation", { keyPrefix: "eleitores" });

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta property="og:title" content={t("title")} key="title" />
      </Head>

      <SWRConfig fallback={fallback}>
        <Eleitores parties={parties} t={t} />
      </SWRConfig>
    </>
  );
}

export async function getServerSideProps(req, res) {
  try {
    const data = await fetchClient("/api/candidates/all");
    const parties = await fetchClient("/api/politicalParties");

    return {
      props: {
        parties,
        fallback: {
          "/api/candidates/all": data,
        },
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: {
        candidates: [],
        count: 0,
        parties: [],
      },
    };
  }
}
