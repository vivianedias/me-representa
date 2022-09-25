import NextLink from "next/link";
import { Field } from "react-final-form";
import { useTranslation } from "react-i18next";
import {
  FormControl,
  FormErrorMessage,
  Checkbox,
  Link,
  Icon,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import validations from "../../../utils/validations";

function TermsAndConditionsField({ t }) {
  const { t: validationsT } = useTranslation("common");
  const { minLength } = validations(validationsT);

  function TermsLink() {
    return (
      <NextLink href="/termos" passHref>
        <Link color="pink.600" target="_blank">
          {t("terms.termsAndConditions")}{" "}
          <Icon as={FaExternalLinkAlt} color="pink.600" boxSize={3} />.
        </Link>
      </NextLink>
    );
  }

  return (
    <Field
      name="acceptedTerms"
      value="yes"
      type="checkbox"
      validate={minLength(1, "validation.terms")}
    >
      {({ input, meta }) => {
        return (
          <FormControl isInvalid={meta.error && meta.touched}>
            <Checkbox
              {...input}
              isInvalid={meta.error && meta.touched}
              colorScheme="yellow"
            >
              {t("terms.label")} <TermsLink />
            </Checkbox>
            <FormErrorMessage>{meta.error}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
}

export default TermsAndConditionsField;
