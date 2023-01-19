import { Progress } from "antd";
import Image from "next/image";
import React from "react";
import NSButton from "../../common/NSButton";
import NSCard from "../../common/NSCard";
import NSDropdown from "../../common/NSDropdown";
import MarketOverview from "./MarketOverview";
import TotalRevenueUnitVolume from "./TotalRevenueUnitVolume";
import LeaderMarketShare from "./LeaderMarketShare";
import SalesAndAvgUnitValue from "./SalesAndAvgUnitValue";
import ButtonTabs from "../../common/ButtonTabs";
import EstimatedSalesTabs from "../../json/EstimatedSalesTabs";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { onGoingContracts } from "../../json/CustomizedTableHeaders";

const OnGoingContracts = ({ details }) => {
  const {
    total_revenue,
    total_units,
    graph_details,
    unit,
    sales,
    avg,
    total_data_first_sentance,
  } = details || {};

  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2">
          <MarketOverview />
          <TotalRevenueUnitVolume
            totalRevenue={total_revenue}
            totalUnits={total_units}
          />

          <NSCard className="w-full mt-2 min-h-[434px]">
            <div className="flex justify-between items-center">
              <div>
                <Image src="" alt="" className="mr-2" />
                <h1 className="text-[1.2rem]">
                  Total Estimates Sales Over Time
                </h1>
              </div>
              <div>
                <ButtonTabs arr={EstimatedSalesTabs} />
              </div>
            </div>
            <div className="w-[100%] h-[380px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  width={500}
                  height={400}
                  data={graph_details}
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
                      <stop offset="5%" stopColor="#5a8cd1" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#5a8cd1" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82a5ca" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#82a5ca" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="sales"
                    stroke="#5a8cd1"
                    fill="url(#colorUv)"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </NSCard>

          <LeaderMarketShare />
        </div>

        <div className="col-span-1 gap-2">
          <SalesAndAvgUnitValue
            image="./assets/interactive.svg"
            title="Sales Units"
            headers={onGoingContracts.salesUnit}
            tableData={[unit?.units_highest, unit?.units_lowest]}
            total={total_units?.units}
          />
          <SalesAndAvgUnitValue
            image="./assets/hand-holding-heart.svg"
            title="Sales Value"
            headers={onGoingContracts.salesValue}
            tableData={[sales?.sales_highest, sales?.sales_lowest]}
            total={total_revenue?.sales}
          />
          <SalesAndAvgUnitValue
            image="./assets/tags1.svg"
            title="Avg. Price"
            headers={onGoingContracts.avgPrice}
            tableData={[avg?.avg_highest, avg?.avg_lowest]}
            total={total_data_first_sentance?.avgsales}
          />
        </div>
      </div>
    </div>
  );
};

export default OnGoingContracts;
