import { tableState } from "store/table";
import { useAppSelector } from "hooks/redux-hooks";
import { useGetCharacters } from "./hooks/use-get-characters";
import { ContentWrapper } from "./components/content-wrapper";
import { Header } from "./components/header";
import { FiltersSection } from "./components/filters-section";
import { Notification } from "./components/notification";
import { CharactersTable } from "./components/characters-table";
import { TablePagination } from "./components/table-pagination";

import "bootstrap/dist/css/bootstrap.min.css";

export const RickAndMortyCharacters = () => {
  const { isLoading, isError } = useGetCharacters();
  const { characters } = useAppSelector(tableState);

  return (
    <ContentWrapper>
      <>
        <Header title={"Characters"} />
        <FiltersSection />
        {isLoading && !characters.length && <Notification text="Loading ..." />}
        {isError && <Notification text="Characters not found." />}
        {characters.length && <CharactersTable />}
        <TablePagination />
      </>
    </ContentWrapper>
  );
};
