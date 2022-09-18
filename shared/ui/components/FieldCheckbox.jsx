import { Field } from "react-final-form";
import { Checkbox } from "@chakra-ui/react";

const FieldCheckbox = (props) => {
  return (
    <Field name={props.name} type="checkbox" value={props.value}>
      {({ input }) => <Checkbox {...input}>{props.label}</Checkbox>}
    </Field>
  );
};

export default FieldCheckbox;
