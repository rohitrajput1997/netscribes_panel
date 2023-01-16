import { Progress } from "antd";
import React from "react";
import NSCard from "../../common/NSCard";

function LeaderMarketShare() {
  return (
    <div>
      <h1 className="text-[1.2rem] my-3">Leader as per Market Share</h1>
      <div className="grid grid-cols-3 gap-2">
        <NSCard>
          <div className="col-span-1 flex items-center justify-between">
            <div className="w-[60%]">
              <h1 className="text-xl mb-2">Samsung</h1>
              <p>Sales</p>
              <h1>INR 12,323,3437</h1>
            </div>
            <Progress
              strokeLinecap="butt"
              type="circle"
              percent={25}
              width={70}
              strokeWidth={10}
              strokeColor="rgb(202 138 4)"
            />
          </div>
        </NSCard>
        <NSCard>
          <div className="col-span-1 flex items-center justify-between">
            <div className="w-[60%]">
              <h1 className="text-xl mb-2">Samsung</h1>
              <p>Sales</p>
              <h1>INR 12,323,3437</h1>
            </div>
            <Progress
              strokeLinecap="butt"
              type="circle"
              percent={75}
              width={70}
              strokeWidth={10}
              strokeColor="rgb(107 33 168)"
            />
          </div>
        </NSCard>
        <NSCard>
          <div className="col-span-1 flex items-center justify-between">
            <div className="w-[60%]">
              <h1 className="text-xl mb-2">Whilrpool</h1>
              <p>Sales</p>
              <h1 className="flex flex-wrap">INR 12,323,3437</h1>
            </div>
            <Progress
              strokeLinecap="butt"
              type="circle"
              percent={25}
              width={70}
              strokeWidth={10}
              strokeColor="rgb(139 92 246)"
            />
          </div>
        </NSCard>
      </div>
    </div>
  );
}

export default LeaderMarketShare;
