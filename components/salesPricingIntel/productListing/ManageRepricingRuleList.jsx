import { Checkbox, Radio, Space, Tooltip } from "antd";
import React, { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { AiFillTag } from "react-icons/ai";
import NSDropdown from "../../common/NSDropdown";
import NSInput from "../../common/NSInput";
import NSButton from "../../common/NSButton";

function ManageRepricingRuleList({
  pricingRuleData,
  addOrEditRule,
  setAddOrEditRule,
}) {
  return (
    <div>
      <h1 className="text-xl font-MontBold mt-6">Manage Repricing Rules</h1>
      <div className="mt-4">
        {pricingRuleData.map((item, index) => (
          <div key={item} className="w-[100%] min-h-[50px] mt-2">
            <div className="flex items-center justify-between shadow cursor-pointer hover:bg-[#005f86] hover:text-white duration-700 ease-in-out p-3">
              <span className="w-[30%] font-MontMedium flex items-center">
                <AiFillTag size={20} className="mr-3" />
                {item?.title}
              </span>
              <Tooltip title="WisePrice default rule" placement="topLeft">
                <span className="w-[65%] truncate font-MontRegular">
                  {item?.short_description}
                </span>
              </Tooltip>
              <span className="w-[5%] flex gap-2">
                <RiDeleteBin6Fill size={20} className="cursor-pointer" />
                <MdEdit size={20} className="cursor-pointer" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageRepricingRuleList;
