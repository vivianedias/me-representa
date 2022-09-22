import Pergunta from "../Question/Question";

const Drogas = ({ t }) => {
  const prefix = "drogas";

  return (
    <Pergunta.Layout t={t}>
      <Pergunta
        currentCount={17}
        pergunta={{
          id: `${prefix}_descriminalizar`,
          label: t(prefix + ".descriminalizar.label"),
          texto: t(prefix + ".descriminalizar.pergunta"),
          info: t(prefix + ".descriminalizar.info"),
          labelFavor: t(prefix + ".descriminalizar.labelAFavor"),
          labelContra: t(prefix + ".descriminalizar.labelContra"),
        }}
      />
      <Pergunta
        currentCount={18}
        pergunta={{
          id: `${prefix}_tratamento`,
          label: t(prefix + ".tratamento.label"),
          texto: t(prefix + ".tratamento.pergunta"),
          info: t(prefix + ".tratamento.info"),
          labelFavor: t(prefix + ".tratamento.labelAFavor"),
          labelContra: t(prefix + ".tratamento.labelContra"),
        }}
      />
    </Pergunta.Layout>
  );
};

export default Drogas;
