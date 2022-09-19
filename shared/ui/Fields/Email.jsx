import PropTypes from "prop-types";
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
import { Field } from "react-final-form";
import validations from "../../../utils/validations";

function EmailField({ t }) {
  const CFaUserAlt = chakra(FaUserAlt);
  const { required, email, composeValidators } = validations(t);

  return (
    <Field name="email" validate={composeValidators(required, email)}>
      {({ input, meta }) => {
        return (
          <FormControl isInvalid={meta.error && meta.touched}>
            <FormLabel>{t("email.label")}</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <CFaUserAlt color="gray.300" />
              </InputLeftElement>
              <Input
                {...input}
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

EmailField.propTypes = {
  t: PropTypes.func.isRequired,
};

export default EmailField;
