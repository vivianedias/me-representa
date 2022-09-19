import { Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react";

const CandidatesCount = (props) => {
  const { t, candidatesCount } = props;
  return (
    <Stack spacing={2}>
      <Flex gap="1">
        <Text fontWeight={700}>{candidatesCount}</Text>
        <Text>{t("candidates.counting")}</Text>
      </Flex>
      <Divider />
    </Stack>
  );
};

export default CandidatesCount;
