import PropTypes from "prop-types";
import { Field, useForm } from "react-final-form";
import { useTranslation } from "react-i18next";
import {
  FormControl,
  RadioGroup,
  Radio,
  Stack,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import validations from "../../../utils/validations";

const CustomRadio = ({ options, t, name, label, direction }) => {
  const { t: validationsT } = useTranslation("common");
  const { required } = validations(validationsT);

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
              {options.map(({ value, label }, i) => (
                <Radio
                  {...input}
                  key={`custom-radio-${i}`}
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
