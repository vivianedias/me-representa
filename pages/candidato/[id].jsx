import fetchClient from "../../utils/apiClient";
import "../../shared/locales/i18n";
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
import CandidateInfo from "../../shared/ui/Profile/CandidateInfo";

export default function Candidato({ data }) {
  console.log(data);
  const { t } = useTranslation("translation", { keyPrefix: "profile" });

  const { name, gender, partyName, stateName, state } = data;

  const jobTitle =
    gender === "FEMININO" ? t("congresswoman") : t("congressman");

  const image =
    "https://midias.correiobraziliense.com.br/_midias/jpg/2022/04/23/fq_iq4ixsacx3qp-7832244.jpg";

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
          <CandidateInfo t={t} {...data} />
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
