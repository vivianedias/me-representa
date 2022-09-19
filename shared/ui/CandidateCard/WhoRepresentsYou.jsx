import { Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react";

const WhoRepresentsYou = ({ t }) => {
  return (
    <Stack spacing={2}>
      <Heading as="h1" size="md" align="left">
        {t("candidates.heading")}
      </Heading>
      <Text>{t("candidates.paragraph")}</Text>
    </Stack>
  );
};

export default WhoRepresentsYou;
