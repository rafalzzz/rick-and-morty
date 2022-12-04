import { Form } from "react-bootstrap";
import { CustomTooltip } from "../tooltip";
import { getStatusIcon } from "features/rick-and-morty-characters/helpers/get-status-icon";
import { Status } from "features/rick-and-morty-characters/enums";
import { TransformedResult } from "features/rick-and-morty-characters/types";
import { StyledRow, NameContainer, Image, ImageContainer, CellContent } from "./index.styled";

type TableRowProps = {
  character: TransformedResult;
};

export const TableRow = ({ character }: TableRowProps) => {
  return (
    <StyledRow isDead={character.status === Status.DEAD}>
      <td>
        <Form.Check type={"checkbox"} />
      </td>
      <td>
        <NameContainer>
          <p>{character.name}</p>
          <p>{character.species}</p>
        </NameContainer>
      </td>
      <td>
        <ImageContainer>
          <Image src={character.image} alt={character.name} />
        </ImageContainer>
      </td>
      <td>
        <CellContent>
          <CustomTooltip id={`origin-${character.id}`} tooltipText={character.origin.name}>
            <span>{character.origin.name}</span>
          </CustomTooltip>
        </CellContent>
      </td>
      <th>
        <CellContent>{character.gender}</CellContent>
      </th>
      <th>
        <CellContent>
          {getStatusIcon(character.status)}
          <p>{character.status}</p>
        </CellContent>
      </th>
    </StyledRow>
  );
};
