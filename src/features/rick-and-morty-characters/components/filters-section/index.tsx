import { SearchInput } from "../search-input";
import { DropdownSelect } from "../dropdown-select";
import * as Styled from "./index.styled";

export const FiltersSection = () => (
  <Styled.Wrapper>
    <SearchInput />
    <DropdownSelect />
  </Styled.Wrapper>
);
