import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { unstable_getServerSession } from "next-auth";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { Heading, Container, useToast } from "@chakra-ui/react";
import { FORM_ERROR } from "final-form";
import { log } from "next-axiom";

import Wizard from "../../shared/ui/Wizard/Wizard";
import * as Questions from "../../shared/ui/Questions";
import { authOptions } from "../api/auth/[...nextauth]";
import fetcher from "../../utils/apiClient";
import {
  event,
  DEFAULT_EVENTS,
  DEFAULT_CATEGORIES,
} from "../../shared/analytics/utils";

const Perguntas = ({ session, candidate }) => {
  const [initialValues, setInitialValues] = useState(candidate?.answers);
  const { t } = useTranslation("perguntas");
  const router = useRouter();
  const toast = useToast();

  const saveAnswers = async (answers) => {
    await fetcher("/api/candidate/answers", {
      method: "POST",
      body: answers,
    });
  };

  const onSubmit = async (values) => {
    try {
      await saveAnswers(values);

      if (!candidate.answers) {
        router.push(`/candidato/${session?.user?.id}`);
        event({
          action: DEFAULT_EVENTS.answer,
          category: DEFAULT_CATEGORIES.engagement,
          label: `User ${session.user.id} has finished answering the human rights survey.`,
        });
      } else {
        setInitialValues(values);
        toast({
          title: t("success"),
          description: t("successUpdate"),
          status: "success",
          duration: 9000,
          isClosable: true,
          variant: "left-accent",
          position: "top-right",
        });
      }
    } catch (e) {
      log.error(
        `Candidate with id '${session.user.id}' wasn't able to compute their answers`,
        e
      );
      event({
        action: DEFAULT_EVENTS.error,
        description: `Error submitting answers form for user ${session.user.id}: ${e}`,
        fatal: false,
      });
      toast({
        title: t("error"),
        description: t("submitError"),
        status: "error",
        duration: 9000,
        isClosable: true,
        variant: "left-accent",
        position: "top-right",
      });
      return { [FORM_ERROR]: e };
    }
  };

  useEffect(() => {
    router.prefetch(`/candidato/${session?.user?.id}`);
  }, []);

  return (
    <>
      <Head>
        <title>{t("pageTitle")}</title>
        <meta property="og:title" content={t("title")} key="title" />
      </Head>

      <Container paddingBottom={5}>
        <Heading as="h1" marginBottom={6} textAlign="center">
          {t("title")}
        </Heading>
        <Wizard onSubmit={onSubmit} initialValues={initialValues} submitError>
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
      </Container>
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

  const t = ["perguntas", "header", "footer", "wizard", "common"];

  try {
    const candidate = await fetcher(`/api/candidate/${session.user.id}`);

    return {
      props: {
        ...(await serverSideTranslations(context.locale, t)),
        session,
        candidate,
      },
    };
  } catch (e) {
    console.error("error", e);
    return {
      props: {
        ...(await serverSideTranslations(context.locale, t)),
        session,
        candidate: null,
      },
    };
  }
}
