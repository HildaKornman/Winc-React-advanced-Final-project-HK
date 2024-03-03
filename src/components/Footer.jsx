import { Box, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <>
      <Box backgroundColor={"gray.800"} mt={4}>
        <Text
          textAlign={"center"}
          fontWeight={"semibold"}
          fontSize={"lg"}
          color={"gray.200"}
          pb={1}
        >
          Enjoy your events
        </Text>
      </Box>
    </>
  );
};