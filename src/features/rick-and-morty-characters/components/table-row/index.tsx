import { useState, useRef } from "react";
import { Form } from "react-bootstrap";
import { CustomTooltip } from "../tooltip";
import { useIsOverflow } from "features/rick-and-morty-characters/hooks/use-is-overflow";
import { getStatusIcon } from "features/rick-and-morty-characters/helpers/get-status-icon";
import { Status } from "features/rick-and-morty-characters/enums";
import { TransformedResult } from "features/rick-and-morty-characters/types";
import {
  StyledRow,
  NameContainer,
  Image,
  ImageContainer,
  CellContent,
  TextWrapper,
} from "./index.styled";

type TableRowProps = {
  character: TransformedResult;
};

export const TableRow = ({ character }: TableRowProps) => {
  const nameTooltipRef = useRef<HTMLSpanElement | null>(null);
  const originTooltipRef = useRef<HTMLSpanElement | null>(null);

  const showNameTooltip = useIsOverflow<HTMLSpanElement>(nameTooltipRef);
  const showOriginTooltip = useIsOverflow<HTMLSpanElement>(originTooltipRef);

  return (
    <StyledRow isDead={character.status === Status.DEAD}>
      <td>
        <Form.Check type={"checkbox"} />
      </td>
      <td>
        <NameContainer>
          <p>
            <CustomTooltip
              id={`origin-${character.id}`}
              tooltipText={character.name}
              show={showNameTooltip}
            >
              <TextWrapper ref={nameTooltipRef}>{character.name}</TextWrapper>
            </CustomTooltip>
          </p>
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
          <CustomTooltip
            id={`origin-${character.id}`}
            tooltipText={character.origin.name}
            show={showOriginTooltip}
          >
            <TextWrapper ref={originTooltipRef}>{character.origin.name}</TextWrapper>
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
