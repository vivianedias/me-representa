import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const AjudeEleitores = () => {
  const { t } = useTranslation('translation', {keyPrefix: 'home'});
  return (
    <>
      <div>
        <h1>{t("titulo")}</h1>
        <p>{t("querAparecer")}</p>
        <div>
          <a href="#">{t("btnSouCandidato")}</a>
          <a href="#">{t("btnSouVoluntario")}</a>
          <a href="#">{t("btnSouEleitor")}</a>
        </div>
      </div>
      <div>
        <Image src="" alt={t("imgDescricao")} />
      </div>
    </>
  );
};

export default AjudeEleitores;
