import React, { useState } from "react";
import NSCard from "../common/NSCard";
import Image from "next/image";
import CommaSeperator from "../../utils/commaSeperator";

function IWCollapsibleTable({
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
  const [collapsible, setColapsible] = useState(0);

  return (
    <NSCard className="mb-2" style={style}>
      <>
        <div className="flex justify-between">
          <div className="flex">
            {showIcon && <Image src={image} alt="Tag" width={18} height={18} />}
            <h1 className="text-[1rem] ml-2 font-interMedium">{title}</h1>
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
            {/* <BiRupee size={25} className="mt-[2px]" /> */}
            <p className="font-interRegular mr-1 mt-[2px]">
              {showCurrency && total ? "INR" : ""}
            </p>
            <h1>{commaSeperator(total || "")}</h1>
          </h1>
        )}

        <div
          className="mt-2"
          style={
            collapsible === 0
              ? { height: "auto" }
              : { height: "22px", overflow: "hidden" }
          }
        >
          <div
            className="flex justify-between bg-blue-200 rounded-full px-2 mb-2 cursor-pointer"
            onClick={() => setColapsible(collapsible === 0 ? 1 : 0)}
          >
            <h1 className="text-[#005f86] text-start flex items-center w-[33%] text-[.8rem] font-interMedium">
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
            <h1 className="text-[#005f86] text-center w-[33%] text-[.8rem] font-interMedium">
              {headers?.one?.headerTwo}
            </h1>
            <h1 className="text-[#005f86] text-end w-[33%] text-[.8rem] font-interMedium">
              {headers?.one?.headerThree}
            </h1>
          </div>
          <div className="max-h-[50px] overflow-y-scroll">
            {tableData?.[0]?.map((_, index) => (
              <div
                className="flex justify-between px-2 mb-1 font-interRegular"
                key={index}
              >
                <h1 className="text-start w-[33%]">
                  {_?.[header_keys[0] || ""].replaceAll("_", " ")}
                </h1>
                <h1 className="text-center w-[33%]">
                  {_?.[header_keys[1] || ""]}
                </h1>
                <h1 className="text-end text-[#005f86] w-[33%]">
                  {_?.[header_keys?.[2]]}
                </h1>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-2"
          style={
            collapsible === 1
              ? { height: "auto" }
              : { height: "22px", overflow: "hidden" }
          }
        >
          <div
            className="flex justify-between bg-blue-200 rounded-full px-2 mb-2 cursor-pointer"
            onClick={() => setColapsible(collapsible === 1 ? 0 : 1)}
          >
            <h1 className="text-[#005f86] text-start flex items-center w-[33%] text-[.8rem] font-interMedium">
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
            <h1 className="text-[#005f86] text-center w-[33%] text-[.8rem] font-interMedium">
              {headers?.one?.headerTwo}
            </h1>
            <h1 className="text-[#005f86] text-end w-[33%] text-[.8rem] font-interMedium">
              {headers?.one?.headerThree}
            </h1>
          </div>
          <div className="max-h-[50px] overflow-y-scroll">
            {tableData?.[1]?.map((_) => (
              <div
                className="flex justify-between px-2 mb-1 font-interRegular"
                key={_}
              >
                <h1 className="text-start w-[33%]">
                  {_?.[header_keys[0]].replaceAll("_", " ")}
                </h1>
                <h1 className="text-center w-[33%]">{_?.[header_keys[1]]}</h1>
                <h1 className="text-end text-[#005f86] w-[33%]">
                  {_?.[header_keys?.[2]]}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </>
    </NSCard>
  );
}

export default IWCollapsibleTable;