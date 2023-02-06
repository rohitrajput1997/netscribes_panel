import React from "react";
import NSCard from "../common/NSCard";
import SuggestedHighlitesTiles from "./SuggestedHighlitesTiles";

function HomeHighlights({ homeDetails }) {
  const { newness, competitiveness, assortment, most_expensive_SKU } =
    homeDetails || {};

  return (
    <>
      <NSCard style={{ padding: "1.3rem", marginTop: "10px" }}>
        <h1 className="pb-3 text-[1.2rem] font-MontMedium">5 Star Rated Refrigerators</h1>
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-1">
            <SuggestedHighlitesTiles
              image="/assets/Path 1799.svg"
              title="Newness"
              content={`${newness?.[0]?.ASIN_details} new SKUs added last month`}
              bg="bg-yellow-100"
              borderColor="border-yellow-100"
              textColor='text-yellow-500'
              />
            <SuggestedHighlitesTiles
              image="/assets/Path 1799.svg"
              title="Revival"
              content={`3 older than a month SKU's re-added last month`}
              bg="bg-blue-100"
              textColor='text-blue-500'
              borderColor='border-blue-100'
              />
          </div>

          <div className="col-span-1">
            <SuggestedHighlitesTiles
              image="/assets/Group 685.svg"
              title="Competitiveness"
              content={`Brands ${competitiveness?.[0].Brand} and ${competitiveness?.[1].Brand} ranked 1 and 2 in unit sales value, volume`}
              bg="bg-blue-200"
              textColor='text-blue-800'
              borderColor='border-blue-200'
              />
            <SuggestedHighlitesTiles
              image="/assets/Group 684.svg"
              title="Activeness"
              content={`Samsung is a latest, ${assortment?.[0].Brand} has best assorment and Brand ${most_expensive_SKU?.[0]?.Brand} has priciest product`}
              bg="bg-green-200"
              borderColor="border-green-200"
              textColor='text-green-800'
            />
          </div>
        </div>
      </NSCard>
    </>
  );
}

export default HomeHighlights;
