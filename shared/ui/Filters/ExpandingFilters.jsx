import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { Form } from "react-final-form";
import Filters from "./Filters";

const ExpandingFilters = (props) => {
  const { t, parties, states } = props;
  return (
    <Stack marginTop={4}>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Heading as="h1" size="md" align="left" color="pink.500">
                {t("filters.heading")}
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Filters t={t} parties={parties} states={states} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  );
};

export default ExpandingFilters;
