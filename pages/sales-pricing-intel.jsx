import { Progress, Switch } from "antd";
import React, { useState } from "react";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowUp } from "react-icons/md";
import NSCard from "../components/common/NSCard";
import NSDropdown from "../components/common/NSDropdown";
import NSInput from "../components/common/NSInput";
import NSLayout from "../components/common/NSLayout";
import SalesPricingIntelTabs from "../components/json/SalesPricingIntelTabs";
import OnGoingContracts from "../components/salesPricingIntel/ongoingContracts/OnGoingContracts";
import Performance from "../components/salesPricingIntel/performance/Performance";
import RepricingHighlightsTileOne from "../components/salesPricingIntel/performance/RepricingHighlightsTileOne";
import RepricingHighlightsTileTwo from "../components/salesPricingIntel/performance/RepricingHighlightsTileTwo";

function SalesPricingIntel() {
  //Perofrmance
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <NSLayout>
      <div className="bg-[var(--bg-main)] w-full h-12 mb-4 flex items-center border-b-[1px] border-gray-400">
        {SalesPricingIntelTabs.map((val, index) => (
          <div
            key={val.key}
            onClick={() => setSelectedTab(val.key)}
            style={
              selectedTab === val.key
                ? {
                    borderBottom: "3px solid var(--primary-color)",
                    fontWeight: "bold",
                    color: "#005f86",
                  }
                : { borderBottom: "" }
            }
            className="w-auto h-[inherit] flex justify-center items-center cursor-pointer mr-[30px]"
          >
            {val.label}
          </div>
        ))}
      </div>

      {selectedTab === 1 && <OnGoingContracts />}
      {selectedTab === 2 && <Performance />}
    </NSLayout>
  );
}

export default SalesPricingIntel;
