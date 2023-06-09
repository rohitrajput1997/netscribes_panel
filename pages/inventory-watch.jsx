import { Tooltip } from "antd";
import Image from "next/image";
import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceArea,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import NSCard from "../components/common/NSCard";
import NSLayout from "../components/common/NSLayout";
import NSSearchbar from "../components/common/NSSearchbar";
import { InventoryWatchHeadres } from "../components/json/CustomizedTableHeaders";
import SalesAndAvgUnitValue from "../components/salesPricingIntel/ongoingContracts/SalesAndAvgUnitValue";
import SelfPresenceChart from "../components/salesPricingIntel/performance/SelfPresenceChart";

function InventoryWatch() {
  const initialData = [
    { name: 1, cost: 4.11, impression: 100, count: 200 },
    { name: 2, cost: 2.39, impression: 120, count: 220 },
    { name: 3, cost: 1.37, impression: 150, count: 250 },
    { name: 4, cost: 1.16, impression: 180, count: 280 },
    { name: 5, cost: 2.29, impression: 200, count: 300 },
    { name: 6, cost: 3, impression: 499, count: 599 },
    { name: 7, cost: 0.53, impression: 50, count: 60 },
    { name: 8, cost: 2.52, impression: 100, count: 200 },
    { name: 9, cost: 1.79, impression: 200, count: 300 },
    { name: 10, cost: 2.94, impression: 222, count: 322 },
    { name: 11, cost: 4.3, impression: 210, count: 310 },
    { name: 12, cost: 4.41, impression: 300, count: 400 },
    { name: 13, cost: 2.1, impression: 50, count: 60 },
    { name: 14, cost: 8, impression: 190, count: 290 },
    { name: 15, cost: 0, impression: 300, count: 400 },
    { name: 16, cost: 9, impression: 400, count: 500 },
    { name: 17, cost: 3, impression: 200, count: 300 },
    { name: 18, cost: 2, impression: 50, count: 60 },
    { name: 19, cost: 3, impression: 100, count: 200 },
    { name: 20, cost: 7, impression: 100, count: 200 },
  ];
  const { selectorOne, selectorTwo } = InventoryWatchHeadres || {};

  return (
    <NSLayout>
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2">
          <NSCard className="mb-3" style={{ minHeight: "300px" }}>
            <SelfPresenceChart
              header="Shelf Presence Trend Over Time"
              data={initialData}
              namesData={["In Stock", "Staggered Stock", "Out of Stock"]}
            />
          </NSCard>
          <NSCard className="mb-3" style={{ minHeight: "300px" }}>
            <SelfPresenceChart
              header="Shelf Presence Trend Over Time"
              data={initialData}
              namesData={["Samsung", "LG", "Whirlpool"]}
            />
          </NSCard>
        </div>
        <div className="col-span-1">
          <SalesAndAvgUnitValue
            title="Additional specs. Selector"
            showPlue
            showCount={false}
            showIcon={false}
            style={{ height: "318px" }}
            headers={selectorOne}
          />
          <SalesAndAvgUnitValue
            title="Additional specs. Selector"
            showPlue
            showCount={false}
            showIcon={false}
            style={{ height: "318px" }}
            headers={selectorTwo}
          />
        </div>
      </div>
    </NSLayout>
  );
}

export default InventoryWatch;
