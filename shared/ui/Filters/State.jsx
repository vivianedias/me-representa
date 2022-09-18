import { Heading, Stack } from "@chakra-ui/react";
import { Field } from "react-final-form";
import { useTranslation } from "react-i18next";
import MultiSelectAdapter from "../components/MultiSelectAdapter";

const State = ({ states, t }) => {
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
