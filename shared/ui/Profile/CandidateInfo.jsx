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
      "DEPUTADO DISTRITAL": t("candidateJobTitle.congresswoman.district"),
      "DEPUTADO ESTADUAL": t("candidateJobTitle.congresswoman.state"),
      "DEPUTADO FEDERAL": t("candidateJobTitle.congresswoman.union"),
      GOVERNADOR: t("candidateJobTitle.congresswoman.governor"),
      PRESIDENTE: t("candidateJobTitle.congresswoman.president"),
      SENADOR: t("candidateJobTitle.congresswoman.senator"),
    },
    MASCULINO: {
      "DEPUTADO DISTRITAL": t("candidateJobTitle.congressman.district"),
      "DEPUTADO ESTADUAL": t("candidateJobTitle.congressman.state"),
      "DEPUTADO FEDERAL": t("candidateJobTitle.congressman.union"),
      GOVERNADOR: t("candidateJobTitle.congressman.governor"),
      PRESIDENTE: t("candidateJobTitle.congressman.president"),
      SENADOR: t("candidateJobTitle.congressman.senator"),
    },
  };

  return (
    <Flex alignItems="center">
      <Image boxSize="170px" src={image} alt={name} borderRadius="3px" />
      <Stack spacing={2} width="100%" px={4}>
        <Heading as="h1" size="lg" align="left">
          {name}
        </Heading>

        <List>
          <ListItem>
            <Text color="gray.500">
              {t("position")}:{" "}
              <Text as="span" fontWeight="700">
                {runningPosition[gender][position]}
              </Text>
            </Text>
          </ListItem>
          <ListItem>
            <Text color="gray.500">
              {t("party")}:{" "}
              <Text as="span" fontWeight="700">
                {partyName}
              </Text>
            </Text>
          </ListItem>
          <ListItem>
            <Text color="gray.500">
              {t("candidateNumber")}:{" "}
              <Text as="span" fontWeight="700">
                {candidateNumber}
              </Text>
            </Text>
          </ListItem>
          <ListItem>
            <Text color="gray.500">
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
