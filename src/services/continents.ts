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

export const fetchData = async () =>
  await api
    .get("/continents")
    .then((res: resProps) => res.data)
    .catch((err) => err);
