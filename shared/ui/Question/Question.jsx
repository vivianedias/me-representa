import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { Heading, Text, VStack, Box, Divider } from "@chakra-ui/react";
import { css } from "@emotion/react";
import Radio from "../components/CustomRadio";
import useHeadingFocus from "../../hooks/useHeadingFocus";

const A_FAVOR = "favor";
const CONTRA = "contra";
const MAX_COUNT = 23;

const Question = ({ currentCount, pergunta }) => {
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
          current: currentCount,
          max: MAX_COUNT,
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

Question.Layout = function Layout({ children, t }) {
  const focusProps = useHeadingFocus();

  return (
    <>
      <Heading as="h3" size="lg" marginY={4} {...focusProps}>
        {t("titulo")}
      </Heading>
      <Box
        css={css`
          & > :last-child {
            margin-bottom: 0;
            & > hr {
              display: none;
            }
          }
        `}
      >
        {children}
      </Box>
    </>
  );
};

export default Question;

Question.propTypes = {
  currentCount: PropTypes.number.isRequired,
  pergunta: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    labelContra: PropTypes.string.isRequired,
    labelFavor: PropTypes.string.isRequired,
  }).isRequired,
};
