import { Field } from "react-final-form";
import { Box, useCheckbox } from "@chakra-ui/react";
import { v4 as uuid } from "uuid";

const CheckboxCard = (props) => {
  const { getCheckboxProps, getInputProps } = useCheckbox(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "yellow.400",
          color: "black",
          borderColor: "yellow.400",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};

const CustomCheckboxCard = (props) => {
  return (
    <Field name={props.name} type="checkbox" value={props.value}>
      {({ input }) => (
        <CheckboxCard {...input} key={props.value}>
          {props.label}
        </CheckboxCard>
      )}
    </Field>
  );
};

export default CustomCheckboxCard;
