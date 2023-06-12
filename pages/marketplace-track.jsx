import { Divider, Space } from "antd";
import React from "react";
import NSDropdown from "../components/common/NSDropdown";
import NSLayout from "../components/common/NSLayout";
import NSSearchbar from "../components/common/NSSearchbar";
import SalesAndAvgUnitValue from "../components/salesPricingIntel/ongoingContracts/SalesAndAvgUnitValue";
import SingleSalesAndAvgUnitValue from "../components/salesPricingIntel/ongoingContracts/SingleSalesAndAvgUnitValue";
import marketplaceTrackJson from "../components/json/MarketplaceTrackJson";
import { marketplaceTrack } from "../components/json/CustomizedTableHeaders";
import { useEffect } from "react";
import {
  fetchMarketPlaceTracks,
  fetchMarketPlaceTracksBrands,
} from "../actions/MarketPlaceTrack.action";
import { useState } from "react";
import NSLoaderWithMsg from "../components/common/NSLoaderWithMsg";
import NSCard from "../components/common/NSCard";
import NewSalesAndAvgUnitValue from "../components/salesPricingIntel/ongoingContracts/NewSalesAndAvarageUnitValue";
import OuterHeaders from "../components/marketPlaceTrack/OuterHeaders";

function MarketplaceTrack() {
  const [selectedBrand1, setselectedBrand1] = useState("");
  const [selectedBrand2, setselectedBrand2] = useState("");
  const [filterDropdownValues, setFilterDropdownValues] = useState("");
  const [brandList, setBrandList] = useState([]);
  const [tilesData, setTilesData] = useState("");
  const [loader, setLoader] = useState(false);

  const { tileOneTwo, tileThreeFour, tileFiveSix, tileSevenEight } =
    marketplaceTrack || {};

  useEffect(() => {
    fetchMarketPlaceTracksBrands({
      setBrandList,
      setselectedBrand1,
      setselectedBrand2,
    });
  }, []);

  useEffect(() => {
    if (selectedBrand1 && selectedBrand2) {
      fetchMarketPlaceTracks({
        brand1: selectedBrand1,
        brand2: selectedBrand2,
        setTilesData: setTilesData,
        setLoader: setLoader,
      });
    }
  }, [selectedBrand1, selectedBrand2]);

  const filterDropdownData = () => {
    const data = brandList.filter((brand) => {
      if (selectedBrand1 === "") return brand;
      return brand.label
        .toLowerCase()
        .includes(filterDropdownValues.toLowerCase());
    });

    return data;
  };

  useEffect(() => {
    filterDropdownData();
  }, [filterDropdownValues]);

  return (
    <NSLayout loader={loader}>
      <NSSearchbar
        placeholder="Search for Brand, ASIN, SKU, Category, Color, Design, Energy Rating, and Capacity"
        style={{
          backgroundColor: "white",
          border: "none",
          height: "40px",
          paddingLeft: "32px",
        }}
      />

      <h1 className="my-2 text-[1.2rem] font-interSemiBold">
        Comparison between Godrej and Whirlpool
      </h1>

      <NSCard className="mt-3">
        <div className="grid grid-cols-8 gap-3">
          <div className="col-span-2"></div>
          <div className="col-span-3">
            <NSDropdown
              className="w-full my-3"
              options={filterDropdownData()}
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
                  onChange={(e) => setFilterDropdownValues(e.target.value)}
                  value={filterDropdownValues}
                />
              }
              // optionsWithCheckbox={true}
              onChange={(e) => setselectedBrand1(e)}
              value={selectedBrand1}
              isError={selectedBrand1 === "" || !selectedBrand1 ? true : false}
              errorMessage="Please Select Brand"
            />
          </div>
          <div className="col-span-3">
            <NSDropdown
              className="w-full my-3"
              options={filterDropdownData()}
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
                  onChange={(e) => setFilterDropdownValues(e.target.value)}
                  value={filterDropdownValues}
                />
              }
              // optionsWithCheckbox={true}
              onChange={(e) => setselectedBrand2(e)}
              value={selectedBrand2}
              isError={selectedBrand2 === "" || !selectedBrand2 ? true : false}
              errorMessage="Please Select Brand"
            />
          </div>
        </div>

        <div className="grid grid-cols-8 gap-3">
          <div className="col-span-2">
            <div>
              <h1 className="underline font-interSemiBold text-lg">
                Unique SKU Count
              </h1>
              <div>
                {OuterHeaders({
                  tableData: [
                    tilesData?.[selectedBrand1]?.stock,
                    tilesData?.[selectedBrand1]?.discounted,
                  ],
                  header_keys: ["name", "sku", "sku_percentage"],
                  tileHeaders: tileOneTwo,
                })}
              </div>
            </div>
            {/* <div className="mt-[2.2rem]">
              <h1 className="underline font-interSemiBold text-lg">
                Unique SKU Count
              </h1>
              <div>
                {OuterHeaders({
                  tableData: [
                    tilesData?.[selectedBrand1]?.stock,
                    tilesData?.[selectedBrand1]?.discounted,
                  ],
                  header_keys: ["name", "sku", "sku_percentage"],
                  tileHeaders: tileThreeFour,
                })}
              </div>
            </div>
            <div className="mt-[2.2rem]">
              <h1 className="underline font-interSemiBold text-lg">
                Discounted SKU Count
              </h1>
              <div>
                {OuterHeaders({
                  tableData: [
                    tilesData?.[selectedBrand1]?.stock,
                    tilesData?.[selectedBrand1]?.discounted,
                  ],
                  header_keys: ["name", "sku", "sku_percentage"],
                  tileHeaders: tileFiveSix,
                })}
              </div>
            </div>
            <div className="mt-[1.2rem]">
              <h1 className="underline font-interSemiBold text-lg">
                Additional Specs. Selector
              </h1>
              <div>
                {OuterHeaders({
                  tableData: [
                    tilesData?.[selectedBrand1]?.stock,
                    tilesData?.[selectedBrand1]?.discounted,
                  ],
                  header_keys: ["name", "sku", "sku_percentage"],
                  tileHeaders: tileThreeFour,
                })}
              </div>
            </div> */}
          </div>
          <div className="col-span-3">
            <NSCard className="border border-gray-200 rounded-2xl">
              <NewSalesAndAvgUnitValue
                image="./assets/interactive.svg"
                title="Unique SKU Count"
                showupDownArrow={false}
                headers={tileOneTwo}
                showCount
                header_keys={["name", "sku", "sku_percentage"]}
                tableData={[
                  tilesData?.[selectedBrand1]?.stock,
                  tilesData?.[selectedBrand1]?.discounted,
                ]}
                total={tilesData?.[selectedBrand1]?.Total_SKU_Count}
                loader={loader}
              />
            </NSCard>
            {/* <NSCard className="border border-gray-200 rounded-lg mt-[1rem]">
              <NewSalesAndAvgUnitValue
                image="./assets/interactive.svg"
                title="Unique SKU Count"
                showupDownArrow={false}
                headers={tileOneTwo}
                showCount
                header_keys={["name", "sku", "sku_percentage"]}
                tableData={[
                  tilesData?.[selectedBrand1]?.stock,
                  tilesData?.[selectedBrand1]?.discounted,
                ]}
                total={tilesData?.[selectedBrand1]?.Total_SKU_Count}
                loader={loader}
              />
            </NSCard>
            <NSCard className="border border-gray-200 rounded-lg mt-[1rem]">
              <NewSalesAndAvgUnitValue
                image="./assets/interactive.svg"
                title="Unique SKU Count"
                showupDownArrow={false}
                headers={tileOneTwo}
                showCount
                header_keys={["name", "sku", "sku_percentage"]}
                tableData={[
                  tilesData?.[selectedBrand1]?.stock,
                  tilesData?.[selectedBrand1]?.discounted,
                ]}
                total={tilesData?.[selectedBrand1]?.Total_SKU_Count}
                loader={loader}
              />
            </NSCard>
            <NSCard className="border border-gray-200 rounded-lg mt-[1rem]">
              <NewSalesAndAvgUnitValue
                image="./assets/interactive.svg"
                title="Unique SKU Count"
                showupDownArrow={false}
                headers={tileOneTwo}
                header_keys={["name", "sku", "sku_percentage"]}
                tableData={[
                  tilesData?.[selectedBrand1]?.stock,
                  tilesData?.[selectedBrand1]?.discounted,
                ]}
                total={tilesData?.[selectedBrand1]?.Total_SKU_Count}
                loader={loader}
                showPlue
                showCount={false}
              />
            </NSCard> */}
          </div>
          <div className="col-span-3">
            <NSCard className="border border-gray-200 rounded-2xl">
              <NewSalesAndAvgUnitValue
                image="./assets/interactive.svg"
                title="Unique SKU Count"
                showupDownArrow={false}
                headers={tileOneTwo}
                showCount
                header_keys={["name", "sku", "sku_percentage"]}
                tableData={[
                  tilesData?.[selectedBrand2]?.stock,
                  tilesData?.[selectedBrand2]?.discounted,
                ]}
                total={tilesData?.[selectedBrand2]?.Total_SKU_Count}
                loader={loader}
              />
            </NSCard>
            {/* <NSCard className="border border-gray-200 rounded-lg mt-[1rem]">
              <NewSalesAndAvgUnitValue
                image="./assets/interactive.svg"
                title="Unique SKU Count"
                showupDownArrow={false}
                headers={tileOneTwo}
                showCount
                header_keys={["name", "sku", "sku_percentage"]}
                tableData={[
                  tilesData?.[selectedBrand2]?.stock,
                  tilesData?.[selectedBrand2]?.discounted,
                ]}
                total={tilesData?.[selectedBrand2]?.Total_SKU_Count}
                loader={loader}
              />
            </NSCard>
            <NSCard className="border border-gray-200 rounded-lg mt-[1rem]">
              <NewSalesAndAvgUnitValue
                image="./assets/interactive.svg"
                title="Unique SKU Count"
                showupDownArrow={false}
                headers={tileOneTwo}
                showCount
                header_keys={["name", "sku", "sku_percentage"]}
                tableData={[
                  tilesData?.[selectedBrand2]?.stock,
                  tilesData?.[selectedBrand2]?.discounted,
                ]}
                total={tilesData?.[selectedBrand2]?.Total_SKU_Count}
                loader={loader}
              />
            </NSCard>
            <NSCard className="border border-gray-200 rounded-lg mt-[1rem]">
              <NewSalesAndAvgUnitValue
                image="./assets/interactive.svg"
                title="Unique SKU Count"
                showupDownArrow={false}
                headers={tileOneTwo}
                header_keys={["name", "sku", "sku_percentage"]}
                tableData={[
                  tilesData?.[selectedBrand2]?.stock,
                  tilesData?.[selectedBrand2]?.discounted,
                ]}
                total={tilesData?.[selectedBrand2]?.Total_SKU_Count}
                loader={loader}
                showPlue
                showCount={false}
              />
            </NSCard> */}
          </div>
        </div>
      </NSCard>
    </NSLayout>
  );
}

export default MarketplaceTrack;
