import { useGetCharactersQuery } from "features/rick-and-morty-characters/api";

export const useGetCharacters = (): any[] => {
  const { data } = useGetCharactersQuery({ page: 1, name: "", species: "" });

  return data;
};
