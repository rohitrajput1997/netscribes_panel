import Image from "next/image";
import React from "react";
import NSCard from "../../common/NSCard";

const RepricingHighlightsTileTwo = ({ title, subtitle, showupDownArrow }) => {
  return (
    <NSCard className="max-h-[250px] overflow-y-scroll relative" style={{backgroundColor: 'var(--pure)'}}>
      <div className="sticky top-[-10px]">
        <h4 className="font-interSemiBold">{title}</h4>
        <h1
          className={`font-interSemiBold text-xl ${
            subtitle ? "text-black" : "text-[var(--pure)]"
          }`}
        >
          {subtitle || "Nothing"}
        </h1>
      </div>
      <div className="col-span-1">
        <div className="mt-2">
          <div className="flex justify-between bg-blue-200 rounded-full px-2 mb-2 font-interMedium">
            <h1 className="text-[#005f86] text-start flex items-center">
              {showupDownArrow && (
                <Image
                  src="./assets/arrow-small-up.svg"
                  alt="tag"
                  width={8}
                  height={8}
                  className="mr-2"
                />
              )}
              Fastest Player
            </h1>
            <h1 className="text-[#005f86] text-center">Units</h1>
            <h1 className="text-[#005f86] text-end">Q-o-Q</h1>
          </div>
          <div className="max-h-[50px] overflow-y-scroll font-interRegular">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_) => (
              <div className="flex justify-between px-2 mb-1" key={_}>
                <h1 className="text-start">Samsung</h1>
                <h1 className="text-center">84,545</h1>
                <h1 className="text-end text-[#005f86]">+17%</h1>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2">
          <div className="flex justify-between bg-blue-200 rounded-full px-2 mb-2 font-interMedium">
            <h1 className="text-[#005f86] text-start flex items-center">
              {showupDownArrow && (
                <Image
                  src="./assets/arrow-small-up-1.svg"
                  alt="tag"
                  width={8}
                  height={8}
                  className="mr-2"
                />
              )}{" "}
              Fastest Player
            </h1>
            <h1 className="text-[#005f86] text-center">Units</h1>
            <h1 className="text-[#005f86] text-end">Q-o-Q</h1>
          </div>
          <div className="max-h-[50px] overflow-y-scroll font-interRegular">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_) => (
              <div className="flex justify-between px-2 mb-1" key={_}>
                <h1 className="text-start">Samsung</h1>
                <h1 className="text-center">84,545</h1>
                <h1 className="text-end text-[#005f86]">+17%</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </NSCard>
  );
};

export default RepricingHighlightsTileTwo;
