import React from "react";
import { Layout } from "antd";
import Image from "next/image";
const { Header } = Layout;
import { MdKeyboardArrowDown } from "react-icons/md";

function NSHeader() {
  return (
    <>
      <Header
        style={{
          background: "#ffffff",
          height: "60px",
          overflow: "hidden",
          padding: "10px",
        }}
      >
        <div className="flex items-center w-[100%] justify-between px-3 h-[100%]">
          <div className="w-[50%]">
            <input
              placeholder="Search for brand, ASIN, SKU and Category"
              className="bg-[var(--bg-main)] w-full h-[40px] outline-none rounded-md py-2 px-4"
            />
          </div>
          <div className="flex">
            <div
              className="w-auto min-w-[220px] bg-[var(--bg-main)] flex items-center p-3"
              style={{ lineHeight: "initial" }}
            >
              <div className="w-10 h-10 bg-gray-400 rounded-full">
                {/* <Image src="./images/user.png" alt="" width={30} height={30} /> */}
              </div>
              <div className="ml-3">
                <span className="text-[0.8rem] font-bold">John Doe</span>
                <br />
                <span className="text-[0.8rem]">UI/UX Designer</span>
              </div>
            </div>
            <div className="w-[50px] p-3 flex items-center">
              <MdKeyboardArrowDown size={20} />
            </div>
          </div>
        </div>
      </Header>

      <div className="w-full bg-[var(--secondary)] py-1 px-[20px] text-white flex items-center justify-between">
        <h4 className="uppercase text-[0.9rem] font-bold">Sell/Pricing Intel</h4>
        <h6 className="uppercase text-[0.7rem]">400 products matches from 10 companies and 1 marcketplace</h6>
      </div>
    </>
  );
}

export default NSHeader;
