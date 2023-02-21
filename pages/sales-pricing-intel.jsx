import moment from "moment";
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
  const [ongoingContractsLoader, setOngoingContractsLoader] = useState(false);
  const { total_data_first_sentance } = onGoingContractDetails || {};
  const today = moment().format("YYYY-MM-DD");
  const startOfMonth = moment().startOf("month").format("YYYY-MM-DD");
  const [fromTo, setFromTo] = useState({
    fromDate: startOfMonth,
    toDate: today,
  });
  const [period, setPeriod] = useState("week");

  const handleFetchSalesAndPricingIntelDetails = (resetDate) => {
    fetchSalesAndPricingIntelDetails({
      setOnGoingContractDetails,
      period: period,
      setOngoingContractsLoader,
      fromDate: resetDate ? startOfMonth : fromTo.fromDate,
      toDate: resetDate ? today : fromTo.toDate,
    });
  };

  useEffect(() => {
    handleFetchSalesAndPricingIntelDetails();
  }, [period]);

  const handleComponent = () => {
    switch (selectedTab) {
      case 1:
        return (
          <OnGoingContracts
            details={onGoingContractDetails}
            setFromTo={setFromTo}
            handleApply={handleFetchSalesAndPricingIntelDetails}
            fromTo={fromTo}
            setPeriod={setPeriod}
            loader={ongoingContractsLoader}
          />
        );
      case 2:
        return <Reports />;
      case 3:
        return <Performance />;
    }
  };

  return (
    <NSLayout
      header_sentence={total_data_first_sentance}
      // loader={ongoingContractsLoader}
      subHeaderTitle="Sales/Pricing Intel"
    >
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

      {handleComponent()}
    </NSLayout>
  );
}

export default SalesPricingIntel;
