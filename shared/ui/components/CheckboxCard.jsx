import { Field, useField } from "react-final-form";
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

const CustomCheckboxCard = ({ name, value, label }) => {
  const {
    input: { checked, ...input },
    meta: { error, touched },
  } = useField(name, {
    type: "checkbox", // important for RFF to manage the checked prop
    value, // important for RFF to manage list of strings
  });
  return (
    <CheckboxCard
      {...input}
      isChecked={checked}
      isInvalid={error && touched}
      colorScheme="yellow"
    >
      {label}
    </CheckboxCard>
  );
};

export default CustomCheckboxCard;
