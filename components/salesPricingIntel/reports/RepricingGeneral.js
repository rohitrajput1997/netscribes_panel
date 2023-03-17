import React, { useState } from "react";
import { Progress, Slider, Switch } from "antd";
import NSCard from "../../common/NSCard";
import NSDropdown from "../../common/NSDropdown";
import NSInput from "../../common/NSInput";
import RepricingHighlightsTileTwo from "./RepricingHighlightsTileTwo";

const RepricingGeneral = () => {
  return (
    <div>
      <h1 className="text-[1.4rem] font-interBold">
        Your Persona Selection Settings
      </h1>

      <div>
        <NSCard className="my-3 p-4 grid grid-cols-3" style={{backgroundColor: 'var(--bg-main)'}}>
          <div className="col-span-1 border-r-2 border-gray-400 p-2">
            <h1 className="font-interSemiBold mb-2">Revenue boosted</h1>
            <div className="flex">
              <p className="w-[50%] font-interRegular">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Possimus, quo!
              </p>
              <div className="w-[50%] flex justify-center items-center">
                <Progress
                  type="circle"
                  percent={75}
                  size={80}
                  strokeWidth={16}
                  strokeColor="#005f86"
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 border-r-2 border-gray-400 p-2">
            <h1 className="font-MontBold mb-2 font-interSemiBold">
              Price Optimized Products
            </h1>
            <div className="flex">
              <p className="w-[50%] font-interRegular">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Possimus, quo!
              </p>
              <div className="w-[50%] flex justify-center items-center">
                <Progress
                  type="circle"
                  percent={75}
                  size={80}
                  strokeWidth={16}
                  strokeColor="#005f86"
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 p-2">
            <h1 className="font-MontBold mb-2 font-interSemiBold">
              Products. at Optim Lim
            </h1>
            <div className="flex">
              <p className="w-[50%] font-interRegular">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Possimus, quo!
              </p>
              <div className="w-[50%] flex justify-center items-center">
                <Progress
                  type="circle"
                  percent={75}
                  size={80}
                  strokeWidth={16}
                  strokeColor="#005f86"
                />
              </div>
            </div>
          </div>
        </NSCard>
        <NSCard className="my-3 p-4 grid grid-cols-6 gap-3" style={{backgroundColor: 'var(--bg-main)'}}>
          <div className="col-span-2 border rounded-md">
            <div className="flex">
              <div className="repricing-intervals h-[100%] w-[100%] p-2 mb-2 mr-2">
                <h2 className="font-interBold">Repricing intervals</h2>
                <div className="flex items-center justify-between">
                  <p className="text-[0.8rem] font-interRegular">
                    New price should be
                  </p>
                  <NSDropdown options={[]} className="w-[110px]" />
                </div>
                <div className="h-20 mt-2 pt-5">
                  <Slider
                    range={{
                      draggableTrack: true,
                    }}
                    defaultValue={[20, 50]}
                    handleStyle={{ borderColor: "#005f86" }}
                    trackStyle={{ backgroundColor: "#005f86" }}
                  />
                </div>
                <p className="text-blue-600 text-[.7rem] font-bold mt-2 font-interSemiBold">
                  Current Price - 5% and Current Price + 5%
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3 border border-gray-300 rounded-md p-2">
            <div className="flex justify-between mr-2">
              <div className="new-pricingp-2 w-[100%]">
                <h2 className="font-interBold truncate">
                  New Price should be higher than
                </h2>
                <div className="flex justify-between mt-3">
                  <NSDropdown options={[]} className="w-[200px]" />
                  <NSDropdown options={[]} className="w-[200px]" />
                  <NSInput
                    type="text"
                    className="w-[100px] font-interRegular"
                    style={{ height: "10px", width: "100px" }}
                  />
                </div>
                <h2 className="font-bold truncate mt-2">
                  New Price should be lower than
                </h2>
                <div className="flex justify-between mt-3">
                  <NSDropdown options={[]} className="w-[200px] mr-[.22px]" />
                  <NSDropdown options={[]} className="w-[200px] mr-[.22px]" />
                  <NSInput
                    type="text"
                    className="w-[100px] font-interRegular"
                    style={{ height: "10px", width: "100px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 border border-gray-300 rounded-md">
            <div className="max-items-amount new-pricing p-2">
              <Switch />
              <h2 className="text-[.8rem] font-interBold mt-2">
                Maximum items amount for pricing
              </h2>
              <NSInput
                type="text"
                style={{ height: "30px" }}
                className="mt-10"
              />
            </div>
          </div>
        </NSCard>

        <div className="grid grid-cols-2 gap-3">
          <NSCard className="col-span-1">
            <RepricingHighlightsTileTwo
              title="Our Price"
              subtitle="INR 4,232"
              showupDownArrow={false}
            />
          </NSCard>
          <NSCard className="col-span-1">
            <RepricingHighlightsTileTwo
              title="SKU in Focus"
              showupDownArrow={false}
            />
          </NSCard>
        </div>
      </div>
    </div>
  );
};

export default RepricingGeneral;
