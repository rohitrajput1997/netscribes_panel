import React, { useState, useEffect, useRef } from "react";
import { RiDeleteBin6Fill, RiSettings5Fill } from "react-icons/ri";
import NSCard from "../../common/NSCard";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import NSSearchbar from "../../common/NSSearchbar";
import NSDropdown from "../../common/NSDropdown";
import NSTable from "../../common/NSTable";
import { Radio, Table, Tooltip } from "antd";
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
import NSTableTooltipTitle from "../../common/NSTableTooltipTitle";
import ManageRepricingRuleList from "./ManageRepricingRuleList";
import PricingRules from "./PricingRules";

function ProductListing({
  productListingDetails,
  setSelectedFilter,
  selectedFilter,
  popoverOne,
  popoverTwo,
  setPopoverOne,
  setPopoverTwo,
  handleTableFilter,
  columns,
  loader,
  setSelectedTab,
  pricingRuleData,
}) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  return (
    <>
      <PLProductCount
        details={productListingDetails?.eligible}
        setSelectedFilter={setSelectedFilter}
        setSelectedTab={setSelectedTab}
        loader={loader}
      />

      <NSCard className="mt-4">
        <div className="flex justify-between">
          <div className="flex font-interRegular">
            <div className="bg-gray-200 py-2 px-6">Webstore Demo</div>
            <div
              className="bg-gray-200 py-2 px-6 cursor-pointer"
              onClick={() => setSelectedFilter("")}
            >
              All Products ({productListingDetails?.eligible?.total_items})
            </div>
            <div
              className="bg-gray-200 py-2 px-6 cursor-pointer"
              onClick={() => setSelectedFilter("price_decrease")}
            >
              Price Reduction ({productListingDetails?.eligible?.price_decrease}
              )
            </div>
          </div>
          <div className="flex items-center gap-2">
            <NSSearchbar
              placeholder="Search..."
              className="w-20 font-interRegular"
              showSearchIcon={false}
              style={{ height: "30px" }}
            />
            {/* <NSDropdown options={[]} className="w-28" placeholder="Filters" />
            <NSDropdown options={[]} className="w-28" placeholder="Actions" /> */}
            <NSPopover
              title="Reprice"
              content={
                <RepricingPopover
                  popoverOne={popoverOne}
                  popoverTwo={popoverTwo}
                  setPopoverOne={setPopoverOne}
                  setPopoverTwo={setPopoverTwo}
                  pricingRuleData={pricingRuleData}
                />
              }
            />
          </div>
        </div>

        <div className="mt-3">
          <NSTable
            dataSource={
              selectedFilter
                ? handleTableFilter()
                : productListingDetails?.product_list
            }
            columns={columns}
            loader={loader}
            rowKey={(record) => record.ASIN_details}
            rowSelection
            selectedRowKeys={selectedRowKeys}
            setSelectedRowKeys={setSelectedRowKeys}
          />
        </div>
      </NSCard>
    </>
  );
}

export default ProductListing;
