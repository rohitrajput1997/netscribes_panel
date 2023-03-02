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
  const [selectedFilter, setSelectedFilter] = useState("weekly");
  const [selectedFilterKey, setSelectedFilterKey] = useState("week_graph");
  const [performanceDetails, setPerformanceDetails] = useState(null);
  const [loader, setLoader] = useState(false);

  const { product, optimization, last_quarter_result, next_quarter_result } =
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
    });
  }, []);

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
            <div className="flex justify-between items-center">
              <NSDropdown options={[]} className="w-40" />
              <div className="flex items-center">
                <ButtonTabs
                  arr={PerformaceFilterTabs}
                  setFunc={setSelectedFilter}
                  selectedValue={selectedFilter}
                  selectedKey={setSelectedFilterKey}
                  style={{ height: "32px" }}
                />
                <NSDropdown options={[]} className="w-32 ml-2" />
              </div>
            </div>
            <div className="w-full h-[328px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 30,
                    right: 10,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" axisLine={{ stroke: "#ffffff" }} />
                  <YAxis axisLine={{ stroke: "#ffffff" }} />
                  <Tooltip />
                  <Legend iconType="circle" />
                  <Bar
                    dataKey="pv"
                    fill="rgb(52 211 153)"
                    radius={[20, 20, 20, 20]}
                    barSize={15}
                  />
                  <Bar
                    dataKey="uv"
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
        last_quarter_result={last_quarter_result}
        next_quarter_result={next_quarter_result}
        loader={loader}
      />
    </div>
  );
};

export default Reports;
