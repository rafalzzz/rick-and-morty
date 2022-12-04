import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux-hooks";
import { removeSelection, setSelection, tableState } from "store/table";

type UseRowSelectionState = {
  isSelected: boolean;
  onChange: () => void;
};

export const useRowSelection = (characterId: number): UseRowSelectionState => {
  const { selection } = useAppSelector(tableState);
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
