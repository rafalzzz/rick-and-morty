import { useMemo } from "react";

export const PAGINATION_BUTTONS_AMOUNT = 13;

export const usePaginationButtons = (lastPage: number) => {
  const paginationButtons = useMemo(() => {
    if (lastPage <= PAGINATION_BUTTONS_AMOUNT) {
      return {
        firstArray: Array.from({ length: lastPage }, (_, i) => i + 1),
        secondArray: [],
      };
    }

    return {
      firstArray: [1, 2, 3],
      secondArray: [lastPage - 2, lastPage - 1, lastPage],
    };
  }, [lastPage]);

  return paginationButtons;
};
