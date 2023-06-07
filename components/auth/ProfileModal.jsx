import { Modal } from "antd";
import React from "react";
import OrHr from "../common/OrHr";
import profileInput from "../json/ProfileInput";
import NSButton from "../common/NSButton";

function ProfileModal({ title, open, setOpen, onClickYes }) {
  return (
    <Modal
      className="logout_modal workflow_model add-brand-modal"
      open={open}
      onOk={onClickYes}
      onCancel={() => {
        setOpen(false);
      }}
      title={title}
      footer={null}
      width={1100}
    >
      <div>
        <div className="flex">
          <div
            className="w-[110px] h-[110px]"
            style={{
              backgroundImage: "url(/assets/Ellipse.png)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="/assets/Vector.png" className="w-15 h-20" />
          </div>
          <div className="ml-8">
            <h1 className="text-[1.3rem] font-interSemiBold text-[#00446B]">
              John Doe
            </h1>
            <h4 className="text-[.8rem] font-interRegular mt-[-7px] text-[#00446B]">
              john@company.com - Administrator
            </h4>
            <div className="mt-5">
              <input type="file" className="custom-file-input" />
            </div>
          </div>
        </div>
        <hr className="my-6 border-1" />

        <div className="w-[88%]">
          <h1 className="font-interSemiBold mb-6 text-[.9rem]">Profile</h1>
          {profileInput().map((item, index) => {
            return (
              <div key={index} className="flex items-center mb-4 profile">
                <span className="w-[15%] font-interRegular mr-2">
                  {item.title}
                </span>
                <input
                  type="text"
                  onChange={() => {}}
                  value=""
                  style={{
                    backgroundColor: "#F6FAFF",
                    border: "1px solid #C7E0FF",
                  }}
                />
              </div>
            );
          })}

          <div className="flex justify-end">
            <NSButton
              title="Cancel"
              bgBordered
              className="mr-4"
              onClick={() => setOpen(false)}
            />
            <NSButton title="Update" bgPrimary />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ProfileModal;
