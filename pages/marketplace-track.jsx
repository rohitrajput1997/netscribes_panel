import { Divider, Space } from "antd";
import React from "react";
import NSDropdown from "../components/common/NSDropdown";
import NSLayout from "../components/common/NSLayout";
import NSSearchbar from "../components/common/NSSearchbar";
import SalesAndAvgUnitValue from "../components/salesPricingIntel/ongoingContracts/SalesAndAvgUnitValue";
import marketplaceTrackJson from '../components/json/MarketplaceTrackJson';

function MarketplaceTrack() {
  return (
    <NSLayout>
      <NSSearchbar
        placeholder="Search for Brand, ASIN, SKU and Category"
        style={{
          backgroundColor: "white",
          border: "none",
          height: "40px",
          paddingLeft: "32px",
        }}
      />

      <div>
        <h1 className="my-2 text-[1.2rem]">
          Comparison between Godrej and Whirlpool
        </h1>

        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-1">
            <NSDropdown
              className="w-80 my-3"
              options={marketplaceTrackJson}
              dropdownRender={
                <NSSearchbar
                  placeholder="Search for Brand"
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    height: "40px",
                    paddingLeft: "32px",
                    backgroundColor: "var(--bg-main)",
                    width: "100%",
                  }}
                  SearchiconPlaceOnTop="top-3"
                />
              }
              optionsWithCheckbox={true}
              onChange={(e) => e}
            />
            <SalesAndAvgUnitValue
              image="./assets/interactive.svg"
              title="Unique SKU Count"
              showupDownArrow={false}
            />
            <SalesAndAvgUnitValue
              image="./assets/interactive.svg"
              title="Unique SKU Count"
              showupDownArrow={false}
            />
            <SalesAndAvgUnitValue
              image="./assets/interactive.svg"
              title="Unique SKU Count"
              showupDownArrow={false}
            />
            <SalesAndAvgUnitValue
              image="./assets/interactive.svg"
              title="Unique SKU Count"
              showPlue={true}
              showupDownArrow={false}
            />
          </div>
          <div className="col-span-1">
            <NSDropdown className="w-80 my-3" />
            <SalesAndAvgUnitValue
              image="./assets/interactive.svg"
              title="Unique SKU Count"
              showupDownArrow={false}
            />
            <SalesAndAvgUnitValue
              image="./assets/interactive.svg"
              title="Unique SKU Count"
              showupDownArrow={false}
            />
            <SalesAndAvgUnitValue
              image="./assets/interactive.svg"
              title="Unique SKU Count"
              showupDownArrow={false}
            />
            <SalesAndAvgUnitValue
              image="./assets/interactive.svg"
              title="Unique SKU Count"
              showPlue={true}
              showupDownArrow={false}
            />
          </div>
        </div>
      </div>
    </NSLayout>
  );
}

export default MarketplaceTrack;
