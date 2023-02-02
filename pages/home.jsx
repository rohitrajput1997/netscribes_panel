import Image from "next/image";
import React from "react";
import NSCard from "../components/common/NSCard";
import NSLayout from "../components/common/NSLayout";
import HomeBrandUpdates from "../components/home/HomeBrandUpdates";
import HomeHighlights from "../components/home/HomeHighlights";
import HomeRecentVisits from "../components/home/HomeRecentVisits";
import SuggestedBrandUpdatesTile from "../components/home/SuggestedBrandUpdatesTile";
import SuggestedHighlitesTiles from "../components/home/SuggestedHighlitesTiles";
import RecentVisits from "../components/json/HomeRecentVisits";

const Home = ({ homeDetails, loader }) => {
  const Heading = ({ title, subTitle }) => (
    <div className="flex justify-between items-center">
      <h1 className="text-[1.3rem] mb-3 font-MontBold">{title}</h1>
      <h3 className="text-[1.1rem] text-[#005f86] font-MontMedium cursor-pointer">
        {subTitle}
      </h3>
    </div>
  );

  return (
    <NSLayout loader={loader}>
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2">
          <Heading title="Suggested Highlights" subTitle="Explore" />

          <HomeHighlights homeDetails={homeDetails} />

          <div className="my-3">
            <Heading title="Suggested Brand Updates" subTitle="Explore" />
            <HomeBrandUpdates />
          </div>
        </div>

        <HomeRecentVisits />
      </div>
    </NSLayout>
  );
};

export default Home;
