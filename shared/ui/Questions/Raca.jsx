import Pergunta from "../Question/Question";

const Raca = ({ t }) => {
  const prefix = "raca";

  return (
    <Pergunta.Layout t={t}>
      <Pergunta
        currentCount={7}
        pergunta={{
          id: `${prefix}_ensino`,
          label: t(prefix + ".ensino.label"),
          texto: t(prefix + ".ensino.pergunta"),
          info: t(prefix + ".ensino.info"),
          labelFavor: t(prefix + ".ensino.labelAFavor"),
          labelContra: t(prefix + ".ensino.labelContra"),
        }}
      />
      <Pergunta
        currentCount={8}
        pergunta={{
          id: `${prefix}_cotas`,
          label: t(prefix + ".cotas.label"),
          texto: t(prefix + ".cotas.pergunta"),
          info: t(prefix + ".cotas.info"),
          labelFavor: t(prefix + ".cotas.labelAFavor"),
          labelContra: t(prefix + ".cotas.labelContra"),
        }}
      />
      <Pergunta
        currentCount={9}
        pergunta={{
          id: `${prefix}_saude`,
          label: t(prefix + ".saude.label"),
          texto: t(prefix + ".saude.pergunta"),
          info: t(prefix + ".saude.info"),
          labelFavor: t(prefix + ".saude.labelAFavor"),
          labelContra: t(prefix + ".saude.labelContra"),
        }}
      />
    </Pergunta.Layout>
  );
};

export default Raca;
