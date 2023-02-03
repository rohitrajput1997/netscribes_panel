import { Tooltip } from "antd";
import Image from "next/image";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import ButtonTabs from "../../common/ButtonTabs";
import NSCard from "../../common/NSCard";
import NSDropdown from "../../common/NSDropdown";
import QuaterResults from "./QuaterResults";

const Reports = () => {
  const Quaters = {
    last: [
      { icon: "./assets/Group 693.svg", count: 520, subTitle: "In Actual" },
      { icon: "./assets/Group 694.svg", count: 532, subTitle: "Forcasted" },
      {
        icon: "./assets/Group 695.svg",
        count: "95.4%",
        subTitle: "Forcast Accuracy",
      },
    ],
    next: [
      {
        icon: "./assets/Group 697.svg",
        count: 542,
        subTitle: "With Current Prices",
      },
      {
        icon: "./assets/Group 696.svg",
        count: 548,
        subTitle: "With Suggested Prices",
      },
    ],
  };

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

  return (
    <div className="grid grid-cols-3 gap-3 grid-rows-1">
      <div className="col-span-2 row-span-1">
        <div className="grid grid-cols-2 gap-3">
          <NSCard className="col-span-1">
            <div className="flex items-center">
              <Image
                src="./assets/Group 691.svg"
                alt=""
                width={30}
                height={30}
              />
              <h1 className="text-gray-500 font-MontMedium ml-2">Products</h1>
            </div>
            <div className="flex">
              <div className="w-[50%] border-r-[1px] border-black">
                <h1 className="text-2xl font-MontBold">540</h1>
                <p className="text-gray-500 font-MontMedium">Revenue</p>
              </div>
              <div className="w-[50%] pl-4">
                <h1 className="text-2xl font-MontBold">0</h1>
                <p className="text-gray-500 font-MontMedium">Missing Data</p>
              </div>
            </div>
          </NSCard>
          <NSCard className="col-span-1">
            <div className="flex items-center">
              <Image
                src="./assets/Group 692.svg"
                alt=""
                width={30}
                height={30}
              />
              <h1 className="text-gray-500 font-MontMedium ml-2">
                Optimization
              </h1>
            </div>
            <div className="flex">
              <div className="w-[50%] border-r-[1px] border-black">
                <h1 className="text-2xl font-MontBold">540</h1>
                <p className="text-gray-500 font-MontMedium">Revenue</p>
              </div>
              <div className="w-[50%] pl-4">
                <h1 className="text-2xl font-MontBold">0</h1>
                <p className="text-gray-500 font-MontMedium">Missing Data</p>
              </div>
            </div>
          </NSCard>
        </div>

        <div className="mt-3">
          <NSCard className="col-span-1">
            <div className="flex justify-between items-center">
              <NSDropdown options={[]} className="w-40" />
              <div className="flex items-center">
                <ButtonTabs
                  arr={[
                    { label: "Weekly", value: "aa" },
                    { label: "Quarterly", value: "aa" },
                    { label: "Half-Yearly", value: "aa" },
                  ]}
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
                  <XAxis dataKey="name" axisLine={{ stroke: '#ffffff' }} />
                  <YAxis  axisLine={{ stroke: '#ffffff' }} />
                  <Tooltip />
                  <Legend iconType="circle" />
                  <Bar dataKey="pv" fill="rgb(52 211 153)" radius={[20,20,20,20]} barSize={15} />
                  <Bar dataKey="uv" fill="rgb(8 145 178)" radius={[20,20,20,20]} barSize={15} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </NSCard>
        </div>
      </div>

      <div className="col-span-1 row-span-1">
        <NSCard>
          <h1 className="text-xl font-MontBold">Key Highlights</h1>
          <hr className="my-3 border-b-0 border-[var(--bg-main)]" />

          <QuaterResults header="Last Quarter Results" childs={Quaters?.last} />
          <QuaterResults header="Next Quarter Results" childs={Quaters?.next} />
        </NSCard>
      </div>
    </div>
  );
};

export default Reports;
