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

export const StyledTable = styled(Table).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !["isLoading"].includes(prop),
})<{ isLoading: boolean }>`
  background-color: ${(props) => props.theme.backgroundColor.white};
  -webkit-box-shadow: ${(props) => props.theme.shadows.table};
  -moz-box-shadow: ${(props) => props.theme.shadows.table};
  box-shadow: ${(props) => props.theme.shadows.table};
  pointer-events: ${({ isLoading }) => (isLoading ? "none" : "auto")};

  th:first-child,
  td:first-child {
    width: 20px;
    padding: 12px 24px;
  }

  th,
  td {
    width: 21%;
    padding: 12px 24px 12px 0;
  }

  th {
    font-size: 0.9rem;
    color: ${(props) => props.theme.fontColors.secondary};
  }

  td {
    font-size: 1rem;
    color: ${(props) => props.theme.fontColors.primary};
  }

  .form-check-input {
    width: 18px;
    height: 18px;
  }

  .loading-animation {
    animation: ${loadingAnimation} 2s linear infinite;
  }
`;
