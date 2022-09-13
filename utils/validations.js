const validations = (t) => {
  const required = (value) => (value ? undefined : t("validation.required"));

  return {
    required,
  };
};

export default validations;
