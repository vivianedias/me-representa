const validations = (t) => {
  const composeValidators =
    (...validators) =>
    (value) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      );

  const required = (value) => (value ? undefined : t("validation.required"));
  const email = (value) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      return undefined;
    }
    return t("validation.email");
  };
  const cpf = (value) => {
    const cpfRegex = new RegExp(
      /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/
    );

    if (cpfRegex.test(value)) {
      return undefined;
    }
    return t("validation.cpf");
  };

  const length = (max) => (value) =>
    value.length <= max ? undefined : t("validation.length");

  return {
    required,
    email,
    composeValidators,
    cpf,
    length,
  };
};

export default validations;
