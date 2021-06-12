import { Box, Flex, Text, Heading, Image, HStack } from "@chakra-ui/react";
import React from "react";

const Banner = () => {
  return (
    <HStack
      backgroundImage="url(Background.png)"
      h={335}
      width="100%"
      maxWidth={1440}
      mx="auto"
      pos='relative'
    >
      <Flex direction="column" h="100%">
        <Box mb="5" mt="20" ml="36">
          <Heading
            size="xl"
            color="gray.50"
            fontWeight={500}
            w={426}
            lineHeight="base"
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Heading>
        </Box>
        <Box w={524} mb="auto" ml="36">
          <Text color="gray.400" fontSize="xl" lineHeight="8">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
      </Flex>
      <Image
        src="Airplane.svg"
        alt="Airplane"
        transform="rotate(3deg)"
        w={417}
        pos='absolute'
        right={140}
        top={76}
      />
    </HStack>
  );
};

export { Banner };
