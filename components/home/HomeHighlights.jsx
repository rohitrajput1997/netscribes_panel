import React from "react";
import NSCard from "../common/NSCard";
import SuggestedHighlitesTiles from "./SuggestedHighlitesTiles";
import NSButton from "../common/NSButton";

function HomeHighlights({ homeDetails, loader }) {
  const { newness, competitiveness, assortment, most_expensive_SKU } =
    homeDetails || {};

  return (
    <>
      <NSCard
        style={{ padding: "1.3rem", marginTop: "10px" }}
        className="rounded-[15px]"
      >
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-[1.2rem] font-interMedium">
            5 Star Rated Refrigerators
          </h1>
          <NSButton title='Explore' small isSecondary />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-1">
            <SuggestedHighlitesTiles
              image="/assets/Path 1799.svg"
              title="Newness"
              // content={`${newness?.[0]?.ASIN_details} new SKUs added last month`}
              content={`2 new SKUs added last month`}
              bg="bg-yellow-100"
              borderColor="border-yellow-100"
              textColor="text-yellow-500"
              loader={loader}
              showProgress
              count={66}
            />
            <SuggestedHighlitesTiles
              image="/assets/recyclee.svg"
              title="Revival"
              content={`3 older than a month SKU's re-added last month`}
              bg="bg-blue-100"
              textColor="text-blue-500"
              borderColor="border-blue-100"
              loader={loader}
              showProgress
              count={100}
            />
          </div>

          <div className="col-span-1">
            <SuggestedHighlitesTiles
              image="/assets/Group 685.svg"
              title="Competitiveness"
              content={`${competitiveness?.[0].Brand} and ${competitiveness?.[1].Brand} ranked 1 and 2 in unit sales value, volume`}
              bg="bg-blue-200"
              textColor="text-blue-800"
              borderColor="border-blue-200"
              loader={loader}
            />
            <SuggestedHighlitesTiles
              image="/assets/Group 684.svg"
              title="Activeness"
              // content={`Samsung is a latest, ${assortment?.[0].Brand} has best assorment and Brand ${most_expensive_SKU?.[0]?.Brand} has priciest product`}
              content={`Samsung is latest, LG has best assortment and Whirlpool has priciest product`}
              bg="bg-green-200"
              borderColor="border-green-200"
              textColor="text-green-800"
              loader={loader}
            />
          </div>
        </div>
      </NSCard>
    </>
  );
}

export default HomeHighlights;
