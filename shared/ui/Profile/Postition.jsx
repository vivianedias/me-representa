import { Text } from "@chakra-ui/react";

const CustomPosition = (props) => {
  const { t, answer } = props;

  const position = answer ? t("favorable") : t("against");
  const complement = answer ? t("favorableComplement") : "";

  return (
    <>
      <Text as="span" color="teal.400" fontWeight={700}>
        {position}
      </Text>{" "}
      {complement}
    </>
  );
};

export default CustomPosition;
