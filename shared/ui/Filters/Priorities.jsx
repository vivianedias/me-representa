import { CheckboxGroup, Heading, Stack, Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import CheckboxCard from "../components/CheckboxCard";
import getPriorities from "../../../utils/getPriorities";

const Priorities = ({ t }) => {
  const { t: prioritiesT } = useTranslation("prioritiesTitle");
  const priorities = getPriorities(prioritiesT);

  return (
    <Stack spacing={2}>
      <Heading as="h2" size="sm" align="left">
        {t("filters.priorities.label")}
      </Heading>
      <Flex wrap="wrap" gap={1}>
        {priorities.map(({ name: value, title: label }, i) => (
          <CheckboxCard
            key={`priorities-filter-${i}`}
            name="priorities"
            value={`${value}Priority`}
            label={label}
          />
        ))}
      </Flex>
    </Stack>
  );
};

export default Priorities;
