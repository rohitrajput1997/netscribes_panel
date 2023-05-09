import { Image, Progress } from "antd";
import React from "react";
import NSCard from "../../common/NSCard";

function LeaderMarketShare({ cardData }) {
  const colorsData = ["rgb(202 138 4)", "rgb(107 33 168)", "rgb(139 92 246)"];

  const showIcon = (brand) => {
    switch (brand) {
      case "Samsung":
        return (
          <Image src="/assets/samsung1.png" alt="" width={100} height={20} preview={false} />
        );
      case "Whirlpool":
        return (
          <Image src="/assets/whirlpool.png" alt="" width={100} height={25} preview={false} />
        );
    }
  };

  return (
    <div>
      <h1 className="text-[1.2rem] my-5 font-interSemiBold">
        Leader as per Market Share
      </h1>
      <div className="grid grid-cols-3 gap-2">
        {cardData?.map((data, index) => (
          <NSCard key={index}>
            <div className="col-span-1 flex items-center justify-between">
              <div className="w-[60%]">
                {/* <h1 className="text-xl mb-2 font-interMedium">{data?.Brand}</h1> */}
                {showIcon(data?.Brand)}
                <p className="font-interMedium">Sales</p>
                <h1 className="font-interRegular">INR {data?.Sales}</h1>
              </div>
              <Progress
                strokeLinecap="butt"
                type="circle"
                percent={25}
                width={70}
                strokeWidth={10}
                strokeColor={colorsData[index]}
              />
            </div>
          </NSCard>
        ))}
        {/* <NSCard>
          <div className="col-span-1 flex items-center justify-between">
            <div className="w-[60%]">
              <h1 className="text-xl mb-2">Samsung</h1>
              <p>Sales</p>
              <h1>INR 12,323,3437</h1>
            </div>
            <Progress
              strokeLinecap="butt"
              type="circle"
              percent={75}
              width={70}
              strokeWidth={10}
              strokeColor="rgb(107 33 168)"
            />
          </div>
        </NSCard>
        <NSCard>
          <div className="col-span-1 flex items-center justify-between">
            <div className="w-[60%]">
              <h1 className="text-xl mb-2">Whilrpool</h1>
              <p>Sales</p>
              <h1 className="flex flex-wrap">INR 12,323,3437</h1>
            </div>
            <Progress
              strokeLinecap="butt"
              type="circle"
              percent={25}
              width={70}
              strokeWidth={10}
              strokeColor="rgb(139 92 246)"
            />
          </div>
        </NSCard> */}
      </div>
    </div>
  );
}

export default LeaderMarketShare;
