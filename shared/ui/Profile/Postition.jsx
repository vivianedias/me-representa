import { Text } from "@chakra-ui/react";

const CustomPosition = (props) => {
  const { t, answer } = props;

  const position =
    answer === "favor" ? t("positions.favorable") : t("positions.against");
  const complement =
    answer === "favor" ? t("positions.favorableComplement") : "";

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
