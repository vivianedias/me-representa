import {
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";

const CandidateInfo = (props) => {
  const { t, priorities, image, name, gender, partyName, stateName, state } =
    props;

  const jobTitle =
    gender === "FEMININO"
      ? t("candidateJobTitle.congresswoman")
      : t("candidateJobTitle.congressman");

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

          <Stack direction={"row"} wrap="wrap" align="start">
            <Flex wrap="wrap" gap={1}>
              <Tag size="md" variant="solid" colorScheme="pink">
                <TagLabel>{t("priorities." + priorities[0])}</TagLabel>
              </Tag>
              <Tag size="md" variant="solid" colorScheme="pink">
                <TagLabel>{t("priorities." + priorities[1])}</TagLabel>
              </Tag>
              <Tag size="md" variant="solid" colorScheme="pink">
                <TagLabel>{t("priorities." + priorities[2])}</TagLabel>
              </Tag>
            </Flex>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default CandidateInfo;
