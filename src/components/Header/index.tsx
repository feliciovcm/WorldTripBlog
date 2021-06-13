import React from "react";
import { Flex, Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex width="100%" maxWidth={1440} h="24" mx="auto" justify='center' align='center'>
      <Image src="/Logo.png" alt="Logo" />
    </Flex>
  );
};

export { Header };
