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
import { curveCardinal } from "d3-shape";

const OnGoingContracts = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const cardinal = curveCardinal.tension(0.2);

  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2">
          <MarketOverview />
          <TotalRevenueUnitVolume />

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
                  data={data}
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
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="uv"
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
          />
          <SalesAndAvgUnitValue
            image="./assets/hand-holding-heart.svg"
            title="Sales Value"
          />
          <SalesAndAvgUnitValue image="./assets/tags1.svg" title="Avg. Price" />
        </div>
      </div>
    </div>
  );
};

export default OnGoingContracts;
