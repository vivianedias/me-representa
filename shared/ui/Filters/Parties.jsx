import { Heading, Stack } from "@chakra-ui/react";
import { Field } from "react-final-form";
import { useTranslation } from "react-i18next";
import MultiSelectAdapter from "../components/MultiSelectAdapter";

const Parties = ({ parties, t }) => {
  return (
    <Stack spacing={2}>
      <Heading as="h2" size="sm" align="left">
        {t("filters.parties.label")}
      </Heading>
      <Field
        name="parties"
        component={MultiSelectAdapter}
        options={parties}
        placeholder={t("filters.parties.label")}
        isMulti
      />
    </Stack>
  );
};

export default Parties;
