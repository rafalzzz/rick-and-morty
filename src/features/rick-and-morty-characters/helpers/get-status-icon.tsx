import { Status } from "features/rick-and-morty-characters/enums";
import { ReactComponent as Alive } from "assets/svg/alive-status.svg";
import { ReactComponent as Dead } from "assets/svg/dead-status.svg";
import { ReactComponent as Unknown } from "assets/svg/unknown-status.svg";

export const getStatusIcon = (status: Status) => {
  switch (status) {
    case Status.ALIVE:
      return <Alive />;
    case Status.DEAD:
      return <Dead />;
    default:
      return <Unknown />;
  }
};
