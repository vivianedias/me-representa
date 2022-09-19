import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

const CandidateInfo = (props) => {
  const { t, image, name, gender, partyName, stateName, state } = props;

  const jobTitle =
    gender === "FEMININO" ? t("congresswoman") : t("congressman");

  return (
    <Stack spacing={8}>
      <Flex alignItems="center">
        <Image boxSize="150px" src={image} alt={name} borderRadius="3px" />
        <Stack spacing={4} width="100%" px={4}>
          <Heading as="h1" size="lg" align="left">
            {name}
          </Heading>
          <Stack spacing={1} width="100%">
            <Flex gap="1">
              <Text fontSize="sm" color="gray.400">
                {jobTitle} /
              </Text>
              <Text fontSize="sm" color="gray.400">
                {partyName}
              </Text>
            </Flex>
            <Flex gap="1">
              <Text fontSize="sm" color="gray.400">
                {stateName}
              </Text>
              <Text fontSize="sm" color="gray.400">
                ({state})
              </Text>
            </Flex>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default CandidateInfo;
