import { Field, useField } from "react-final-form";
import { Checkbox } from "@chakra-ui/react";

const FieldCheckbox = ({ name, value, label }) => {
  const {
    input: { checked, ...input },
    meta: { error, touched },
  } = useField(name, {
    type: "checkbox",
    value,
  });
  return (
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
