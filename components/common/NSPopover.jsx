import { Popover, Space } from "antd";
import React from "react";
import NSButton from "./NSButton";

function NSPopover({ content, title, parentStyle }) {
  return (
    <Space wrap>
      <Popover placement="bottomRight" content={content} trigger="click">
        <NSButton
          title={title}
          style={{ height: "33px", paddingTop: "5px", ...parentStyle, backgroundColor: 'var(--bg-main)' }}
        />
      </Popover>
    </Space>
  );
}

export default NSPopover;
