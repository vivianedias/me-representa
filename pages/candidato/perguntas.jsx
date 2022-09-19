import { Container } from "@chakra-ui/layout"
import { Heading } from "@chakra-ui/react"
import { signIn, useSession } from "next-auth/react"
import { useTranslation } from "react-i18next"
import { Pergunta } from "/shared/ui/Pergunta/Pergunta"
import { Wizard } from "/shared/ui/Wizard/Wizard"
import "/shared/locales/i18n.js"

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const onSubmit = async (values) => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const Perguntas = ({ data }) => {
  const { t } = useTranslation("translation", { keyPrefix: "candidato" })
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      // signIn();
    },
  })

  // if (status === "loading") {
  //   return <p>Loading...</p>;
  // }

  return (
    <Container as="section">
      <Heading as="h1" marginY={6} textAlign="center">
        {t("titulo")}
      </Heading>
      <Wizard onSubmit={onSubmit}>
        <Wizard.Page>
          <LGBT />
        </Wizard.Page>
        <Wizard.Page>
          <Genero />
        </Wizard.Page>
        <Wizard.Page>
          <Raca />
        </Wizard.Page>
        <Wizard.Page>
          <Povos />
        </Wizard.Page>
        <Wizard.Page>
          <PoliticasSociais />
        </Wizard.Page>
        <Wizard.Page>
          <Seguranca />
        </Wizard.Page>
        <Wizard.Page>
          <Drogas />
        </Wizard.Page>
      </Wizard>
      <section></section>
    </Container>
  )
}

const LGBT = ({ currentCount = 1, maxCount = 22 }) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "candidato.perguntas.LGBTQ",
  })

  const sectionPrefix = "lgbt"

  return (
    <section>
      <Heading as="h3" size="lg" marginY={3}>
        {t("titulo")}
      </Heading>
      <div>
        <Pergunta
          contador={{ currentCount: currentCount, maxCount: maxCount }}
          pergunta={{
            id: `${sectionPrefix}_cirurgia`,
            label: t("cirurgia.label"),
            texto: t("cirurgia.pergunta"),
            info: t("cirurgia.info"),
            labelFavor: t("cirurgia.labelAFavor"),
            labelContra: t("cirurgia.labelContra"),
          }}
        />
        <Pergunta
          contador={{ currentCount: currentCount, maxCount: maxCount }}
          pergunta={{
            id: `${sectionPrefix}_sexualidade`,
            label: t("sexualidade.label"),
            texto: t("sexualidade.pergunta"),
            info: t("sexualidade.info"),
            labelFavor: t("sexualidade.labelAFavor"),
            labelContra: t("sexualidade.labelContra"),
          }}
        />
        <Pergunta
          contador={{ currentCount: currentCount, maxCount: maxCount }}
          pergunta={{
            id: `${sectionPrefix}_casas`,
            label: t("casas.label"),
            texto: t("casas.pergunta"),
            info: t("casas.info"),
            labelFavor: t("casas.labelAFavor"),
            labelContra: t("casas.labelContra"),
          }}
        />
      </div>
    </section>
  )
}

const Genero = ({ currentCount = 1, maxCount = 22 }) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "candidato.perguntas.genero",
  })

  const sectionPrefix = "genero"

  return (
    <section>
      <Heading as="h3" size="lg" marginY={3}>
        {t("titulo")}
      </Heading>
      <div>
        <Pergunta
          contador={{ currentCount: currentCount, maxCount: maxCount }}
          pergunta={{
            id: `${sectionPrefix}_aborto`,
            label: t("aborto.label"),
            texto: t("aborto.pergunta"),
            info: t("aborto.info"),
            labelFavor: t("aborto.labelAFavor"),
            labelContra: t("aborto.labelContra"),
          }}
        />
        <Pergunta
          contador={{ currentCount: currentCount, maxCount: maxCount }}
          pergunta={{
            id: `${sectionPrefix}_delegacia`,
            label: t("delegacia.label"),
            texto: t("delegacia.pergunta"),
            info: t("delegacia.info"),
            labelFavor: t("delegacia.labelAFavor"),
            labelContra: t("delegacia.labelContra"),
          }}
        />
        <Pergunta
          contador={{ currentCount: currentCount, maxCount: maxCount }}
          pergunta={{
            id: `${sectionPrefix}_banheiro`,
            label: t("banheiro.label"),
            texto: t("banheiro.pergunta"),
            info: t("banheiro.info"),
            labelFavor: t("banheiro.labelAFavor"),
            labelContra: t("banheiro.labelContra"),
          }}
        />
      </div>
    </section>
  )
}

const Raca = ({ currentCount = 1, maxCount = 22 }) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "candidato.perguntas.raca",
  })

  const sectionPrefix = "raca"

  return (
    <section>
      <Heading as="h3" size="lg" marginY={3}>
        {t("titulo")}
      </Heading>
      <div>
        <Pergunta
          contador={{ currentCount: currentCount, maxCount: maxCount }}
          pergunta={{
            id: `${sectionPrefix}_ensino`,
            label: t("ensino.label"),
            texto: t("ensino.pergunta"),
            info: t("ensino.info"),
            labelFavor: t("ensino.labelAFavor"),
            labelContra: t("ensino.labelContra"),
          }}
        />
        <Pergunta
          contador={{ currentCount: currentCount, maxCount: maxCount }}
          pergunta={{
            id: `${sectionPrefix}_cotas`,
            label: t("cotas.label"),
            texto: t("cotas.pergunta"),
            info: t("cotas.info"),
            labelFavor: t("cotas.labelAFavor"),
            labelContra: t("cotas.labelContra"),
          }}
        />
        <Pergunta
          contador={{ currentCount: currentCount, maxCount: maxCount }}
          pergunta={{
            id: `${sectionPrefix}_saude`,
            label: t("saude.label"),
            texto: t("saude.pergunta"),
            info: t("saude.info"),
            labelFavor: t("saude.labelAFavor"),
            labelContra: t("saude.labelContra"),
          }}
        />
      </div>
    </section>
  )
}

