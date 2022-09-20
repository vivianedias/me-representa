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

const Gender = (props) => {
  const { t, answers } = props;

  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            <Heading as="h1" size="md" align="left">
              {t("gender.title")}
            </Heading>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Box marginLeft={4} marginTop={2}>
            <Stack spacing={4}>
              <Text>
                01. Sou <CustomPosition t={t} answer={answers[1]} />{" "}
                {t("gender.statements.1")}
              </Text>
              <Text>
                02. Sou <CustomPosition t={t} answer={answers[2]} />{" "}
                {t("gender.statements.2")}
              </Text>
              <Text>
                03. Sou <CustomPosition t={t} answer={answers[3]} />{" "}
                {t("gender.statements.3")}
              </Text>
            </Stack>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Gender;
