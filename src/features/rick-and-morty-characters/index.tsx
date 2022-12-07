import { rickAndMortyCharactersState } from "store/rick-and-morty-characters";
import { useAppSelector } from "hooks/redux-hooks";
import { useCharacters } from "./hooks/use-get-characters";
import { ContentWrapper } from "./components/content-wrapper";
import { Header } from "./components/header";
import { FiltersSection } from "./components/filters-section";
import { Notification } from "./components/notification";
import { CharactersTable } from "./components/characters-table";
import { TablePagination } from "./components/table-pagination";

import "bootstrap/dist/css/bootstrap.min.css";

export const RickAndMortyCharacters = () => {
  const { isError, error } = useCharacters();
  const { isLoading, characters, lastPage } = useAppSelector(rickAndMortyCharactersState);
  const isNotFoundError = (error as { status: number } | null)?.status === 404;
  const errorText = isNotFoundError
    ? "Characters not found."
    : "Something went wrong, please try again.";

  return (
    <ContentWrapper>
      <>
        <Header title={"Characters"} />
        <FiltersSection />
        {!isError && isLoading && !characters.length && <Notification text="Loading ..." />}
        {isError && <Notification text={errorText} />}
        {!isError && !!characters.length && <CharactersTable />}
        {!isError && lastPage > 1 && <TablePagination />}
      </>
    </ContentWrapper>
  );
};
