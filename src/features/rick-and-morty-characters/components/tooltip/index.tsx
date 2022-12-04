import { OverlayTrigger, Tooltip } from "react-bootstrap";

type CustomTooltipProps = {
  id: string;
  tooltipText: string;
  children: JSX.Element;
};

export const CustomTooltip = ({ id, children, tooltipText }: CustomTooltipProps) => (
  <OverlayTrigger
    flip={false}
    overlay={
      <Tooltip style={{ pointerEvents: "none" }} id={id}>
        {tooltipText}
      </Tooltip>
    }
    placement="top"
  >
    {children}
  </OverlayTrigger>
);
