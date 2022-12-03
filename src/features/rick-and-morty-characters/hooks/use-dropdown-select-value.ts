import { useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Species, QueryParamKeys } from "features/rick-and-morty-characters/enums";

const OPTIONS = Object.values(Species);

export const useDropdownSelectValue = (): string => {
  const [searchParams, setSearchParams] = useSearchParams();

  const value = useMemo(() => {
    const currentValue = searchParams.get(QueryParamKeys.SPECIES);
    if (!currentValue || !OPTIONS.includes(currentValue as Species)) {
      return "";
    }

    return currentValue;
  }, [searchParams]);

  useEffect(() => {
    if (!value) {
      searchParams.delete(QueryParamKeys.SPECIES);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams, value]);

  return value;
};
