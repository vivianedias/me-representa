import { CheckboxGroup, Heading, Stack, Flex } from "@chakra-ui/react";
import CheckboxCard from "../components/CheckboxCard";

const Priorities = ({ t }) => {
  return (
    <Stack spacing={2}>
      <Heading as="h2" size="sm" align="left">
        {t("filters.priorities.label")}
      </Heading>
      <Flex wrap="wrap" gap={1}>
        <CheckboxGroup>
          <CheckboxCard
            name="priorities"
            value="corruption"
            label={t("filters.priorities.corruption")}
          />
          <CheckboxCard
            name="priorities"
            value="gender"
            label={t("filters.priorities.gender")}
          />
          <CheckboxCard
            name="priorities"
            value="security"
            label={t("filters.priorities.security")}
          />
          <CheckboxCard
            name="priorities"
            value="drugs"
            label={t("filters.priorities.drugs")}
          />
          <CheckboxCard
            name="priorities"
            value="migration"
            label={t("filters.priorities.migration")}
          />
          <CheckboxCard
            name="priorities"
            value="race"
            label={t("filters.priorities.race")}
          />
          <CheckboxCard
            name="priorities"
            value="traditionalPopulationEnvironment"
            label={t("filters.priorities.traditionalPopulationEnvironment")}
          />
          <CheckboxCard
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
