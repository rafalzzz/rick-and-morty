import { useState, useRef, FormEvent, ChangeEvent } from "react";
import { useQueryParams } from "features/rick-and-morty-characters/hooks/use-query-params";
import { QueryParamKeys } from "features/rick-and-morty-characters/enums";
import { ReactComponent as Loupe } from "assets/svg/loupe.svg";
import * as Styled from "./index.styled";

export const Search = () => {
  const { queryParams, updateSingleQueryParam } = useQueryParams();
  const [basic, setInputValue] = useState(queryParams[QueryParamKeys.NAME]);
  const ref = useRef<HTMLInputElement | null>(null);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    updateSingleQueryParam(QueryParamKeys.NAME, basic ?? "");
    ref.current?.blur();
  };

  return (
    <Styled.SearchForm onSubmit={onSubmit}>
      <Styled.Input
        ref={ref}
        onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) => setInputValue(value)}
        value={basic}
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
