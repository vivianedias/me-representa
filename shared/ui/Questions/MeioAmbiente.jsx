import Pergunta from "../Question/Question";

const MeioAmbiente = ({ t }) => {
  const prefix = "meioAmbiente";

  return (
    <Pergunta.Layout t={t}>
      <Pergunta
        currentCount={23}
        pergunta={{
          id: `${prefix}_consentimento`,
          label: t(prefix + ".consentimento.label"),
          texto: t(prefix + ".consentimento.pergunta"),
          // info: t(prefix + ".consentimento.info"),
          labelFavor: t(prefix + ".consentimento.labelAFavor"),
          labelContra: t(prefix + ".consentimento.labelContra"),
        }}
      />
    </Pergunta.Layout>
  );
};

export default MeioAmbiente;
