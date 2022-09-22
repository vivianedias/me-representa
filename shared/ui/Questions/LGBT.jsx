import Pergunta from "../Question/Question";

const LGBT = ({ t }) => {
  const prefix = "lgbt";

  return (
    <Pergunta.Layout t={t}>
      <Pergunta
        currentCount={1}
        pergunta={{
          id: `${prefix}_cirurgia`,
          label: t(prefix + ".cirurgia.label"),
          texto: t(prefix + ".cirurgia.pergunta"),
          // info: t(prefix + ".cirurgia.info"),
          labelFavor: t(prefix + ".cirurgia.labelAFavor"),
          labelContra: t(prefix + ".cirurgia.labelContra"),
        }}
      />
      <Pergunta
        currentCount={2}
        pergunta={{
          id: `${prefix}_sexualidade`,
          label: t(prefix + ".sexualidade.label"),
          texto: t(prefix + ".sexualidade.pergunta"),
          // info: t(prefix + ".sexualidade.info"),
          labelFavor: t(prefix + ".sexualidade.labelAFavor"),
          labelContra: t(prefix + ".sexualidade.labelContra"),
        }}
      />
      <Pergunta
        currentCount={3}
        pergunta={{
          id: `${prefix}_casas`,
          label: t(prefix + ".casas.label"),
          texto: t(prefix + ".casas.pergunta"),
          // info: t(prefix + ".casas.info"),
          labelFavor: t(prefix + ".casas.labelAFavor"),
          labelContra: t(prefix + ".casas.labelContra"),
        }}
      />
    </Pergunta.Layout>
  );
};

export default LGBT;
