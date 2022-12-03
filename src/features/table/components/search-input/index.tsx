import React, { useRef, FormEvent } from "react";
import { useAppDispatch } from "hooks/redux-hooks";
import { setName } from "store/table";

import { ReactComponent as Loupe } from "assets/svg/loupe.svg";
import * as Styled from "./index.styled";

export const SearchInput = () => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (inputRef.current?.value) {
      dispatch(setName(inputRef.current.value));
      inputRef.current.blur();
    }
  };

  return (
    <Styled.SearchForm onSubmit={onSubmit}>
      <Styled.Input ref={inputRef} type="text" className="shadow-none" placeholder="Search" />
      <Styled.SubmitButton type="submit">
        <Loupe />
      </Styled.SubmitButton>
    </Styled.SearchForm>
  );
};
