import { OverlayTrigger, Tooltip } from "react-bootstrap";

type CustomTooltipProps = {
  id: string;
  tooltipText: string;
  children: JSX.Element;
  show?: boolean;
};

export const CustomTooltip = ({ id, children, tooltipText, show = true }: CustomTooltipProps) => (
  <OverlayTrigger
    flip={false}
    overlay={
      <Tooltip hidden={!show} style={{ pointerEvents: "none" }} id={id}>
        {tooltipText}
      </Tooltip>
    }
    placement="top"
  >
    {children}
  </OverlayTrigger>
);
