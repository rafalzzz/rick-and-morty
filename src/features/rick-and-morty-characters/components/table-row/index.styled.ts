import styled from "styled-components";

export const StyledRow = styled.tr<{ isDead: boolean }>`
  border-bottom: 1px solid #e5eaf0;
  background-color: ${({ isDead }) => (isDead ? "#F6F8FA" : "fff")};
`;

export const NameContainer = styled.div`
  width: 100%;

  p:first-child {
    margin: 0px;
    color: #1a2328;
    font-weight: 500;
  }

  p:nth-child(even) {
    margin: 0px;
    color: ${(props) => props.theme.fontColors.basic};
    font-weight: 400;
  }
`;

export const ImageContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  -webkit-box-shadow: -6px 11px 19px -10px rgba(66, 68, 90, 1);
  -moz-box-shadow: -6px 11px 19px -10px rgba(66, 68, 90, 1);
  box-shadow: -6px 11px 19px -10px rgba(66, 68, 90, 1);
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 15px;
`;

export const CellContent = styled.div`
  display: flex;
  height: 40px;
  align-items: center;

  p {
    display: flex;
    align-items: center;
    margin: 0;
    margin-left: 10px;
  }
`;