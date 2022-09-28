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

  const length = (max) => (value) =>
    value.length <= max ? undefined : t("validation.length", { size: max });

  const minLength = (min, errorObj) => (value) =>
    Number(value.length) >= Number(min) ? undefined : t(errorObj);

  return {
    required,
    email,
    composeValidators,
    length,
    minLength,
  };
};

export default validations;
