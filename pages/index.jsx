import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import Home from "../shared/ui/Home/Home";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "header", "footer"])),
    },
  };
}

export default function HomePage() {
  const { t } = useTranslation("home");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta property="og:title" content={t("title")} key="title" />
      </Head>
      <Home />
    </>
  );
}
