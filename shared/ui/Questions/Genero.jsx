import Pergunta from "../Question/Question";

const Genero = ({ t }) => {
  const prefix = "genero";

  return (
    <Pergunta.Layout t={t}>
      <Pergunta
        currentCount={4}
        pergunta={{
          id: `${prefix}_aborto`,
          label: t(prefix + ".aborto.label"),
          texto: t(prefix + ".aborto.pergunta"),
          // info: t(prefix + ".aborto.info"),
          labelFavor: t(prefix + ".aborto.labelAFavor"),
          labelContra: t(prefix + ".aborto.labelContra"),
        }}
      />
      <Pergunta
        currentCount={5}
        pergunta={{
          id: `${prefix}_delegacia`,
          label: t(prefix + ".delegacia.label"),
          texto: t(prefix + ".delegacia.pergunta"),
          // info: t(prefix + ".delegacia.info"),
          labelFavor: t(prefix + ".delegacia.labelAFavor"),
          labelContra: t(prefix + ".delegacia.labelContra"),
        }}
      />
      <Pergunta
        currentCount={6}
        pergunta={{
          id: `${prefix}_banheiro`,
          label: t(prefix + ".banheiro.label"),
          texto: t(prefix + ".banheiro.pergunta"),
          // info: t(prefix + ".banheiro.info"),
          labelFavor: t(prefix + ".banheiro.labelAFavor"),
          labelContra: t(prefix + ".banheiro.labelContra"),
        }}
      />
    </Pergunta.Layout>
  );
};

export default Genero;
