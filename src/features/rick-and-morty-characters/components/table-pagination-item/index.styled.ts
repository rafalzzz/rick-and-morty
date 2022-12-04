import styled from "styled-components";

export const PaginationItem = styled.li<{ disabled: boolean }>`
  list-style-type: none;

  button {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border: ${(props) => props.theme.border.basic};
    border-radius: 5px;
    font-size: 0.9rem;
    -webkit-box-shadow: 0px 2px 4px rgba(176, 194, 205, 0.3);
    -moz-box-shadow: 0px 2px 4px rgba(176, 194, 205, 0.3);
    box-shadow: 0px 2px 4px rgba(176, 194, 205, 0.3);

    :hover {
      background-color: ${({ disabled }) => (disabled ? "#fff" : "#bac6d820")};
      cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
    }
  }
`;
