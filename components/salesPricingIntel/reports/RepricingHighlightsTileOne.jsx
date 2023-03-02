import Image from "next/image";
import React from "react";
import NSCard from "../../common/NSCard";

const RepricingHighlightsTileOne = () => {
  const data = [
    {
      label: "Revenue Boosted",
      count: "72%",
      icon: "./assets/Group 694.svg",
      color: "text-sky-700",
    },
    {
      label: "Price Optimized Products",
      count: "231",
      icon: "./assets/Group 696.svg",
      color: "text-sky-700",
    },
    {
      label: "Products. at Optim. Lim.",
      count: "42",
      icon: "./assets/Group 695.svg",
      color: "text-green-400",
    },
  ];

  return (
    <NSCard className="max-h-[250px] min-h-[200px] flex">
      <div className="flex flex-col justify-between">
        {data.map((item, index) => (
          <div className="col-span-1 flex items-center" key={item}>
            <Image
              src={item.icon}
              alt={item.label}
              width={70}
              height={70}
              className="mt-2"
            />
            <div className="ml-2">
              <h1 className={`text-[1.4rem] font-bold ${item.color}`}>
                {item.count}
              </h1>
              <p className="text-[.8rem] font-semibold">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </NSCard>
  );
};

export default RepricingHighlightsTileOne;
