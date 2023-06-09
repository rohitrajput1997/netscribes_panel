import { Tooltip } from "antd";
import Image from "next/image";
import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import NSSearchbar from "../../common/NSSearchbar";

function SelfPresenceChart({ header, data, namesData }) {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image src="./assets/Group 694.svg" alt="" width={50} height={50} />
          <h1 className="text-[1.1rem] font-interMedium ml-1">{header}</h1>
        </div>
        <NSSearchbar
          placeholder="Search for brand"
          style={{
            backgroundColor: "white",
            border: "none",
            height: "40px",
            paddingLeft: "32px",
            backgroundColor: "var(--bg-main)",
            width: "350px",
            borderRadius: "20px",
          }}
          className="rounded-full"
          showSearchIcon={false}
          SearchiconPlaceOnTop="top-3"
        />
      </div>
      <div className="w-full h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={"100%"}
            height={"100%"}
            data={data}
            margin={{
              top: 30,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              allowDataOverflow
              dataKey="name"
              type="number"
              axisLine={{ stroke: "#ffffff" }}
            />
            <YAxis
              allowDataOverflow
              type="number"
              yAxisId="1"
              axisLine={{ stroke: "#ffffff" }}
            />
            <YAxis
              orientation="right"
              allowDataOverflow
              type="number"
              yAxisId="2"
              axisLine={{ stroke: "#ffffff" }}
            />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="1"
              type="natural"
              dataKey="cost"
              stroke="rgb(56 189 248)"
              animationDuration={300}
              strokeWidth={3}
              name={[namesData[0]]}
            />
            <Line
              yAxisId="2"
              type="natural"
              dataKey="impression"
              stroke="rgb(2 132 199)"
              animationDuration={300}
              strokeWidth={3}
              name={[namesData[1]]}
            />
            <Line
              yAxisId="2"
              type="natural"
              dataKey="count"
              stroke="rgb(12 74 110)"
              animationDuration={300}
              strokeWidth={3}
              name={[namesData[2]]}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default SelfPresenceChart;
