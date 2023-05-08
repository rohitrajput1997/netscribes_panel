import React, { useState } from "react";
import NSCard from "../../common/NSCard";
import NSSearchbar from "../../common/NSSearchbar";
import NSTable from "../../common/NSTable";
import NSPopover from "../../common/NSPopover";
import NSButton from "../../common/NSButton";
import RepricingPopover from "./RepricingPopover";
import NSLoaderWithMsg from "../../common/NSLoaderWithMsg";
import dynamic from "next/dynamic";

const PLProductCount = dynamic(() => import("./PLProductCount"));

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
            <NSButton
              title={"Download"}
              className="h-9 flex justify-center items-center"
              bgBordered
            />
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
          {loader ? (
            <NSLoaderWithMsg />
          ) : (
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
          )}
        </div>
      </NSCard>
    </>
  );
}

export default ProductListing;
