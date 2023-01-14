import React from "react";
import NSCard from "../common/NSCard";
import SuggestedHighlitesTiles from "./SuggestedHighlitesTiles";

function HomeHighlights() {
  return (
    <>
      <NSCard style={{ padding: "1.3rem", marginTop: '10px' }}>
        <h1 className="pb-3 text-[1.2rem]">5 start Rated Refrigerators</h1>
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-1">
            <SuggestedHighlitesTiles
              image="/assets/Path 1799.svg"
              title="Newness"
              content="5 new SKUs added last month"
              bg="bg-orange-200"
              borderColor="border-orange-200"
            />
            <SuggestedHighlitesTiles
              image="/assets/Path 1799.svg"
              title="Revival"
              content="3 older than a month SKus re-added last month"
              bg="bg-orange-200"
            />
          </div>

          <div className="col-span-1">
            <SuggestedHighlitesTiles
              image="/assets/Group 685.svg"
              title="Competitiveness"
              content="Brands A and B ranked 1 and 2 in unit sales value, volume"
              bg="bg-orange-200"
            />
            <SuggestedHighlitesTiles
              image="/assets/Group 684.svg"
              title="Activeness"
              content="Brand A is a latest, Brand D has best assorment and Brand E has priciest product"
              bg="bg-green-200"
              borderColor="border-green-200"
            />
          </div>
        </div>
      </NSCard>
    </>
  );
}

export default HomeHighlights;
