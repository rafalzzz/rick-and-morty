import { Form } from "react-bootstrap";
import { useGetCharacters } from "features/rick-and-morty-characters/hooks/use-get-characters";
import { TableRow } from "../table-row";
import { StyledTable } from "./index.styled";

const COLUMNS = ["Name", "Avatar", "Origin", "Gender", "Status"];

export const CharactersTable = () => {
  const characters = useGetCharacters();

  return (
    <StyledTable hover>
      <thead>
        <tr>
          <th>
            <Form.Check type={"checkbox"} />
          </th>
          {COLUMNS.map((column) => (
            <th>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {characters?.results.map((character) => (
          <TableRow character={character} />
        ))}
      </tbody>
    </StyledTable>
  );
};
