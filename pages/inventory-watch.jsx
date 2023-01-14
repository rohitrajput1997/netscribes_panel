import React from "react";
import NSCard from "../components/common/NSCard";
import NSLayout from "../components/common/NSLayout";
import SalesAndAvgUnitValue from "../components/salesPricingIntel/ongoingContracts/SalesAndAvgUnitValue";

function InventoryWatch() {
  return (
    <NSLayout>
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2">
            <NSCard className='mb-3'></NSCard>
            <NSCard className='mb-3'></NSCard>
        </div>
        <div className="col-span-1">
          <SalesAndAvgUnitValue
            title="Additional specs. Selector"
            showPlue
            showCount={false}
            showIcon={false}
          />
          <SalesAndAvgUnitValue
            title="Additional specs. Selector"
            showPlue
            showCount={false}
            showIcon={false}
          />
        </div>
      </div>
    </NSLayout>
  );
}

export default InventoryWatch;
