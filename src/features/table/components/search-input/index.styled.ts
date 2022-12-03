import styled from "styled-components";
import { Form, Button } from "react-bootstrap";

export const SearchForm = styled(Form)`
  display: flex;
  padding: 0;
  margin: 0;
  width: 140px;
  border: 1px solid #bac6d8;
  border-radius: 5px;
`;

export const Input = styled(Form.Control)`
  padding: 9px 11px;
  font-size: 0.9rem;
  font-weight: 400;
  border: none;
  color: #484f53;

  ::placeholder,
  :-ms-input-placeholder,
  ::-ms-input-placeholder {
    color: #8c9193;
  }
`;

export const SubmitButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;

  :hover {
    background-color: #8c919310;
  }
`;
