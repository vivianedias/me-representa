function removesSpecialChars(cpf) {
  return cpf.replace(/[^\w\s]/gi, "");
}

export default removesSpecialChars;
