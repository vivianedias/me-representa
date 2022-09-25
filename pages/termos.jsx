import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import Terms from "../shared/ui/Terms/Terms";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["terms", "header", "footer"])),
    },
  };
}

const Termos = () => {
  const { t } = useTranslation("terms");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta property="og:title" content={t("title")} key="title" />
      </Head>
      <Terms />
    </>
  );
};

export default Termos;
