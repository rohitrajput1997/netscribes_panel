import Image from "next/image";
import React from "react";
import NSCard from "../common/NSCard";
import RecentVisits from "../json/HomeRecentVisits";

function HomeRecentVisits() {
  return (
    <div className="col-span-1">
      <NSCard style={{ padding: "1.3rem" }} className='h-full'>
        <div className="flex justify-between items-center">
          <h1 className="text-[1.3rem]">Recent Visits</h1>
          <h4 className="text-[1.1rem] text-[#005f86] font-semibold">Seek</h4>
        </div>
        <hr className="border-b-1 border-cyan-500 my-4" />

        {RecentVisits.map((listItem, index) => (
          <div className="flex items-center mb-2 " key={index}>
            <Image
              src="./assets/Polygon 32.svg"
              alt="roket-tag"
              width={10}
              height={10}
            />
            <p className="text-[1rem] text-[#005f86] ml-3 my-1">
              {listItem.label}
            </p>
          </div>
        ))}
      </NSCard>
    </div>
  );
}

export default HomeRecentVisits;
