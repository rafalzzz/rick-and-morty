import styled from "styled-components";
import { Form } from "react-bootstrap";

export const Select = styled(Form.Select)`
  width: 140px;
  border: 1px solid #bac6d8;
  border-radius: 5px;
  padding: 9px 11px;
  font-size: 0.9rem;
  font-weight: 400;
  color: #484f53;

  :focus {
    border: 1px solid #bac6d8;
  }
`;
