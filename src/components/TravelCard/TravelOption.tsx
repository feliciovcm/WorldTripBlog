import { Box, Image, Text } from "@chakra-ui/react";

interface TravelOptionProps {
  imageURL: string;
  title: string;
}

const TravelOption = ({ imageURL, title }: TravelOptionProps) => {
  return (
    <Box align='center'>
      <Image src={imageURL} alt={title} mb='6'/>
      <Text fontSize='2xl' fontWeight={600}>{title}</Text>
    </Box>
  );
};

export { TravelOption };