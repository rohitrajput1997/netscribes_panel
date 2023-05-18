import { Tooltip } from "antd";
import Image from "next/image";
import React from "react";
import CommaSeperator from "../../../utils/commaSeperator";
import NSCard from "../../common/NSCard";

function ProductAndOptimization({ product, optimization }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <NSCard className="col-span-1">
        <div className="flex items-center">
          <Image src="./assets/Group 691.svg" alt="" width={30} height={30} />
          <h1 className="text-gray-500 font-interSemiBold ml-2">Products</h1>
        </div>
        <div className="flex">
          <div className="w-[39px]"></div>
          <div className="w-[50%] border-r-[1px] border-black truncate">
            <Tooltip title={CommaSeperator(product?.Actual_Revenue || 0)}>
              <h1 className="text-2xl font-interMedium truncate">
                INR {CommaSeperator(product?.Actual_Revenue || 0)}
              </h1>
            </Tooltip>
            <p className="text-gray-500 font-interMedium">Revenue</p>
          </div>
          <div className="w-[45%] pl-4">
            <Tooltip title={CommaSeperator(product?.Actual_Units || 0) || 0}>
              <h1 className="text-2xl font-interMedium truncate">
                {CommaSeperator(product?.Actual_Units || 0) || 0}
              </h1>
            </Tooltip>
            <p className="text-gray-500 font-interMedium">Sold SKU count</p>
          </div>
        </div>
      </NSCard>
      <NSCard className="col-span-1">
        <div className="flex items-center">
          <Image src="./assets/Group 692.svg" alt="" width={30} height={30} />
          <h1 className="text-gray-500 font-interSemiBold ml-2">
            Optimization
          </h1>
        </div>
        <div className="flex">
          <div className="w-[42px]"></div>
          <div className="w-[50%] border-r-[1px] border-black">
            <h1 className="text-2xl font-interMedium">
              {optimization?.Model || "Revenue"}
            </h1>
            <p className="text-gray-500 font-interMedium">Model</p>
          </div>
          <div className="w-[50%] pl-4">
            <h1 className="text-2xl font-interMedium">
              {optimization?.Limits || 3}
            </h1>
            <p className="text-gray-500 font-interMedium">Limits</p>
          </div>
        </div>
      </NSCard>
    </div>
  );
}

export default ProductAndOptimization;
