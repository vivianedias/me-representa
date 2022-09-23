import PropTypes from "prop-types";
import { Field } from "react-final-form";
import { FormControl, FormErrorMessage, Select } from "@chakra-ui/react";
import validations from "../../../utils/validations";
import Condition from "../components/Condition";
import Radio from "../components/CustomRadio";

function SexualOrientationField({ t }) {
  const { required } = validations(t);
  const options = [
    {
      value: "yes",
      label: t("lgbt.confirm.true"),
    },
    {
      value: "no",
      label: t("lgbt.confirm.false"),
    },
  ];
  return (
    <>
      <Radio
        t={t}
        options={options}
        name="lgbtConfirm"
        label={t("lgbt.confirm.label")}
      />
      <Condition when="lgbtConfirm" is="yes">
        <Field name="lgbt" validate={required}>
          {({ input, meta }) => {
            return (
              <FormControl isInvalid={meta.touched && meta.error}>
                <Select {...input}>
                  <option value="">{t("lgbt.options.default")}</option>
                  <option value="lesbian">{t("lgbt.options.lesbian")}</option>
                  <option value="bisexual">{t("lgbt.options.bisexual")}</option>
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
};

export default SexualOrientationField;
