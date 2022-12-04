import styled from "styled-components";
import { Table } from "react-bootstrap";

export const StyledTable = styled(Table)`
  background-color: #fff;
  -webkit-box-shadow: 0px 2px 4px rgba(176, 194, 205, 0.3);
  -moz-box-shadow: 0px 2px 4px rgba(176, 194, 205, 0.3);
  box-shadow: 0px 2px 4px rgba(176, 194, 205, 0.3);

  th:first-child,
  td:first-child {
    width: 20px;
    padding: 12px 24px;
  }

  thead {
    border-bottom: 1px solid #cbd4e2;
  }

  th,
  td {
    width: 21%;
    padding: 12px 24px 12px 0;
  }

  th {
    font-size: 0.9rem;
    color: #484f53;
  }

  td {
    font-size: 1rem;
    color: #1a2328;
  }

  .form-check-input {
    width: 18px;
    height: 18px;
  }
`;
