import React, { useEffect, useState } from "react";
import { Progress, Slider, Switch } from "antd";
import NSCard from "../../common/NSCard";
import NSDropdown from "../../common/NSDropdown";
import NSInput from "../../common/NSInput";
import RepricingHighlightsTileTwo from "./RepricingHighlightsTileTwo";
import RepricingGeneral from "./RepricingGeneral";
import PricingRules from "../productListing/PricingRules";
import {
  fetchBrandsProductListingData,
  fetchRepricingRules,
} from "../../../actions/SalesPricingIntel.action";

const Performance = ({ handleGetLoader }) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    handleGetLoader(loader);
  }, [handleGetLoader, loader]);

  const repricingHubTabs = [
    { key: 1, label: "General" },
    { key: 2, label: "Repricing Rules" },
  ];

  const handleComponent = () => {
    switch (selectedTab) {
      case 1:
        return <RepricingGeneral />;
      case 2:
        return <PricingRules />;
    }
  };

  return (
    <div>
      <NSCard style={{ backgroundColor: "var(--main-bg)" }}>
        <div className="w-full h-12 mb-4 flex items-center border-b-[1px] border-gray-400">
          {repricingHubTabs.map((val, index) => (
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
    </div>
  );
};

export default Performance;
