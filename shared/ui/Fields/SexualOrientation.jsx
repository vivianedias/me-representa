import PropTypes from "prop-types";
import { Field } from "react-final-form";
import {
  FormControl,
  Stack,
  FormLabel,
  FormErrorMessage,
  Select,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import validations from "../../../utils/validations";
import Condition from "../components/Condition";

function SexualOrientationField({ t, lgbtConfirmInitialValue }) {
  const { required } = validations(t);

  return (
    <>
      <Field validate={required} type="radio" name="lgbtConfirm">
        {({ input, meta }) => (
          <FormControl isInvalid={meta.error && meta.touched}>
            <FormLabel>{t("lgbt.confirm.label")}</FormLabel>
            <RadioGroup
              colorScheme="yellow"
              defaultValue={lgbtConfirmInitialValue}
            >
              <Stack direction="row" spacing={4}>
                <Radio
                  {...input}
                  value="yes"
                  isInvalid={meta.error && meta.touched}
                >
                  {t("lgbt.confirm.true")}
                </Radio>
                <Radio
                  {...input}
                  value="no"
                  isInvalid={meta.error && meta.touched}
                >
                  {t("lgbt.confirm.false")}
                </Radio>
              </Stack>
              <FormErrorMessage>{meta.error}</FormErrorMessage>
            </RadioGroup>
          </FormControl>
        )}
      </Field>
      <Condition when="lgbtConfirm" is="yes">
        <Field name="lgbt" validate={required}>
          {({ input, meta }) => {
            return (
              <FormControl isInvalid={meta.touched && meta.error}>
                <Select {...input}>
                  <option value="">{t("lgbt.options.default")}</option>
                  <option value="lesbian">{t("lgbt.options.lesbian")}</option>
                  <option value="bissexual">
                    {t("lgbt.options.bissexual")}
                  </option>
                  <option value="gay">{t("lgbt.options.gay")}</option>
                  <option value="trans">{t("lgbt.options.trans")}</option>
                  <option value="other">{t("lgbt.options.other")}</option>
                </Select>
                <FormErrorMessage>{meta.error}</FormErrorMessage>
              </FormControl>
            );
          }}
        </Field>
      </Condition>
    </>
  );
}

SexualOrientationField.propTypes = {
  t: PropTypes.func.isRequired,
  lgbtConfirmInitialValue: PropTypes.string,
};

export default SexualOrientationField;
