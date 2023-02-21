import { Table } from "antd";
import React from "react";

function NSTable({ dataSource, columns, rowSelection }) {
  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowSelection={rowSelection || {}}
        scroll={{ x: true }}
      />
    </>
  );
}

export default NSTable;
