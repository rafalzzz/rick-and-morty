import { useState, useRef, FormEvent, ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { QueryParamKeys } from "features/rick-and-morty-characters/enums";
import { ReactComponent as Loupe } from "assets/svg/loupe.svg";
import * as Styled from "./index.styled";

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get(QueryParamKeys.NAME));
  const ref = useRef<HTMLInputElement | null>(null);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!inputValue && searchParams.has(QueryParamKeys.NAME)) {
      searchParams.delete(QueryParamKeys.NAME);
    }

    if (inputValue) {
      searchParams.set(String(QueryParamKeys.NAME), inputValue);
      setSearchParams(searchParams);
      ref.current?.blur();
    }

    setSearchParams(searchParams);
  };

  return (
    <Styled.SearchForm onSubmit={onSubmit}>
      <Styled.Input
        ref={ref}
        onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) => setInputValue(value)}
        value={inputValue}
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
