import "../../shared/locales/i18n";
import { Form, Field } from "react-final-form";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Container,
  Heading,
  OrderedList,
  ListItem,
  Text,
  List,
  Flex,
  Center,
  VStack,
} from "@chakra-ui/react";
import PointsBox from "../../shared/ui/PointsBox/PointsBox";
import { useTranslation } from "react-i18next";
import Head from "next/head";

function Count({ values, children }) {
  const MAX_POINTS = 5;

  const sum = Object.values(values || {}).reduce(
    (previousValue, currentValue) => {
      return previousValue + currentValue;
    },
    0
  );

  return children({ points: sum, maxPoints: MAX_POINTS });
}

export default function Candidato({ data }) {
  const { t } = useTranslation("translation", { keyPrefix: "prioridades" });
  const priorities = [
    {
      name: "gender",
      title: t("titles.gender"),
    },
    {
      name: "lgbt",
      title: t("titles.lgbt"),
    },
    {
      name: "race",
      title: t("titles.race"),
    },
    {
      name: "indigenous",
      title: t("titles.indigenous"),
    },
    {
      name: "socialPolicies",
      title: t("titles.socialPolicies"),
    },
    {
      name: "security",
      title: t("titles.security"),
    },
    {
      name: "drugs",
      title: t("titles.drugs"),
    },
    {
      name: "communication",
      title: t("titles.communication"),
    },
    {
      name: "democracy",
      title: t("titles.democracy"),
    },
    {
      name: "environment",
      title: t("titles.environment"),
    },
  ];

  return (
    <>
      <Head>
        <title>{t("headTitle")}</title>
      </Head>
      <Container maxW={{ base: "60ch", md: "100ch" }} centerContent my={8}>
        <Form
          onSubmit={(values) => alert(values)}
          initialValues={{
            lgbt: 2,
          }}
          subscription={{ submitting: true, pristine: true }}
        >
          {({ handleSubmit, values }) => {
            return (
              <VStack as="form" onSubmit={handleSubmit} spacing={4}>
                <Count values={values}>
                  {({ points, maxPoints }) => {
                    return (
                      <>
                        <Center flexDirection="column">
                          <VStack maxW={{ base: "90%", md: "70%" }} spacing={4}>
                            <Heading textAlign="center">{t("title")}</Heading>
                            <List textAlign="center">
                              <ListItem>
                                <Text as="span" fontWeight={700}>
                                  1.{" "}
                                </Text>
                                {t("pickThemes")}
                              </ListItem>
                              <ListItem>
                                <Text as="span" fontWeight={700}>
                                  2.{" "}
                                </Text>
                                {t("distributePoints")}
                              </ListItem>
                            </List>
                          </VStack>
                        </Center>
                        <Grid
                          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
                          gap={4}
                          justifyItems="center"
                        >
                          {priorities.map(({ name, title }, i) => {
                            return (
                              <GridItem key={`priority-box-${i}`}>
                                <PointsBox
                                  title={title}
                                  name={name}
                                  points={points}
                                  maxPoints={maxPoints}
                                />
                              </GridItem>
                            );
                          })}
                        </Grid>
                      </>
                    );
                  }}
                </Count>
                <Button
                  size="lg"
                  isDisabled={Object.keys(values || {}).length < 3}
                  colorScheme="blue"
                >
                  Continuar
                </Button>
              </VStack>
            );
          }}
        </Form>
      </Container>
    </>
  );
}
