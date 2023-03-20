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
