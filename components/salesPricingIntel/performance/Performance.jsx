import { Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
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
import moment from "moment/moment";
import intMonthToCharConvertor from "../../../utils/intMonthToCharConvertor";

const Reports = () => {
  const [selectedFilter, setSelectedFilter] = useState("week");
  const [selectedFilterKey, setSelectedFilterKey] = useState("week_graph");
  const [performanceDetails, setPerformanceDetails] = useState(null);
  const [loader, setLoader] = useState(false);

  const { product, optimization, last_result, next_result, graph_details } =
    performanceDetails || {};

  useEffect(() => {
    fetchPerformanceReportsData({
      setPerformanceDetails: setPerformanceDetails,
      setLoader: setLoader,
      selectedFilter,
    });
  }, [selectedFilter]);

  const today = moment().format("MM-DD-YYYY");
  const weekNumber = moment(today, "MM-DD-YYYY").week();
  const monthNumber = moment(today, "MM-DD-YYYY").format("M");
  const yearNumber = moment(today, "MM-DD-YYYY").format("YYYY");

  const actualData =
    selectedFilter === "week"
      ? graph_details?.week_graph || []
      : graph_details?.month_graph || [];

  const addFutureForecastedRevenue = () => {
    const tempArr = actualData?.map((entry, index) => {
      if (selectedFilter === "week") {
        if (
          entry?.Week > weekNumber &&
          (Number(entry?.Year) > Number(yearNumber) ||
            Number(entry?.Year) === Number(yearNumber))
        ) {
          return Object.assign({
            ...entry,
            Future_Forecasted_Revenue: entry?.Forecasted_Revenue,
            Forecasted_Revenue: 0,
          });
        } else {
          return { ...entry };
        }
      } else if (selectedFilter === "month") {
        if (
          entry?.Month > monthNumber &&
          (Number(entry?.Year) > Number(yearNumber) ||
            Number(entry?.Year) === Number(yearNumber))
        ) {
          return Object.assign({
            ...entry,
            Future_Forecasted_Revenue: entry?.Forecasted_Revenue,
            Forecasted_Revenue: 0,
          });
        } else {
          return { ...entry };
        }
      }
    });

    return tempArr;
  };

  useEffect(() => {
    addFutureForecastedRevenue();
  }, [selectedFilter, actualData, addFutureForecastedRevenue()]);

  const CustomizedAxisTick = (props) => {
    const { x, y, width, height, stroke, payload } = props;
    const newStr = props?.payload?.value?.split(" ");

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} fill="#666">
          <tspan textAnchor="middle" x="0" fontSize={10}>
            {newStr[0]}
          </tspan>
          <br />
          <tspan textAnchor="middle" x="0" y={30} fontSize={10}>
            {newStr[1]}
          </tspan>
        </text>
      </g>
    );
  };

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
            <div className="w-full h-[389px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={actualData}
                  margin={{
                    top: 30,
                    right: 10,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey={(data) => {
                      return selectedFilter === "week"
                        ? `W${data?.Week} ${data?.Year}`
                        : `${intMonthToCharConvertor(data?.Month)} ${
                            data?.Year
                          }`;
                    }}
                    axisLine={{ stroke: "#ffffff" }}
                    tick={<CustomizedAxisTick />}
                    height={50}
                    width={100}
                  />
                  <YAxis
                    axisLine={{ stroke: "#ffffff" }}
                    tick={{ fontSize: "10px" }}
                  />
                  <Tooltip />
                  <Legend iconType="circle" />
                  <Bar
                    dataKey="Actual_Revenue"
                    fill="rgb(52 211 153)"
                    radius={[20, 20, 20, 20]}
                    barSize={15}
                    name="Actual Revenue"
                  />
                  <Bar
                    dataKey="Forecasted_Revenue"
                    fill={"rgb(8 145 178)"}
                    radius={[20, 20, 20, 20]}
                    barSize={15}
                    name="Forecasted Revenue"
                  >
                    {addFutureForecastedRevenue().map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          entry?.Future_Forecasted_Revenue
                            ? "rgb(250 204 21)"
                            : "rgb(8 145 178)"
                        }
                      />
                    ))}
                  </Bar>

                  <Bar
                    dataKey=""
                    fill={"rgb(250 204 21)"}
                    radius={[20, 20, 20, 20]}
                    barSize={0}
                    name="Future Forecasted Revenue"
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
        selectedFilter={selectedFilter}
      />
    </div>
  );
};

export default Reports;
