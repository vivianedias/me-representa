import React from "react"
import PropTypes from "prop-types"
import { Button } from "@chakra-ui/react"
import { FormSpy, useField } from "react-final-form"

/* 
  * Para ser usado como wrapper dos Radio. 
  * Adiciona acessibilidade para os componentes Radio através da id usada no aria-labelledby 
*/
export const RadioGroup = ({ ariaLabelledBy, children, ...rest }) => {
  return (
    <span aria-labelledby={ariaLabelledBy} role="radiogroup" {...rest}>
      {children}
    </span>
  )
}

RadioGroup.propTypes = {
  ariaLabelledBy: PropTypes.string.isRequired
}

export const Radio = ({
  name,
  value,
  label,
  style,
  className,
  colorScheme = "blue",
}) => {
  const field = useField(name, {
    type: "radio",
    value: value,
    initialValue: "",
  })
  const toggle = () => field.input.onChange(field.input.value)

  return (
    <FormSpy subscription={{ values: true }}>
      {({ values }) => (
        <>
          <input type="radio" {...field.input} style={{ display: "none" }} />
          <Button
            variant={values[name] === value ? "solid" : "outline"}
            colorScheme={colorScheme}
            onClick={toggle}
            style={style}
            className={className}
            maxW="100%"
            boxSizing="content-box"
            role="radio"
          >
            {label}
          </Button>
        </>
      )}
    </FormSpy>
  )
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  colorScheme: PropTypes.string, // Baseado no chakra colorScheme
}
