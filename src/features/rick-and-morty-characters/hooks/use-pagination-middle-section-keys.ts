import { useMemo } from "react";
import { rickAndMortyCharactersState } from "store/rick-and-morty-characters";
import { useAppSelector } from "hooks/redux-hooks";
import { useQueryParams } from "./use-query-params";
import { QueryParamKeys } from "../enums";

type UsePaginationMiddleSectionState = {
  isLoading: boolean;
  currentPage: number;
  lastPage: number;
  middleButtonsKeys: number[];
  displayPaginationEllipsisBeforeButtons: boolean;
  displayPaginationEllipsisAfterButtons: boolean;
  updateSingleQueryParam: (key: QueryParamKeys, value: string) => void;
};

export const usePaginationMiddleSection = (): UsePaginationMiddleSectionState => {
  const { queryParams, updateSingleQueryParam } = useQueryParams();
  const { isLoading, lastPage } = useAppSelector(rickAndMortyCharactersState);
  const currentPage = Number(queryParams[QueryParamKeys.PAGE]);

  const displayPaginationEllipsisBeforeButtons = currentPage > 7;
  const displayPaginationEllipsisAfterButtons = currentPage < lastPage - 6;

  const middleButtonsKeys = useMemo(() => {
    let keys: number[] = [
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
    ];

    if (currentPage < 8) {
      keys = [4, 5, 6, 7, 8, 9];
    }

    if (currentPage > lastPage - 7) {
      keys = [lastPage - 8, lastPage - 7, lastPage - 6, lastPage - 5, lastPage - 4, lastPage - 3];
    }

    return keys;
  }, [currentPage, lastPage]);

  return {
    isLoading,
    currentPage,
    lastPage,
    middleButtonsKeys,
    displayPaginationEllipsisBeforeButtons,
    displayPaginationEllipsisAfterButtons,
    updateSingleQueryParam,
  };
};
