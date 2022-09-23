import NextLink from "next/link";
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  Center,
} from "@chakra-ui/react";

const CandidateCard = ({
  t,
  image,
  name,
  partyName,
  state,
  userId,
  candidateNumber,
}) => {
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
                {partyName}
              </Text>
            </Flex>
            <Flex gap="4" justifyContent="space-between">
              <Text fontSize="sm">{t("candidates.candidateNumber")}</Text>
              <Text fontWeight={700} fontSize="sm">
                {candidateNumber}
              </Text>
            </Flex>
            <Flex gap="4" justifyContent="space-between">
              <Text fontSize="sm">{t("candidates.state")}</Text>
              <Text fontWeight={700} fontSize="sm">
                {state}
              </Text>
            </Flex>
          </Stack>
        </Stack>
      </Flex>
      <NextLink passHref href={`/candidato/${userId}`}>
        <Link
          target="_blank"
          _hover={{
            textDecoration: "none",
          }}
        >
          <Center size="md" bgColor="teal.500" width="100%" height="40px">
            <Text textAlign="center" color="white" fontWeight={600}>
              {t("candidates.button")}
            </Text>
          </Center>
        </Link>
      </NextLink>
    </Box>
  );
};

export default CandidateCard;
