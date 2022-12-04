import styled from "styled-components";
import { Table } from "react-bootstrap";

export const StyledTable = styled(Table)`
  background-color: #fff;
  -webkit-box-shadow: -2px 5px 43px -25px rgba(66, 68, 90, 1);
  -moz-box-shadow: -2px 5px 43px -25px rgba(66, 68, 90, 1);
  box-shadow: -2px 5px 43px -25px rgba(66, 68, 90, 1);

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
    width: 250px;
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
