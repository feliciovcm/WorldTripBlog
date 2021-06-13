import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface InfoCardProps {
  infoAmount: string;
  text: string;
}

export const InfoCard = ({ infoAmount, text }: InfoCardProps) => {
  return (
    <Box>
      <Heading size="2xl" color="#FFBA08">
        {infoAmount}
      </Heading>
      <Text fontSize="2xl" fontWeight={600}>
        {text}
      </Text>
    </Box>
  );
};