const Povos = ({ currentCount = 1, maxCount = 22 }) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "candidato.perguntas.povos",
  })

  const sectionPrefix = "povos"

  return (
    <section>
      <Heading as="h3" size="lg" marginY={3}>
        {t("titulo")}
      </Heading>
      <div>
        <Pergunta
          contador={{ currentCount: currentCount, maxCount: maxCount }}
          pergunta={{
            id: `${sectionPrefix}_politicas`,
            label: t("politicas.label"),
            texto: t("politicas.pergunta"),
            info: t("politicas.info"),
            labelFavor: t("politicas.labelAFavor"),
            labelContra: t("politicas.labelContra"),
          }}
        />
        <Pergunta
          contador={{ currentCount: currentCount, maxCount: maxCount }}
          pergunta={{
            id: `${sectionPrefix}_sacrificio`,
            label: t("sacrificio.label"),
            texto: t("sacrificio.pergunta"),
            info: t("sacrificio.info"),
            labelFavor: t("sacrificio.labelAFavor"),
            labelContra: t("sacrificio.labelContra"),
          }}
        />
        <Pergunta
          contador={{ currentCount: currentCount, maxCount: maxCount }}
          pergunta={{
            id: `${sectionPrefix}_demarcacao`,
            label: t("demarcacao.label"),
            texto: t("demarcacao.pergunta"),
            info: t("demarcacao.info"),
            labelFavor: t("demarcacao.labelAFavor"),
            labelContra: t("demarcacao.labelContra"),
          }}
        />
      </div>
    </section>
  )
}

const PoliticasSociais = ({ currentCount = 1, maxCount = 22 }) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "candidato.perguntas.politicas",
  })

  const sectionPrefix = "politicasSociais"

  return (
    <section>
      <Heading as="h3" size="lg" marginY={3}>
        {t("titulo")}
      </Heading>
      <div>
        <Pergunta
          contador={{ currentCount: currentCount, maxCount: maxCount }}
          pergunta={{
            id: `${sectionPrefix}_renda`,
            label: t("renda.label"),
            texto: t("renda.pergunta"),
            info: t("renda.info"),
            labelFavor: t("renda.labelAFavor"),
            labelContra: t("renda.labelContra"),
          }}
        />
        <Pergunta
          contador={{ currentCount: currentCount, maxCount: maxCount }}
          pergunta={{
            id: `${sectionPrefix}_teto`,
            label: t("teto.label"),
            texto: t("teto.pergunta"),
            info: t("teto.info"),
            labelFavor: t("teto.labelAFavor"),
            labelContra: t("teto.labelContra"),
          }}
        />
      </div>
    </section>
  )
}

const Seguranca = ({ currentCount = 1, maxCount = 22 }) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "candidato.perguntas.seguranca",
  })

  const sectionPrefix = "segurancaPublica"

  return (
    <section>
      <Heading as="h3" size="lg" marginY={3}>
        {t("titulo")}
      </Heading>
      <div>
        <Pergunta
          contador={{ currentCount: currentCount, maxCount: maxCount }}
          pergunta={{
            id: `${sectionPrefix}_guardas`,
            label: t("guardas.label"),
            texto: t("guardas.pergunta"),
            info: t("guardas.info"),
            labelFavor: t("guardas.labelAFavor"),
            labelContra: t("guardas.labelContra"),
          }}
        />
        <Pergunta
          contador={{ currentCount: currentCount, maxCount: maxCount }}
          pergunta={{
            id: `${sectionPrefix}_emprego`,
            label: t("emprego.label"),
            texto: t("emprego.pergunta"),
            info: t("emprego.info"),
            labelFavor: t("emprego.labelAFavor"),
            labelContra: t("emprego.labelContra"),
          }}
        />
      </div>
    </section>
  )
}

const Drogas = ({ currentCount = 1, maxCount = 22 }) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "candidato.perguntas.drogas",
  })

  const sectionPrefix = "drogas"

  return (
    <section>
      <Heading as="h3" size="lg" marginY={3}>
        {t("titulo")}
      </Heading>
      <div>
        <Pergunta
          contador={{ currentCount: currentCount, maxCount: maxCount }}
          pergunta={{
            id: `${sectionPrefix}_descriminalizar`,
            label: t("descriminalizar.label"),
            texto: t("descriminalizar.pergunta"),
            info: t("descriminalizar.info"),
            labelFavor: t("descriminalizar.labelAFavor"),
            labelContra: t("descriminalizar.labelContra"),
          }}
        />
        <Pergunta
          contador={{ currentCount: currentCount, maxCount: maxCount }}
          pergunta={{
            id: `${sectionPrefix}_tratamento`,
            label: t("tratamento.label"),
            texto: t("tratamento.pergunta"),
            info: t("tratamento.info"),
            labelFavor: t("tratamento.labelAFavor"),
            labelContra: t("tratamento.labelContra"),
          }}
        />
      </div>
    </section>
  )
}

export default Perguntas
