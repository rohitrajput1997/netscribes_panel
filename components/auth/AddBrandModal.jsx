import { Modal } from "antd";
import React from "react";
import { useState } from "react";

function AddBrandModal({
  onClickYes,
  open,
  setOpen,
  title,
  loader,
  brandList,
}) {
  const [data, setData] = useState([]);

  const handleSelectBrand = (brand) => {
    let newData = [...data];

    if (newData.includes(brand)) {
      newData.splice(newData.indexOf(brand), 1);
    } else {
      newData.push(brand);
    }
    setData(newData);
  };

  return (
    <Modal
      className="logout_modal workflow_model relative add-brand-modal"
      open={open}
      onOk={onClickYes}
      onCancel={() => setOpen(false)}
      title={title}
      footer={null}
      width={1000}
    >
      <div className="grid grid-cols-4 gap-4 mt-4">
        {brandList?.map((item, index) => (
          <div
            className={`col-span-1 ${
              data.includes(item.label)
                ? "bg-[#005f86] text-white"
                : "bg-slate-200"
            } py-4 flex justify-center rounded font-interRegular cursor-pointer hover:bg-[#005f86] hover:text-white transition-all ease-in-out duration-700 hover:-translate-y-1 hover:scale-110`}
            key={index}
            onClick={() => handleSelectBrand(item?.label)}
          >
            {item?.label}
          </div>
        ))}
      </div>
    </Modal>
  );
}

export default AddBrandModal;
