import { Field } from "react-final-form";
import {
  Box,
  FormControl,
  Input,
  Stack,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Image,
  Spinner,
  Grid,
  GridItem,
} from "@chakra-ui/react";

function ImageField({ t, isLoading, uploadS3, imageUrl }) {
  const handleFileInput = (e, onChange) => {
    const file = e.target.files[0];
    uploadS3(file);
    onChange(e);
  };

  return (
    <Field name="image">
      {({ input, meta }) => {
        const hasError = (meta.error || meta.submitError) && meta.touched;
        return (
          <Stack w="100%" spacing={4}>
            <FormControl isInvalid={hasError}>
              <FormLabel>{t("image.label")}</FormLabel>
              <Grid
                align="center"
                templateColumns={{ base: "1fr", md: "300px 1fr" }}
                templateRows={{ base: "repeat(2, 100%)", md: "1fr" }}
              >
                <GridItem>
                  <Box
                    bgColor="gray.200"
                    overflow="hidden"
                    borderRadius="full"
                    position="relative"
                    boxSize="200px"
                    mb={{ base: 10, md: 0 }}
                  >
                    <Box
                      position="absolute"
                      top="50%"
                      left="50%"
                      transform="translate(-50%, -50%)"
                      zIndex={1}
                    >
                      {isLoading ? <Spinner color="white" size="xl" /> : null}
                    </Box>
                    <Image
                      position="absolute"
                      top="50%"
                      left="50%"
                      transform="translate(-50%, -50%)"
                      objectFit="cover"
                      alt="Profile photo selected by the candidate"
                      src={imageUrl}
                      fallbackSrc="https://via.placeholder.com/300"
                    />
                  </Box>
                </GridItem>
                <GridItem>
                  <Input
                    {...input}
                    onChange={(e) => handleFileInput(e, input.onChange)}
                    type="file"
                    placeholder={t("image.placeholder")}
                    accept="image/*"
                  />
                  <FormHelperText textAlign="left">
                    {t("image.helperText")}
                  </FormHelperText>
                  <FormErrorMessage>
                    {meta.error || meta.submitError}
                  </FormErrorMessage>
                </GridItem>
              </Grid>
            </FormControl>
          </Stack>
        );
      }}
    </Field>
  );
}

export default ImageField;
