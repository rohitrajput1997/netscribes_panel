/** @format */

import Image from "next/image";
import React from "react";
import NSCard from "../../common/NSCard";
import { BiRupee } from "react-icons/bi";
import NSLoaderWithMsg from "../../common/NSLoaderWithMsg";
import commaSeperator from "../../../utils/commaSeperator";

function NewSalesAndAvgUnitValue({
  image,
  title,
  showPlue,
  showupDownArrow = true,
  showCount = true,
  showIcon = true,
  style,
  headers,
  tableData,
  total,
  header_keys = [],
  loader = false,
  showCurrency = true,
}) {
  return (
    <NSCard className="mb-2" style={style}>
      <>
        <div className="w-full flex justify-end">
          {showCount && (
            <h1 className="text-[1.6rem] mr-[2.4rem]">
              {commaSeperator(total)}
            </h1>
          )}
          {showPlue && (
            <Image
              src="../assets/Group 698.svg"
              alt="Tag"
              width={22}
              height={22}
            />
          )}
        </div>

        <div className="mt-2">
          <div className="flex justify-between rounded-full px-2 mb-2 bg-blue-200">
            {/* <h1 className="text-orange-500 text-start flex items-center w-[33%] text-[.8rem] font-interMedium">
                {showupDownArrow && (
                  <Image
                    src="./assets/arrow-small-up.svg"
                    alt="tag"
                    width={8}
                    height={8}
                    className="mr-2"
                  />
                )}
                {headers?.one?.headerOne}
              </h1> */}
            <h1 className="text-[var(--secondary)] text-center w-[33%] text-[.8rem] font-interBold">
              {headers?.one?.headerTwo}
            </h1>
            <h1 className="text-[var(--secondary)] text-center w-[33%] text-[.8rem] font-interBold">
              {headers?.one?.headerThree}
            </h1>
          </div>
          <hr />

          <div className="max-h-[50px] overflow-y-scroll">
            {tableData?.[0]?.map((_, index) => (
              <div
                className="flex justify-between px-2 mb-1 font-interRegular"
                key={index}
              >
                {/* <h1 className="text-start w-[33%]">
                    {_?.[header_keys[0] || ""].replaceAll("_", " ")}
                  </h1> */}
                <h1 className="text-center w-[33%]">
                  {_?.[header_keys[1] || ""]}
                </h1>
                <h1 className="text-center text-[var(--secondary)] w-[33%]">
                  {parseFloat(_?.[header_keys?.[2] || ""])?.toFixed(2)}%
                </h1>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2">
          <div className="flex justify-between rounded-full px-2 mb-2 bg-blue-200">
            {/* <h1 className="text-pink-500 text-start flex items-center w-[33%] text-[.8rem] font-interMedium">
                {showupDownArrow && (
                  <Image
                    src="./assets/arrow-small-up-1.svg"
                    alt="tag"
                    width={8}
                    height={8}
                    className="mr-2"
                  />
                )}{" "}
                {headers?.two?.headerOne}
              </h1> */}
            <h1 className="text-[var(--secondary)] text-center w-[33%] text-[.8rem] font-interBold">
              {headers?.one?.headerTwo}
            </h1>
            <h1 className="text-[var(--secondary)] text-center w-[33%] text-[.8rem] font-interBold">
              {headers?.one?.headerThree}
            </h1>
          </div>
          <hr />

          <div className="max-h-[50px] overflow-y-scroll">
            {tableData?.[1]?.map((_) => (
              <div
                className="flex justify-between px-2 mb-1 font-interRegular"
                key={_}
              >
                {/* <h1 className="text-start w-[33%]">
                    {_?.[header_keys[0]].replaceAll("_", " ")}
                  </h1> */}
                <h1 className="text-center w-[33%]">{_?.[header_keys[1]]}</h1>
                <h1 className="text-center text-[var(--secondary)] w-[33%]">
                  {parseFloat(_?.[header_keys?.[2] || ""])?.toFixed(2)}%
                </h1>
              </div>
            ))}
          </div>
        </div>
      </>
    </NSCard>
  );
}

export default NewSalesAndAvgUnitValue;
