import { Title } from "./index.styled";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => <Title>{title}</Title>;
