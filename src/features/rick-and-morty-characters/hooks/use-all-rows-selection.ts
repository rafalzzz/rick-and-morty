import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux-hooks";
import { setAllSelections, rickAndMortyCharactersState } from "store/rick-and-morty-characters";

type UseAllRowsSelectionState = {
  isSelected: boolean;
  onChange: () => void;
};

export const useAllRowsSelection = (): UseAllRowsSelectionState => {
  const dispatch = useAppDispatch();
  const { selection, characters } = useAppSelector(rickAndMortyCharactersState);

  const charactersIds = characters.map(({ id }) => id);
  const isSelected = charactersIds.every((id) => selection.includes(id));

  const onChange = useCallback(() => {
    if (isSelected) {
      const newSelection = selection.filter((id) => !charactersIds.includes(id));
      dispatch(setAllSelections(newSelection));
      return;
    }

    const notSelectedRows = charactersIds.filter((id) => !selection.includes(id));
    const newSelection = [...selection, ...notSelectedRows];
    dispatch(setAllSelections(newSelection));
  }, [charactersIds, isSelected, selection, dispatch]);

  return useMemo(() => ({ isSelected, onChange }), [isSelected, onChange]);
};
