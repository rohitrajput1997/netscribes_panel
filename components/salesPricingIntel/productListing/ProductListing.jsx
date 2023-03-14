import React, { useState, useEffect, useRef } from "react";
import { RiSettings5Fill } from "react-icons/ri";
import NSCard from "../../common/NSCard";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import NSSearchbar from "../../common/NSSearchbar";
import NSDropdown from "../../common/NSDropdown";
import NSTable from "../../common/NSTable";
import { Radio, Table } from "antd";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";
import NSPopover from "../../common/NSPopover";
import NSButton from "../../common/NSButton";
import productListingRepriceingRadiosJson from "../../json/productListingRepriceingRadiosJson";
import PLProductCount from "./PLProductCount";
import RepricingPopover from "./RepricingPopover";
import {
  fetchProductListings,
  fetchProductListingsPrice,
} from "../../../actions/SalesPricingIntel.action";
import NSInput from "../../common/NSInput";

function ProductListing() {
  const [activeStar, setActiveStar] = useState(false);
  const [popoverOne, setPopoverOne] = useState(1);
  const [popoverTwo, setPopoverTwo] = useState(1);
  const [loader, setLoader] = useState(false);
  const [productListingDetails, setProductListingDetails] = useState([]);
  const [competitorSku, setCompetitorSku] = useState("");

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
      dataIndex: "Product_Name",
      key: "Product_Name",
      width: 200,
    },
    {
      title: "SKU",
      dataIndex: "ASIN_details",
      key: "ASIN_details",
    },
    {
      title: "Competitor Pricing (Marketplace)",
      dataIndex: "competitor_prcing",
      key: "competitor_prcing",
      render: (data) => {
        return <p className="text-blue-500">{data}</p>;
      },
    },
    {
      title: "Competitor SKU",
      dataIndex: "cp",
      key: "cp",
      render: (data, record, index) => {
        return (
          <NSInput
            type="text"
            style={{ height: "30px", backgroundColor: "white", width: "200px" }}
            value={data}
            onChange={(e) => {
              const list = { ...productListingDetails };
              list.product_list[index].cp = e.target.value;
              // setCompetitorSku(e.target.value);
            }}
            onBlur={(e) => {
              if (e) {
                fetchProductListingsPrice({
                  competitor_sku: e.target.value?.split(","),
                }).then((data) => {
                  const list = { ...productListingDetails };
                  list.product_list[index].cp_selected =
                    data.data.competitor_pricing;
                  setProductListingDetails(list);
                });
              }
            }}
          />
        );
      },
    },
    {
      title: "Competitor Pricing (Competing Products if selected)",
      dataIndex: "cp_selected",
      key: "cp_selected",
      width: 200,
    },
    {
      title: "Cost",
      dataIndex: "Cost",
      key: "Cost",
      render: (data) => {
        return (
          <NSInput
            type="text"
            style={{ height: "30px", backgroundColor: "white", width: "200px" }}
            // value={competitorSku}
            // onChange={(e) => setCompetitorSku(e.target.value)}
            // onBlur={() => alert('')}
          />
        );
      },
    },
    {
      title: "MinPrice",
      dataIndex: "minPrice",
      key: "minPrice",
      render: (data) => {
        return (
          <NSInput
            type="text"
            style={{ height: "30px", backgroundColor: "white", width: "200px" }}
            // value={competitorSku}
            // onChange={(e) => setCompetitorSku(e.target.value)}
            // onBlur={() => alert('')}
          />
        );
      },
    },
    {
      title: "Price",
      dataIndex: "Price",
      key: "Price",
    },
    {
      title: "Stock",
      dataIndex: "Stock_Status",
      key: "Stock_Status",
    },
    {
      title: "Re-pricing Rule",
      dataIndex: "rpr",
      key: "rpr",
      render: () => {
        return (
          <NSDropdown
            options={[
              { label: "RepriceRule_1", value: "RepriceRule_1" },
              { label: "MatchTo", value: "MatchTo" },
            ]}
            className="w-32"
          />
        );
      },
    },
    {
      title: "Other Costs (Shipping, Support, etc.)",
      dataIndex: "oc",
      key: "oc",
      render: (data) => {
        return (
          <NSInput
            type="text"
            style={{ height: "30px", backgroundColor: "white", width: "200px" }}
            // value={competitorSku}
            // onChange={(e) => setCompetitorSku(e.target.value)}
            // onBlur={() => alert('')}
          />
        );
      },
    },
    {
      title: "Custom Tags/Labels",
      dataIndex: "ct",
      key: "ct",
      render: (data) => {
        return (
          <NSInput
            type="text"
            style={{ height: "30px", backgroundColor: "white", width: "200px" }}
            // value={competitorSku}
            // onChange={(e) => setCompetitorSku(e.target.value)}
            // onBlur={() => alert('')}
          />
        );
      },
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

  useEffect(() => {
    fetchProductListings({ setLoader, setProductListingDetails });
  }, []);

  return (
    <>
      <PLProductCount details={productListingDetails?.eligible} />

      <NSCard className="mt-4">
        <div className="flex justify-between">
          <div className="flex">
            <div className="bg-gray-200 py-2 px-6 cursor-pointer">
              Webstore Demo
            </div>
            <div className="bg-gray-200 py-2 px-6 cursor-pointer">
              All Products ({productListingDetails?.eligible?.total_items})
            </div>
            <div className="bg-gray-200 py-2 px-6 cursor-pointer">
              Price Reduction ({productListingDetails?.eligible?.price_decrease})
            </div>
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
          <NSTable
            dataSource={productListingDetails?.product_list}
            columns={columns}
            loader={loader}
          />
        </div>
      </NSCard>
    </>
  );
}

export default ProductListing;
