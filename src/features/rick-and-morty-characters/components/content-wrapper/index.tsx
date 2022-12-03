import React from "react";
import { Main } from "./index.styled";

type ContentProps = {
  children: JSX.Element;
};

export const ContentWrapper = ({ children }: ContentProps) => {
  return <Main>{children}</Main>;
};
