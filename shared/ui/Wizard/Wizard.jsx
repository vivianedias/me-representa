import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { Field, Form } from "react-final-form";
import { useTranslation } from "react-i18next";

import { Box, Button, FormErrorMessage, Flex, Text } from "@chakra-ui/react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { css } from "@emotion/react";

const Wizard = ({ initialValues, onSubmit, children }) => {
  const [page, setPage] = useState(0);
  const { t } = useTranslation("wizard");

  const memoizedInitialValues = useMemo(() => initialValues, [initialValues]);
  const childrenArray = React.Children.toArray(children);
  const activePage = childrenArray[page];
  const isLastPage = page === React.Children.count(children) - 1;

  const onSubmitHandler = (values) => {
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values);
    }
    onNextHandler(values);
  };

  const pageValidation = (values) => {
    const errors = {};
    for (const key in values) {
      if (!values[key]) {
        errors[key] = "REQUIRED";
      }
    }
    return errors;
  };

  const onNextHandler = (values) => {
    setPage((previousPage) => Math.min(previousPage + 1, children.length - 1));
  };

  const onPreviousHandler = () => {
    setPage((previousPage) => Math.max(previousPage - 1, 0));
  };

  const renderPrevious = () => {
    return page > 0 ? (
      <Button
        colorScheme="pink"
        leftIcon={<FaCaretLeft />}
        onClick={onPreviousHandler}
        variant="outline"
      >
        {t("anterior")}
      </Button>
    ) : null;
  };

  const renderNext = () => {
    return !isLastPage ? (
      <Button colorScheme="pink" rightIcon={<FaCaretRight />} type="submit">
        {t("proximo")}
      </Button>
    ) : null;
  };

  const renderSubmit = ({ isSubmitting, hasValidationErrors, pristine }) => {
    return isLastPage ? (
      <Button
        colorScheme="yellow"
        type="submit"
        disabled={isSubmitting || hasValidationErrors || pristine}
      >
        {t("submeter")}
      </Button>
    ) : null;
  };

  return (
    <Box maxW="100vw">
      <Wizard.Steps currentPage={page} childrenArray={childrenArray} />
      <Box>
        <Form
          initialValues={memoizedInitialValues}
          validate={pageValidation}
          onSubmit={onSubmitHandler}
          subscription={{ submitting: true, pristine: true }}
        >
          {({ handleSubmit, submitting, hasValidationErrors, pristine }) => {
            return (
              <form onSubmit={handleSubmit}>
                {activePage}
                <Box position="sticky" bottom={0} bgColor="white">
                  <Flex
                    padding={4}
                    justifyContent={page === 0 ? "flex-end" : "space-between"}
                    alignItems="center"
                  >
                    {renderPrevious()}
                    {renderNext()}
                    {renderSubmit({
                      submitting,
                      hasValidationErrors,
                      pristine,
                    })}
                  </Flex>
                </Box>
              </form>
            );
          }}
        </Form>
      </Box>
    </Box>
  );
};

Wizard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

Wizard.Steps = function Steps({ currentPage, childrenArray }) {
  return (
    <Flex
      height="20px"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="flex-end"
      paddingX={4}
      mb={4}
    >
      {childrenArray.map((_, index) => {
        const isActive = index <= currentPage;
        return (
          <Text
            as="span"
            backgroundColor={isActive ? "pink.500" : "gray.300"}
            height={isActive ? "8px" : "4px"}
            flexGrow={1}
            maxWidth="50px"
            key={`wizard-steps-${index}`}
            css={css`
              &:not(:last-child) {
                margin-right: var(--chakra-space-2);
              }
            `}
          />
        );
      })}
    </Flex>
  );
};

Wizard.Page = function Page({ children }) {
  return <>{children}</>;
};

Wizard.Error = function Error({ name }) {
  return (
    <Field
      name={name}
      subscription={{ touched: true, error: true }}
      render={({ meta: { touched, error } }) =>
        touched && error ? <FormErrorMessage>{error}</FormErrorMessage> : null
      }
    />
  );
};

export default Wizard;
