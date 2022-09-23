import { Box, Button, Stack, useToast } from "@chakra-ui/react";
import { Form } from "react-final-form";
import Identity from "./Identity";
import LGBT from "./LGBT";
import Parties from "./Parties";
import Priorities from "./Priorities";
import State from "./State";
import fetcher from "../../../utils/apiClient";
import { FORM_ERROR } from "final-form";
import { event, DEFAULT_EVENTS } from "../../analytics/utils";

const Filters = ({ t, parties, mutate }) => {
  const toast = useToast();

  const filter = async (filter) => {
    const data = await fetcher("/api/candidates/filter", {
      method: "POST",
      body: filter,
    });

    mutate(data, {
      revalidate: false,
    });

    return data;
  };

  const handleReset = async (reset) => {
    reset();
    event({
      action: "Submit",
      category: DEFAULT_EVENTS.click,
      label: `Submitted at ${router.pathname}`,
      value: `User clicked to reset filters.`,
    });

    try {
      await filter();
    } catch (e) {
      console.error(e);
      event({
        action: "Submit",
        category: DEFAULT_EVENTS.error,
        label: `Submitted at ${router.pathname}`,
        value: `User couldnt reset filters`,
      });
      toast({
        title: t("error"),
        description: t("submitError"),
        status: "error",
        duration: 9000,
        isClosable: true,
        variant: "left-accent",
        position: "top-right",
      });
      return { [FORM_ERROR]: e };
    }
  };

  const onSubmit = async (values) => {
    try {
      event({
        action: "Submit",
        category: DEFAULT_EVENTS.click,
        label: `Submitted at ${router.pathname}`,
        value: `User clicked to filter candidates.`,
      });
      await filter(values);
    } catch (e) {
      console.error(e);
      event({
        action: "Submit",
        category: DEFAULT_EVENTS.error,
        label: `Submitted at ${router.pathname}`,
        value: `User couldnt filter candidates`,
      });
      toast({
        title: t("error"),
        description: t("submitError"),
        status: "error",
        duration: 9000,
        isClosable: true,
        variant: "left-accent",
        position: "top-right",
      });
      return { [FORM_ERROR]: e };
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      subscription={{ submitting: true, values: true }}
      render={({ handleSubmit, submitting, form }) => {
        return (
          <Box as="form" onSubmit={handleSubmit}>
            <Stack spacing={8}>
              <Stack spacing={8}>
                <Identity t={t} />
                <LGBT t={t} />
                <Parties parties={parties} t={t} />
                <State t={t} />
                <Priorities t={t} />
              </Stack>
              <Stack direction="row" justifyContent={"flex-end"}>
                <Button
                  colorScheme={"blue"}
                  variant="outline"
                  type="button"
                  onClick={() => handleReset(form.reset)}
                  disabled={submitting}
                >
                  Reset
                </Button>
                <Button
                  type="submit"
                  isLoading={submitting}
                  disabled={submitting}
                  loadingText={t("loading")}
                  variant="solid"
                  colorScheme="pink"
                  size="md"
                >
                  {t("filters.button")}
                </Button>
              </Stack>
            </Stack>
          </Box>
        );
      }}
    />
  );
};

export default Filters;
