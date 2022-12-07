import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "hooks/redux-hooks";
import { rickAndMortyCharactersState } from "store/rick-and-morty-characters";
import { QueryParamKeys, Species } from "../enums";
import { QueryParams } from "../types";

export const MAX_CHARACTERS = 40;

const OPTIONS = Object.values(Species);

type UseQueryParamsState = {
  queryParams: QueryParams;
  updateSingleQueryParam: (key: QueryParamKeys, value: string) => void;
  updateFewQueryParams: (
    params: {
      key: QueryParamKeys;
      value: string;
    }[]
  ) => void;
};

export const useQueryParams = (): UseQueryParamsState => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { lastPage } = useAppSelector(rickAndMortyCharactersState);

  const updateSingleQueryParam = useCallback(
    (key: QueryParamKeys, value: string) => {
      if (!value && searchParams.has(key)) {
        searchParams.delete(key);
      }

      if (value) {
        searchParams.set(key, value);
      }

      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );

  const updateFewQueryParams = useCallback(
    (params: { key: QueryParamKeys; value: string }[]) => {
      params.forEach(({ key, value }) => {
        searchParams.set(key, value);
      });

      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );

  const getSingleQueryParam = (key: QueryParamKeys) => searchParams.get(key);

  const speciesValue = getSingleQueryParam(QueryParamKeys.SPECIES);
  const species = OPTIONS.includes(speciesValue as Species) ? speciesValue : "";

  const pageValue = Number(getSingleQueryParam(QueryParamKeys.PAGE));
  const isPageValid = useMemo(() => {
    if (!!lastPage) {
      return !!pageValue && pageValue > 0 && pageValue <= lastPage;
    }

    return true;
  }, [lastPage, pageValue]);

  const page = isPageValid ? String(pageValue) : "1";

  const isNameValid =
    typeof getSingleQueryParam(QueryParamKeys.NAME) === "string" &&
    (getSingleQueryParam(QueryParamKeys.NAME) ?? "").length <= MAX_CHARACTERS;
  const name = isNameValid ? getSingleQueryParam(QueryParamKeys.NAME) : null;

  const queryParams = useMemo(() => ({ name, species, page }), [name, page, species]);

  return {
    queryParams,
    updateSingleQueryParam,
    updateFewQueryParams,
  };
};
