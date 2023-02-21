import { Popover, Space } from "antd";
import React from "react";
import NSButton from "./NSButton";

function NSPopover({ content, title }) {
  return (
    <Space wrap>
      <Popover
        placement="bottomRight"
        content={content}
        trigger="click"
      >
        <NSButton title={title} style={{ height: "30px", paddingTop: "4px" }} />
      </Popover>
    </Space>
  );
}

export default NSPopover;
