import { ChangeEvent } from "react";
import { rickAndMortyCharactersState } from "store/rick-and-morty-characters";
import { useAppSelector } from "hooks/redux-hooks";
import { useQueryParams } from "features/rick-and-morty-characters/hooks/use-query-params";
import { capitalizeFirstLetter } from "features/rick-and-morty-characters/helpers/capitalize-first-letter";
import { Species, QueryParamKeys } from "features/rick-and-morty-characters/enums";
import { Select } from "./index.styled";

const OPTIONS = Object.values(Species);

export const DropdownSelect = () => {
  const { isLoading } = useAppSelector(rickAndMortyCharactersState);
  const { queryParams, updateFewQueryParams } = useQueryParams();

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    updateFewQueryParams([
      { key: QueryParamKeys.SPECIES, value },
      { key: QueryParamKeys.PAGE, value: "1" },
    ]);
  };

  return (
    <Select
      disabled={isLoading}
      className="shadow-none"
      value={queryParams[QueryParamKeys.SPECIES]}
      onChange={onChange}
    >
      {OPTIONS.map((option) => {
        const label = option ? capitalizeFirstLetter(option) : "Species";
        return (
          <option key={option} value={option}>
            {label}
          </option>
        );
      })}
    </Select>
  );
};
