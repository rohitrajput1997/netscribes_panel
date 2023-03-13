import { Tooltip } from "antd";
import Image from "next/image";
import React from "react";
import CommaSeperator from "../../../utils/commaSeperator";
import NSCard from "../../common/NSCard";
import NSLoaderWithMsg from "../../common/NSLoaderWithMsg";

function ProductAndOptimization({ product, optimization, loader }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <NSCard className="col-span-1">
        <div className="flex items-center">
          <Image src="./assets/Group 691.svg" alt="" width={30} height={30} />
          <h1 className="text-gray-500 font-MontMedium ml-2">Products</h1>
        </div>
        {loader ? (
          <NSLoaderWithMsg />
        ) : (
          <div className="flex">
            <div className="w-[50%] border-r-[1px] border-black">
              <Tooltip title={CommaSeperator(product?.Actual_Revenue || 0)}>
                <h1 className="text-2xl font-MontBold">
                  INR {CommaSeperator(product?.Actual_Revenue || 0)}
                </h1>
              </Tooltip>
              <p className="text-gray-500 font-MontMedium">Revenue</p>
            </div>
            <div className="w-[50%] pl-4">
              <Tooltip
                title={product?.Missing_data || CommaSeperator("89208667")}
              >
                <h1 className="text-2xl font-MontBold truncate">
                  INR {product?.Missing_data || CommaSeperator("89208667")}
                </h1>
              </Tooltip>
              <p className="text-gray-500 font-MontMedium">Missing Data</p>
            </div>
          </div>
        )}
      </NSCard>
      <NSCard className="col-span-1">
        <div className="flex items-center">
          <Image src="./assets/Group 692.svg" alt="" width={30} height={30} />
          <h1 className="text-gray-500 font-MontMedium ml-2">Optimization</h1>
        </div>
        {loader ? (
          <NSLoaderWithMsg />
        ) : (
          <div className="flex">
            <div className="w-[50%] border-r-[1px] border-black">
              <h1 className="text-2xl font-MontBold">
                {optimization?.Model || "Revenue"}
              </h1>
              <p className="text-gray-500 font-MontMedium">Model</p>
            </div>
            <div className="w-[50%] pl-4">
              <h1 className="text-2xl font-MontBold">
                {optimization?.Limits || 3}
              </h1>
              <p className="text-gray-500 font-MontMedium">Limits</p>
            </div>
          </div>
        )}
      </NSCard>
    </div>
  );
}

export default ProductAndOptimization;
