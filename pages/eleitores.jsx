import React from "react";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import useSWR, { SWRConfig } from "swr";
import { Flex, Stack, Container } from "@chakra-ui/react";
import ExpandingFilters from "../shared/ui/Filters/ExpandingFilters";
import WhoRepresentsYou from "../shared/ui/CandidateCard/WhoRepresentsYou";
import CandidatesCount from "../shared/ui/CandidateCard/CandidatesCount";
import CandidateCard from "../shared/ui/CandidateCard/CandidateCard";
import fetchClient from "../utils/apiClient";

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
          gap={{ base: 6, lg: 4 }}
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
  const { t } = useTranslation("eleitores");

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

export async function getServerSideProps({ locale }) {
  try {
    const data = await fetchClient("/api/candidates/all");
    const parties = await fetchClient("/api/politicalParties");

    return {
      props: {
        ...(await serverSideTranslations(locale, [
          "eleitores",
          "header",
          "footer",
          "prioritiesTitle",
        ])),
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
        ...(await serverSideTranslations(locale, [
          "eleitores",
          "header",
          "footer",
          "prioritiesTitle",
        ])),
        candidates: [],
        count: 0,
        parties: [],
      },
    };
  }
}
