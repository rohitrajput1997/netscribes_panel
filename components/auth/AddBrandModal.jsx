import React, { useState } from "react";
import { Modal } from "antd";
import NSButton from "../common/NSButton";
import NSDropdown from "../common/NSDropdown";
import { useEffect } from "react";

function AddBrandModal({
  onClickYes,
  open,
  setOpen,
  title,
  loader,
  brandList,
  data,
  setData,
  handleAddBrands,
}) {
  const [localBrandsList, setLocalBrandsList] = useState([]);

  useEffect(() => {
    if(open) {
      setLocalBrandsList(data);
    }
  }, [open]);

  return (
    <Modal
      className="logout_modal workflow_model add-brand-modal"
      open={open}
      onOk={onClickYes}
      onCancel={() => {
        setOpen(false);
        setLocalBrandsList(data);
      }}
      title={title}
      footer={null}
      width={500}
    >
      <div className="mt-8" style={{ minHeight: "150px" }}>
        <div className="w-full">
          <NSDropdown
            options={brandList}
            className="w-full"
            isMultiple
            title="Select Brands"
            value={localBrandsList}
            onChange={(e) => setLocalBrandsList(e)}
          />
        </div>
        <div className="mt-6 text-center">
          <NSButton
            title="Add brands"
            onClick={() => handleAddBrands({updatedData: localBrandsList})}
            isDisabled={!localBrandsList?.length}
          />
        </div>
      </div>
    </Modal>
  );
}

export default AddBrandModal;
