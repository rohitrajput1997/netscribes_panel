import { Tooltip } from "antd";
import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiFillTag } from "react-icons/ai";

function ManageRepricingRuleList() {
  return (
    <div>
      <h1 className="text-xl font-MontBold mt-6">Manage Repricing Rules</h1>
      <div className="mt-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            className="w-[100%] flex items-center justify-between mt-2 shadow cursor-pointer hover:bg-[#005f86] hover:text-white duration-700 ease-in-out"
            key={item}
          >
            <span className="w-[30%] p-3 font-MontMedium flex items-center">
              <AiFillTag size={20} className='mr-3' />
              WisePrice
            </span>
            <Tooltip title="WisePrice default rule" placement="topLeft">
              <span className="w-[65%] p-3 truncate font-MontRegular">
                WisePrice default rule
              </span>
            </Tooltip>
            <span className="w-[5%] p-3">
              <RiDeleteBin6Fill size={20} className='cursor-pointer' />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageRepricingRuleList;
