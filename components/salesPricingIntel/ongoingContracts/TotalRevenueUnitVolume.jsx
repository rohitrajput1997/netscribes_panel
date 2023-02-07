import Image from "next/image";
import React from "react";
import NSCard from "../../common/NSCard";
import { BiRupee } from "react-icons/bi";

function totalRevenueUnitVolume({ totalRevenue, totalUnits }) {
  const valOne = "+7%";
  const valTwo = "-7%";

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
            <p>Total Revenue</p>
          </div>
          <h1 className="text-[1.3rem] flex items-center">
            <BiRupee size={25} className="mt-[2px]" />
            {totalRevenue?.Sales}
          </h1>
          <p className={`${valOne.includes('-') ? 'bg-red-500 text-white' : 'bg-green-500 text-white'} w-[fit-content] px-2 rounded-full mt-1`}>
            {valOne}
          </p>
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
            <p>Total Unit Volume</p>
          </div>
          <h1 className="text-[1.3rem] flex items-center">
            <BiRupee size={25} className="mt-[2px]" />
            {totalUnits?.Units}
          </h1>
          <p
            className={`${valTwo.includes('-') ? 'bg-red-500 text-white' : 'bg-green-500 text-white'} w-[fit-content] px-2 rounded-full mt-1`}
          >
            {valTwo}
          </p>
        </NSCard>
      </div>
    </div>
  );
}

export default totalRevenueUnitVolume;
