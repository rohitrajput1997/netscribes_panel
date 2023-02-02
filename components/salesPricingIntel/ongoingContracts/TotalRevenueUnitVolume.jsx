import Image from "next/image";
import React from "react";
import NSCard from "../../common/NSCard";

function totalRevenueUnitVolume({totalRevenue, totalUnits}) {
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
          <h1 className="text-[1.3rem]">{totalRevenue?.Sales}</h1>
          <p className="bg-orange-200 w-[fit-content] px-2 rounded-full text-orange-600 mt-1">
            +7%
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
          <h1 className="text-[1.3rem]">{totalUnits?.Units}</h1>
          <p className="bg-orange-200 w-[fit-content] px-2 rounded-full text-orange-600 mt-1">
            +7%
          </p>
        </NSCard>
      </div>
    </div>
  );
}

export default totalRevenueUnitVolume;
