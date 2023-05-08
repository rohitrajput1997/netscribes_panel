import Image from "next/image";
import React from "react";
import NSCard from "../../common/NSCard";
import NSLoaderWithMsg from "../../common/NSLoaderWithMsg";
import commaSeperator from "../../../utils/commaSeperator";

function totalRevenueUnitVolume({ totalRevenue, totalUnits, loader = false }) {
  const valOne = String(totalRevenue?.SalesProgressPercentage || 0);
  const valTwo = String(totalRevenue?.VolumeProgressPercentage || 0);
  const sales = totalRevenue?.Sales;
  const units = totalUnits?.Units;

  const ShowTile = ({ icon, sales, percentage, title }) => {
    return (
      <>
        <div className="col-span-1">
          <NSCard>
            <div className="flex items-center">
              <Image
                src={icon}
                alt=""
                width={40}
                height={40}
                className="mr-2"
              />
              <p className="font-interMedium">{title}</p>
            </div>
            {loader ? (
              <NSLoaderWithMsg withMessage={false} />
            ) : (
              <>
                <h1 className="text-[1.3rem] flex items-center">
                  {/* <BiRupee size={25} className="mt-[2px]" /> */}
                  <p className="font-interRegular mr-1 ml-[3.01rem]">
                    INR {commaSeperator(sales)}
                  </p>
                  <p
                    className={`${
                      percentage.includes("-")
                        ? "bg-red-500 text-white"
                        : "bg-green-500 text-white"
                    } w-[fit-content] px-2 rounded-full mt-1 ml-[.5rem] text-[14px] mt-[-3px]`}
                  >
                    {Number(percentage).toFixed(2) + "%"}
                  </p>
                </h1>
              </>
            )}
          </NSCard>
        </div>
      </>
    );
  };

  return (
    <div className="grid grid-cols-2 gap-2 mt-2">
      <ShowTile
        icon={"./assets/Group 691.svg"}
        percentage={valOne}
        sales={sales}
        title={"Total Revenue"}
      />
      <ShowTile
        icon={"./assets/Group 692.svg"}
        percentage={valTwo}
        sales={units}
        title={"Total Unit Volume"}
      />
    </div>
  );
}

export default totalRevenueUnitVolume;
