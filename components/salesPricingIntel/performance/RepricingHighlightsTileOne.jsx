import React from "react";
import NSCard from "../../common/NSCard";

const RepricingHighlightsTileOne = () => {
  return (
    <NSCard className="max-h-[250px] min-h-[200px] flex">
      <div className="flex flex-col justify-between">
        {[0, 1, 2].map((item) => (
          <div className="col-span-1 flex items-center" key={item}>
            <div className="w-12 h-12 bg-orange-200 rounded-md"></div>
            <div className="ml-2">
              <h1 className={`text-[1.2rem] font-bold`}>72%</h1>
              <p className="text-[.8rem] font-semibold">Revenue Boosted</p>
            </div>
          </div>
        ))}
      </div>
    </NSCard>
  );
};

export default RepricingHighlightsTileOne;
