import { Table } from "antd";
import React from "react";

function NSTable({ dataSource, columns, rowSelection, rowKey, loader }) {
  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowSelection={rowSelection || {}}
        scroll={{ x: "max-content" }}
        loading={loader}
        rowKey={rowKey}
      />
    </>
  );
}

export default NSTable;
