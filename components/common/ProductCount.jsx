import React from "react";
import { RiSettings5Fill } from "react-icons/ri";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import NSCard from "./NSCard";
// import NSLoaderWithMsg from "../../common/NSLoaderWithMsg";

const ProductCount = ({
  details,
  setSelectedFilter = () => {},
  setSelectedTab,
  loader,
}) => {
  const data = [
    { name: "Machted", value: details?.matched },
    { name: "Price Decrease", value: details?.price_decrease },
    { name: "Price Increase", value: details?.price_increase },
    { name: "Starred", value: details?.starred },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const actionRequired = details?.action_required || 0,
    priceIncrease = details?.price_increase || 0,
    priceDecrease = details?.price_decrease || 0,
    matched = details?.matched || 0,
    starred = details?.starred || 0,
    total = details?.total_items || 0;

  return (
    <NSCard className="grid grid-cols-3 mb-3">
      <div className="col-span-2 py-1 px-2 border-r-2">
        <div className="flex justify-between items-center">
          <p className="font-interRegular text-xl">
            <span className="font-interSemiBold">{actionRequired}</span>{" "}
            Products require action
          </p>
          <RiSettings5Fill
            size={25}
            className="cursor-pointer"
            onClick={() => setSelectedTab(4)}
          />
        </div>

        <div className="grid grid-cols-4 gap-4 mt-8">
          <div
            className="col-span-1 cursor-pointer"
            onClick={() => setSelectedFilter("price_increase")}
          >
            <h1 className="text-3xl font-interBold">{priceIncrease}</h1>
            <p className="font-interRegular mt-2 text-stone-500">
              Eligible for Price Increase
            </p>
          </div>
          <div
            className="col-span-1 cursor-pointer"
            onClick={() => setSelectedFilter("price_decrease")}
          >
            <h1 className="text-3xl font-interBold">{priceDecrease}</h1>
            <p className="font-interRegular mt-2 text-stone-500">
              Eligible for Price Reduction
            </p>
          </div>
          <div
            className="col-span-1 cursor-pointer"
            onClick={() => setSelectedFilter("matched")}
          >
            <h1 className="text-3xl font-interBold">{matched}</h1>
            <p className="font-interRegular mt-2 text-stone-500">
              100% Match with Competitors
            </p>
          </div>
          <div
            className="col-span-1 cursor-pointer"
            onClick={() => setSelectedFilter("")}
          >
            <h1 className="text-3xl font-interBold">{starred}</h1>
            <p className="font-interRegular mt-2 text-stone-500">Started</p>
          </div>
        </div>
      </div>

      {/* PiChart Graph */}
      <div className="col-span-1 py-1 px-2">
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
          <div className="flex flex-col justify-center font-interRegular">
            <p className="mb-1">
              <span className="font-interBold">{total} items</span>
              &nbsp;&nbsp;in Webstore Demos
            </p>
            <div className="mt-[2px]">
              <p>
                {total - priceIncrease + priceDecrease} items (
                {(
                  ((total - priceIncrease + priceDecrease) / total) *
                  100
                ).toFixed(2)}
                %) are Optimized
              </p>
            </div>
            <div className="mt-[2px]">
              <p>
                {priceIncrease + priceDecrease} items (
                {(((priceIncrease + priceDecrease) / total) * 100).toFixed(2)}
                %) are Not Optimized
              </p>
            </div>
          </div>
        </div>
      </div>
    </NSCard>
  );
};

export default ProductCount;