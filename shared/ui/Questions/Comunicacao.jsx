import Pergunta from "../Question/Question";

const Comunicacao = ({ t }) => {
  const prefix = "comunicacao";

  return (
    <Pergunta.Layout t={t}>
      <Pergunta
        currentCount={19}
        pergunta={{
          id: `${prefix}_acesso`,
          label: t(prefix + ".acesso.label"),
          texto: t(prefix + ".acesso.pergunta"),
          // info: t(prefix + ".acesso.info"),
          labelFavor: t(prefix + ".acesso.labelAFavor"),
          labelContra: t(prefix + ".acesso.labelContra"),
        }}
      />
      <Pergunta
        currentCount={20}
        pergunta={{
          id: `${prefix}_emissoras`,
          label: t(prefix + ".emissoras.label"),
          texto: t(prefix + ".emissoras.pergunta"),
          // info: t(prefix + ".emissoras.info"),
          labelFavor: t(prefix + ".emissoras.labelAFavor"),
          labelContra: t(prefix + ".emissoras.labelContra"),
        }}
      />
    </Pergunta.Layout>
  );
};

export default Comunicacao;
