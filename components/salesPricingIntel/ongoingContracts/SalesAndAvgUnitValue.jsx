import Image from "next/image";
import React from "react";
import NSCard from "../../common/NSCard";

function SalesAndAvgUnitValue({
  image,
  title,
  showPlue,
  showupDownArrow = true,
  showCount = true,
  showIcon = true,
  style,
}) {
  return (
    <NSCard className="mb-2" style={style}>
      <div className="flex justify-between">
        <div className="flex">
          {showIcon && <Image src={image} alt="Tag" width={18} height={18} />}
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
      {showCount && <h1 className="text-[1.6rem]">1,45,332</h1>}

      <div className="mt-2">
        <div className="flex justify-between bg-orange-200 rounded-full px-2 mb-2">
          <h1 className="text-orange-500 text-start flex items-center">
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
          <h1 className="text-orange-500 text-center">Units</h1>
          <h1 className="text-orange-500 text-end">Q-o-Q</h1>
        </div>
        <div className="max-h-[50px] overflow-y-scroll">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_) => (
            <div className="flex justify-between px-2 mb-1" key={_}>
              <h1 className="text-start">Samsung</h1>
              <h1 className="text-center">84,545</h1>
              <h1 className="text-end text-orange-500">+17%</h1>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2">
        <div className="flex justify-between bg-pink-200 rounded-full px-2 mb-2">
          <h1 className="text-pink-500 text-start flex items-center">
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
          <h1 className="text-pink-500 text-center">Units</h1>
          <h1 className="text-pink-500 text-end">Q-o-Q</h1>
        </div>
        <div className="max-h-[50px] overflow-y-scroll">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_) => (
            <div className="flex justify-between px-2 mb-1" key={_}>
              <h1 className="text-start">Samsung</h1>
              <h1 className="text-center">84,545</h1>
              <h1 className="text-end text-orange-500">+17%</h1>
            </div>
          ))}
        </div>
      </div>
    </NSCard>
  );
}

export default SalesAndAvgUnitValue;
