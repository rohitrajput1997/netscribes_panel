import React from "react";
import NSCard from "../../common/NSCard";
import PerformanceRowOne from "./PerformanceRowOne";
import PerformanceRowTwo from "./PerformanceRowTwo";
import RepricingHighlightsTileOne from "./RepricingHighlightsTileOne";
import RepricingHighlightsTileTwo from "./RepricingHighlightsTileTwo";

const Performance = () => {
  return (
    <div>
      <h1 className="text-[1.4rem] font-bold">
        Your Persona Selection Settings
      </h1>

      <div>
        <NSCard className="my-3 p-4">
          <PerformanceRowOne />
          <PerformanceRowTwo />
        </NSCard>
        
        <div>
          <h1 className="text-[1.4rem] font-bold mb-3">
            Your Persona Selection Settings
          </h1>
          <div className="grid grid-cols-3 gap-2">
            <RepricingHighlightsTileOne />
            <RepricingHighlightsTileTwo
              title="Our Price"
              subtitle="INR 4,232"
              showupDownArrow={false}
            />
            <RepricingHighlightsTileTwo
              title="SKU in Focus"
              showupDownArrow={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
