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
              <h1>12,323,343,767,856,43</h1>
            </div>
            <Progress
              strokeLinecap="butt"
              type="circle"
              percent={75}
              width={70}
              strokeWidth={10}
            />
          </div>
        </NSCard>
        <NSCard>
          <div className="col-span-1 flex items-center justify-between">
            <div className="w-[60%]">
              <h1 className="text-xl mb-2">Samsung</h1>
              <p>Sales</p>
              <h1>12,323,343,767,856,43</h1>
            </div>
            <Progress
              strokeLinecap="butt"
              type="circle"
              percent={75}
              width={70}
              strokeWidth={10}
            />
          </div>
        </NSCard>
        <NSCard>
          <div className="col-span-1 flex items-center justify-between">
            <div className="w-[60%]">
              <h1 className="text-xl mb-2">Samsung</h1>
              <p>Sales</p>
              <h1>12,323,343,767,856,43</h1>
            </div>
            <Progress
              strokeLinecap="butt"
              type="circle"
              percent={75}
              width={70}
              strokeWidth={10}
            />
          </div>
        </NSCard>
      </div>
    </div>
  );
}

export default LeaderMarketShare;
