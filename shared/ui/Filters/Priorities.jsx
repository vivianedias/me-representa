import { CheckboxGroup, Heading, Stack, Flex } from "@chakra-ui/react";
import CheckboxCard from "../components/CheckboxCard";
import getPriorities from "../../../utils/getPriorities";

const Priorities = ({ t }) => {
  const priorities = getPriorities(t);
  return (
    <Stack spacing={2}>
      <Heading as="h2" size="sm" align="left">
        {t("filters.priorities.label")}
      </Heading>
      <Flex wrap="wrap" gap={1}>
        <CheckboxGroup>
          {priorities.map(({ name: value, title: label }, i) => (
            <CheckboxCard
              key={`priorities-filter-${i}`}
              name="priorities"
              value={`${value}Priority`}
              label={label}
            />
          ))}
        </CheckboxGroup>
      </Flex>
    </Stack>
  );
};

export default Priorities;
