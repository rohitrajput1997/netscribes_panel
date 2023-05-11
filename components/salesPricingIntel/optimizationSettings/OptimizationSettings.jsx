import React, { useState } from "react";
import PercentageGraphSection from "../../common/PercentageGraphSection";
import NSCard from "../../common/NSCard";
import OptimizationSettingsTabsJson from "../../json/OptimizationSettingsTabs.json";
import OSProductListing from "./OSProductListing";
import OSAndHighLights from "./OSAndHighLights";

function OptimizationSettings() {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleComponent = () => {
    switch (selectedTab) {
      case 1:
        return <OSAndHighLights />;
      case 2:
        return <OSProductListing />;
    }
  };

  return (
    <NSCard style={{ backgroundColor: "white" }}>
      <PercentageGraphSection />
      <NSCard style={{ backgroundColor: "var(--bg-main)" }}>
        <div className="w-full h-12 mb-4 flex items-center border-b-[1px] border-gray-400">
          {OptimizationSettingsTabsJson.map((val, index) => (
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
              className="w-auto h-[inherit] flex justify-center items-center cursor-pointer mr-[30px] font-interRegular"
            >
              {val.label}
            </div>
          ))}
        </div>

        {handleComponent()}
      </NSCard>
    </NSCard>
  );
}

export default OptimizationSettings;
