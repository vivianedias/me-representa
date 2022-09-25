import { CheckboxGroup, Heading, Stack } from "@chakra-ui/react";
import FieldCheckbox from "../components/FieldCheckbox";

const LGBT = ({ t }) => {
  return (
    <Stack spacing={2}>
      <Heading as="h2" size="sm" align="left">
        {t("filters.lgbt.label")}
      </Heading>
      <Stack spacing={4} direction={"row"}>
        <FieldCheckbox
          name="lgbt"
          value="lesbian"
          label={t("filters.lgbt.lesbian")}
        />
        <FieldCheckbox name="lgbt" value="gay" label={t("filters.lgbt.gay")} />
        <FieldCheckbox
          name="lgbt"
          value="bisexual"
          label={t("filters.lgbt.bisexual")}
        />
        <FieldCheckbox
          name="lgbt"
          value="trans"
          label={t("filters.lgbt.trans")}
        />
      </Stack>
    </Stack>
  );
};

export default LGBT;
