import React from "react";
import NSButton from "../../common/NSButton";
import ManageRepricingRuleList from "./ManageRepricingRuleList";
import { FaArrowAltCircleLeft } from "react-icons/fa";

function PricingRules({ setEnableSettings }) {
  return (
    <>
      <div
        className="flex items-center mb-2 cursor-pointer font-MontMedium"
        onClick={() => setEnableSettings(false)}
      >
        <FaArrowAltCircleLeft size={20} className="mr-2" color="#005f86" />
        Back to main page
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-MontBold">Repricing Rules</h1>
        <NSButton title="New User" />
      </div>
      <p className="font-MontRegular">
        Wisepricer sets a new price for each of your products, based on the
        rules you define below
      </p>

      <ManageRepricingRuleList />
    </>
  );
}

export default PricingRules;
