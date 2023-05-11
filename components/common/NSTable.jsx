import { Table } from "antd";
import React from "react";

function NSTable({
  dataSource,
  columns,
  rowSelection,
  rowKey,
  loader,
  selectedRowKeys,
  setSelectedRowKeys,
  isPagination = true,
}) {
  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey={rowKey}
        rowSelection={
          rowSelection && {
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
              setSelectedRowKeys(selectedRowKeys);
            },
          }
        }
        scroll={{ x: "max-content" }}
        loading={loader}
        pagination={isPagination}
      />
    </>
  );
}

export default NSTable;
