/** @format */

import Image from "next/image";
import React from "react";
import NSCard from "../../common/NSCard";
import { BiRupee } from "react-icons/bi";
import NSLoaderWithMsg from "../../common/NSLoaderWithMsg";

function SalesAndAvgUnitValue({
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
}) {
  return (
    <NSCard className="mb-2" style={style}>
      {loader ? (
        <NSLoaderWithMsg style={{ marginTop: "2rem" }} withMessage={false} />
      ) : (
        <>
          <div className="flex justify-between">
            <div className="flex">
              {showIcon && (
                <Image src={image} alt="Tag" width={18} height={18} />
              )}
              <h1 className="text-[1rem] ml-2">{title}</h1>
            </div>
            {showPlue && (
              <Image
                src="../assets/Group 698.svg"
                alt="Tag"
                width={22}
                height={22}
              />
            )}
          </div>
          {showCount && (
            <h1 className="text-[1.6rem] flex items-center">
              <BiRupee size={25} className="mt-[2px]" />
              <h1>{total}</h1>
            </h1>
          )}

          <div className="mt-2">
            <div className="flex justify-between bg-orange-200 rounded-full px-2 mb-2">
              <h1 className="text-orange-500 text-start flex items-center w-[33%] text-[.8rem]">
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
              </h1>
              <h1 className="text-orange-500 text-center w-[33%] text-[.8rem]">
                {headers?.one?.headerTwo}
              </h1>
              <h1 className="text-orange-500 text-end w-[33%] text-[.8rem]">
                {headers?.one?.headerThree}
              </h1>
            </div>
            <div className="max-h-[50px] overflow-y-scroll">
              {tableData?.[0]?.map((_, index) => (
                <div className="flex justify-between px-2 mb-1" key={index}>
                  <h1 className="text-start w-[33%]">
                    {_?.[header_keys[0] || ""]}
                  </h1>
                  <h1 className="text-center w-[33%]">
                    {_?.[header_keys[1] || ""]}
                  </h1>
                  <h1 className="text-end text-orange-500 w-[33%]">
                    {parseFloat(_?.[header_keys?.[2] || ""])?.toFixed(2)}%
                  </h1>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-2">
            <div className="flex justify-between bg-pink-200 rounded-full px-2 mb-2">
              <h1 className="text-pink-500 text-start flex items-center w-[33%] text-[.8rem]">
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
              </h1>
              <h1 className="text-pink-500 text-center w-[33%] text-[.8rem]">
                {headers?.one?.headerTwo}
              </h1>
              <h1 className="text-pink-500 text-end w-[33%] text-[.8rem]">
                {headers?.one?.headerThree}
              </h1>
            </div>
            <div className="max-h-[50px] overflow-y-scroll">
              {tableData?.[1]?.map((_) => (
                <div className="flex justify-between px-2 mb-1" key={_}>
                  <h1 className="text-start w-[33%]">{_?.[header_keys[0]]}</h1>
                  <h1 className="text-center w-[33%]">{_?.[header_keys[1]]}</h1>
                  <h1 className="text-end text-orange-500 w-[33%]">
                    {parseFloat(_?.[header_keys?.[2] || ""])?.toFixed(2)}%
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </NSCard>
  );
}

export default SalesAndAvgUnitValue;
