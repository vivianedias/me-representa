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
import Identity from "./Identity";
import LGBT from "./LGBT";
import Parties from "./Parties";
import Priorities from "./Priorities";
import State from "./State";

const Filters = (props) => {
  const { t } = props;
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (data) => {
    await sleep(300);
    console.log({ data });
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => {
        return (
          <Box as="form" onSubmit={handleSubmit}>
            <Stack spacing={8}>
              <Stack spacing={8}>
                <Identity t={t} />
                <LGBT t={t} />
                <Parties parties={props.parties} t={t} />
                <State t={t} />
                <Priorities t={t} />
              </Stack>

              <Button
                type="submit"
                isLoading={submitting}
                loadingText={t("loading")}
                variant="solid"
                colorScheme="pink"
                size="md"
              >
                {t("filters.button")}
              </Button>
            </Stack>
          </Box>
        );
      }}
    />
  );
};

export default Filters;
