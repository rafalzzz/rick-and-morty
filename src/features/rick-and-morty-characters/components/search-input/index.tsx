import { useState, useRef, FormEvent, ChangeEvent } from "react";
import { toast } from "react-toastify";
import { rickAndMortyCharactersState } from "store/rick-and-morty-characters";
import { useAppSelector } from "hooks/redux-hooks";
import { useQueryParams } from "features/rick-and-morty-characters/hooks/use-query-params";
import { QueryParamKeys } from "features/rick-and-morty-characters/enums";
import { ReactComponent as Loupe } from "assets/svg/loupe.svg";
import * as Styled from "./index.styled";

const MAX_CHARACTERS = 40;

export const SearchInput = () => {
  const { isLoading } = useAppSelector(rickAndMortyCharactersState);
  const { queryParams, updateFewQueryParams } = useQueryParams();
  const [inputValue, setInputValue] = useState(queryParams[QueryParamKeys.NAME] ?? "");
  const ref = useRef<HTMLInputElement | null>(null);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (inputValue.length > MAX_CHARACTERS) {
      toast.error("Allowed max 40 characters");
      return;
    }

    if (!isLoading) {
      updateFewQueryParams([
        { key: QueryParamKeys.NAME, value: inputValue ?? "" },
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
        value={inputValue ?? ""}
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
