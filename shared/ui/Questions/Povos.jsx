import Pergunta from "../Question/Question";

const Povos = ({ t }) => {
  const prefix = "povos";

  return (
    <Pergunta.Layout t={t}>
      <Pergunta
        currentCount={10}
        pergunta={{
          id: `${sectionPrefix}_politicas`,
          label: t(prefix + ".politicas.label"),
          texto: t(prefix + ".politicas.pergunta"),
          info: t(prefix + ".politicas.info"),
          labelFavor: t(prefix + ".politicas.labelAFavor"),
          labelContra: t(prefix + ".politicas.labelContra"),
        }}
      />
      <Pergunta
        currentCount={11}
        pergunta={{
          id: `${sectionPrefix}_sacrificio`,
          label: t(prefix + ".sacrificio.label"),
          texto: t(prefix + ".sacrificio.pergunta"),
          info: t(prefix + ".sacrificio.info"),
          labelFavor: t(prefix + ".sacrificio.labelAFavor"),
          labelContra: t(prefix + ".sacrificio.labelContra"),
        }}
      />
      <Pergunta
        currentCount={12}
        pergunta={{
          id: `${sectionPrefix}_demarcacao`,
          label: t(prefix + ".demarcacao.label"),
          texto: t(prefix + ".demarcacao.pergunta"),
          info: t(prefix + ".demarcacao.info"),
          labelFavor: t(prefix + ".demarcacao.labelAFavor"),
          labelContra: t(prefix + ".demarcacao.labelContra"),
        }}
      />
    </Pergunta.Layout>
  );
};

export default Povos;
