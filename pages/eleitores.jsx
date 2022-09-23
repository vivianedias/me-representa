import fetchClient from "../utils/apiClient";
import "../shared/locales/i18n";
import { Form } from "react-final-form";
import Head from "next/head";
import { Flex, Stack, Container } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import React from "react";
import ExpandingFilters from "../shared/ui/Filters/ExpandingFilters";
import WhoRepresentsYou from "../shared/ui/CandidateCard/WhoRepresentsYou";
import CandidatesCount from "../shared/ui/CandidateCard/CandidatesCount";
import CandidateCard from "../shared/ui/CandidateCard/CandidateCard";

export default function EleitoresDashboard({
  candidates = [],
  count = 0,
  parties = [],
}) {
  const { t } = useTranslation("translation", { keyPrefix: "eleitores" });

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta property="og:title" content={t("title")} key="title" />
      </Head>

      <Container maxW={"100ch"}>
        <Stack spacing={8}>
          <ExpandingFilters t={t} parties={parties} />
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
    </>
  );
}

export async function getServerSideProps(req, res) {
  // Fetch data from external API
  const { candidates, count } = await fetchClient("/api/candidates/all");
  const parties = await fetchClient("/api/politicalParties");

  // Pass data to the page via props
  return { props: { candidates, count, parties } };
}
