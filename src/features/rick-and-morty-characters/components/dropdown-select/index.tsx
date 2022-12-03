import { ChangeEvent } from "react";
import { useQueryParams } from "features/rick-and-morty-characters/hooks/use-query-params";
import { capitalizeFirstLetter } from "features/rick-and-morty-characters/helpers/capitalize-first-letter";
import { Species, QueryParamKeys } from "features/rick-and-morty-characters/enums";
import { Select } from "./index.styled";

const OPTIONS = Object.values(Species);

export const DropdownSelect = () => {
  const { queryParams, updateQueryParam } = useQueryParams();

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    updateQueryParam(QueryParamKeys.SPECIES, value);
  };

  return (
    <Select className="shadow-none" value={queryParams[QueryParamKeys.SPECIES]} onChange={onChange}>
      {OPTIONS.map((option) => {
        const label = option ? capitalizeFirstLetter(option) : "Species";
        return <option value={option}>{label}</option>;
      })}
    </Select>
  );
};
