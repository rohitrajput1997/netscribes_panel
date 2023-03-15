import React, { useState } from "react";
import NSButton from "../../common/NSButton";
import ManageRepricingRuleList from "./ManageRepricingRuleList";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Checkbox, Radio, Space } from "antd";
import NSDropdown from "../../common/NSDropdown";
import NSInput from "../../common/NSInput";
import { addPricingRuleData } from "../../../actions/SalesPricingIntel.action";
import PricingRuleJson from "../../json/PricingRuleJson";
import NSToaster from "../../common/NSToaster";

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
  const [newRule, setNewRule] = useState({
    repricing_auto_enable: 1,
    repricing_auto_time: "10:11",
    title: "",
    short_description: "",
    repricing_logic: [
      {
        status: false,
        price_order: "",
        price_filter: "",
        selected_competitors: [],
        price_by: 1,
        price_unit: "%",
      },
      {
        status: false,
        price_order: "",
        price_filter_by_price: "",
        price_by: 1,
        price_unit: "%",
      },
      {
        status: false,
        price_order: "",
        price_filter_by_rank: "2nd_top_competitor_by_rank",
        price_by: 1,
        price_unit: "%",
      },
      {
        status: false,
        automatic_reprice_no: "",
      },
    ],
    repricing_guard: repricingLogic,
  });

  const { one, two, rank, price, measurment, status } = PricingRuleJson || {};

  const handleAddPricingRule = () => {
    if (!newRule.title && !newRule.short_description) {
      NSToaster.warning("Please fill title and description");
      return;
    }
    
    addPricingRuleData({
      payload: newRule,
      setPricingRuleData: setPricingRuleData,
      setPricingRuleFullData: setPricingRuleFullData,
      setAddOrEditRule: setAddOrEditRule,
    });
  };

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
            <NSButton title="New Rule" onClick={() => setAddOrEditRule(true)} />
          </div>
          <p className="font-MontRegular">
            Wisepricer sets a new price for each of your products, based on the
            rules you define below
          </p>

          <ManageRepricingRuleList
            pricingRuleData={pricingRuleData}
            addOrEditRule={addOrEditRule}
            setAddOrEditRule={setAddOrEditRule}
          />
        </>
      )}

      {addOrEditRule && (
        <>
          <div
            className="flex items-center mb-2 cursor-pointer font-MontMedium"
            onClick={() => setAddOrEditRule(false)}
          >
            <FaArrowAltCircleLeft size={20} className="mr-2" color="#005f86" />
            Go Back
          </div>
          <div className="p-3">
            <div className="flex items-center gap-2">
              <NSInput
                className="w-[220px] rounded-md pl-3"
                style={{ height: "40px" }}
                placeholder="Name your rule"
                onChange={(e) =>
                  setNewRule({ ...newRule, title: e.target.value })
                }
                value={newRule.title}
              />
              <NSInput
                className="w-[500px] rounded-md pl-3"
                style={{ height: "40px" }}
                placeholder="Short Description (upto 160 charachters)"
                onChange={(e) =>
                  setNewRule({ ...newRule, short_description: e.target.value })
                }
                value={newRule.short_description}
              />
            </div>
            <div className="border-b-2 border-black my-6" />
            <h1 className="text-xl font-MontBold">Repricing logic</h1>
            <div>
              <div className="flex items-center gap-2 mt-2">
                <Checkbox
                  onChange={(e) => {
                    let obj = { ...newRule };
                    obj.repricing_logic[0].status = e.target.checked;
                    setNewRule(obj);
                  }}
                  value={newRule.repricing_logic[0].status}
                >
                  I want my new price to be
                </Checkbox>
                <NSDropdown
                  className="w-32"
                  options={one}
                  onChange={(e) => {
                    let obj = { ...newRule };
                    obj.repricing_logic[0].price_order = e;
                    setNewRule(obj);
                  }}
                  value={newRule.repricing_logic[0].price_order}
                />{" "}
                <NSDropdown
                  className="w-32"
                  options={two}
                  onChange={(e) => {
                    let obj = { ...newRule };
                    obj.repricing_logic[0].price_filter = e;
                    setNewRule(obj);
                  }}
                  value={newRule.repricing_logic[0].price_filter}
                />{" "}
                <NSDropdown
                  className="w-32"
                  options={brandList}
                  isMultiple
                  onChange={(e) => {
                    let obj = { ...newRule };
                    obj.repricing_logic[0].selected_competitors = e;
                    setNewRule(obj);
                  }}
                  value={newRule.repricing_logic[0].selected_competitors}
                />{" "}
                by{" "}
                <NSInput
                  style={{ height: "30px" }}
                  onChange={(e) => {
                    let obj = { ...newRule };
                    obj.repricing_logic[0].price_by = e.target.value;
                    setNewRule(obj);
                  }}
                  value={newRule.repricing_logic[0].price_by}
                />{" "}
                <NSDropdown
                  className="w-32"
                  options={measurment}
                  onChange={(e) => {
                    let obj = { ...newRule };
                    obj.repricing_logic[0].price_unit = e;
                    setNewRule(obj);
                  }}
                  value={newRule.repricing_logic[0].price_unit}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mt-2">
                <Checkbox
                  onChange={(e) => {
                    let obj = { ...newRule };
                    obj.repricing_logic[1].status = e.target.checked;
                    setNewRule(obj);
                  }}
                  value={newRule.repricing_logic[1].status}
                >
                  I want my new price to be
                </Checkbox>
                <NSDropdown
                  className="w-32"
                  options={one}
                  onChange={(e) => {
                    let obj = { ...newRule };
                    obj.repricing_logic[1].price_order = e;
                    setNewRule(obj);
                  }}
                  value={newRule.repricing_logic[1].price_order}
                />{" "}
                <NSDropdown
                  className="w-52"
                  options={price}
                  onChange={(e) => {
                    let obj = { ...newRule };
                    obj.repricing_logic[1].price_filter_by_price = e;
                    setNewRule(obj);
                  }}
                  value={newRule.repricing_logic[1].price_filter_by_price}
                />{" "}
                by{" "}
                <NSInput
                  style={{ height: "30px" }}
                  onChange={(e) => {
                    let obj = { ...newRule };
                    obj.repricing_logic[1].price_by = e.target.value;
                    setNewRule(obj);
                  }}
                  value={newRule.repricing_logic[1].price_by}
                />{" "}
                <NSDropdown
                  className="w-32"
                  options={measurment}
                  onChange={(e) => {
                    let obj = { ...newRule };
                    obj.repricing_logic[1].price_unit = e;
                    setNewRule(obj);
                  }}
                  value={newRule.repricing_logic[1].price_unit}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mt-2">
                <Checkbox
                  onChange={(e) => {
                    let obj = { ...newRule };
                    obj.repricing_logic[2].status = e.target.checked;
                    setNewRule(obj);
                  }}
                  value={newRule.repricing_logic[2].status}
                >
                  I want my new price to be
                </Checkbox>
                <NSDropdown
                  className="w-32"
                  options={one}
                  onChange={(e) => {
                    let obj = { ...newRule };
                    obj.repricing_logic[2].price_order = e;
                    setNewRule(obj);
                  }}
                  value={newRule.repricing_logic[2].price_order}
                />{" "}
                <NSDropdown
                  className="w-52"
                  options={rank}
                  onChange={(e) => {
                    let obj = { ...newRule };
                    obj.repricing_logic[2].price_filter_by_price = e;
                    setNewRule(obj);
                  }}
                  value={newRule.repricing_logic[2].price_filter_by_price}
                />{" "}
                by{" "}
                <NSInput
                  style={{ height: "30px" }}
                  onChange={(e) => {
                    let obj = { ...newRule };
                    obj.repricing_logic[2].price_by = e.target.value;
                    setNewRule(obj);
                  }}
                  value={newRule.repricing_logic[2].price_by}
                />{" "}
                <NSDropdown
                  className="w-32"
                  options={measurment}
                  onChange={(e) => {
                    let obj = { ...newRule };
                    obj.repricing_logic[2].price_unit = e;
                    setNewRule(obj);
                  }}
                  value={newRule.repricing_logic[2].price_unit}
                />
              </div>
            </div>
            <div>
              <div className="mt-2">
                <Checkbox
                  onChange={(e) => {
                    let obj = { ...newRule };
                    obj.repricing_logic[3].status = e.target.checked;
                    setNewRule(obj);
                  }}
                  value={newRule.repricing_logic[3].status}
                >
                  Reprice based on price + shipping (may change based on
                  designation)
                </Checkbox>
                <h1 className="flex items-center">
                  Automatic reprice{" "}
                  <NSDropdown
                    options={status}
                    className="w-32 ml-2"
                    onChange={(e) => {
                      let obj = { ...newRule };
                      obj.repricing_logic[3].automatic_reprice_no = e;
                      setNewRule(obj);
                    }}
                    value={newRule.repricing_logic[3].automatic_reprice_no}
                  />
                </h1>
              </div>
            </div>

            <div className="border-b-2 border-black my-6" />
            <h1 className="text-xl font-MontBold">Repricing logic</h1>
            <div>
              <p className="my-2 ml-3">
                What should WisePricer do if the New Price is below minimum
                Price?
              </p>
              <Radio.Group
                className="ml-8"
                onChange={(e) => setRepricingLogic(e.target.value)}
                value={repricingLogic}
              >
                <Space direction="vertical">
                  <Radio value="leave_product_at_current_price">
                    Leave product at current price
                  </Radio>
                  <Radio value="set_it_to_minimum_price">
                    Set it to minimum price
                  </Radio>
                </Space>
              </Radio.Group>
            </div>

            <div className="mt-4 flex justify-end">
              <NSButton title="Save Changes" onClick={handleAddPricingRule} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default PricingRules;
