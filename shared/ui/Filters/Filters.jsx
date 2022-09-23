import { Box, Button, Stack, useToast } from "@chakra-ui/react";
import { Form } from "react-final-form";
import Identity from "./Identity";
import LGBT from "./LGBT";
import Parties from "./Parties";
import Priorities from "./Priorities";
import State from "./State";
import fetcher from "../../../utils/apiClient";
import { FORM_ERROR } from "final-form";

const Filters = ({ t, parties }) => {
  const toast = useToast();

  const filter = async (filter) => {
    const data = await fetcher("/api/candidates/filter", {
      method: "POST",
      body: filter,
    });
    return data;
  };

  const onSubmit = async (values) => {
    try {
      const data = await filter(values);
      console.log({ data });
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
      return { [FORM_ERROR]: e };
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => {
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

              <Button
                type="submit"
                isLoading={submitting}
                loadingText={t("loading")}
                variant="solid"
                colorScheme="pink"
                size="md"
              >
                {t("filters.button")}
              </Button>
            </Stack>
          </Box>
        );
      }}
    />
  );
};

export default Filters;
