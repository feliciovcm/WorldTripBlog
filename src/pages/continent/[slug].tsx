import { Flex, HStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Header } from "../../components/Header";
import { InfoCard } from "../../components/InfoCard";
import { ContinentBanner } from "../../components/ContinentBanner";
import { ContinentDescription } from "../../components/ContinentDescription";
import { FamousCitiesCard } from "../../components/FamousCitiesCard";
import { useRouter } from "next/router";
import { fetchCities } from "../../services/continents";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    city: Model,
  },

  seeds(server) {
    server.db.loadData({
      cities: [
        {
          id: 1,
          title: "Londres",
          country: "Reino Unido",
          countryIMG: "/cities/uklogo.svg",
          imageURL: "/cities/london.svg",
        },
        {
          id: 2,
          title: "Paris",
          country: "França",
          countryIMG: "/cities/francelogo.svg",
          imageURL: "/cities/paris.svg",
        },
        {
          id: 3,
          title: "Roma",
          country: "itália",
          countryIMG: "/cities/italylogo.svg",
          imageURL: "/cities/rome.svg",
        },
        {
          id: 4,
          title: "Praga",
          country: "República Tcheca",
          countryIMG: "/cities/czeclogo.svg",
          imageURL: "/cities/praga.svg",
        },
        {
          id: 5,
          title: "Amsterdã",
          country: "Holanda",
          countryIMG: "/cities/netherlogo.svg",
          imageURL: "/cities/amsterdam.svg",
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";
    this.get("/cities", () => {
      return this.schema.all("city");
    });
  },
});

export default function Continent() {
  
  

  useEffect(() => {
    const path = '/continent/europe';
    fetchCities(path).then((res) => console.log(res));
  }, []);

  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner imageURL="/EXdXLrZXS9Q.svg" title="Europa" />
      <Flex direction="column" width="100%" maxWidth={1160} mx="auto">
        <HStack spacing={70} mt="20">
          <ContinentDescription />
          <HStack
            w="100%"
            justifyContent="space-between"
            maxWidth={490}
            mx="auto"
            textAlign="center"
          >
            <InfoCard infoAmount="50" text="países" />
            <InfoCard infoAmount="60" text="línguas" />
            <InfoCard infoAmount="27" text="cidades +100" />
          </HStack>
        </HStack>
        <FamousCitiesCard />
      </Flex>
    </Flex>
  );
}
