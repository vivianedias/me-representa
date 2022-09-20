import Pergunta from "../Question/Question";

const Seguranca = ({ t }) => {
  const prefix = "seguranca";

  return (
    <Pergunta.Layout t={t}>
      <Pergunta
        currentCount={15}
        pergunta={{
          id: `${sectionPrefix}_guardas`,
          label: t(prefix + ".guardas.label"),
          texto: t(prefix + ".guardas.pergunta"),
          info: t(prefix + ".guardas.info"),
          labelFavor: t(prefix + ".guardas.labelAFavor"),
          labelContra: t(prefix + ".guardas.labelContra"),
        }}
      />
      <Pergunta
        currentCount={16}
        pergunta={{
          id: `${sectionPrefix}_emprego`,
          label: t(prefix + ".emprego.label"),
          texto: t(prefix + ".emprego.pergunta"),
          info: t(prefix + ".emprego.info"),
          labelFavor: t(prefix + ".emprego.labelAFavor"),
          labelContra: t(prefix + ".emprego.labelContra"),
        }}
      />
    </Pergunta.Layout>
  );
};

export default Seguranca;
