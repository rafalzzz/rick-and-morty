import { Form } from "react-bootstrap";
import { rickAndMortyCharactersState } from "store/rick-and-morty-characters";
import { useAppSelector } from "hooks/redux-hooks";
import { useAllRowsSelection } from "features/rick-and-morty-characters/hooks/use-all-rows-selection";
import { TableRow } from "../table-row";
import { StyledTable } from "./index.styled";

const COLUMNS = ["Name", "Avatar", "Origin", "Gender", "Status"];

export const CharactersTable = () => {
  const { isSelected, onChange } = useAllRowsSelection();
  const { isLoading, characters } = useAppSelector(rickAndMortyCharactersState);

  return (
    <StyledTable isLoading={isLoading} hover>
      <thead className={isLoading ? "loading-animation" : ""}>
        <tr>
          <th>
            <Form.Check type={"checkbox"} checked={isSelected} onChange={onChange} />
          </th>
          {COLUMNS.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody className={isLoading ? "loading-animation" : ""}>
        {characters.map((character) => (
          <TableRow key={character.id} character={character} />
        ))}
      </tbody>
    </StyledTable>
  );
};
