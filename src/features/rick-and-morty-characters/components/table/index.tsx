import { useGetCharacters } from "features/rick-and-morty-characters/hooks/use-get-characters";

export const Table = () => {
  const characters = useGetCharacters();

  console.log({ characters });

  return <table></table>;
};
