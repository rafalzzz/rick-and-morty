import styled from "styled-components";

export const PaginationItem = styled.li`
  list-style-type: none;

  button {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.backgroundColor.white};
    border: ${(props) => props.theme.border.basic};
    border-radius: 5px;
    color: ${(props) => props.theme.fontColors.secondary}
    font-size: 0.9rem;
    -webkit-box-shadow: ${(props) => props.theme.shadows.paginationItem};
    -moz-box-shadow: ${(props) => props.theme.shadows.paginationItem};
    box-shadow: ${(props) => props.theme.shadows.paginationItem};

    :hover {
      background-color: ${(props) => props.theme.backgroundColor.paginationItemHover};
      cursor: pointer;
    }

    :disabled {
      color: ${(props) => props.theme.fontColors.secondary};
      background-color: ${(props) => props.theme.backgroundColor.white};
      cursor: default;
      opacity: 0.5;
    }
  }
`;
