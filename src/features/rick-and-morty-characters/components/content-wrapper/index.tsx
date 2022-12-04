import { Wrapper } from "./index.styled";

type ContentWrapperProps = {
  children: JSX.Element;
};

export const ContentWrapper = ({ children }: ContentWrapperProps) => <Wrapper>{children}</Wrapper>;
