import Pergunta from "../Question/Question";

const PoliticasSociais = ({ t }) => {
  const prefix = "politicasSociais";

  return (
    <Pergunta.Layout t={t}>
      <Pergunta
        currentCount={13}
        pergunta={{
          id: `${prefix}_renda`,
          label: t(prefix + ".renda.label"),
          texto: t(prefix + ".renda.pergunta"),
          info: t(prefix + ".renda.info"),
          labelFavor: t(prefix + ".renda.labelAFavor"),
          labelContra: t(prefix + ".renda.labelContra"),
        }}
      />
      <Pergunta
        currentCount={14}
        pergunta={{
          id: `${prefix}_teto`,
          label: t(prefix + ".teto.label"),
          texto: t(prefix + ".teto.pergunta"),
          info: t(prefix + ".teto.info"),
          labelFavor: t(prefix + ".teto.labelAFavor"),
          labelContra: t(prefix + ".teto.labelContra"),
        }}
      />
    </Pergunta.Layout>
  );
};

export default PoliticasSociais;
