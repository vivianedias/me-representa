import { Heading, Stack } from "@chakra-ui/react";
import Identity from "./Identity";
import LGBT from "./LGBT";
import Parties from "./Parties";
import Priorities from "./Priorities";
import State from "./State";
import { useTranslation } from "react-i18next";

const Filters = (props) => {
  const { t } = useTranslation("translation", { keyPrefix: "eleitores" });
  return (
    <Stack spacing={8}>
      <Heading as="h1" size="md" align="left">
        {t("filters.heading")}
      </Heading>

      <Identity />
      <LGBT />
      <Parties parties={props.parties} />
      <Priorities />
      <State states={props.states} />
    </Stack>
  );
};

export default Filters;
