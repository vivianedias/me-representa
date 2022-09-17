import React, { useState } from "react"
import PropTypes from "prop-types"
import { v4 as uuid } from "uuid"
import { Field, Form } from "react-final-form"
import { useTranslation } from "react-i18next"

import { Box, Button } from "@chakra-ui/react"
import { FaCaretLeft, FaCaretRight } from "react-icons/fa"

import styles from "./styles.module.css"
import "/shared/locales/i18n"

export const Wizard = ({ initialValues, onSubmit, children }) => {
  const { t } = useTranslation("translation", { keyPrefix: "wizard" })
  const [state, setState] = useState({
    page: 0,
    values: initialValues || {},
  })
  const childrenArray = React.Children.toArray(children)
  const activePage = childrenArray[state.page]
  const isLastPage = state.page === React.Children.count(children) - 1

  const onSubmitHandler = (values) => {
    const isLastPage = state.page === React.Children.count(children) - 1
    if (isLastPage) {
      return onSubmit(values)
    }
    onNextHandler(values)
  }

  const pageValidation = (values) => {
    const errors = {}
    for (const key in values) {
      if (!values[key]) {
        errors[key] = "REQUIRED"
      }
    }
    return errors
  }

  const onNextHandler = (values) => {
    setState((state) => ({
      page: Math.min(state.page + 1, children.length - 1),
      values,
    }))
  }

  const onPreviousHandler = () => {
    setState((state) => ({ ...state, page: Math.max(state.page - 1, 0) }))
  }

  const renderPrevious = () => {
    return (
      state.page > 0 && (
        <Button leftIcon={<FaCaretLeft />} onClick={onPreviousHandler}>
          {t("anterior")}
        </Button>
      )
    )
  }

  const renderNext = () => {
    return (
      !isLastPage && (
        <Button rightIcon={<FaCaretRight />} type="submit">
          {t("proximo")}
        </Button>
      )
    )
  }

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
    )
  }

  return (
    <div className={styles.wizardContainer}>
      <Wizard.Steps currentPage={state.page} childrenArray={childrenArray} />
      <div className={styles.formContainer}>
        <Form
          initialValues={state.values}
          validate={pageValidation}
          onSubmit={onSubmitHandler}
        >
          {({ handleSubmit, submitting, hasValidationErrors }) => (
            <form onSubmit={handleSubmit}>
              {activePage}
              <div
                className={`${styles.footer} ${
                  state.page === 0 ? styles.continueFooter : ""
                }`}
              >
                {renderPrevious()}
                {renderNext()}
                {renderSubmit(submitting, hasValidationErrors)}
              </div>
            </form>
          )}
        </Form>
      </div>
    </div>
  )
}

Wizard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

Wizard.Steps = function Steps({ currentPage, childrenArray }) {
  return (
    <Box className={styles.stepsContainer}>
      {childrenArray.map((_, index) => (
        <span
          key={uuid()}
          className={`${styles.step} ${
            index <= currentPage ? styles.activeStep : ""
          }`}
        />
      ))}
    </Box>
  )
}

Wizard.Page = function Page({ children }) {
  return children
}

Wizard.Error = function Error({ name }) {
  return (
    <Field
      name={name}
      subscription={{ touched: true, error: true }}
      render={({ meta: { touched, error } }) =>
        touched && error ? <span>{error}</span> : null
      }
    />
  )
}
