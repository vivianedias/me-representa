import { useEffect, useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Field } from "react-final-form";
import { useTranslation } from "react-i18next";
import { log } from "next-axiom";
import {
  FormControl,
  Input,
  InputGroup,
  FormLabel,
  FormErrorMessage,
  Spinner,
  Icon,
  InputRightElement,
  FormHelperText,
} from "@chakra-ui/react";
import { FaCheck, FaExclamationCircle } from "react-icons/fa";
import fetcher from "../../../utils/apiClient";
import removesSpecialChars from "../../../utils/removesSpecialChars";
import validations from "../../../utils/validations";

function CpfInput({ input, meta, tseCandidateCpf, setTseCandidate, t }) {
  const [isLoading, setIsLoading] = useState(false);
  const [noValidCandidate, setNoValidCandidate] = useState(false);

  const { value: cpfValue } = input;
  const noValidCandidateError = noValidCandidate
    ? t("cpf.noCandidateFoundError")
    : null;

  const searchByCpf = useCallback(
    async (cpf) => {
      setIsLoading(true);
      setNoValidCandidate(false);
      const parsedCpf = removesSpecialChars(cpf);

      try {
        const data = await fetcher(`/api/candidate/tse/${parsedCpf}`);

        if (!data) {
          log.warn(
            `Candidate wasn't able to find their registry on TSE with this CPF '${parsedCpf}'`
          );
          setIsLoading(false);
          setNoValidCandidate(true);
          return setTseCandidate(null);
        }

        setTseCandidate(data);
        setIsLoading(false);
      } catch (e) {
        log.error(
          `Candidate wasn't able to find their registry on TSE with this CPF '${parsedCpf}'`,
          e
        );
        setIsLoading(false);
        setTseCandidate(null);
        // setSubmitError(true);
      }
    },
    [cpfValue]
  );

  useEffect(() => {
    const shouldValidateCpf = meta.dirty && meta.touched && !meta.active;

    if (
      shouldValidateCpf &&
      tseCandidateCpf !== removesSpecialChars(cpfValue)
    ) {
      searchByCpf(cpfValue);
    }
  }, [meta, cpfValue, searchByCpf, tseCandidateCpf]);

  return (
    <FormControl isInvalid={(meta.error && meta.touched) || noValidCandidate}>
      <FormLabel>{t("cpf.label")}</FormLabel>
      <InputGroup>
        <Input
          {...input}
          disabled={!!meta.initial}
          type="cpf"
          placeholder={t("cpf.placeholder")}
        />
        {tseCandidateCpf && !isLoading ? (
          <InputRightElement>
            <Icon as={FaCheck} color="green.500" />
          </InputRightElement>
        ) : null}
        {noValidCandidate && !isLoading ? (
          <InputRightElement>
            <Icon as={FaExclamationCircle} color="red.400" />
          </InputRightElement>
        ) : null}
        {isLoading ? (
          <InputRightElement>
            <Spinner size="xs" />
          </InputRightElement>
        ) : null}
      </InputGroup>
      <FormHelperText>{t("cpf.helperText")}</FormHelperText>
      <FormErrorMessage>{meta.error || noValidCandidateError}</FormErrorMessage>
    </FormControl>
  );
}

CpfInput.propTypes = {
  setTseCandidate: PropTypes.func.isRequired,
  tseCandidateCpf: PropTypes.string,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

function CpfField({ t, setTseCandidate, tseCandidate }) {
  const { t: validationsT } = useTranslation("common");
  const { required, composeValidators, length } = validations(validationsT);

  const tseCandidateCpf = tseCandidate && tseCandidate["NR_CPF_CANDIDATO"];

  return (
    <Field name="cpf" validate={composeValidators(required, length(14))}>
      {(fieldProps) => (
        <CpfInput
          {...fieldProps}
          tseCandidateCpf={tseCandidateCpf}
          setTseCandidate={setTseCandidate}
          t={t}
        />
      )}
    </Field>
  );
}

CpfField.propTypes = {
  t: PropTypes.func.isRequired,
  setTseCandidate: PropTypes.func.isRequired,
  tseCandidate: PropTypes.object,
};

export default CpfField;
