import React, { useState } from "react"
import PropTypes from "prop-types"
import { Field, Form } from "react-final-form"
import { Button } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import "/shared/locales/i18n";

export const Wizard = ({ initialValues, onSubmit, children }) => {
  const { t } = useTranslation("translation", { keyPrefix: "wizard" })
  const [state, setState] = useState({
    page: 0,
    values: initialValues || {},
  })
  const activePage = React.Children.toArray(children)[state.page]
  const isLastPage = state.page === React.Children.count(children) - 1

  const handleSubmit = (values) => {
    const isLastPage = state.page === React.Children.count(children) - 1
    if (isLastPage) {
      return onSubmit(values)
    }
    next(values)
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

  const next = (values) => {
    setState((state) => ({
      page: Math.min(state.page + 1, children.length - 1),
      values,
    }))
  }

  const previous = () => {
    setState((state) => ({ ...state, page: Math.max(state.page - 1, 0) }))
  }

  const renderPrevious = () => {
    return state.page > 0 && <Button onClick={previous}>{t("anterior")}</Button>
  }

  const renderNext = () => {
    return !isLastPage && <Button type="submit">{t("proximo")}</Button>
  }

  const renderSubmit = (isSubmitting, hasValidationErrors) => {
    return (
      isLastPage && (
        <Button
          colorScheme="pink"
          type="submit"
          disabled={isSubmitting || hasValidationErrors}
        >
          {t("submeter")}
        </Button>
      )
    )
  }

  return (
    <Form
      initialValues={state.values}
      validate={pageValidation}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, submitting, hasValidationErrors }) => (
        <form onSubmit={handleSubmit}>
          {activePage}
          <div>
            {renderPrevious()}
            {renderNext()}
            {renderSubmit(submitting, hasValidationErrors)}
          </div>
        </form>
      )}
    </Form>
  )
}

Wizard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
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
