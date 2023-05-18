import React, { useState } from "react";
import { Progress, Slider, Switch } from "antd";
import NSCard from "../../common/NSCard";
import NSDropdown from "../../common/NSDropdown";
import NSInput from "../../common/NSInput";
import RepricingHighlightsTileTwo from "./RepricingHighlightsTileTwo";
import PercentageGraphSection from "../../common/PercentageGraphSection";

const RepricingGeneral = () => {
  return (
    <div>
      <h1 className="text-[1.4rem] font-interBold">
        Your Persona Selection Settings
      </h1>

      <div>
        <PercentageGraphSection />

        <div className="grid grid-cols-2 gap-3">
          <NSCard className="col-span-1" style={{backgroundColor: 'var(--pure)'}}>
            <RepricingHighlightsTileTwo
              title="Our Price"
              subtitle="INR 4,232"
              showupDownArrow={false}
            />
          </NSCard>
          <NSCard className="col-span-1" style={{backgroundColor: 'var(--pure)'}}>
            <RepricingHighlightsTileTwo
              title="SKU in Focus"
              showupDownArrow={false}
            />
          </NSCard>
        </div>
      </div>
    </div>
  );
};

export default RepricingGeneral;
