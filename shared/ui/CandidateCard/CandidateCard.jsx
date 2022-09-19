import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const CandidateCard = (props) => {
  const { t, image, name, party, coalitionScore, state, city } = props;
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      width={{ base: "100%", md: "400px" }}
      overflow="hidden"
    >
      <Flex alignItems="center">
        <Image boxSize="150px" src={image} alt={name} />
        <Stack spacing={6} width="100%" px={4}>
          <Heading size="md">{name}</Heading>
          <Stack spacing={0.5}>
            <Flex gap="4" justifyContent="space-between">
              <Text fontSize="sm">{t("candidates.party")}</Text>
              <Text fontWeight={700} fontSize="sm">
                {party}
              </Text>
            </Flex>
            <Flex gap="4" justifyContent="space-between">
              <Text fontSize="sm">{t("candidates.coalitionScore")}</Text>
              <Text fontWeight={700} fontSize="sm">
                {coalitionScore}
              </Text>
            </Flex>
            <Flex gap="4" justifyContent="space-between">
              <Text fontSize="sm">{t("candidates.state")}</Text>
              <Text fontWeight={700} fontSize="sm">
                {state}
              </Text>
            </Flex>
            <Flex gap="4" justifyContent="space-between">
              <Text fontSize="sm">{t("candidates.city")}</Text>
              <Text fontWeight={700} fontSize="sm">
                {city}
              </Text>
            </Flex>
          </Stack>
        </Stack>
      </Flex>
      <Button
        loadingText="Filtrando"
        variant="solid"
        colorScheme="teal"
        size="md"
        borderRadius="0"
        width="100%"
      >
        {t("candidates.button")}
      </Button>
    </Box>
  );
};

export default CandidateCard;
