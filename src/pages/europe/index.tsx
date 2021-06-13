import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Header } from "../../components/Header";

export default function EuropePage() {
  return (
    <Flex direction="column">
      <Header />
      <Image
        src="EXdXLrZXS9Q.svg"
        alt="Europa"
        maxWidth={1440}
        w="100%"
        mx="auto"
      />
    </Flex>
  );
}
