import NextLink from "next/link";
import { useTranslation } from "react-i18next";
import { v4 as uuid } from "uuid";
import {
  Container,
  Heading,
  ListItem,
  VStack,
  Text,
  Link,
  Box,
  UnorderedList,
  Icon,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import termsLocale from "../../locales/pt-BR/terms.json";

function UsagePolicy({ t }) {
  const usagePolicySize = Object.keys(termsLocale.use).length - 1;
  const arr = Array.from({ length: usagePolicySize }, (_, i) => i + 1);
  return arr.map((i) => (
    <ListItem key={`use-list-item-${uuid()}`}>{t(`use.item${i}`)}</ListItem>
  ));
}

function SimplifiedTerms({ t }) {
  const simplifiedTermsSize = Object.keys(termsLocale.simplified).length - 1;
  const arr = Array.from({ length: simplifiedTermsSize }, (_, i) => i + 1);
  return arr.map((i) => (
    <ListItem key={`terms-list-item-${uuid()}`}>
      {t(`simplified.item${i}`)}
    </ListItem>
  ));
}

const Terms = () => {
  const { t } = useTranslation("translation", { keyPrefix: "terms" });
  const termsLink = `${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_URL}/terms-and-conditions/TERMOS USO candidaturas.pdf`;
  return (
    <Container>
      <VStack spacing={6}>
        <VStack as="article">
          <Heading as="h1" textAlign="center">
            {t("simplified.title")}
          </Heading>
          <UnorderedList spacing={4} paddingLeft={8}>
            <SimplifiedTerms t={t} />
          </UnorderedList>
        </VStack>
        <VStack as="article">
          <Heading as="h2" size="md" textAlign="center">
            {t("use.title")}
          </Heading>
          <UnorderedList spacing={4} paddingLeft={8}>
            <UsagePolicy t={t} />
          </UnorderedList>
        </VStack>
        <Box paddingLeft={4}>
          <Text as="span">{t("fullTerms")}</Text>{" "}
          <NextLink href={termsLink} passHref isExternal>
            <Link isExternal color="pink.600" target="_blank">
              {t("click")}{" "}
              <Icon as={FaExternalLinkAlt} color="pink.600" boxSize={3} />.
            </Link>
          </NextLink>
        </Box>
      </VStack>
    </Container>
  );
};

export default Terms;
