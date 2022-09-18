import fetchClient from "../utils/apiClient";
import "../shared/locales/i18n";
import { Form } from "react-final-form";
import Head from "next/head";
import { Box, Button, Heading, Stack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { ReactSelectAdapter } from "/shared/ui/Components/Checkbox";
import React, { CSSProperties } from "react";
import Filters from "../shared/ui/Eleitores/Filters/Filters";
import { Identity } from "../shared/ui/Eleitores/Filters/Identity";

export default function EleitoresDashboard({ data }) {
  const { t } = useTranslation("translation", { keyPrefix: "eleitores" });

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (data) => {
    await sleep(300);
    console.log({ data });
  };

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
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, submitting, submitError }) => {
            return (
              <Box
                as="form"
                onSubmit={handleSubmit}
                bgColor="white"
                w={{ base: "85vw", md: "768px" }}
              >
                <Stack spacing={8}>
                  <Filters t={t} parties={parties} states={states} />

                  <Button
                    type="submit"
                    isLoading={submitting}
                    loadingText="Filtrando"
                    variant="solid"
                    colorScheme="pink"
                    size="md"
                  >
                    {t("filters.button")}
                  </Button>
                </Stack>
              </Box>
            );
          }}
        />
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
