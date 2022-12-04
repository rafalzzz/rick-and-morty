import { Main, Content } from "./index.styled";

type ContentProps = {
  children: JSX.Element;
};

export const ContentWrapper = ({ children }: ContentProps) => {
  return (
    <Main>
      <Content>{children}</Content>
    </Main>
  );
};
