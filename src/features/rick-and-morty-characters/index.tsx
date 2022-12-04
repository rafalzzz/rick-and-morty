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

  return (
    <ContentWrapper>
      <>
        <Header title={"Characters"} />
        <FiltersSection />
        {isLoading && <Notification text="Loading ..." />}
        {isError && <Notification text="Characters not found." />}
        {!isLoading && !isError && <CharactersTable />}
        <TablePagination />
      </>
    </ContentWrapper>
  );
};
