import React, { useCallback, useState } from "react";
import BusinessTrendsTabs from "../json/BusinessTrendsTabs.json";
import BTTags from "./BTTags";
import BTAnalysis from "./BTAnalysis";
import BTComments from "./BTComments";
import BTAttachments from "./BTAttachments";
import BTSimilar from "./BTSimilar";
import BtShare from "./BtShare";

function BTTabList({ selectedCard, setSelectedCard, cardIndex }) {
  const handleTabComponents = useCallback(() => {
    switch (selectedCard[cardIndex]) {
      case 0:
        return <BTTags />;
      case 1:
        return <BTAnalysis />;
      case 2:
        return <BTComments />;
      case 3:
        return <BTAttachments />;
      case 4:
        return <BTSimilar />;
      case 5:
        return <BtShare />;
      case undefined:
        return <BTTags />;
    }
  }, [selectedCard]);

  const handleChangeStyle = (val) => {
    const isSelectedCard = selectedCard[cardIndex] === val.key;
    const isDefaultCard =
      selectedCard[cardIndex] === undefined && val.key === 0;

    const cardStyle =
      isSelectedCard || isDefaultCard
        ? {
            borderBottom: "3px solid var(--primary-color)",
            fontWeight: "bold",
            color: "#005f86",
          }
        : { borderBottom: "" };

    return cardStyle;
  };

  return (
    <>
      <div className="w-full h-12 mb-4 flex items-center border-b-[1px] border-gray-400 mt-3 overflow-x-auto overflow-y-hidden">
        {BusinessTrendsTabs.map((val, index) => (
          <div
            key={val.key}
            onClick={() => {
              setSelectedCard({ ...selectedCard, [cardIndex]: val?.key });
            }}
            style={handleChangeStyle(val)}
            className="px-6 h-[inherit] flex justify-center items-center cursor-pointer mr-[30px] font-interRegular"
          >
            {val.label}
          </div>
        ))}
      </div>

      {handleTabComponents()}
    </>
  );
}

export default BTTabList;
