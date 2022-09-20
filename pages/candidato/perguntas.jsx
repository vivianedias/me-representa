import "/shared/locales/i18n.js";
import Head from "next/head";
import { unstable_getServerSession } from "next-auth";
import { useTranslation } from "react-i18next";
import { Heading, Box } from "@chakra-ui/react";

import Wizard from "../../shared/ui/Wizard/Wizard";
import * as Questions from "../../shared/ui/Questions";
import { authOptions } from "../api/auth/[...nextauth]";
import fetcher from "../../utils/apiClient";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const Perguntas = ({ data }) => {
  const { t } = useTranslation("translation", { keyPrefix: "perguntas" });

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta property="og:title" content={t("title")} key="title" />
      </Head>
      <Box as="section" bgColor="white">
        <Heading as="h1" marginY={6} textAlign="center">
          {t("titulo")}
        </Heading>
        <Wizard onSubmit={onSubmit}>
          <Wizard.Page>
            <Questions.LGBT t={t} />
          </Wizard.Page>
          <Wizard.Page>
            <Questions.Genero t={t} />
          </Wizard.Page>
          <Wizard.Page>
            <Questions.Raca t={t} />
          </Wizard.Page>
          <Wizard.Page>
            <Questions.Povos t={t} />
          </Wizard.Page>
          <Wizard.Page>
            <Questions.PoliticasSociais t={t} />
          </Wizard.Page>
          <Wizard.Page>
            <Questions.Seguranca t={t} />
          </Wizard.Page>
          <Wizard.Page>
            <Questions.Drogas t={t} />
          </Wizard.Page>
          <Wizard.Page>
            <Questions.Comunicacao t={t} />
          </Wizard.Page>
          <Wizard.Page>
            <Questions.Democracia t={t} />
          </Wizard.Page>
          <Wizard.Page>
            <Questions.MeioAmbiente t={t} />
          </Wizard.Page>
        </Wizard>
      </Box>
    </>
  );
};

export default Perguntas;

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: "/cadastro/login",
        permanent: false,
      },
    };
  }

  try {
    const candidate = await fetcher(`/api/candidate/${session.user.id}`);

    return {
      props: {
        session,
        candidate,
      },
    };
  } catch (e) {
    console.error("error", e);
    return {
      props: {
        session,
        candidate: null,
      },
    };
  }
}
