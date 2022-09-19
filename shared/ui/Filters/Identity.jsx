import { CheckboxGroup, Flex, Heading, Stack } from "@chakra-ui/react";
import FieldCheckbox from "../components/FieldCheckbox";
import { useTranslation } from "react-i18next";

const Identity = ({ t }) => {
  return (
    <Stack spacing={2}>
      <Heading as="h2" size="sm" align="left">
        {t("filters.identity.label")}
      </Heading>
      <CheckboxGroup colorScheme="yellow">
        <Stack direction={"row"} wrap="wrap" align="start">
          <Flex wrap="wrap" gap={2}>
            <FieldCheckbox
              name="identity"
              value="black"
              label={t("filters.identity.black")}
            />
            <FieldCheckbox
              name="identity"
              value="indigenous"
              label={t("filters.identity.indigenous")}
            />
            <FieldCheckbox
              name="identity"
              value="women"
              label={t("filters.identity.women")}
            />
            <FieldCheckbox
              name="identity"
              value="lgbt"
              label={t("filters.identity.lgbt")}
            />
          </Flex>
        </Stack>
      </CheckboxGroup>
    </Stack>
  );
};

export default Identity;
