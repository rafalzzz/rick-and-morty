import { NotificationContainer } from "./index.styled";

type NotificationProps = {
  text: string;
};

export const Notification = ({ text }: NotificationProps) => (
  <NotificationContainer>{text}</NotificationContainer>
);
