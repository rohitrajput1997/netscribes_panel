import { Radio } from "antd";
import React from "react";
import NSButton from "../../common/NSButton";
import NSDropdown from "../../common/NSDropdown";
import productListingRepriceingRadiosJson from "../../json/productListingRepriceingRadiosJson";

const RepricingPopover = ({
  popoverOne,
  popoverTwo,
  setPopoverOne,
  setPopoverTwo,
  pricingRuleData,
}) => {
  return (
    <div className="w-[250px]">
      <div>
        <Radio.Group
          onChange={(e) => setPopoverOne(e.target.value)}
          value={popoverOne}
        >
          {productListingRepriceingRadiosJson?.first.map((item) => (
            <Radio
              value={item?.value}
              className="font-MontRegular"
              key={item?.value}
            >
              {item?.label}
            </Radio>
          ))}
          <br />
        </Radio.Group>
      </div>
      <div>
        <h1 className="font-MontBold mt-4">Repricing Rules:</h1>
        <Radio.Group
          onChange={(e) => setPopoverTwo(e.target.value)}
          value={popoverTwo}
        >
          {productListingRepriceingRadiosJson?.second.map((item) => (
            <Radio
              value={item.value}
              className="font-MontRegular"
              key={item?.value}
            >
              {item?.label}
            </Radio>
          ))}
          <br />
        </Radio.Group>
        <NSDropdown options={pricingRuleData || []} className="w-44 mt-2" />
      </div>
      <div className="flex justify-end mt-3">
        <NSButton
          title="Reprice Now"
          style={{ paddingTop: "3px", height: "30px" }}
        />
      </div>
    </div>
  );
};

export default RepricingPopover;
