import React, { useState } from "react"
import PropTypes from "prop-types"
import { Form } from "react-final-form"

export const Wizard = (props) => {
  const [state, setState] = useState({
    page: 0,
    values: props.initialValues || {},
  })
  const { children } = props
  const { page, values } = state
  const activePage = React.Children.toArray(children)[page]
  const isLastPage = page === React.Children.count(children) - 1

  const handleSubmit = (values) => {
    const { children, onSubmit } = props
    const { page } = state
    const isLastPage = page === React.Children.count(children) - 1
    if (isLastPage) {
      return onSubmit(values)
    } else {
      next(values)
    }
  }

  const validate = (values) => {
    const activePage = React.Children.toArray(props.children)[
      state.page
    ]
    return activePage.props.validate ? activePage.props.validate(values) : {}
  }

  const next = (values) =>
    setState((state) => ({
      page: Math.min(state.page + 1, props.children.length - 1),
      values,
    }))

  const previous = () =>
    setState((state) => ({
      page: Math.max(state.page - 1, 0),
    }))

  return (
    <Form initialValues={values} validate={validate} onSubmit={handleSubmit}>
      {({ handleSubmit, submitting, values }) => (
        <form onSubmit={handleSubmit}>
          {activePage}
          <div className="buttons">
            {page > 0 && (
              <button type="button" onClick={previous}>
                « Previous
              </button>
            )}
            {!isLastPage && <button type="submit">Next »</button>}
            {isLastPage && (
              <button type="submit" disabled={submitting}>
                Submit
              </button>
            )}
          </div>

          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    </Form>
  )
}

Wizard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

Wizard.Page = function Page({ children }) { return children }
