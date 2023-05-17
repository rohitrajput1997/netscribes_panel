import Image from "next/image";
import React, { useState } from "react";
import NSCard from "../common/NSCard";
import RecentVisits from "../json/HomeRecentVisits";

function HomeRecentVisits() {
  const [collapsible, setCollapsible] = useState(true);

  return (
    <div className="col-span-1 max-h-[39rem]">
      <NSCard
        style={{ padding: "9px 13px" }}
        className={`${
          collapsible
            ? "h-full duration-150 ease-in-out"
            : "h-[2.7rem] overflow-y-hidden duration-700 ease-in-out"
        } cursor-pointer`}
      >
        <div
          className="flex justify-between items-center"
          onClick={() => setCollapsible(!collapsible)}
        >
          <h1 className="text-[1.3rem] font-interSemiBold">Recent Visits</h1>
          <h4 className="text-[1.1rem] text-[#005f86] font-interMedium">
            Seek
          </h4>
        </div>
        <hr className="border-b-1 border-cyan-500 my-1" />

        {RecentVisits.map((listItem, index) => (
          <div className="flex items-center mb-2 cursor-pointer" key={index}>
            <Image
              src="./assets/Polygon 32.svg"
              alt="roket-tag"
              width={10}
              height={10}
            />
            <p className="text-[1rem] text-[#005f86] ml-3 my-1 font-interMedium">
              {listItem.label}
            </p>
          </div>
        ))}
      </NSCard>
    </div>
  );
}

export default HomeRecentVisits;
