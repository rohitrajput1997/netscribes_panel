/** @format */

import moment from "moment";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ButtonTabs from "../../common/ButtonTabs";
import NSCard from "../../common/NSCard";
import NSLoaderWithMsg from "../../common/NSLoaderWithMsg";
import { onGoingContracts } from "../../json/CustomizedTableHeaders";
import EstimatedSalesTabs from "../../json/EstimatedSalesTabs";
import LeaderMarketShare from "./LeaderMarketShare";
import MarketOverview from "./MarketOverview";
import SalesAndAvgUnitValue from "./SalesAndAvgUnitValue";
import TotalRevenueUnitVolume from "./TotalRevenueUnitVolume";

const OnGoingContracts = ({
  details,
  setFromTo,
  handleApply,
  fromTo,
  setPeriod,
  loader = false,
}) => {
  const [selectedGraphFilter, setSelectedGraphFilter] = useState("week");
  const [selectedFilterKey, setSelectedFilterKey] = useState("week_graph");
  const {
    data_unit_sales_total,
    total_revenue,
    total_units,
    graph_details,
    unit,
    sales,
    avg,
    total_data_first_sentance,
    Avrage,
  } = details || {};

  const firstDate = moment(fromTo.toDate);
  const lastDate = moment(fromTo.fromDate);
  const daysDiff = firstDate.diff(lastDate, "days");
  setPeriod(selectedGraphFilter);

  // const monthDiff = firstDate.diff(lastDate, 'months');

  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2">
          <MarketOverview setFromTo={setFromTo} handleApply={handleApply} />
          <TotalRevenueUnitVolume
            totalRevenue={data_unit_sales_total}
            totalUnits={data_unit_sales_total}
            loader={loader}
          />

          <NSCard className="w-full mt-2 min-h-[467px]">
            <div className="flex justify-between items-center">
              <div>
                <Image src="" alt="" className="mr-2" />
                <h1 className="text-[1.2rem] font-interSemiBold">
                  Total Estimates Sales Over Time
                </h1>
              </div>
              <div>
                <ButtonTabs
                  arr={EstimatedSalesTabs(daysDiff)}
                  setFunc={setSelectedGraphFilter}
                  selectedValue={selectedGraphFilter}
                  selectedKey={setSelectedFilterKey}
                />
              </div>
            </div>
            <div className="w-[100%] h-[380px]">
              {loader ? (
                <NSLoaderWithMsg
                  style={{ marginTop: "2rem" }}
                  withMessage={false}
                />
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    width={500}
                    height={400}
                    data={graph_details?.[selectedFilterKey]}
                    margin={{
                      top: 50,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#5a8cd1"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#5a8cd1"
                          stopOpacity={0}
                        />
                      </linearGradient>
                      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#82a5ca"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#82a5ca"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey={(data) => {
                        return selectedFilterKey === "week_graph"
                          ? `W${data?.Week} ${data?.Year}`
                          : selectedFilterKey === "month_graph"
                          ? `${data?.Month} ${data?.Year}`
                          : "";
                      }}
                      tick={{ fontSize: "10px" }}
                    />
                    <YAxis tick={{ fontSize: "10px" }} />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="Sales"
                      stroke="#5a8cd1"
                      fill="url(#colorUv)"
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}
            </div>
          </NSCard>

          <LeaderMarketShare cardData={sales?.sales_highest} />
        </div>

        <div className="col-span-1 gap-2 flex flex-col justify-between">
          <SalesAndAvgUnitValue
            image="./assets/interactive.svg"
            title="Sales Units"
            headers={onGoingContracts.salesUnit}
            tableData={[unit?.units_highest, unit?.units_lowest]}
            total={data_unit_sales_total?.Units}
            header_keys={["Brand", "Units", "VolumeProgressPercentage"]}
            style={{ minHeight: "262px" }}
            loader={loader}
          />
          <SalesAndAvgUnitValue
            image="./assets/hand-holding-heart.svg"
            title="Sales Value"
            headers={onGoingContracts.salesValue}
            tableData={[sales?.sales_highest, sales?.sales_lowest]}
            total={data_unit_sales_total?.Sales}
            header_keys={["Brand", "Sales", "SalesProgressPercentage"]}
            style={{ minHeight: "262px" }}
            loader={loader}
          />
          <SalesAndAvgUnitValue
            image="./assets/tags1.svg"
            title="Avg. Price"
            headers={onGoingContracts.avgPrice}
            tableData={[Avrage?.avg_highest, Avrage?.avg_lowest]}
            total={total_data_first_sentance?.avgsales}
            header_keys={["Brand", "Price", "avg_per"]}
            style={{ minHeight: "262px" }}
            loader={loader}
          />
        </div>
      </div>
    </div>
  );
};

export default OnGoingContracts;
