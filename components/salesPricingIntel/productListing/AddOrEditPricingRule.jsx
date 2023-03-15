import { Checkbox, Radio, Space } from "antd";
import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import NSButton from "../../common/NSButton";
import NSDropdown from "../../common/NSDropdown";
import NSInput from "../../common/NSInput";
import PricingRuleJson from "../../json/PricingRuleJson";

function AddOrEditPricingRule({
  newRule,
  setNewRule,
  handleAddPricingRule,
  brandList,
  repricingLogic,
  setAddOrEditRule,
}) {
  const { one, two, rank, price, measurment, status } = PricingRuleJson || {};

  console.log('New Rule $$$$$$ ******', newRule);

  return (
    <>
      <div
        className="flex items-center mb-2 cursor-pointer font-MontMedium"
        onClick={() => {
          setAddOrEditRule(false);
          setNewRule({});
        }}
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
            onChange={(e) => setNewRule({ ...newRule, title: e.target.value })}
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
                obj.repricing_logic[0].status = e.target.checked
                  ? "active"
                  : "inactive";
                setNewRule(obj);
              }}
              value={newRule.repricing_logic?.[0].status}
              className="font-MontMedium"
              checked={
                newRule.repricing_logic?.[0].status === "active" ? true : false
              }
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
              value={newRule.repricing_logic?.[0].price_order}
            />{" "}
            <NSDropdown
              className="w-32"
              options={two}
              onChange={(e) => {
                let obj = { ...newRule };
                obj.repricing_logic[0].price_filter = e;
                setNewRule(obj);
              }}
              value={newRule.repricing_logic?.[0].price_filter}
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
              value={newRule.repricing_logic?.[0].selected_competitors}
            />{" "}
            by{" "}
            <NSInput
              style={{ height: "30px" }}
              onChange={(e) => {
                let obj = { ...newRule };
                obj.repricing_logic[0].price_by = e.target.value;
                setNewRule(obj);
              }}
              value={newRule.repricing_logic?.[0].price_by}
            />{" "}
            <NSDropdown
              className="w-32"
              options={measurment}
              onChange={(e) => {
                let obj = { ...newRule };
                obj.repricing_logic[0].price_unit = e;
                setNewRule(obj);
              }}
              value={newRule.repricing_logic?.[0].price_unit}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mt-2">
            <Checkbox
              onChange={(e) => {
                let obj = { ...newRule };
                obj.repricing_logic[1].status = e.target.checked
                  ? "active"
                  : "inactive";
                setNewRule(obj);
              }}
              value={newRule.repricing_logic?.[1].status}
              className="font-MontMedium"
              checked={
                newRule.repricing_logic?.[1].status === "active" ? true : false
              }
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
              value={newRule.repricing_logic?.[1].price_order}
            />{" "}
            <NSDropdown
              className="w-52"
              options={price}
              onChange={(e) => {
                let obj = { ...newRule };
                obj.repricing_logic[1].price_filter_by_price = e;
                setNewRule(obj);
              }}
              value={newRule.repricing_logic?.[1].price_filter_by_price}
            />{" "}
            by{" "}
            <NSInput
              style={{ height: "30px" }}
              onChange={(e) => {
                let obj = { ...newRule };
                obj.repricing_logic[1].price_by = e.target.value;
                setNewRule(obj);
              }}
              value={newRule.repricing_logic?.[1].price_by}
            />{" "}
            <NSDropdown
              className="w-32"
              options={measurment}
              onChange={(e) => {
                let obj = { ...newRule };
                obj.repricing_logic[1].price_unit = e;
                setNewRule(obj);
              }}
              value={newRule.repricing_logic?.[1].price_unit}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mt-2">
            <Checkbox
              onChange={(e) => {
                let obj = { ...newRule };
                obj.repricing_logic[2].status = e.target.checked
                  ? "active"
                  : "inactive";
                setNewRule(obj);
              }}
              value={newRule.repricing_logic?.[2].status}
              className="font-MontMedium"
              checked={
                newRule.repricing_logic?.[2].status === "active" ? true : false
              }
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
              value={newRule.repricing_logic?.[2].price_order}
            />{" "}
            <NSDropdown
              className="w-52"
              options={rank}
              onChange={(e) => {
                let obj = { ...newRule };
                obj.repricing_logic[2].price_filter_by_rank = e;
                setNewRule(obj);
              }}
              value={newRule.repricing_logic?.[2].price_filter_by_rank}
            />{" "}
            by{" "}
            <NSInput
              style={{ height: "30px" }}
              onChange={(e) => {
                let obj = { ...newRule };
                obj.repricing_logic[2].price_by = e.target.value;
                setNewRule(obj);
              }}
              value={newRule.repricing_logic?.[2].price_by}
            />{" "}
            <NSDropdown
              className="w-32"
              options={measurment}
              onChange={(e) => {
                let obj = { ...newRule };
                obj.repricing_logic[2].price_unit = e;
                setNewRule(obj);
              }}
              value={newRule.repricing_logic?.[2].price_unit}
            />
          </div>
        </div>
        <div>
          <div className="mt-2">
            <Checkbox
              onChange={(e) => {
                let obj = { ...newRule };
                obj.repricing_logic[3].status = e.target.checked
                  ? "active"
                  : "inactive";
                setNewRule(obj);
              }}
              value={newRule.repricing_logic?.[3].status}
              className="font-MontMedium"
              checked={
                newRule.repricing_logic?.[3].status === "active" ? true : false
              }
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
                value={newRule.repricing_logic?.[3].automatic_reprice_no}
              />
            </h1>
          </div>
        </div>

        <div className="border-b-2 border-black my-6" />
        <h1 className="text-xl font-MontBold">Repricing logic</h1>
        <div>
          <p className="my-2 ml-3 text-lg font-MontRegular">
            What should WisePricer do if the New Price is below minimum Price?
          </p>
          <Radio.Group
            className="ml-8"
            onChange={(e) => setRepricingLogic(e.target.value)}
            value={repricingLogic}
          >
            <Space direction="vertical">
              <Radio
                value="leave_product_at_current_price"
                className="font-MontMedium"
              >
                Leave product at current price
              </Radio>
              <Radio
                value="set_it_to_minimum_price"
                className="font-MontMedium"
              >
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
  );
}

export default AddOrEditPricingRule;
