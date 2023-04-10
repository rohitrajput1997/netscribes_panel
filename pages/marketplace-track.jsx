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
    <NSLayout>
      <NSSearchbar
        placeholder="Search for Band, ASIN, SKU, Category, Color, Design, Energy Rating, and Capacity"
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
            {loader ? (
              <NSLoaderWithMsg />
            ) : (
              <>
                <SingleSalesAndAvgUnitValue
                  image="./assets/interactive.svg"
                  title="Unique SKU Count"
                  showupDownArrow={false}
                  headers={tileOneTwo}
                  header_keys={["name", "sku", "sku_percentage"]}
                  tableData={tilesData?.[selectedBrand1]?.stock}
                  total={tilesData?.[selectedBrand1]?.Total_SKU_Count}
                />
                <SingleSalesAndAvgUnitValue
                  image="./assets/interactive.svg"
                  title="Unique SKU Count"
                  showupDownArrow={false}
                  headers={tileOneTwo}
                  header_keys={["name", "sku", "sku_percentage"]}
                  tableData={tilesData?.[selectedBrand1]?.discounted}
                  total={tilesData?.[selectedBrand1]?.Total_SKU_Count}
                />
                {/* <SalesAndAvgUnitValue
                  image="./assets/interactive.svg"
                  title="Unique SKU Count"
                  showupDownArrow={false}
                  headers={tileThreeFour}
                />
                <SalesAndAvgUnitValue
                  image="./assets/interactive.svg"
                  title="Discount SKU Count"
                  showupDownArrow={false}
                  headers={tileFiveSix}
                />
                <SalesAndAvgUnitValue
                  image="./assets/interactive.svg"
                  title="Additional Specs. Selector"
                  showPlue={true}
                  showupDownArrow={false}
                  headers={tileSevenEight}
                /> */}
              </>
            )}
          </div>
          <div className="col-span-1">
            <NSDropdown
              className="w-80 my-3"
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
            {loader ? (
              <NSLoaderWithMsg />
            ) : (
              <>
                <SingleSalesAndAvgUnitValue
                  image="./assets/interactive.svg"
                  title="Unique SKU Count"
                  showupDownArrow={false}
                  headers={tileOneTwo}
                  header_keys={["name", "sku", "sku_percentage"]}
                  tableData={tilesData?.[selectedBrand2]?.stock}
                  total={tilesData?.[selectedBrand2]?.Total_SKU_Count}
                />
                <SingleSalesAndAvgUnitValue
                  image="./assets/interactive.svg"
                  title="Unique SKU Count"
                  showupDownArrow={false}
                  headers={tileOneTwo}
                  header_keys={["name", "sku", "sku_percentage"]}
                  tableData={tilesData?.[selectedBrand2]?.discounted}
                  total={tilesData?.[selectedBrand2]?.Total_SKU_Count}
                />
                {/* <SalesAndAvgUnitValue
                  image="./assets/interactive.svg"
                  title="Unique SKU Count"
                  showupDownArrow={false}
                  headers={tileThreeFour}
                />
                <SalesAndAvgUnitValue
                  image="./assets/interactive.svg"
                  title="Discount SKU Count"
                  showupDownArrow={false}
                  headers={tileFiveSix}
                />
                <SalesAndAvgUnitValue
                  image="./assets/interactive.svg"
                  title="Additional Specs. Selector"
                  showPlue={true}
                  showupDownArrow={false}
                  headers={tileSevenEight}
                /> */}
              </>
            )}
          </div>
        </div>
      </div>
    </NSLayout>
  );
}

export default MarketplaceTrack;
