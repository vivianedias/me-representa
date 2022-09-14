import { Box, Container } from "@chakra-ui/layout"
import { Button, Heading, Text } from "@chakra-ui/react"
import { signIn, useSession } from "next-auth/react"
import { useTranslation } from "react-i18next"
import { Form } from "react-final-form"
import { RadioGroup, Radio } from "/shared/ui/Radio/Radio"
import { Pergunta } from "/shared/ui/Pergunta/Pergunta"
import "/shared/locales/i18n.js"

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
      <section>
        <LGBT />
      </section>
    </Container>
  )
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const LGBT = ({ currentCount = 1, maxCount = 22 }) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "candidato.perguntas.LGBTQ",
  })
  const onSubmit = async (values) => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
  }

  return (
    <section>
      <Heading as="h3" size="lg" marginY={3}>
        {t("titulo")}
      </Heading>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Pergunta
              contador={{ currentCount: currentCount, maxCount: maxCount }}
              pergunta={{
                id: "cirurgia",
                label: t("cirurgia.label"),
                texto: t("cirurgia.pergunta"),
                info: t("cirurgia.info"),
                labelFavor: t("cirurgia.labelAFavor"),
                labelContra: t("cirurgia.labelContra"),
              }}
            />
            {/* <div>
              <h3>{t("2.label")}</h3>
              <p>{t("2.pergunta")}</p>
              <p>{t("2.info")}</p>
              <RadioGroup>
                <Radio name="bla2" value="favor">
                  {t("2.labelAFavor")}
                </Radio>
                <Radio name="bla2" value="contra">
                  {t("2.labelContra")}
                </Radio>
              </RadioGroup>
            </div> */}
          </form>
        )}
      />
    </section>
  )
}

export default Perguntas
