import { Field } from "react-final-form";
import { Heading, Stack } from "@chakra-ui/react";
import MultiSelectAdapter from "../components/MultiSelectAdapter";
import states from "./states.json";

const State = ({ t }) => {
  return (
    <Stack spacing={2}>
      <Heading as="h2" size="sm" align="left">
        {t("filters.state.label")}
      </Heading>

      <Field
        name="state"
        component={MultiSelectAdapter}
        options={states}
        placeholder={t("filters.state.label")}
      />
    </Stack>
  );
};

export default State;
