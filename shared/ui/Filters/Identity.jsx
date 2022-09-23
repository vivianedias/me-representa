import { CheckboxGroup, Flex, Heading, Stack } from "@chakra-ui/react";
import FieldCheckbox from "../components/FieldCheckbox";

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
              value="PRETA"
              label={t("filters.identity.black")}
            />
            <FieldCheckbox
              name="identity"
              value="PARDA"
              label={t("filters.identity.brown")}
            />
            <FieldCheckbox
              name="identity"
              value="INDÍGENA"
              label={t("filters.identity.indigenous")}
            />
            <FieldCheckbox
              name="identity"
              value="FEMININO"
              label={t("filters.identity.women")}
            />
            {/* <FieldCheckbox
              name="identity"
              value="lgbt"
              label={t("filters.identity.lgbt")}
            /> */}
          </Flex>
        </Stack>
      </CheckboxGroup>
    </Stack>
  );
};

export default Identity;
