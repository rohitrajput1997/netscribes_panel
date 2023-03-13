import React from "react";
import { RiSettings5Fill } from "react-icons/ri";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import NSCard from "../../common/NSCard";

const PLProductCount = ({ details }) => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <NSCard className="grid grid-cols-3">
      <div className="col-span-2 p-2 border-r-2">
        <div className="flex justify-between items-center">
          <p className="font-MontRegular">{details?.action_required} Products require action</p>
          <RiSettings5Fill size={25} className="cursor-pointer" />
        </div>

        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="col-span-1 cursor-pointer">
            <h1 className="text-3xl font-MontBold">
              {details?.price_increase || 0}
            </h1>
            <p className="font-MontRegular mt-2 text-stone-500">
              Eligible for Price Increase
            </p>
          </div>
          <div className="col-span-1 cursor-pointer">
            <h1 className="text-3xl font-MontBold">
              {details?.price_decrease || 0}
            </h1>
            <p className="font-MontRegular mt-2 text-stone-500">
              Eligible for Price Reduction
            </p>
          </div>
          <div className="col-span-1 cursor-pointer">
            <h1 className="text-3xl font-MontBold">{details?.matched || 0}</h1>
            <p className="font-MontRegular mt-2 text-stone-500">
              100% Match with Compititors
            </p>
          </div>
          <div className="col-span-1 cursor-pointer">
            <h1 className="text-3xl font-MontBold">{details?.starred || 0}</h1>
            <p className="font-MontRegular mt-2 text-stone-500">Started</p>
          </div>
        </div>
      </div>
      <div className="col-span-1 p-2">
        <div className="flex">
          <ResponsiveContainer width={150} height={150}>
            <PieChart width={150} height={150}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={60}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-col justify-center">
            <p className="font-MontRegular mb-1">
              <span className="font-MontBold">{details?.total_items} items</span>&nbsp;&nbsp;in
              Webstore Demos
            </p>
            <div className="mt-[2px]">
              <p>9 items (6.00%) are Optimized</p>
            </div>
            <div className="mt-[2px]">
              <p>136 items (90.67%) are Not Optimized</p>
            </div>
            <div className="mt-[2px]">
              <p>5 items (3.33%) are Flagged</p>
            </div>
          </div>
        </div>
      </div>
    </NSCard>
  );
};

export default PLProductCount;
