import styled from "styled-components";
import { Form, Button } from "react-bootstrap";

export const SearchForm = styled(Form)`
  display: flex;
  padding: 0;
  margin: 0;
  width: 140px;
  border: ${(props) => props.theme.border.basic};
  border-radius: 5px;
`;

export const Input = styled(Form.Control)`
  padding: 9px 11px;
  font-size: 0.9rem;
  font-weight: 400;
  border: none;
  color: ${(props) => props.theme.fontColors.basic};

  ::placeholder,
  :-ms-input-placeholder,
  ::-ms-input-placeholder {
    color: ${(props) => props.theme.fontColors.placeholder};
  }

  :focus {
    color: ${(props) => props.theme.fontColors.basic};
  }

  :disabled {
    background-color: #fff;
  }
`;

export const SubmitButton = styled(Button)<{ isLoading: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #fff;
  pointer-events: ${({ isLoading }) => (isLoading ? "none" : "auto")};

  :hover {
    background-color: ${(props) => props.theme.colors.hoverBackgroundColor};
  }
`;
