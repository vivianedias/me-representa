import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import CustomPosition from "./Postition";

const LGBT = (props) => {
  const { t, answers } = props;
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            <Heading as="h1" size="md" align="left">
              {t("lgbt.title")}
            </Heading>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Box marginLeft={4} marginTop={2}>
            <Stack spacing={4}>
              <Text>
                01. Sou <CustomPosition t={t} answer={answers.lgbt_cirurgia} />{" "}
                {t("lgbt.statements.lgbt_cirurgia")}
              </Text>
              <Text>
                02. Sou{" "}
                <CustomPosition t={t} answer={answers.lgbt_sexualidade} />{" "}
                {t("lgbt.statements.lgbt_sexualidade")}
              </Text>
              <Text>
                03. Sou <CustomPosition t={t} answer={answers.lgbt_casas} />{" "}
                {t("lgbt.statements.lgbt_casas")}
              </Text>
            </Stack>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default LGBT;
