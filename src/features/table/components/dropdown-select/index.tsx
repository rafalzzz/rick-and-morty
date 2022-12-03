import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux-hooks";
import { capitalizeFirstLetter } from "features/table/helpers/capitalize-first-letter";
import { setSpecies, tableState } from "store/table";
import { Species } from "features/table/enums/species";
import { Select } from "./index.styled";

const OPTIONS = Object.values(Species);

export const DropdownSelect = () => {
  const dispatch = useAppDispatch();
  const { species } = useAppSelector(tableState);

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSpecies(value as Species));
  };

  return (
    <Select className="shadow-none" value={species} onChange={onChange}>
      {OPTIONS.map((option) => {
        const label = option ? capitalizeFirstLetter(option) : "Species";
        return <option value={option}>{label}</option>;
      })}
    </Select>
  );
};
