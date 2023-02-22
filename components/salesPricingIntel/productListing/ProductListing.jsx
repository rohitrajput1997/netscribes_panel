import React from "react";
import { RiSettings5Fill } from "react-icons/ri";
import NSCard from "../../common/NSCard";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import NSSearchbar from "../../common/NSSearchbar";
import NSDropdown from "../../common/NSDropdown";
import NSTable from "../../common/NSTable";
import { Radio, Table } from "antd";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";
import { useState } from "react";
import NSPopover from "../../common/NSPopover";
import NSButton from "../../common/NSButton";
import productListingRepriceingRadiosJson from "../../json/productListingRepriceingRadiosJson";
import PLProductCount from "./PLProductCount";
import RepricingPopover from "./RepricingPopover";

function ProductListing() {
  const [activeStar, setActiveStar] = useState(false);
  const [popoverOne, setPopoverOne] = useState(1);
  const [popoverTwo, setPopoverTwo] = useState(1);

  const dataSource = [
    {
      productName: "Baume &amp; Mercler classima Mens watchMOAB462",
      sku: "Baume et merclerMOAB462",
      cp: "$1696.95",
      cp1: "$0.90",
      cost: "$0.95",
      minPrice: "$0.95",
      price: "$1749.00",
      stock: 1,
      oc: "$0.00",
      ms: "$0.00",
      ct: "black, men &#039;s",
      np: "$1696.94",
    },
    {
      productName: "Baume &amp; Mercler classima Mens watchMOAB462",
      sku: "Baume et merclerMOAB462",
      cp: "$1696.95",
      cp1: "$0.90",
      cost: "$0.95",
      minPrice: "$0.95",
      price: "$1749.00",
      stock: 1,
      oc: "$0.00",
      ms: "$0.00",
      ct: "black, men &#039;s",
      np: "$1696.94",
    },
  ];

  const columns = [
    {
      title: "",
      dataIndex: "",
      key: "name",
      render: () => (
        <>
          {activeStar ? (
            <IoStarSharp
              size={20}
              onClick={() => setActiveStar(!activeStar)}
              className="cursor-pointer"
              color="#005f86"
            />
          ) : (
            <IoStarOutline
              size={20}
              onClick={() => setActiveStar(!activeStar)}
              className="cursor-pointer"
            />
          )}
        </>
      ),
    },
    Table.SELECTION_COLUMN,
    {
      title: "",
      dataIndex: "",
      key: "name",
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
      width: 200,
    },
    {
      title: "SKU",
      dataIndex: "sku",
      key: "sku",
    },
    {
      title: "Competitor Pricing (Marketplace)",
      dataIndex: "cp",
      key: "cp",
      render: (data) => {
        return <p className="text-blue-500">{data}</p>;
      },
    },
    {
      title: "Competitor Pricing (Competing Products if selected)",
      dataIndex: "cp1",
      key: "cp1",
    },
    {
      title: "Cost",
      dataIndex: "Cost",
      key: "Cost",
    },
    {
      title: "MinPrice",
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
      title: "Re-pricing Rule",
      dataIndex: "rpr",
      key: "rpr",
      render: () => {
        return <NSDropdown options={[]} className="w-32" />;
      },
    },
    {
      title: "Other Costs (Shipping, Support, etc.)",
      dataIndex: "oc",
      key: "oc",
    },
    {
      title: "Custom Tags/Labels",
      dataIndex: "ct",
      key: "ct",
    },
    {
      title: "Min. Selling Retail Price (MSRP)",
      dataIndex: "ms",
      key: "ms",
    },
    {
      title: "New Price",
      dataIndex: "np",
      key: "np",
    },
  ];

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onChange1 = (e) => {
    setValue1(e.target.value);
  };

  return (
    <>
      <PLProductCount />

      <NSCard className="mt-4">
        <div className="flex justify-between">
          <div className="flex">
            <div className="bg-gray-200 py-2 px-6 cursor-pointer">Webstore Demo</div>
            <div className="bg-gray-200 py-2 px-6 cursor-pointer">All Products (150)</div>
            <div className="bg-gray-200 py-2 px-6 cursor-pointer">Price Reduction (55)</div>
          </div>
          <div className="flex items-center gap-2">
            <NSSearchbar
              placeholder="Search..."
              className="w-20"
              showSearchIcon={false}
              style={{ height: "30px" }}
            />
            <NSDropdown options={[]} className="w-28" placeholder="Filters" />
            <NSDropdown options={[]} className="w-28" placeholder="Actions" />
            <NSPopover
              title="Reprice"
              content={
                <RepricingPopover
                  popoverOne={popoverOne}
                  popoverTwo={popoverTwo}
                  setPopoverOne={setPopoverOne}
                  setPopoverTwo={setPopoverTwo}
                />
              }
            />
          </div>
        </div>

        <div className="mt-3">
          <NSTable dataSource={dataSource} columns={columns} />
        </div>
      </NSCard>
    </>
  );
}

export default ProductListing;
