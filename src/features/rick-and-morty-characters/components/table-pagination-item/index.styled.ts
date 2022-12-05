import styled from "styled-components";

export const PaginationItem = styled.li`
  list-style-type: none;

  button {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.backgroundColor.white};
    border: ${({ theme }) => theme.border.basic};
    border-radius: 5px;
    color: ${({ theme }) => theme.fontColors.secondary}
    font-size: 0.9rem;
    -webkit-box-shadow: ${({ theme }) => theme.shadows.paginationItem};
    -moz-box-shadow: ${({ theme }) => theme.shadows.paginationItem};
    box-shadow: ${({ theme }) => theme.shadows.paginationItem};

    :hover {
      background-color: ${({ theme }) => theme.backgroundColor.paginationItemHover};
      cursor: pointer;
    }

    :disabled {
      color: ${({ theme }) => theme.fontColors.secondary};
      background-color: ${({ theme }) => theme.backgroundColor.white};
      cursor: default;
      opacity: 0.5;
    }
  }
`;
