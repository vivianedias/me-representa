import PropTypes from "prop-types";
import { useEffect, useCallback, useState } from "react";
import {
  FormControl,
  Input,
  InputGroup,
  FormLabel,
  FormErrorMessage,
  Spinner,
  Icon,
  InputRightElement,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { Field } from "react-final-form";
import fetcher from "../../../utils/apiClient";
import validations from "../../../utils/validations";

function CpfInput({ input, meta, tseCandidateCpf, setTseCandidate, t }) {
  const [isLoading, setIsLoading] = useState(false);

  const searchByCpf = useCallback(async (cpf) => {
    setIsLoading(true);
    try {
      const data = await fetcher(`/api/candidate/tse/${cpf}`);
      setTseCandidate(data);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      // setSubmitError(true);
    }
  }, []);

  const { value } = input;

  useEffect(() => {
    const shouldValidateCpf =
      meta.dirty && meta.touched && !meta.active && !meta.invalid;

    if (shouldValidateCpf && tseCandidateCpf !== value) {
      searchByCpf(value);
    }
  }, [meta, value, searchByCpf, tseCandidateCpf]);

  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      <FormLabel>{t("cpf.label")}</FormLabel>
      <InputGroup>
        <Input {...input} type="cpf" placeholder={t("cpf.placeholder")} />
        {tseCandidateCpf && !isLoading ? (
          <InputRightElement>
            <Icon as={FaCheck} color="green.500" />
          </InputRightElement>
        ) : null}
        {isLoading ? (
          <InputRightElement>
            <Spinner size="xs" />
          </InputRightElement>
        ) : null}
      </InputGroup>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
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
  const { required, composeValidators, cpf, length } = validations(t);
  const tseCandidateCpf = tseCandidate && tseCandidate["NR_CPF_CANDIDATO"];

  return (
    <Field name="cpf" validate={composeValidators(required, cpf, length(11))}>
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
