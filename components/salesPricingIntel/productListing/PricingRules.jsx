import React, { useEffect, useState } from "react";
import NSButton from "../../common/NSButton";
import ManageRepricingRuleList from "./ManageRepricingRuleList";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import {
  addPricingRuleData,
  getPricingRuleById,
} from "../../../actions/SalesPricingIntel.action";
import NSToaster from "../../common/NSToaster";
import AddOrEditPricingRule from "./AddOrEditPricingRule";
import NSCookies from "../../common/NSCookies";

function PricingRules({
  setEnableSettings,
  pricingRuleData,
  addOrEditRule,
  setAddOrEditRule,
  brandList,
  setPricingRuleData,
  setPricingRuleFullData,
}) {
  const [repricingLogic, setRepricingLogic] = useState(
    "leave_product_at_current_price"
  );
  const [dataToEdit, setDataToEdit] = useState({});
  const [selectedId, setSelectedId] = useState();
  const [newRule, setNewRule] = useState({
    repricing_auto_enable: 1,
    repricing_auto_time: "10:11",
    title: "",
    short_description: "",
    repricing_logic: [
      {
        status: "inactive",
        price_order: "",
        price_filter: "",
        selected_competitors: [],
        price_by: 1,
        price_unit: "%",
      },
      {
        status: "inactive",
        price_order: "",
        price_filter_by_price: "",
        price_by: 1,
        price_unit: "%",
      },
      {
        status: "inactive",
        price_order: "",
        price_filter_by_rank: "",
        price_by: 1,
        price_unit: "%",
      },
      {
        status: "inactive",
        automatic_reprice_no: "",
      },
    ],
    repricing_guard: repricingLogic,
  });

  const initialNewRuleData = {
    repricing_auto_enable: 1,
    repricing_auto_time: "10:11",
    title: "",
    short_description: "",
    repricing_logic: [
      {
        status: "inactive",
        price_order: "",
        price_filter: "",
        selected_competitors: [],
        price_by: 1,
        price_unit: "%",
      },
      {
        status: "inactive",
        price_order: "",
        price_filter_by_price: "",
        price_by: 1,
        price_unit: "%",
      },
      {
        status: "inactive",
        price_order: "",
        price_filter_by_rank: "",
        price_by: 1,
        price_unit: "%",
      },
      {
        status: "inactive",
        automatic_reprice_no: "",
      },
    ],
    repricing_guard: repricingLogic,
  };

  const handleAddPricingRule = () => {
    console.log("called one");
    if (!newRule.title && !newRule.short_description) {
      NSToaster.warning("Please fill title and description");
      return;
    }

    addPricingRuleData({
      payload: newRule,
      setPricingRuleData: setPricingRuleData,
      setPricingRuleFullData: setPricingRuleFullData,
      setAddOrEditRule: setAddOrEditRule,
      authorization: NSCookies?.getToken(),
    });
    setNewRule(initialNewRuleData);
  };

  const handleEditRule = (id) => {
    console.log("called two");
    setSelectedId(id);
    getPricingRuleById({ id: id, setDataToEdit: setDataToEdit });
  };

  useEffect(() => {
    console.log("called three");
    let data = { ...dataToEdit };
    data.id = selectedId ? selectedId : undefined;
    setNewRule(dataToEdit);
  }, [dataToEdit]);

  return (
    <>
      {!addOrEditRule && (
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
            <NSButton
              title="New Rule"
              onClick={() => {
                setAddOrEditRule(true);
                setNewRule(initialNewRuleData);
              }}
            />
          </div>
          <p className="font-MontRegular">
            Wisepricer sets a new price for each of your products, based on the
            rules you define below
          </p>

          <ManageRepricingRuleList
            pricingRuleData={pricingRuleData}
            addOrEditRule={addOrEditRule}
            setAddOrEditRule={setAddOrEditRule}
            handleEditRule={(value) => handleEditRule(value)}
            brandList={brandList}
          />
        </>
      )}

      {addOrEditRule && (
        <AddOrEditPricingRule
          newRule={newRule}
          setNewRule={setNewRule}
          brandList={brandList}
          handleAddPricingRule={handleAddPricingRule}
          repricingLogic={repricingLogic}
          setAddOrEditRule={setAddOrEditRule}
        />
      )}
    </>
  );
}

export default PricingRules;
