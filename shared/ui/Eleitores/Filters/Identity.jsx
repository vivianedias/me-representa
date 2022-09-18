import { CheckboxGroup, Heading, Stack } from "@chakra-ui/react";
import { CustomCheckbox } from "../../components/Checkbox";
import { useTranslation } from "react-i18next";

const Identity = () => {
  const { t } = useTranslation("translation", { keyPrefix: "eleitores" });
  return (
    <Stack spacing={2}>
      <Heading as="h2" size="sm" align="left">
        {t("filters.identity.label")}
      </Heading>
      <CheckboxGroup colorScheme="yellow">
        <Stack direction={"row"} wrap="wrap" align="start">
          <CustomCheckbox
            name="identity"
            value="black"
            label={t("filters.identity.black")}
          />
          <CustomCheckbox
            name="identity"
            value="indigenous"
            label={t("filters.identity.indigenous")}
          />
          <CustomCheckbox
            name="identity"
            value="women"
            label={t("filters.identity.women")}
          />
          <CustomCheckbox
            name="identity"
            value="lgbt"
            label={t("filters.identity.lgbt")}
          />
        </Stack>
      </CheckboxGroup>
    </Stack>
  );
};

export default Identity;
