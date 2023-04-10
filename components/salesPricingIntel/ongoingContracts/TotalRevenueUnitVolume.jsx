import Image from "next/image";
import React from "react";
import NSCard from "../../common/NSCard";
import { BiRupee } from "react-icons/bi";
import NSLoaderWithMsg from "../../common/NSLoaderWithMsg";
import commaSeperator from "../../../utils/commaSeperator";

function totalRevenueUnitVolume({ totalRevenue, totalUnits, loader = false }) {
  const valOne = "+7%";
  const valTwo = "-7%";
  const sales = totalRevenue?.Sales;
  const units = totalUnits?.Units;

  return (
    <div className="grid grid-cols-2 gap-2 mt-2">
      <div className="col-span-1">
        <NSCard>
          <div className="flex items-center">
            <Image
              src="./assets/Group 691.svg"
              alt=""
              width={40}
              height={40}
              className="mr-2"
            />
            <p className="font-interMedium">Total Revenue</p>
          </div>
          {loader ? (
            <NSLoaderWithMsg withMessage={false} />
          ) : (
            <>
              <h1 className="text-[1.3rem] flex items-center">
                {/* <BiRupee size={25} className="mt-[2px]" /> */}
                <p className="font-interRegular mr-1 ml-[3.01rem]">
                  INR{" "}{commaSeperator(sales)}
                </p>
              </h1>
              <p
                className={`${
                  valOne.includes("-")
                    ? "bg-red-500 text-white"
                    : "bg-green-500 text-white"
                } w-[fit-content] px-2 rounded-full mt-1 ml-[3.01rem]`}
              >
                {valOne}
              </p>
            </>
          )}
        </NSCard>
      </div>
      <div className="col-span-1">
        <NSCard>
          <div className="flex items-center">
            <Image
              src="./assets/Group 692.svg"
              alt=""
              width={40}
              height={40}
              className="mr-2"
            />
            <p className="font-interMedium">Total Unit Volume</p>
          </div>
          {loader ? (
            <NSLoaderWithMsg withMessage={false} />
          ) : (
            <>
              <h1 className="text-[1.3rem] flex items-center">
                {/* <BiRupee size={25} className="mt-[2px]" /> */}
                <p className="font-interRegular mr-1">
                  <span className="ml-[3.01rem]">{commaSeperator(units)}</span>
                </p>
              </h1>
              <p
                className={`${
                  valTwo.includes("-")
                    ? "bg-red-500 text-white"
                    : "bg-green-500 text-white"
                } w-[fit-content] px-2 rounded-full mt-1 ml-[3.01rem]`}
              >
                {valTwo}
              </p>
            </>
          )}
        </NSCard>
      </div>
    </div>
  );
}

export default totalRevenueUnitVolume;
