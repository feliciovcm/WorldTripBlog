import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";

export const FamousCitiesCard = () => {
  return (
    <Box mt="20">
      <Heading size="xl" fontWeight={500} mb="10">
        Cidades +100
      </Heading>
      <SimpleGrid
        flex="1"
        gap="12"
        minChildWidth="250px"
        maxChildWidth="300px"
        mb="8"
      >
        <Box background="blue.300"> Teste</Box>
        <Box background="red.300">Teste</Box>
        <Box background="yellow.300">Teste</Box>
        <Box background="green.300">Teste</Box>
        <Box background="pink.300">Teste</Box>
      </SimpleGrid>
    </Box>
  );
};
