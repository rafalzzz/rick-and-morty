import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux-hooks";
import {
  removeSelection,
  setSelection,
  rickAndMortyCharactersState,
} from "store/rick-and-morty-characters";

type UseRowSelectionState = {
  isSelected: boolean;
  onChange: () => void;
};

export const useRowSelection = (characterId: number): UseRowSelectionState => {
  const { selection } = useAppSelector(rickAndMortyCharactersState);
  const dispatch = useAppDispatch();

  const isSelected = selection.includes(characterId);

  const onChange = useCallback(() => {
    if (isSelected) {
      dispatch(removeSelection(characterId));
      return;
    }

    dispatch(setSelection(characterId));
  }, [characterId, dispatch, isSelected]);

  return useMemo(() => ({ isSelected, onChange }), [isSelected, onChange]);
};
