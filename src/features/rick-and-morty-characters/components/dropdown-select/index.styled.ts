import styled from "styled-components";
import { Form } from "react-bootstrap";

export const Select = styled(Form.Select)`
  width: 140px;
  border: ${({ theme }) => theme.border.basic};
  border-radius: 5px;
  padding: 9px 11px;
  font-size: 0.9rem;
  font-weight: 400;
  color: ${({ theme }) => theme.fontColors.secondary};

  :focus {
    border: ${({ theme }) => theme.border.basic};
  }

  :disabled {
    background-color: ${({ theme }) => theme.backgroundColor.white};
  }
`;
