import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y } from "swiper/core";

// Chakra components
import { Box, Image, Text } from "@chakra-ui/react";

import { fetchData } from "../../services/continents";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

interface continentsData {
  id: number;
  title: string;
  subtitle: string;
  imageURL: string;
}

const Carousel = () => {
  const [continents, setContinents] = useState<continentsData[]>([]);

  useEffect(() => {
    fetchData().then((res) => setContinents(res.continents));
  }, []);

  return (
    <Box h={450} w="100%" maxWidth={1240} mx="auto" mb="10">
      <Swiper pagination={true} navigation={true}>
        {!!continents &&
          continents.map((continent) => {
            return (
              <SwiperSlide key={continent.id}>
                <Image src={continent.imageURL} alt="Europa" />
                <Box pos="absolute" zIndex="99" color="gray.50">
                  <Text fontSize="5xl" fontWeight={700}>
                    {continent.title}
                  </Text>
                  <Text fontSize="2xl" fontWeight={700}>
                    {continent.subtitle}
                  </Text>
                </Box>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Box>
  );
};

export { Carousel };
