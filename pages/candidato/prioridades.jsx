import "../../shared/locales/i18n";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Head from "next/head";
import { unstable_getServerSession } from "next-auth/next";
import { useRouter } from "next/router";
import { FORM_ERROR } from "final-form";
import { Form } from "react-final-form";
import {
  Button,
  Grid,
  GridItem,
  Container,
  Heading,
  ListItem,
  Text,
  List,
  Center,
  VStack,
  useToast,
  Icon,
} from "@chakra-ui/react";
import { FaRegTimesCircle } from "react-icons/fa";
import { authOptions } from "../api/auth/[...nextauth]";
import PointsBox from "../../shared/ui/PointsBox/PointsBox";
import fetcher from "../../utils/apiClient";
import filterCandidatesPriorities from "../../utils/filterCandidatesPriorities";
import getPriorities from "../../utils/getPriorities";

function sumPoints(values) {
  return Object.values(values || {}).reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);
}

function prioritiesWithPoints(values) {
  return Object.values(values || {}).reduce((previousValue, currentValue) => {
    return currentValue > 0 ? previousValue + 1 : previousValue;
  }, 0);
}

function Count({ values, children }) {
  const MAX_POINTS = 5;
  const sum = sumPoints(values);

  return children({ points: sum, maxPoints: MAX_POINTS });
}

export default function Candidato({ session, candidate }) {
  const { t } = useTranslation("translation", { keyPrefix: "prioridades" });
  const toast = useToast();
  const router = useRouter();
  const [initialValues, setInitialValues] = useState(
    filterCandidatesPriorities(candidate)
  );

  const priorities = getPriorities(t);

  const savePriorities = async (priorities) => {
    await fetcher("/api/candidate/priorities", {
      method: "POST",
      body: priorities,
    });
  };

  const onSubmit = async (values) => {
    try {
      if (prioritiesWithPoints(values) > 3) {
        return { [FORM_ERROR]: t("tooManyPriorities") };
      }

      if (sumPoints(values) < 1) {
        return { [FORM_ERROR]: t("tooLittlePriorities") };
      }

      await savePriorities(values);

      if (Object.keys(initialValues).length < 1) {
        router.push("/candidato/perguntas");
      } else {
        setInitialValues(values);
        toast({
          title: t("success"),
          description: t("successUpdate"),
          status: "success",
          duration: 9000,
          isClosable: true,
          variant: "left-accent",
          position: "top-right",
        });
      }
    } catch (e) {
      console.error(e);
      toast({
        title: t("error"),
        description: t("submitError"),
        status: "error",
        duration: 9000,
        isClosable: true,
        variant: "left-accent",
        position: "top-right",
      });
      return { [FORM_ERROR]: t("submitError") };
    }
  };

  useEffect(() => {
    router.prefetch("/candidato/perguntas");
  }, []);

  return (
    <>
      <Head>
        <title>{t("headTitle")}</title>
        <meta property="og:title" content={t("headTitle")} key="title" />
      </Head>

      <Container maxW={{ base: "60ch", md: "100ch" }} centerContent>
        <Form
          onSubmit={onSubmit}
          initialValues={initialValues}
          subscription={{
            submitting: true,
            pristine: true,
            values: true,
            submitError: true,
          }}
        >
          {({ handleSubmit, values, submitError, pristine, submitting }) => {
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
                                  title={`#${title}`}
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
                {submitError ? (
                  <Grid
                    templateColumns={"20px 1fr"}
                    alignItems="center"
                    gap={3}
                  >
                    <GridItem colStart={2} maxH="20px">
                      <Icon as={FaRegTimesCircle} w={5} h={5} color="red.500" />
                    </GridItem>
                    <GridItem gridColumn={4}>
                      <Text color="red.600">{submitError}</Text>
                    </GridItem>
                  </Grid>
                ) : null}
                <Button
                  size="lg"
                  colorScheme="blue"
                  type="submit"
                  isLoading={submitting}
                  disabled={submitting || pristine}
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

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: "/cadastro/login",
        permanent: false,
      },
    };
  }

  try {
    const candidate = await fetcher(`/api/candidate/${session.user.id}`);

    return {
      props: {
        session,
        candidate,
      },
    };
  } catch (e) {
    console.error("error", e);
    return {
      props: {
        session,
        candidate: null,
      },
    };
  }
}
