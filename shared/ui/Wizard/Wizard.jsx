import "/shared/locales/i18n";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Field, Form } from "react-final-form";
import { useTranslation } from "react-i18next";
import { v4 as uuid } from "uuid";

import {
  Box,
  Button,
  FormErrorMessage,
  Flex,
  Text,
  Container,
} from "@chakra-ui/react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { css } from "@emotion/react";

const Wizard = ({ initialValues, onSubmit, children }) => {
  const { t } = useTranslation("translation", { keyPrefix: "wizard" });
  const [state, setState] = useState({
    page: 0,
    values: initialValues || {},
  });
  const childrenArray = React.Children.toArray(children);
  const activePage = childrenArray[state.page];
  const isLastPage = state.page === React.Children.count(children) - 1;

  const onSubmitHandler = (values) => {
    const isLastPage = state.page === React.Children.count(children) - 1;
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
    setState((state) => ({
      page: Math.min(state.page + 1, children.length - 1),
      values,
    }));
  };

  const onPreviousHandler = () => {
    setState((state) => ({ ...state, page: Math.max(state.page - 1, 0) }));
  };

  const renderPrevious = () => {
    return (
      state.page > 0 && (
        <Button leftIcon={<FaCaretLeft />} onClick={onPreviousHandler}>
          {t("anterior")}
        </Button>
      )
    );
  };

  const renderNext = () => {
    return (
      !isLastPage && (
        <Button rightIcon={<FaCaretRight />} type="submit">
          {t("proximo")}
        </Button>
      )
    );
  };

  const renderSubmit = (isSubmitting, hasValidationErrors) => {
    return (
      isLastPage && (
        <Button
          colorScheme="blue"
          type="submit"
          disabled={isSubmitting || hasValidationErrors}
        >
          {t("submeter")}
        </Button>
      )
    );
  };

  return (
    <Box maxW="100vw">
      <Wizard.Steps currentPage={state.page} childrenArray={childrenArray} />
      <Box
        maxHeight="73vh"
        overflow="auto"
        css={css`
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
          &::-webkit-scrollbar {
            display: none;
          }
        `}
      >
        <Form
          initialValues={state.values}
          validate={pageValidation}
          onSubmit={onSubmitHandler}
        >
          {({ handleSubmit, submitting, hasValidationErrors }) => (
            <form onSubmit={handleSubmit}>
              {activePage}
              <Box position="sticky" bottom={0} bgColor="gray.200">
                <Flex
                  padding={4}
                  justifyContent={
                    state.page === 0 ? "flex-end" : "space-between"
                  }
                  alignItems="center"
                >
                  {renderPrevious()}
                  {renderNext()}
                  {renderSubmit(submitting, hasValidationErrors)}
                </Flex>
              </Box>
            </form>
          )}
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
            key={`wizard-steps-${uuid()}`}
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
  return <Container paddingBottom={5}>{children}</Container>;
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
