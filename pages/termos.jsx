import Head from "next/head";
import { useTranslation } from "react-i18next";
import Terms from "../shared/ui/Terms/Terms";
import "/shared/locales/i18n";

const Termos = () => {
  const { t } = useTranslation("translation", { keyPrefix: "terms" });

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
