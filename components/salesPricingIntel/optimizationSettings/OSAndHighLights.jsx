import React, { useState } from "react";
import NSTable from "../../common/NSTable";
import NSTableTooltipTitle from "../../common/NSTableTooltipTitle";
import NSInput from "../../common/NSInput";
import NSDropdown from "../../common/NSDropdown";
import NSButton from "../../common/NSButton";

function OSAndHighLights() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const title = (t) => <p className="w-[90%] truncate">{t}</p>;

  const columns = [
    {
      title: title("Product Name"),
      dataIndex: "pName",
      key: "pName",
    },
    {
      title: "SKU",
      dataIndex: "sku",
      key: "sku",
    },
    {
      title: <NSTableTooltipTitle title="Competitors" tooltip="MP" />,
      dataIndex: "competitors",
      key: "competitors",
    },
    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
    },
    {
      title: "Min Price",
      dataIndex: "minPrice",
      key: "minPrice",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Repricing Rule",
      dataIndex: "repricingRule",
      key: "repricingRule",
    },
    {
      title: "Shipping",
      dataIndex: "shipping",
      key: "shipping",
    },
    {
      title: "Labels",
      dataIndex: "labels",
      key: "labels",
    },
    {
      title: "GRP",
      dataIndex: "grp",
      key: "grp",
    },
    {
      title: "Opt. Price",
      dataIndex: "optPrice",
      key: "optPrice",
    },
  ];
  const dataSource = [
    {
      pName: "Casio Edifice Mens Watch",
      sku: "bhdbs824",
      competitors: 1500000,
      cost: 15000000,
      minPrice: 2273627,
      price: 323287382,
      stock: 1,
      repricingRule: "Default Price",
      shipping: 1000000,
      labels: "Casio Edifice Mens Watch",
      grp: 22387283,
      optPrice: 23928329,
    },
    {
      pName: "Casio Edifice Mens Watch",
      sku: "bhdbs824",
      competitors: 1500000,
      cost: 15000000,
      minPrice: 2273627,
      price: 323287382,
      stock: 1,
      repricingRule: "Default Price",
      shipping: 1000000,
      labels: "Casio Edifice Mens Watch",
      grp: 22387283,
      optPrice: 23928329,
    },
  ];
  return (
    <div>
      <div className="flex justify-end items-center">
        <NSInput
          type="text"
          style={{
            backgroundColor: "white",
            borderRadius: "50px",
            width: "310px",
            height: "40px",
          }}
          placeholder="Search..."
        />
        <NSDropdown
          placeholder="Filters"
          className="h-[40px] ml-2 w-40"
          options={[]}
        />
        <NSDropdown
          placeholder="Actions"
          className="h-[40px] ml-2 w-40"
          options={[]}
        />
        <NSButton
          title="Opt. Price"
          className="ml-2 h-9 flex justify-center items-center mt-[-5px]"
        />
      </div>
      <NSTable
        dataSource={dataSource}
        columns={columns}
        rowKey={(record) => record.sku}
        rowSelection
        setSelectedRowKeys={setSelectedRowKeys}
        selectedRowKeys={selectedRowKeys}
      />
    </div>
  );
}

export default OSAndHighLights;
