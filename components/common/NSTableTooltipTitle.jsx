import { Tooltip } from "antd";
import React from "react";

function NSTableTooltipTitle({ tooltip, title }) {
  return <Tooltip title={tooltip}>{title}</Tooltip>;
}

export default NSTableTooltipTitle;
