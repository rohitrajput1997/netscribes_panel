import { Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { fetchPerformanceReportsData } from "../../../actions/SalesPricingIntel.action";
import ButtonTabs from "../../common/ButtonTabs";
import NSCard from "../../common/NSCard";
import NSDropdown from "../../common/NSDropdown";
import PerformaceFilterTabs from "../../json/PerformanceFilterTabs";
import NextandLastQuarters from "./NextandLastQuarters";
import ProductAndOptimization from "./ProductAndOptimization";

const Reports = () => {
  const [selectedFilter, setSelectedFilter] = useState("week");
  const [selectedFilterKey, setSelectedFilterKey] = useState("week_graph");
  const [performanceDetails, setPerformanceDetails] = useState(null);
  const [loader, setLoader] = useState(false);

  const { product, optimization, last_result, next_result, graph_details } =
    performanceDetails || {};

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

  useEffect(() => {
    fetchPerformanceReportsData({
      setPerformanceDetails: setPerformanceDetails,
      setLoader: setLoader,
      selectedFilter
    });
  }, [selectedFilter]);

  return (
    <div className="grid grid-cols-3 gap-3 grid-rows-1">
      <div className="col-span-2 row-span-1">
        <ProductAndOptimization
          product={product}
          optimization={optimization}
          loader={loader}
        />

        <div className="mt-3">
          <NSCard className="col-span-1">
            <div className="flex justify-end items-center">
              {/* <NSDropdown options={[]} className="w-40" /> */}
              <div className="flex items-center">
                <ButtonTabs
                  arr={PerformaceFilterTabs}
                  setFunc={setSelectedFilter}
                  selectedValue={selectedFilter}
                  selectedKey={setSelectedFilterKey}
                  style={{ height: "32px" }}
                />
                {/* <NSDropdown options={[]} className="w-32 ml-2" /> */}
              </div>
            </div>
            <div className="w-full h-[328px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={selectedFilter === 'week' ? graph_details?.week_graph || []: graph_details?.month_graph || []}
                  margin={{
                    top: 30,
                    right: 10,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey={(data) => {
                    return  selectedFilter === 'week' ? `W${data?.Week} ${data?.Year}` : `${data?.Month} ${data?.Year}`
                  }} axisLine={{ stroke: "#ffffff" }} tick={{ fontSize: "10px" }}/>
                  <YAxis axisLine={{ stroke: "#ffffff" }} tick={{ fontSize: "10px" }}/>
                  <Tooltip />
                  <Legend iconType="circle" />
                  <Bar
                    dataKey="Actual_Revenue"
                    fill="rgb(52 211 153)"
                    radius={[20, 20, 20, 20]}
                    barSize={15}
                  />
                  <Bar
                    dataKey="Forecasted_Revenue"
                    fill="rgb(8 145 178)"
                    radius={[20, 20, 20, 20]}
                    barSize={15}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </NSCard>
        </div>
      </div>

      <NextandLastQuarters
        last_quarter_result={last_result}
        next_quarter_result={next_result}
        loader={loader}
      />
    </div>
  );
};

export default Reports;
