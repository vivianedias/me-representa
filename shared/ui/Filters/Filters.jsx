import { Heading, Stack } from "@chakra-ui/react";
import Identity from "./Identity";
import LGBT from "./LGBT";
import Parties from "./Parties";
import Priorities from "./Priorities";
import State from "./State";

const Filters = (props) => {
  const { t } = props;
  return (
    <Stack spacing={8}>
      <Heading as="h1" size="md" align="left">
        {t("filters.heading")}
      </Heading>

      <Identity t={t} />
      <LGBT t={t} />
      <Parties parties={props.parties} t={t} />
      <Priorities t={t} />
      <State states={props.states} t={t} />
    </Stack>
  );
};

export default Filters;
