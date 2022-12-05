import { useMemo } from "react";
import { rickAndMortyCharactersState } from "store/rick-and-morty-characters";
import { useAppSelector } from "hooks/redux-hooks";
import { useQueryParams } from "./use-query-params";
import { QueryParamKeys } from "../enums";

type UsePaginationMiddleSectionState = {
  isLoading: boolean;
  currentPage: number;
  middleButtonsKeys: number[];
  displayOnlyPaginationEllipsis: boolean;
  displayPaginationEllipsisBeforeButtons: boolean;
  displayPaginationEllipsisAfterButtons: boolean;
  updateSingleQueryParam: (key: QueryParamKeys, value: string) => void;
};

export const usePaginationMiddleSection = (): UsePaginationMiddleSectionState => {
  const { queryParams, updateSingleQueryParam } = useQueryParams();
  const { isLoading, lastPage } = useAppSelector(rickAndMortyCharactersState);
  const currentPage = Number(queryParams[QueryParamKeys.PAGE]);

  const displayOnlyPaginationEllipsis = currentPage < 2 || currentPage > lastPage - 1;
  const displayPaginationEllipsisBeforeButtons = currentPage > 6;
  const displayPaginationEllipsisAfterButtons = currentPage < lastPage - 5;

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

  return {
    isLoading,
    currentPage,
    middleButtonsKeys,
    displayOnlyPaginationEllipsis,
    displayPaginationEllipsisBeforeButtons,
    displayPaginationEllipsisAfterButtons,
    updateSingleQueryParam,
  };
};
