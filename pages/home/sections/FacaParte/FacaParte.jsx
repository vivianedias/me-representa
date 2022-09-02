import React from "react";
import { useTranslation } from "react-i18next";

const FacaParte = () => {
  const { t } = useTranslation("translation", { keyPrefix: "home.facaParte" });
  return (
    <section>
      <div>
        <picture>
          <source
            srcSet="	http://localhost:3001/static/media/join-image.66f88621.png"
            type="image/webp"
          />
          <img
            alt={t("imgDescricao")}
            src="	http://localhost:3001/static/media/join-image.66f88621.png"
          />
        </picture>
      </div>
      <div>
        <h1>{t("titulo")}</h1>
        <a href="#">{t("btnVoluntario")}</a>
        <a href="#">{t("btnSaberMais")}</a>
      </div>
    </section>
  );
};

export default FacaParte;
