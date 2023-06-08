import React, { useEffect, useState } from "react";
import NSButton from "../../common/NSButton";
import ManageRepricingRuleList from "./ManageRepricingRuleList";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import {
  addPricingRuleData,
  fetchBrandsProductListingData,
  fetchRepricingRules,
  getPricingRuleById,
} from "../../../actions/SalesPricingIntel.action";
import NSToaster from "../../common/NSToaster";
import AddOrEditPricingRule from "./AddOrEditPricingRule";
import NSCookies from "../../common/NSCookies";
import NSCard from "../../common/NSCard";
import { Checkbox } from "antd";
import NSDropdown from "../../common/NSDropdown";

function PricingRules() {
  const [repricingLogic, setRepricingLogic] = useState(
    "leave_product_at_current_price"
  );
  const [automaticReprice, setAutomaticReprice] = useState("11:00");
  const [dataToEdit, setDataToEdit] = useState({});
  const [selectedId, setSelectedId] = useState();
  const [pricingRuleFullData, setPricingRuleFullData] = useState([]);
  const [addOrEditRule, setAddOrEditRule] = useState(false);
  const [brandList, setBrandList] = useState([]);
  const [pricingRuleData, setPricingRuleData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [isValidate, setIsValidate] = useState(false);
  const [isViewOnly, setIsViewOnly] = useState(false);
  const [newRule, setNewRule] = useState({
    repricing_auto_enable: 1,
    repricing_auto_time: "00:00",
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
    repricing_auto_time: "00:00",
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
    setIsValidate(true);
    if (
      !newRule.title ||
      newRule.title === "" ||
      !newRule.short_description ||
      newRule.short_description === ""
    ) {
      return;
    }
    setIsValidate(false);

    addPricingRuleData({
      payload: newRule,
      setPricingRuleData: setPricingRuleData,
      setPricingRuleFullData: setPricingRuleFullData,
      setAddOrEditRule: setAddOrEditRule,
    });
    setNewRule(initialNewRuleData);
  };

  const handleEditRule = (id) => {
    setSelectedId(id);
    getPricingRuleById({ id: id, setDataToEdit: setDataToEdit });
  };

  useEffect(() => {
    let data = { ...dataToEdit };
    data.id = selectedId ? selectedId : undefined;
    setNewRule(dataToEdit);
  }, [dataToEdit]);

  useEffect(() => {
    fetchRepricingRules({
      setPricingRuleData: setPricingRuleData,
      setPricingRuleFullData: setPricingRuleFullData,
      setLoader: setLoader,
    });
  }, []);

  useEffect(() => {
    fetchBrandsProductListingData({ setBrandList: setBrandList });
  }, []);

  return (
    <NSCard>
      {!addOrEditRule && (
        <>
          {/* <div
            className="flex items-center mb-2 cursor-pointer font-interMedium"
            onClick={() => setEnableSettings(false)}
          >
            <FaArrowAltCircleLeft size={20} className="mr-2" color="#005f86" />
            Back to main page
          </div> */}
          {/* <div className="flex justify-between items-center"> */}
          <h1 className="text-xl font-interBold">Repricing Rules</h1>
          {/* <NSButton
              title="New Rule"
              onClick={() => {
                setAddOrEditRule(true);
                setNewRule(initialNewRuleData);
              }}
              className="font-interMedium"
            />
          </div> */}

          <p className="font-interRegular mt-2">
            Wisepricer sets a new price for each of your products, based on the
            rules you define below
          </p>

          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <Checkbox
                onChange={(e) => {
                  let obj = { ...newRule };
                  obj.repricing_auto_enable = e.target.checked ? 1 : 0;
                  setNewRule(obj);
                }}
                value={newRule.repricing_auto_enable}
                className="font-interMedium"
                checked={newRule.repricing_auto_enable === 1 ? true : false}
              >
                Reprice Automatically everyday at
              </Checkbox>
              <NSDropdown
                className="w-32"
                options={[{ label: "00:00 AM", value: "00:00" }]}
                onChange={(e) => {
                  let obj = { ...newRule };
                  obj.repricing_auto_time = e;
                  setNewRule(obj);
                }}
                value={newRule?.repricing_auto_time}
                defaultValue="00:00"
              />
            </div>
            <NSButton
              title="Add Rule"
              onClick={() => {
                setAddOrEditRule(true);
                setNewRule(initialNewRuleData);
              }}
              className="font-interMedium"
            />
          </div>

          <ManageRepricingRuleList
            pricingRuleData={pricingRuleData}
            addOrEditRule={addOrEditRule}
            setAddOrEditRule={setAddOrEditRule}
            handleEditRule={(value) => handleEditRule(value)}
            brandList={brandList}
            setPricingRuleFullData={setPricingRuleFullData}
            pricingRuleFullData={pricingRuleFullData}
            loader={loader}
            setIsViewOnly={setIsViewOnly}
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
          isValidate={isValidate}
          isViewOnly={isViewOnly}
          setIsViewOnly={setIsViewOnly}
        />
      )}
    </NSCard>
  );
}

export default PricingRules;
