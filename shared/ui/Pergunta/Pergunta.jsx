import React from "react"
import PropTypes from 'prop-types'

import { Box } from "@chakra-ui/layout"
import { Heading, Text } from "@chakra-ui/react"
import { RadioGroup, Radio } from "/shared/ui/Radio/Radio"
import { useTranslation } from "react-i18next"

export const Pergunta = (props) => {
  const { contador } = props
  const { pergunta } = props
  const { t } = useTranslation("translation", { keyPrefix: "global" })
  return (
    <div>
      <Text as="strong">
        {t("contador", {
          current: contador.currentCount,
          max: contador.maxCount,
        })}
      </Text>
      <Heading as="h3" size="lg" id={pergunta.id}>
        {pergunta.label}
      </Heading>
      <Box as="p" marginY={3}>
        {pergunta.texto}
      </Box>
      <p>{pergunta.info}</p>
      <Box marginY={3} as="strong" display="block">
        {t("posicionamento")}
      </Box>
      <RadioGroup ariaLabelledBy={pergunta.id}>
        <Box marginY={3}>
          <Radio
            name={pergunta.id}
            value="favor"
            label={pergunta.labelContra}
            style={{ width: "100%" }}
          />
        </Box>
        <Box marginY={3}>
          <Radio
            name={pergunta.id}
            value="contra"
            label={pergunta.labelFavor}
            style={{ width: "100%" }}
          />
        </Box>
      </RadioGroup>
    </div>
  )
}

Pergunta.propTypes = {
  contador: PropTypes.shape({
    currentCount: PropTypes.number.isRequired,
    maxCount: PropTypes.number.isRequired
  }).isRequired,
  pergunta: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    labelContra: PropTypes.string.isRequired,
    labelFavor: PropTypes.string.isRequired,
  }).isRequired
}
