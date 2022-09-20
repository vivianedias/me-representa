import React from "react"
import PropTypes from 'prop-types'
import { useTranslation } from "react-i18next";

import { Heading, Text, VStack, Box, Divider } from "@chakra-ui/react";
import Radio from "../components/CustomRadio";

const A_FAVOR = "favor";
const CONTRA = "contra";

const Pergunta = ({ contador, pergunta }) => {
  const { t } = useTranslation("translation", { keyPrefix: "global" });
  const options = [
    {
      value: A_FAVOR,
      label: pergunta.labelFavor,
    },
    {
      value: CONTRA,
      label: pergunta.labelContra,
    },
  ];

  return (
    <VStack spacing={3} marginBottom={10}>
      <Text as="strong" textAlign="left" width="100%">
        {t("contador", {
          current: contador.currentCount,
          max: contador.maxCount,
        })}
      </Text>
      <Heading as="h3" size="lg">
        {pergunta.label}
      </Heading>
      <>
        <Text>{pergunta.texto}</Text>
        <Text>{pergunta.info}</Text>
      </>
      <Box as="strong" display="block">
        {t("posicionamento")}
      </Box>
      <Radio options={options} t={t} name={pergunta.id} direction="column" />
      <Divider />
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
