import { Progress, Switch } from "antd";
import Image from "next/image";
import React from "react";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowUp } from "react-icons/md";
import NSDropdown from "../../common/NSDropdown";
import NSInput from "../../common/NSInput";

function PerformanceRowOne() {
  const dataOne = [
    { label: "Start repricing", icon: "./assets/Group 688.svg" },
    { label: "Save and Apply", icon: "./assets/Group 689.svg" },
    { label: "Download a Report", icon: "./assets/Group 690.svg" },
  ];
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1 min-h-[300px] h-auto border-r-2 border-b-2 p-2">
        <div className="flex">
          <div className="repricing-intervals h-[100%] border border-gray-300 rounded-md w-[70%] p-2 mb-2 mr-2">
            <h2 className="font-bold">Repricing intervals</h2>
            <div className="flex items-center justify-between">
              <p className="text-[0.8rem]">New price should be</p>
              <NSDropdown options={[]} className="w-[110px]" />
            </div>
            <div className="h-20 bg-[var(--bg-main)] mt-2"></div>
            <p className="text-blue-600 text-[.7rem] font-bold mt-2">
              Current Price - 5% and Current Price + 5%
            </p>
          </div>
        </div>
        <div className="flex justify-between mr-2">
          <div className="new-pricing border border-gray-300 rounded-md w-[70%] p-2">
            <h2 className="font-bold truncate">
              New Price should be higher than
            </h2>
            <div className="flex justify-between mt-3">
              <NSDropdown options={[]} className="w-[60px]" />
              <NSDropdown options={[]} className="w-[60px]" />
              <NSInput type='text' className="w-[50px]" style={{height: '10px', width: '50px'}} />
            </div>
            <h2 className="font-bold truncate mt-2">
              New Price should be lower than
            </h2>
            <div className="flex justify-between mt-3">
              <NSDropdown options={[]} className="w-[60px] mr-[.22px]" />
              <NSDropdown options={[]} className="w-[60px] mr-[.22px]" />
              <NSInput type='text' className="w-[50px]" style={{height: '10px', width: '50px'}} />
            </div>
          </div>
          <div className="max-items-amount new-pricing border border-gray-300 rounded-md w-[28%] p-2">
            <Switch />
            <h2 className="text-[.8rem] font-bold mt-2">Maximum items amount for pricing</h2>
            <NSInput type="text" style={{ height: "30px" }} className="mt-2" />
          </div>
        </div>
      </div>

      <div className="col-span-2 min-h-[300px] h-auto border-r-2 border-b-2 p-2 overflow-scroll">
        <div class="grid grid-rows-3 grid-flow-col gap-2">
          <div class="row-end-3 row-span-2 border border-gray-300 rounded-md p-2 mb-2 mr-2">
            <div>
              <div className="flex items-center text-[.8rem]">
                <MdOutlineKeyboardArrowUp className="bg-gray-200" />
                <h1 className="ml-2 font-bold">Samsung black Refregerator</h1>
              </div>
              <div className="flex items-center text-[.8rem]">
                <MdKeyboardArrowUp className="bg-gray-200" />
                <h1 className="ml-2">SKU: 1234567890</h1>
              </div>
            </div>
            <div className="h-14 bg-[var(--bg-main)] mt-2 flex justify-between items-center p-1 rounded-md">
              <div>
                <h6 className="text-[.9rem] font-semibold">29.00</h6>
                <p className="text-[0.6rem]">Current Price</p>
              </div>
              <div>
                <h6 className="text-[.9rem] font-semibold">29.00</h6>
                <p className="text-[0.6rem]">New Price</p>
              </div>
              <div>
                <h6 className="text-[.9rem] font-semibold">29.00</h6>
                <p className="text-[0.6rem]">Diff</p>
              </div>
            </div>
          </div>

          <div class="row-start-2 row-span-2 border border-gray-300 rounded-md p-2 mb-2 mr-2">
            <h1 className="font-bold">Hit Monthly revenue</h1>
            <h1 className="font-semibold">992943 / 1000 000</h1>

            <div className="my-2">
              <Progress
                strokeLinecap="butt"
                percent={75}
                strokeColor="orange"
              />
              <div className="flex items-center">
                <h1 className="font-semibold">Hit probability</h1>
                <h1 className="bg-orange-200 ml-3 px-4 text-orange-500 font-bold">
                  Medium
                </h1>
              </div>
            </div>

            <h1 className="font-bold">Clear Stocks</h1>
            <h1 className="font-semibold">992943 / 1000 000</h1>

            <div className="my-2">
              <Progress
                strokeLinecap="butt"
                percent={75}
                strokeColor="#005f86"
              />
              <div className="flex items-center">
                <h1 className="font-semibold">Hit probability</h1>
                <h1 className="bg-cyan-200 ml-3 px-4 text-[#005f86] font-bold">
                  High
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-1 min-h-[300px] h-auto border-b-2 p-2">
        <div className="border border-gray-300 rounded-md p-2 mb-2 mr-2">
          <div className="flex items-center text-[.8rem]">
            <MdOutlineKeyboardArrowUp className="bg-gray-200" />
            <h1 className="ml-2 font-bold">Samsung black Refregerator</h1>
          </div>
          <div className="flex items-center text-[.8rem]">
            <MdKeyboardArrowUp className="bg-gray-200" />
            <h1 className="ml-2">
              SKU: 1234567890{" "}
              <span className="bg-orange-200 ml-3 px-4 text-orange-500 font-bold">
                KVI
              </span>
            </h1>
          </div>
          <div className="h-auto bg-[var(--bg-main)] mt-2 p-1 rounded-md">
            <h6 className="text-[.9rem] font-bold">Repricing Focus:</h6>
            {[0, 1].map((_) => (
              <div className="flex mt-1 mb-1" key={_}>
                <p className="w-[49%] font-semibold">Sales Items</p>
                <p className="w-[49%] font-semibold">Grow</p>
              </div>
            ))}
          </div>

          <div className="h-auto bg-[var(--bg-main)] mt-2 p-1 rounded-md">
            <h6 className="text-[.9rem] font-bold">Price Sensitivity</h6>
            {[0, 1].map((_) => (
              <div className="flex mt-1 mb-1" key={_}>
                <p className="w-[49%] font-semibold">Sales Items</p>
                <p className="w-[49%] font-semibold">Grow</p>
              </div>
            ))}
          </div>
        </div>

        <div className=" border border-gray-300 rounded-md p-2 my-2 mr-2">
          {dataOne.map((_, index) => (
            <div className="flex items-center mb-2" key={index}>
              <Image src={_.icon} alt={_.label} width={35} height={35} />
              <div className="bg-[var(--bg-main)] w-full px-2 py-1 ml-[1px] font-MontSemiBold text-[1rem] rounded-md">
                {_.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PerformanceRowOne;
