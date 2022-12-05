import styled from "styled-components";
import { Form } from "react-bootstrap";

export const Select = styled(Form.Select)`
  width: 140px;
  border: ${(props) => props.theme.border.basic};
  border-radius: 5px;
  padding: 9px 11px;
  font-size: 0.9rem;
  font-weight: 400;
  color: ${(props) => props.theme.fontColors.basic};

  :focus {
    border: ${(props) => props.theme.border.basic};
  }

  :disabled {
    background-color: #fff;
  }
`;
