import { useState, useRef, FormEvent, ChangeEvent } from "react";
import { rickAndMortyCharactersState } from "store/rick-and-morty-characters";
import { useAppSelector } from "hooks/redux-hooks";
import { useQueryParams } from "features/rick-and-morty-characters/hooks/use-query-params";
import { QueryParamKeys } from "features/rick-and-morty-characters/enums";
import { ReactComponent as Loupe } from "assets/svg/loupe.svg";
import * as Styled from "./index.styled";

export const SearchInput = () => {
  const { isLoading } = useAppSelector(rickAndMortyCharactersState);
  const { queryParams, updateFewQueryParams } = useQueryParams();
  const [basic, setInputValue] = useState(queryParams[QueryParamKeys.NAME]);
  const ref = useRef<HTMLInputElement | null>(null);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!isLoading) {
      updateFewQueryParams([
        { key: QueryParamKeys.NAME, value: basic ?? "" },
        { key: QueryParamKeys.PAGE, value: "1" },
      ]);
      ref.current?.blur();
    }
  };

  return (
    <Styled.SearchForm onSubmit={onSubmit}>
      <Styled.Input
        ref={ref}
        onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) => setInputValue(value)}
        value={basic ?? ""}
        disabled={isLoading}
        type="text"
        className="shadow-none"
        placeholder="Search"
      />
      <Styled.SubmitButton type="submit">
        <Loupe />
      </Styled.SubmitButton>
    </Styled.SearchForm>
  );
};
