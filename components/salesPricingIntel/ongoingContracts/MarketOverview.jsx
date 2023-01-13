import React from "react";
import NSButton from "../../common/NSButton";
import NSCard from "../../common/NSCard";
import NSDropdown from "../../common/NSDropdown";

function MarketOverview() {
  return (
    <NSCard className="w-full">
      <div className="flex items-center flex-wrap justify-between">
        <h1 className="w-[200px] text-[1.2rem]">Market Overview</h1>
        <div className="flex items-center">
          <NSDropdown className="min-w-[400px]" />
          <NSButton title="Cancel" bgBordered className="ml-2" />
          <NSButton title="Apply" bgPrimary className="ml-2" />
        </div>
      </div>
    </NSCard>
  );
}

export default MarketOverview;
