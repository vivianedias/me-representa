import fetchClient from "../../utils/apiClient";
import "../../shared/locales/i18n";
import Head from "next/head";
import { Box, Stack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import CandidateInfo from "../../shared/ui/Profile/CandidateInfo";
import Gender from "../../shared/ui/Profile/Gender";
import Race from "../../shared/ui/Profile/Race";
import LGBT from "../../shared/ui/Profile/LGBT";
import TraditionalPopulations from "../../shared/ui/Profile/TraditionalPopulations";
import SocialPolicies from "../../shared/ui/Profile/SocialPolicies";
import Security from "../../shared/ui/Profile/Security";
import Drugs from "../../shared/ui/Profile/Drugs";
import Communication from "../../shared/ui/Profile/Communication";
import Democracy from "../../shared/ui/Profile/Democracy";
import Environment from "../../shared/ui/Profile/Environment";

export default function Candidato({ data }) {
  const { t } = useTranslation("translation", { keyPrefix: "profile" });

  const { name, gender, partyName, stateName, state } = data;

  const answers = {
    gender: {
      1: true,
      2: true,
      3: true,
    },
    race: {
      1: true,
      2: true,
      3: true,
    },
    lgbt: {
      1: true,
      2: true,
      3: true,
    },
    traditionalPopulations: {
      1: true,
      2: true,
      3: true,
    },
    socialPolicies: {
      1: true,
      2: true,
    },
    security: {
      1: true,
      2: true,
    },
    drugs: {
      1: true,
      2: true,
    },
    communication: {
      1: true,
      2: true,
    },
    democracy: {
      1: true,
      2: true,
    },
    environment: {
      1: true,
    },
  };

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta property="og:title" content={name} key="title" />
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
          <Stack spacing={6}>
            <CandidateInfo t={t} {...data} />
            <Gender t={t} answers={answers.gender} />
            <Race t={t} answers={answers.race} />
            <LGBT t={t} answers={answers.lgbt} />
            <TraditionalPopulations
              t={t}
              answers={answers.traditionalPopulations}
            />
            <SocialPolicies t={t} answers={answers.socialPolicies} />
            <Security t={t} answers={answers.security} />
            <Drugs t={t} answers={answers.drugs} />
            <Communication t={t} answers={answers.communication} />
            <Democracy t={t} answers={answers.democracy} />
            <Environment t={t} answers={answers.environment} />
          </Stack>
        </Box>
      </Stack>
    </>
  );
}

export async function getServerSideProps(req, res) {
  // Fetch data from external API
  const { id } = req.query;

  const data = await fetchClient(`/api/candidate/${id}`);

  // Pass data to the page via props
  return { props: { data } };
}
