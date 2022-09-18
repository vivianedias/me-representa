import { Heading, Stack } from "@chakra-ui/react";
import { Field } from "react-final-form";
import React from "react";
import { useTranslation } from "react-i18next";
import { ReactSelectAdapter } from "../components/Checkbox";

const State = ({ states }) => {
  const { t } = useTranslation("translation", { keyPrefix: "eleitores" });
  return (
    <Stack spacing={2}>
      <Heading as="h2" size="sm" align="left">
        {t("filters.state.label")}
      </Heading>

      <Field
        name="state"
        component={ReactSelectAdapter}
        options={states}
        placeholder={t("filters.state.label")}
      />
    </Stack>
  );
};

export default State;
