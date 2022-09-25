import { Field, useField } from "react-final-form";
import { Checkbox } from "@chakra-ui/react";

const FieldCheckbox = ({ name, value, label }) => {
  const {
    input: { checked, ...input },
    meta: { error, touched },
  } = useField(name, {
    type: "checkbox", // important for RFF to manage the checked prop
    value, // important for RFF to manage list of strings
  });
  return (
    // <Field name={props.name} type="checkbox" value={props.value}>
    //   {({ input }) => <Checkbox {...input}>{props.label}</Checkbox>}
    // </Field>
    <Checkbox
      {...input}
      isChecked={checked}
      isInvalid={error && touched}
      colorScheme="yellow"
    >
      {label}
    </Checkbox>
  );
};

export default FieldCheckbox;
