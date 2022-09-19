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
            id: `${sectionPrefix}.cirurgia`,
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
            id: `${sectionPrefix}.sexualidade`,
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
            id: `${sectionPrefix}.casas`,
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
            id: `${sectionPrefix}.aborto`,
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
            id: `${sectionPrefix}.delegacia`,
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
            id: `${sectionPrefix}.banheiro`,
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
            id: `${sectionPrefix}.ensino`,
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
            id: `${sectionPrefix}.cotas`,
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
            id: `${sectionPrefix}.saude`,
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
            id: `${sectionPrefix}.politicas`,
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
            id: `${sectionPrefix}.sacrificio`,
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
            id: `${sectionPrefix}.demarcacao`,
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

export default Perguntas
