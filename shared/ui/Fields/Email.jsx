import PropTypes from "prop-types";
import { Field } from "react-final-form";
import { useTranslation } from "react-i18next";
import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  chakra,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import validations from "../../../utils/validations";

function EmailField({ t, isDisabled, hasLabel }) {
  const CFaUserAlt = chakra(FaUserAlt);
  const { t: validationsT } = useTranslation("common");
  const { required, email, composeValidators } = validations(validationsT);

  return (
    <Field name="email" validate={composeValidators(required, email)}>
      {({ input, meta }) => {
        return (
          <FormControl isInvalid={meta.error && meta.touched}>
            {hasLabel ? <FormLabel>{t("email.label")}</FormLabel> : null}
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <CFaUserAlt color="gray.300" />
              </InputLeftElement>
              <Input
                {...input}
                disabled={isDisabled}
                type="email"
                placeholder={t("email.placeholder")}
              />
            </InputGroup>
            <FormErrorMessage>{meta.error}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
}

EmailField.defaultProps = {
  hasLabel: true,
};

EmailField.propTypes = {
  t: PropTypes.func.isRequired,
};

export default EmailField;
