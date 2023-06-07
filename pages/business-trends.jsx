import Image from "next/image";
import React from "react";
import NSCard from "../components/common/NSCard";
import NSLayout from "../components/common/NSLayout";
import BusinessTrendsSidebar from "../components/json/BusinesstrendsSidebar.json";
import NSDropdown from "../components/common/NSDropdown";
import BusinessTrendsCard from "../components/json/BussinessTrendsCard.json";
import { BiDotsVerticalRounded } from "react-icons/bi";
import BusinessTrendsTabs from "../components/json/BusinessTrendsTabs.json";

const BusinessTrends = () => {
  return (
    <NSLayout>
      <NSCard
        className="bg-[var(--pure)]"
        style={{ padding: 0, overflow: "hidden" }}
      >
        <div className="flex w-[100%] gap-2">
          <div className="w-[20%] my-2">
            {BusinessTrendsSidebar.map((item) => {
              return (
                <>
                  {item?.key === 11 && (
                    <NSDropdown className="w-[200px] mx-4 mb-4" options={[]} />
                  )}
                  <div
                    key={item.key}
                    className="w-full bg-white h-14 mb-0 px-4 font-interMedium"
                  >
                    {item.label}
                  </div>
                </>
              );
            })}
          </div>
          <div className="w-[80%] bg-cyan-100 p-2">
            <h1 className="px-4 font-interMedium">News</h1>
            {BusinessTrendsCard.map((item) => {
              return (
                <>
                  <NSCard className="mb-4" style={{ minHeight: "200px" }}>
                    <div className="w-[100%] min-h-full">
                      <div className="w-full flex">
                        <div className="w-[130px] h-[130px] bg-slate-200 mr-4 rounded-[15px]"></div>
                        <div className="w-full">
                          <div className="flex justify-between items-center">
                            <h1 className="w-[fit-content] bg-green-200 py-1 px-3 rounded-full">
                              Jitendra
                            </h1>

                            <BiDotsVerticalRounded />
                          </div>
                          <div>
                            <h1>6/6/2023</h1>
                            <h3 className="font-interSemiBold">
                              The best refrigrator to buy in 2023,according to
                              our readers (and it,s on sale)
                            </h3>
                            <h1>
                              CBS essential created independently from the CBS
                              news staff,we may recieve some comissions from
                              some links to products on this page
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className=" w-full h-12 mb-4 flex items-center border-b-[1px] border-gray-400">
                        {BusinessTrendsTabs.map((val, index) => (
                          <div
                            key={val.key}
                            onClick={() => {}}
                            style={{                              
                              fontWeight: "bold",
                              color: "grey",
                              borderBottom: "2px solid black",
                            }}
                            className="w-auto h-[inherit] flex justify-center items-center cursor-pointer mr-[30px]"
                          >
                            {val.label}
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* <div className="grid grid-cols-12 gap-3">
                      <div className="col-span-2 mt-4 mb-2 ml-4">
                        <Image
                          src={item.icon}
                          alt={item.icon}
                          width={100}
                          height={100}
                          // className="filter invert"
                        />
                      </div>
                      <div className="col-span-6">
                        <h1>6/6/2023</h1>
                        <h3 className="font-interSemiBold">
                          The best refrigrator to buy in 2023,according to our
                          readers (and it,s on sale)
                        </h3>
                        <h1>
                          CBS essential created independently from the CBS news
                          staff,we may recieve some comissions from some links
                          to products on this page
                        </h1>
                      </div>
                    </div> */}
                  </NSCard>
                </>
              );
            })}
          </div>
        </div>
      </NSCard>
    </NSLayout>
  );
};

export default BusinessTrends;
