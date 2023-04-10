import { Checkbox, Radio, Space } from "antd";
import React, { useEffect } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { AiFillTag } from "react-icons/ai";
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
  isValidate,
  isViewOnly,
  setIsViewOnly,
}) {
  const { one, two, rank, price, measurment, status } = PricingRuleJson || {};

  useEffect(() => {
    return () => {
      setIsViewOnly(false);
    };
  }, []);

  return (
    <>
      <div className="p-3">
        <h1 className="text-xl font-interBold">Repricing Rules</h1>

        <p className="font-interRegular mt-2">
          Wisepricer sets a new price for each of your products, based on the
          rules you define below
        </p>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <Checkbox
              // onChange={(e) => {
              //   let obj = { ...newRule };
              //   obj.repricing_auto_enable = e.target.checked ? 1 : 0;
              //   setNewRule(obj);
              // }}
              // value={newRule.repricing_auto_enable}
              className="font-interMedium"
              // checked={newRule.repricing_auto_enable === 1 ? true : false}
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
        </div>
      </div>
      <div className="p-3">
        <h1 className="font-interBold text-xl pb-4 mt-6">
          Manage Repricing Rules
        </h1>
        <div className="flex items-center gap-2">
          <AiFillTag size={25} className="mt-[2.4rem]" />
          <NSInput
            className="w-[220px] rounded-md pl-3 font-interRegular"
            style={{ height: "40px" }}
            placeholder="Name your rule"
            title="Name your rule"
            onChange={(e) => setNewRule({ ...newRule, title: e.target.value })}
            value={newRule.title}
            isRequired
            isError={isValidate && !newRule.title}
            errorMessage="Rule name is required"
          />
          <NSInput
            className="w-[500px] rounded-md pl-3 font-interRegular"
            style={{ height: "40px" }}
            placeholder="Short Description (upto 160 charachters)"
            title="Short Description"
            onChange={(e) =>
              setNewRule({ ...newRule, short_description: e.target.value })
            }
            value={newRule.short_description}
            isRequired
            isError={isValidate && !newRule.short_description}
            errorMessage="Short description is required"
          />
        </div>
        <div className="border-b-2 border-black my-6" />
        <h1 className="text-xl font-interBold">Repricing logic</h1>
        <div className="font-interRegular">
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
              className="font-interMedium"
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
              className="w-32 rp"
              options={brandList}
              isMultiple
              onChange={(e) => {
                let obj = { ...newRule };
                obj.repricing_logic[0].selected_competitors = e;
                setNewRule(obj);
              }}
              value={newRule.repricing_logic?.[0].selected_competitors}
              style={{ height: "32px"}}
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
              className="font-interMedium"
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
              className="font-interMedium"
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
              className="font-interMedium"
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
        <h1 className="text-xl font-interBold">Repricing logic</h1>
        <div>
          <p className="my-2 ml-3 text-lg font-interMedium text-gray-600">
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
                className="font-interRegular"
              >
                Leave product at current price
              </Radio>
              <Radio
                value="set_it_to_minimum_price"
                className="font-interRegular"
              >
                Set it to minimum price
              </Radio>
            </Space>
          </Radio.Group>
        </div>

        {!isViewOnly && (
          <div className="mt-4 flex justify-end">
            <NSButton
              title="Cancel"
              onClick={() => {
                setAddOrEditRule(false);
                setNewRule({});
              }}
              className="font-interMedium px-2 mr-2"
              bgBordered
              style={{ border: "1px solid black" }}
            />
            <NSButton
              title="Save Changes"
              onClick={handleAddPricingRule}
              className="font-interMedium px-2"
              bgPrimary
            />
          </div>
        )}
      </div>
    </>
  );
}

export default AddOrEditPricingRule;
