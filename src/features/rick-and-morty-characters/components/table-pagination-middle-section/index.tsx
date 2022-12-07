import { usePaginationMiddleSection } from "features/rick-and-morty-characters/hooks/use-pagination-middle-section-keys";
import { TablePaginationItem } from "../table-pagination-item";
import { TablePaginationEllipsis } from "../table-pagination-item-ellipsis";
import { QueryParamKeys } from "features/rick-and-morty-characters/enums";

export const TablePaginationMiddleSection = () => {
  const {
    isLoading,
    currentPage,
    lastPage,
    middleButtonsKeys,
    displayPaginationEllipsisBeforeButtons,
    displayPaginationEllipsisAfterButtons,
    updateSingleQueryParam,
  } = usePaginationMiddleSection();

  return (
    <>
      {displayPaginationEllipsisBeforeButtons && <TablePaginationEllipsis />}
      {middleButtonsKeys.map((key) => (
        <TablePaginationItem
          key={key}
          disabled={currentPage === key || isLoading}
          onClick={() => updateSingleQueryParam(QueryParamKeys.PAGE, String(key))}
        >
          <>{key}</>
        </TablePaginationItem>
      ))}
      {displayPaginationEllipsisAfterButtons && <TablePaginationEllipsis />}
    </>
  );
};
