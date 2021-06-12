import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { TravelOption } from "./TravelOption";

const TravelCard = () => {
  return (
    <HStack mt='28' w='100%' maxWidth={1160} mx='auto' spacing='auto'>
        <TravelOption imageURL='cocktail.svg' title='vida noturna'/>
        <TravelOption imageURL='surf.svg' title='praia'/>
        <TravelOption imageURL='building.svg' title='moderno'/>
        <TravelOption imageURL='museum.svg' title='clássico'/>
        <TravelOption imageURL='earth.svg' title='e mais...'/>
      </HStack>
  );
};

export { TravelCard };
