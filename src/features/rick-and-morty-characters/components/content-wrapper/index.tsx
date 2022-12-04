import { Wrapper, Content } from "./index.styled";

type ContentWrapperProps = {
  children: JSX.Element;
};

export const ContentWrapper = ({ children }: ContentWrapperProps) => (
  <Wrapper>
    <Content>{children}</Content>
  </Wrapper>
);
