import styled from "styled-components";
import { Form, Button } from "react-bootstrap";

export const SearchForm = styled(Form)`
  display: flex;
  padding: 0;
  margin: 0;
  width: 140px;
  border: ${({ theme }) => theme.border.basic};
  border-radius: 5px;
`;

export const Input = styled(Form.Control)`
  padding: 9px 11px;
  font-size: 0.9rem;
  font-weight: 400;
  border: none;
  color: ${({ theme }) => theme.fontColors.secondary};

  ::placeholder,
  :-ms-input-placeholder,
  ::-ms-input-placeholder {
    color: ${({ theme }) => theme.fontColors.placeholder};
  }

  :focus {
    color: ${({ theme }) => theme.fontColors.secondary};
  }

  :disabled {
    background-color: ${({ theme }) => theme.backgroundColor.white};
  }
`;

export const SubmitButton = styled(Button)<{ isLoading: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${({ theme }) => theme.backgroundColor.white};
  pointer-events: ${({ isLoading }) => (isLoading ? "none" : "auto")};

  :hover {
    background-color: ${({ theme }) => theme.backgroundColor.submitButtonHover};
  }
`;
