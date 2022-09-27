import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import useSWR from "swr";
import VolunteersTable from "../shared/ui/VolunteersTable/VolunteersTable";
import fetcher from "../utils/apiClient";

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
  const { t } = useTranslation("voluntarios");

  const { data, mutate, isValidating } = useSWR(
    `/api/candidates/tse/social?pageSize=${pageSize}&pageNum=${pageNum}`,
    {
      shouldRetryOnError: false,
    }
  );

  const updateTseCandidatesSocialMediaStatus = async (data) => {
    await fetcher("/api/candidates/tse/update", {
      method: "POST",
      body: data,
    });
  };

  const onRowEditComplete = async (e) => {
    let _candidates = [...data.candidates];
    let _count = Number(data.count);

    const { newData, index } = e;

    _candidates[index] = newData;
    _count = _count - 1;

    await updateTseCandidatesSocialMediaStatus({
      SQ_CANDIDATO: newData.SQ_CANDIDATO,
      candidateInviteStatus: newData.candidateInviteStatus,
    });

    mutate({ candidates: _candidates, count: _count }, { revalidate: true });
  };

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
        isLoading={isValidating}
        onRowEditComplete={onRowEditComplete}
      />
    </>
  );
};

export default Voluntarios;
