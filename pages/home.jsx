import React from "react";
import NSLayout from "../components/common/NSLayout";
import NSLoaderWithMsg from "../components/common/NSLoaderWithMsg";
import HomeBrandUpdates from "../components/home/HomeBrandUpdates";
import HomeHighlights from "../components/home/HomeHighlights";
import HomeRecentVisits from "../components/home/HomeRecentVisits";

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
    <NSLayout loader={false}>
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2">
          <Heading title="Key Highlights" subTitle="Explore" />

          <HomeHighlights homeDetails={homeDetails} loader={loader} />

          <div className="my-3">
            <Heading title="Suggested Brand Updates" subTitle="Explore" />
            {loader ? (
              <NSLoaderWithMsg withMessage={false} />
            ) : (
              <HomeBrandUpdates homeDetails={homeDetails} loader={loader} />
            )}
          </div>
        </div>

        <HomeRecentVisits />
      </div>
    </NSLayout>
  );
};

export default Home;
