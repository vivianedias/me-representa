import PropTypes from "prop-types";
import { Field } from "react-final-form";
import {
  FormControl,
  RadioGroup,
  Radio,
  Stack,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import { v4 as uuid } from "uuid";
import { useForm } from "react-final-form";
import validations from "../../../utils/validations";

const CustomRadio = ({ options, t, name, label, direction }) => {
  const { required } = validations(t);
  const form = useForm();

  return (
    <Field validate={required} type="radio" name={name}>
      {({ input, meta }) => (
        <FormControl isInvalid={meta.error && meta.touched}>
          {label ? <FormLabel>{label}</FormLabel> : null}
          <RadioGroup
            colorScheme="yellow"
            defaultValue={form.getState().values[name] || undefined}
          >
            <Stack direction={direction} spacing={4}>
              {options.map(({ value, label }) => (
                <Radio
                  {...input}
                  key={uuid()}
                  value={value}
                  isInvalid={meta.error && meta.touched}
                >
                  {label}
                </Radio>
              ))}
            </Stack>
            <FormErrorMessage>{meta.error}</FormErrorMessage>
          </RadioGroup>
        </FormControl>
      )}
    </Field>
  );
};

CustomRadio.defaultProps = {
  direction: "row",
};

CustomRadio.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  t: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default CustomRadio;
