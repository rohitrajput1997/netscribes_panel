import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import NSCard from "../common/NSCard";
import BusinessTrendsCard from "../json/BussinessTrendsCard.json";
import BTTabList from "./BTTabList";

function BTList() {
  const [selectedCard, setSelectedCard] = useState({});

  return (
    <>
      <div className="w-[80%] p-2">
        <h1 className="font-interSemiBold pb-3 text-xl">News</h1>
        {BusinessTrendsCard.map((item, index) => {
          return (
            <>
              <NSCard
                className="mb-4 p-6 drop-shadow-md"
                style={{
                  minHeight: "270px",
                  border: "2px solid var(--bg-second)",
                }}
              >
                <div className="w-[100%] min-h-full">
                  <div className="w-full flex">
                    <div className="w-[200px] aspect-square bg-slate-200 mr-4 rounded-[15px] flex justify-center items-center text-white text-[1.3rem]">
                      Image
                    </div>
                    <div className="w-full">
                      <div className="flex justify-between items-center">
                        <h1 className="w-[fit-content] bg-slate-200 py-1 px-3 rounded-full font-interRegular">
                          {item.title}
                        </h1>

                        <BiDotsVerticalRounded
                          size={15}
                          className="cursor-pointer"
                        />
                      </div>
                      <div>
                        <h1 className="py-2 font-interRegular">{item.date}</h1>
                        <h3 className="font-interSemiBold mb-1">
                          {item.paraOne}
                        </h3>
                        <h1 className="font-interRegular">{item.paraTwo}</h1>
                      </div>
                    </div>
                  </div>

                  {BTTabList({
                    selectedCard,
                    setSelectedCard,
                    cardIndex: index,
                  })}
                </div>
              </NSCard>
            </>
          );
        })}
      </div>
    </>
  );
}

export default BTList;
