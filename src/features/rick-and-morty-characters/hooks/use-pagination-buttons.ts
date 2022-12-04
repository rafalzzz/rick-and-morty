import { useMemo } from "react";

export const usePaginationButtons = (lastPage: number) => {
  const paginationButtons = useMemo(() => {
    if (lastPage <= 10) {
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
