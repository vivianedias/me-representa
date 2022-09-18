import { CheckboxGroup, Heading, Stack, Flex } from "@chakra-ui/react";
import { CustomCheckboxCard } from "../../components/Checkbox";
import { useTranslation } from "react-i18next";

const Priorities = () => {
  const { t } = useTranslation("translation", { keyPrefix: "eleitores" });
  return (
    <Stack spacing={2}>
      <Heading as="h2" size="sm" align="left">
        {t("filters.priorities.label")}
      </Heading>
      <Flex wrap="wrap" gap={1}>
        <CheckboxGroup>
          <CustomCheckboxCard
            name="priorities"
            value="corruption"
            label={t("filters.priorities.corruption")}
          />
          <CustomCheckboxCard
            name="priorities"
            value="gender"
            label={t("filters.priorities.gender")}
          />
          <CustomCheckboxCard
            name="priorities"
            value="security"
            label={t("filters.priorities.security")}
          />
          <CustomCheckboxCard
            name="priorities"
            value="drugs"
            label={t("filters.priorities.drugs")}
          />
          <CustomCheckboxCard
            name="priorities"
            value="migration"
            label={t("filters.priorities.migration")}
          />
          <CustomCheckboxCard
            name="priorities"
            value="race"
            label={t("filters.priorities.race")}
          />
          <CustomCheckboxCard
            name="priorities"
            value="traditionalPopulationEnvironment"
            label={t("filters.priorities.traditionalPopulationEnvironment")}
          />
          <CustomCheckboxCard
            name="priorities"
            value="healthEducationWork"
            label={t("filters.priorities.healthEducationWork")}
          />
        </CheckboxGroup>
      </Flex>
    </Stack>
  );
};

export default Priorities;
