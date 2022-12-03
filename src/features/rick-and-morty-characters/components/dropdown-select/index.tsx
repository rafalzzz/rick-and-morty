import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { useDropdownSelectValue } from "features/rick-and-morty-characters/hooks/use-dropdown-select-value";
import { capitalizeFirstLetter } from "features/rick-and-morty-characters/helpers/capitalize-first-letter";
import { Species, QueryParamKeys } from "features/rick-and-morty-characters/enums";
import { Select } from "./index.styled";

const OPTIONS = Object.values(Species);

export const DropdownSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = useDropdownSelectValue();

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (!value) {
      searchParams.delete(QueryParamKeys.SPECIES);
    }

    if (value) {
      searchParams.set(QueryParamKeys.SPECIES, value);
    }

    setSearchParams(searchParams);
  };

  return (
    <Select className="shadow-none" value={value} onChange={onChange}>
      {OPTIONS.map((option) => {
        const label = option ? capitalizeFirstLetter(option) : "Species";
        return <option value={option}>{label}</option>;
      })}
    </Select>
  );
};
