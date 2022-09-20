import Pergunta from "../Question/Question";

const Democracia = ({ t }) => {
  const prefix = "democracia";

  return (
    <Pergunta.Layout t={t}>
      <Pergunta
        currentCount={21}
        pergunta={{
          id: `${prefix}_cota`,
          label: t(prefix + ".cota.label"),
          texto: t(prefix + ".cota.pergunta"),
          info: t(prefix + ".cota.info"),
          labelFavor: t(prefix + ".cota.labelAFavor"),
          labelContra: t(prefix + ".cota.labelContra"),
        }}
      />
      <Pergunta
        currentCount={22}
        pergunta={{
          id: `${prefix}_recursos`,
          label: t(prefix + ".recursos.label"),
          texto: t(prefix + ".recursos.pergunta"),
          info: t(prefix + ".recursos.info"),
          labelFavor: t(prefix + ".recursos.labelAFavor"),
          labelContra: t(prefix + ".recursos.labelContra"),
        }}
      />
    </Pergunta.Layout>
  );
};

export default Democracia;
