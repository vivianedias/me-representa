import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import useSWR from "swr";
import VolunteersTable from "../shared/ui/VolunteersTable/VolunteersTable";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "header",
        "footer",
        "voluntarios",
      ])),
    },
  };
}

const Voluntarios = () => {
  const [pageSize, setPageSize] = useState(10);
  const [pageNum, setPageNum] = useState(1);

  const { data, mutate, isValidating } = useSWR(
    `/api/candidates/tse/social?pageSize=${pageSize}&pageNum=${pageNum}`,
    {
      shouldRetryOnError: false,
    }
  );
  const { t } = useTranslation("voluntarios");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <VolunteersTable
        pageSize={pageSize}
        setPageSize={setPageSize}
        pageNum={pageNum}
        setPageNum={setPageNum}
        data={data}
        mutate={mutate}
        isLoading={isValidating}
      />
    </>
  );
};

export default Voluntarios;
