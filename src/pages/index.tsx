import { Flex, Divider, Heading } from "@chakra-ui/react";
import React from "react";
import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";
import { TravelCard } from "../components/TravelCard";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    continent: Model,
  },

  seeds(server) {
    server.db.loadData({
      continents: [
        {
          id: 1,
          title: "África",
          subtitle: "Continente abençoado, berço da humanidade.",
          imageURL: "Africa.jpg",
        },
        {
          id: 2,
          title: "América do Norte",
          subtitle: "Venha conhecer o centro da economia mundial.",
          imageURL: "northAmerica.jpg",
        },
        {
          id: 3,
          title: "América do Sul",
          subtitle: "Lugar de alegria radiante e paisagens sedutoras.",
          imageURL: "SouthAmerica.jpg",
        },
        {
          id: 4,
          title: "Ásia",
          subtitle: "Beleza, cultura, disciplina e histório em um só lugar.",
          imageURL: "asia.jpg",
        },
        {
          id: 5,
          title: "Europa",
          subtitle: "O continente mais antigo.",
          imageURL: "ContinentImage.png",
        },
        {
          id: 6,
          title: "Oceânia",
          subtitle:
            "Das praias e barreira de corais às geleiras que vão te deixar de queixo caído. .",
          imageURL: "oceania.jpg",
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";
    this.get("/continents", () => {
      return this.schema.all("continent");
    });
  },
});

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
      <Heading
        size="lg"
        maxWidth={800}
        mx="auto"
        my="14"
        align="center"
        lineHeight="54px"
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Heading>
      <Carousel />
    </Flex>
  );
}
