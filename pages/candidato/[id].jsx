import Head from "next/head";
import { Container, Stack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

import filterCandidatesPriorities from "../../utils/filterCandidatesPriorities";
import fetchClient from "../../utils/apiClient";

function orderedPriorities(data) {
  const candidatesPriorities = filterCandidatesPriorities(data);

  const candidatesPrioritiesWithoutZero = Object.keys(
    candidatesPriorities || {}
  ).reduce((obj, key) => {
    const priorityValue = candidatesPriorities[key];
    return {
      ...obj,
      ...(priorityValue > 0 ? { [key]: candidatesPriorities[key] } : {}),
    };
  }, {});

  const keys = Object.keys(candidatesPrioritiesWithoutZero);

  keys.sort(function (a, b) {
    return candidatesPriorities[b] - candidatesPriorities[a];
  });

  return keys;
}

export default function Candidato({ data }) {
  const { t } = useTranslation("profile");

  const { name, answers } = data;

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta property="og:title" content={name} key="title" />
      </Head>

      <Container maxW="100ch">
        <Stack spacing={6}>
          <CandidateInfo t={t} priorities={orderedPriorities(data)} {...data} />
          <Gender t={t} answers={answers} />
          <Race t={t} answers={answers} />
          <LGBT t={t} answers={answers} />
          <TraditionalPopulations t={t} answers={answers} />
          <SocialPolicies t={t} answers={answers} />
          <Security t={t} answers={answers} />
          <Drugs t={t} answers={answers} />
          <Communication t={t} answers={answers} />
          <Democracy t={t} answers={answers} />
          <Environment t={t} answers={answers} />
        </Stack>
      </Container>
    </>
  );
}

export async function getServerSideProps({ locale, query }) {
  try {
    const { id } = query;

    const data = await fetchClient(`/api/candidate/${id}`);

    return {
      props: {
        ...(await serverSideTranslations(locale, [
          "profile",
          "header",
          "footer",
        ])),
        data,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: {
        ...(await serverSideTranslations(locale, [
          "profile",
          "header",
          "footer",
        ])),
        data: {},
      },
    };
  }
}
