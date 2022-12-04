import { useMemo } from "react";
import { TablePaginationItem } from "../table-pagination-item";
import { TablePaginationEllipsis } from "../table-pagination-item-ellipsis";
import { QueryParamKeys } from "features/rick-and-morty-characters/enums";

type TablePaginationMiddleSectionProps = {
  currentPage: number;
  lastPage: number;
  updateSingleQueryParam: (key: QueryParamKeys, value: string) => void;
};

export const TablePaginationMiddleSection = ({
  currentPage,
  lastPage,
  updateSingleQueryParam,
}: TablePaginationMiddleSectionProps) => {
  const middleButtonsKeys = useMemo(() => {
    let keys = [];

    switch (currentPage) {
      case 2:
        keys = [4];
        break;
      case 3:
        keys = [4, 5];
        break;
      case 4:
        keys = [4, 5, 6];
        break;
      case 5:
        keys = [4, 5, 6, 7];
        break;
      case lastPage - 1:
        keys = [lastPage - 3];
        break;
      case lastPage - 2:
        keys = [lastPage - 3, lastPage - 4];
        break;
      case lastPage - 3:
        keys = [lastPage - 5, lastPage - 4, lastPage - 3];
        break;
      case lastPage - 4:
        keys = [lastPage - 6, lastPage - 5, lastPage - 4, lastPage - 3];
        break;
      default:
        keys = [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
        break;
    }

    return keys;
  }, [currentPage, lastPage]);

  if (currentPage < 2 || currentPage > lastPage - 1) {
    return <TablePaginationEllipsis />;
  }

  return (
    <>
      {currentPage > 6 && <TablePaginationEllipsis />}
      {middleButtonsKeys.map((key) => (
        <TablePaginationItem
          key={key}
          disabled={currentPage === key}
          onClick={() => updateSingleQueryParam(QueryParamKeys.PAGE, String(key))}
        >
          <>{key}</>
        </TablePaginationItem>
      ))}
      {currentPage < lastPage - 5 && <TablePaginationEllipsis />}
    </>
  );
};
