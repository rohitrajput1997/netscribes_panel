import React, { useState } from "react";
import Image from "next/image";
import NSCard from "../components/common/NSCard";
import NSProfileLayout from "../components/common/NSProfileLayout";
import PricingAndPromotions from "../components/json/PricingAndPromotions";
import NSInput from "../components/common/NSInput";

const profile = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <NSProfileLayout>
      <div className="w-[85vw] mx-auto">
        <h1 className="text-[1.3rem] my-3 font-MontBold">
          Pricing and Promotions
        </h1>
        <NSCard className="min-h-[400px]" style={{ padding: "32px" }}>
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-1 border-r-[1px] border-gray-300 min-h-[400px]">
              {PricingAndPromotions.map((_, index) => (
                <div
                  key={index}
                  className={`flex py-2 px-4 w-fit mb-4 rounded-full cursor-pointer text-[1rem] ${
                    selectedTab === index
                      ? "bg-[var(--secondary)] text-[var(--pure)] font-MontMedium"
                      : ""
                  }`}
                  // onClick={() => setSelectedTab(index)}
                >
                  <Image
                    src={_.icon}
                    alt={_.label}
                    width={15}
                    height={15}
                    className={selectedTab === index ? "filter invert" : ""}
                  />
                  <h1 className="text-[1rem] ml-3">{_.label}</h1>
                </div>
              ))}
            </div>
            <div className="col-span-3 ml-4">
              <form action="" className="w-[50%]">
                <NSInput
                  type="text"
                  title="Email"
                  className="text-gray-500"
                  placeholder="johndoe@netscribes.com"
                />
                <NSInput
                  type="text"
                  title="Name"
                  className="text-gray-500"
                  placeholder="John Doe"
                />
                <NSInput type="text" title="Intelligence Opted" />
                <div className="flex mt-3">
                  <Image
                    src="../assets/Group 698.svg"
                    alt="plus-tag"
                    width={25}
                    height={25}
                  />
                  <p className="pl-4 text-orange-600 text-[1.1rem] font-MontMedium">
                    Add Intelligence
                  </p>
                </div>
              </form>
            </div>
          </div>
        </NSCard>
      </div>
    </NSProfileLayout>
  );
};

export default profile;
