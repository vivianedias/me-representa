import React from "react";
import { useField } from "react-final-form";
import {
  Heading,
  IconButton,
  Progress,
  Input,
  Grid,
  GridItem,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const PointsBox = ({ title, name, points, maxPoints }) => {
  const { input } = useField(name, {
    type: "number",
  });
  const isActive = input.value >= 1;

  return (
    <VStack
      background={isActive ? "pink.500" : "white"}
      width={{ base: "100%", md: "40ch" }}
      p={4}
      alignItems="flex-start"
      spacing={4}
      minHeight="100px"
      borderRadius="lg"
      border="1.5px solid"
      borderColor="gray.300"
      justifyContent="space-between"
    >
      <Heading size="sm" color={isActive ? "white" : "gray.800"}>
        {title}
      </Heading>
      <Grid
        w="100%"
        templateColumns="repeat(5, 1fr)"
        alignItems="center"
        gap={4}
      >
        <GridItem colSpan={3}>
          <Progress
            value={(input.value / maxPoints) * 100}
            colorScheme="yellow"
          />
        </GridItem>
        <GridItem colStart={4} colEnd={6}>
          <Flex alignItems="center">
            <IconButton
              icon={<FaCaretLeft />}
              onClick={() => input.onChange(Number(input.value) - 1)}
              disabled={Number(input.value) <= 0}
              variant="ghost"
              color={isActive ? "white" : "gray.800"}
              size="sm"
              _hover={
                isActive
                  ? {
                      color: "gray.800",
                    }
                  : {}
              }
            />
            <Input {...input} color="white" />;
            <IconButton
              icon={<FaCaretRight />}
              onClick={() => input.onChange(Number(input.value) + 1)}
              disabled={Number(input.value) >= 5 || points >= 5}
              variant="ghost"
              color={isActive ? "white" : "gray.800"}
              size="sm"
              _hover={
                isActive
                  ? {
                      color: "gray.800",
                    }
                  : {}
              }
            />
          </Flex>
        </GridItem>
      </Grid>
    </VStack>
  );
};

export default PointsBox;
