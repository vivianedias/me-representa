import { CheckboxGroup, Heading, Stack } from "@chakra-ui/react";
import { CustomCheckbox } from "../components/Checkbox";
import { useTranslation } from "react-i18next";

const LGBT = () => {
  const { t } = useTranslation("translation", { keyPrefix: "eleitores" });
  return (
    <Stack spacing={2}>
      <Heading as="h2" size="sm" align="left">
        {t("filters.lgbt.label")}
      </Heading>
      <CheckboxGroup colorScheme="yellow">
        <Stack spacing={4} direction={"row"}>
          <CustomCheckbox
            name="lgbt"
            value="lesbian"
            label={t("filters.lgbt.lesbian")}
          />
          <CustomCheckbox
            name="lgbt"
            value="gay"
            label={t("filters.lgbt.gay")}
          />
          <CustomCheckbox
            name="lgbt"
            value="bisexual"
            label={t("filters.lgbt.bisexual")}
          />
          <CustomCheckbox
            name="lgbt"
            value="trans"
            label={t("filters.lgbt.trans")}
          />
        </Stack>
      </CheckboxGroup>
    </Stack>
  );
};

export default LGBT;
