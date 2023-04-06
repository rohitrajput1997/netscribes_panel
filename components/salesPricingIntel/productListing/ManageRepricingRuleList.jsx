import { Checkbox, Radio, Space, Tooltip } from "antd";
import React, { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { AiFillTag } from "react-icons/ai";
import NSDropdown from "../../common/NSDropdown";
import NSInput from "../../common/NSInput";
import NSButton from "../../common/NSButton";
import { deletePricingRuleById } from "../../../actions/SalesPricingIntel.action";
import NSLoaderWithMsg from "../../common/NSLoaderWithMsg";

function ManageRepricingRuleList({
  setAddOrEditRule,
  handleEditRule,
  setPricingRuleFullData,
  pricingRuleFullData,
  loader,
}) {
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();

  const handleDeleteRule = (id) => {
    deletePricingRuleById({
      id: id,
      setPricingRuleFullData: setPricingRuleFullData,
      setAddOrEditRule: setAddOrEditRule,
      setLoading: setLoading,
    });
  };

  return (
    <div>
      <h1 className="text-xl font-interBold mt-6">Manage Repricing Rules</h1>
      {loader ? (
        <NSLoaderWithMsg style={{ marginTop: "6rem" }} />
      ) : (
        <div className="mt-4">
          {pricingRuleFullData.map((item, index) => (
            <div key={item} className="w-[100%] min-h-[50px] mt-2">
              <div className="flex items-center justify-between shadow cursor-pointer hover:bg-[#005f86] hover:text-white duration-700 ease-in-out p-3">
                <span className="w-[30%] font-interSemiBold flex items-center">
                  <AiFillTag size={20} className="mr-3" />
                  {item?.title}
                </span>
                <Tooltip title="WisePrice default rule" placement="topLeft">
                  <span className="w-[65%] truncate font-interRegular">
                    {item?.short_description}
                  </span>
                </Tooltip>
                <span className="w-[5%] flex gap-2 font-interRegular">
                  {item?.user_id !== null && (
                    <>
                      {loading && index === selectedIndex ? (
                        <NSLoaderWithMsg />
                      ) : (
                        <RiDeleteBin6Fill
                          size={20}
                          className="cursor-pointer"
                          onClick={() => {
                            handleDeleteRule(item?.id);
                            setSelectedIndex(index);
                          }}
                        />
                      )}
                      <MdEdit
                        size={20}
                        className="cursor-pointer"
                        onClick={() => {
                          if (![1, 2, 3, 4].includes(item?.id)) {
                            setAddOrEditRule(true);
                            handleEditRule(item?.id);
                          }
                        }}
                      />
                    </>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageRepricingRuleList;
