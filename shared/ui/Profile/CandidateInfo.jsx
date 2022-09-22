import {
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Stack,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";

const CandidateInfo = (props) => {
  const {
    t,
    priorities,
    image,
    name,
    gender,
    partyName,
    stateName,
    state,
    candidateNumber,
    position,
  } = props;

  const runningPosition = {
    FEMININO: {
      "DEPUTADO ESTADUAL": t("candidateJobTitle.state.congresswoman"),
      "DEPUTADO FEDERAL": t("candidateJobTitle.union.congresswoman"),
    },
    MASCULINO: {
      "DEPUTADO ESTADUAL": t("candidateJobTitle.state.congressman"),
      "DEPUTADO FEDERAL": t("candidateJobTitle.union.congresswoman"),
    },
  };

  return (
    <Flex alignItems="center">
      <Image boxSize="160px" src={image} alt={name} borderRadius="3px" />
      <Stack spacing={2} width="100%" px={4}>
        <Heading as="h1" size="lg" align="left">
          {name}
        </Heading>

        <List>
          <ListItem>
            <Text fontSize="sm" color="gray.500">
              {t("position")}:{" "}
              <Text as="span" fontWeight="700">
                {runningPosition[gender][position]}
              </Text>
            </Text>
          </ListItem>
          <ListItem>
            <Text fontSize="sm" color="gray.500">
              {t("party")}:{" "}
              <Text as="span" fontWeight="700">
                {partyName}
              </Text>
            </Text>
          </ListItem>
          <ListItem>
            <Text fontSize="sm" color="gray.500">
              {t("candidateNumber")}:{" "}
              <Text as="span" fontWeight="700">
                {candidateNumber}
              </Text>
            </Text>
          </ListItem>
          <ListItem>
            <Text fontSize="sm" color="gray.500">
              {t("state")}:{" "}
              <Text as="span" fontWeight="700">
                {stateName} ({state})
              </Text>
            </Text>
          </ListItem>
        </List>

        <Stack direction={"row"} wrap="wrap" align="start" gap={1}>
          {priorities.map((p, i) => (
            <Tag
              key={`profile-tags-${i}`}
              size="md"
              variant="solid"
              colorScheme="pink"
            >
              <TagLabel>{t("priorities." + p)}</TagLabel>
            </Tag>
          ))}
        </Stack>
      </Stack>
    </Flex>
  );
};

export default CandidateInfo;
