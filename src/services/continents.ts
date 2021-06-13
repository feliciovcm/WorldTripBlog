import { api } from "./api";

interface resProps {
  data: {
    continents: {
      id: number;
      title: string;
      subtitle: string;
      imageURL: string;
    };
  };
}

export const fetchData = async () => {
  const response = await api
    .get("/api/continents")
    .then((res: resProps) => res.data)
    .catch((err) => err);

  return response;
};

export const fetchCities = async (path) => {
  const response = await api
    .get(`${path}/api/cities`)
    .then((res) => res.data)
    .catch((err) => err);

  return response;
};
