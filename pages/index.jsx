import "../shared/locales/i18n";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import Home from "../shared/ui/Home/Home";

export default function HomePage() {
  const { t } = useTranslation("translation", { keyPrefix: "home" });

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
