import { tableState } from "store/table";
import { useAppSelector } from "hooks/redux-hooks";
import { useQueryParams } from "features/rick-and-morty-characters/hooks/use-query-params";
import { usePaginationButtons } from "features/rick-and-morty-characters/hooks/use-pagination-buttons";
import { TablePaginationItem } from "../table-pagination-item";
import { QueryParamKeys } from "features/rick-and-morty-characters/enums";
import { ReactComponent as PrevPage } from "assets/svg/prev-page.svg";
import { ReactComponent as NextPage } from "assets/svg/next-page.svg";
import { PaginationContainer, ButtonsContainer } from "./index.styled";
import { TablePaginationMiddleSection } from "../table-pagination-middle-section";

export const TablePagination = () => {
  const { lastPage } = useAppSelector(tableState);
  const { queryParams, updateSingleQueryParam } = useQueryParams();
  const buttons = usePaginationButtons(lastPage);

  const currentPage = Number(queryParams[QueryParamKeys.PAGE]);

  return (
    <PaginationContainer>
      <ButtonsContainer>
        <TablePaginationItem
          disabled={currentPage === 1}
          onClick={() => updateSingleQueryParam(QueryParamKeys.PAGE, String(currentPage - 1))}
        >
          <PrevPage />
        </TablePaginationItem>
        {buttons.firstArray.map((key) => (
          <TablePaginationItem
            key={key}
            disabled={currentPage === key}
            onClick={() => updateSingleQueryParam(QueryParamKeys.PAGE, String(key))}
          >
            <>{key}</>
          </TablePaginationItem>
        ))}
        {lastPage > 10 && (
          <TablePaginationMiddleSection
            currentPage={currentPage}
            lastPage={lastPage}
            updateSingleQueryParam={updateSingleQueryParam}
          />
        )}

        {buttons.secondArray.map((key) => (
          <TablePaginationItem
            key={key}
            disabled={currentPage === key}
            onClick={() => updateSingleQueryParam(QueryParamKeys.PAGE, String(key))}
          >
            <>{key}</>
          </TablePaginationItem>
        ))}
        <TablePaginationItem
          disabled={currentPage === lastPage}
          onClick={() => updateSingleQueryParam(QueryParamKeys.PAGE, String(currentPage + 1))}
        >
          <NextPage />
        </TablePaginationItem>
      </ButtonsContainer>
    </PaginationContainer>
  );
};
