import { Wrapper, Content } from "./index.styled";

type ContentProps = {
  children: JSX.Element;
};

export const ContentWrapper = ({ children }: ContentProps) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};
