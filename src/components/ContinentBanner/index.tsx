import { Box, Image, Heading } from "@chakra-ui/react";
import React from "react";

interface ContinentBannerProps {
  imageURL: string;
  title: string;
}

export const ContinentBanner = ({ imageURL, title }: ContinentBannerProps) => {
  return (
    <Box maxWidth={1440} w="100%" mx="auto" pos="relative">
      <Image src={imageURL} alt={title} />
      <Heading
        pos="absolute"
        bottom="14"
        left={140}
        color="gray.50"
        fontWeight={600}
      >
        {title}
      </Heading>
    </Box>
  );
};
