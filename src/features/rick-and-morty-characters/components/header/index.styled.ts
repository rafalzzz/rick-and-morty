import styled from "styled-components";

export const Title = styled.header`
  display: flex;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.fontColors.title};
`;
