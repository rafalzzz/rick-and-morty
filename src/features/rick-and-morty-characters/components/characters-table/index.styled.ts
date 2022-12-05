import styled, { keyframes } from "styled-components";
import { Table } from "react-bootstrap";

const loadingAnimation = keyframes`
  0%
  {
    opacity: 1;
  }
  50%
  {
    opacity: 0.4;
  }
  100%
  {
    opacity: 1;
  }
`;

export const StyledTable = styled(Table)<{ isLoading: boolean }>`
  background-color: #fff;
  -webkit-box-shadow: 2px 4px 24px -12px rgba(66, 68, 90, 1);
  -moz-box-shadow: 2px 4px 24px -12px rgba(66, 68, 90, 1);
  box-shadow: 2px 4px 24px -12px rgba(66, 68, 90, 1);
  animation: ${({ isLoading }) => (isLoading ? `${loadingAnimation} 2s linear infinite` : "none")};
  pointer-events: ${({ isLoading }) => (isLoading ? "none" : "auto")};

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
