import { Search } from "../search-input";
import { DropdownSelect } from "../dropdown-select";
import * as Styled from "./index.styled";

export const FiltersSection = () => {
  return (
    <Styled.Wrapper>
      <Search />
      <DropdownSelect />
    </Styled.Wrapper>
  );
};
