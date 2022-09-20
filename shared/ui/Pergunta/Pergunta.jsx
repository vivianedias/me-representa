import React from "react"
import PropTypes from 'prop-types'
import { useTranslation } from "react-i18next";

import { Flex, Heading, Text, VStack, Box } from "@chakra-ui/react";
import { RadioGroup, Radio } from "../Radio/Radio";

const A_FAVOR = "favor";
const CONTRA = "contra";

const Pergunta = ({ contador, pergunta }) => {
  const { t } = useTranslation("translation", { keyPrefix: "global" });
  return (
    <VStack spacing={3} marginBottom={5}>
      <Text as="strong" textAlign="left" width="100%">
        {t("contador", {
          current: contador.currentCount,
          max: contador.maxCount,
        })}
      </Text>
      <Heading as="h3" size="lg" id={pergunta.id}>
        {pergunta.label}
      </Heading>
      <>
        <Text>{pergunta.texto}</Text>
        <Text>{pergunta.info}</Text>
      </>
      <Box as="strong" display="block">
        {t("posicionamento")}
      </Box>
      <RadioGroup ariaLabelledBy={pergunta.id}>
        <Flex>
          <Radio
            name={pergunta.id}
            value={A_FAVOR}
            label={pergunta.labelFavor}
            style={{ width: "100%" }}
          />
        </Flex>
        <Flex>
          <Radio
            name={pergunta.id}
            value={CONTRA}
            label={pergunta.labelContra}
            style={{ width: "100%" }}
          />
        </Flex>
      </RadioGroup>
    </VStack>
  );
};

export default Pergunta;

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
