import { Flex, Divider } from "@chakra-ui/react";
import React from "react";
import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";
import { TravelCard } from "../components/TravelCard";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <TravelCard />
      <Divider
        orientation="horizontal"
        mt="20"
        w={90}
        mx="auto"
        bg="#47585B"
        h="2px"
      />
      <Carousel />
    </Flex>
  );
}
