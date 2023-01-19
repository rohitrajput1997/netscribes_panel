import React, { useEffect, useState } from "react";
import { fetchSalesAndPricingIntelDetails } from "../actions/SalesPricingIntel.action";
import NSLayout from "../components/common/NSLayout";
import SalesPricingIntelTabs from "../components/json/SalesPricingIntelTabs";
import OnGoingContracts from "../components/salesPricingIntel/ongoingContracts/OnGoingContracts";
import Performance from "../components/salesPricingIntel/performance/Performance";
import Reports from "../components/salesPricingIntel/reports/Reports";

function SalesPricingIntel() {
  //Perofrmance
  const [selectedTab, setSelectedTab] = useState(1);
  const [onGoingContractDetails, setOnGoingContractDetails] = useState({});
  const { total_data_first_sentance } = onGoingContractDetails || {};

  useEffect(() => {
    fetchSalesAndPricingIntelDetails({ setOnGoingContractDetails });
  }, []);

  return (
    <NSLayout header_sentence={total_data_first_sentance}>
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

      {selectedTab === 1 && (
        <OnGoingContracts details={onGoingContractDetails} />
      )}
      {selectedTab === 2 && <Performance />}
      {selectedTab === 6 && <Reports />}
    </NSLayout>
  );
}

export default SalesPricingIntel;
