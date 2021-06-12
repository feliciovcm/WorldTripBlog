import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y } from "swiper/core";
import { Box, Image, Text } from "@chakra-ui/react";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

const Carousel = () => {
  return (
    <Box h={450} w="100%" maxWidth={1240} mx="auto" mb="10">
      <Swiper pagination={true} navigation={true}>
        <SwiperSlide>
          <Image src="ContinentImage.png" alt="Europa" />
          <Box pos="absolute" zIndex="99" color="gray.50">
            <Text fontSize="5xl" fontWeight={700}>
              Europa
            </Text>
            <Text fontSize="2xl" fontWeight={700}>
              O continente mais antigo.
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="northAmerica.jpg" alt="America do Norte" />
          <Box pos="absolute" zIndex="99" color="gray.50">
            <Text fontSize="5xl" fontWeight={700} mb="4">
              America do Norte
            </Text>
            <Text fontSize="2xl" fontWeight={700}>
              O continente mais antigo.
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="SouthAmerica.jpg" alt="America do Sul" />
          <Box pos="absolute" zIndex="99" color="gray.50">
            <Text fontSize="5xl" fontWeight={700} mb="4">
              America do Sul
            </Text>
            <Text fontSize="2xl" fontWeight={700}>
              O continente mais antigo.
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="asia.jpg" alt="Asia" />
          <Box pos="absolute" zIndex="99" color="gray.50">
            <Text fontSize="5xl" fontWeight={700} mb="4">
              Asia
            </Text>
            <Text fontSize="2xl" fontWeight={700}>
              O continente mais antigo.
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="Africa.jpg" alt="Africa" />
          <Box pos="absolute" zIndex="99" color="gray.50">
            <Text fontSize="5xl" fontWeight={700} mb="4">
              Africa
            </Text>
            <Text fontSize="2xl" fontWeight={700}>
              O continente mais antigo.
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="oceania.jpg" alt="Oceania" />
          <Box pos="absolute" zIndex="99" color="gray.50">
            <Text fontSize="5xl" fontWeight={700} mb="4">
              Oceania
            </Text>
            <Text fontSize="2xl" fontWeight={700}>
              O continente mais antigo.
            </Text>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export { Carousel };
