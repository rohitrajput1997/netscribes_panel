import React, { useState, useEffect } from "react";
import NSLayout from "../components/common/NSLayout";
import NSLoaderWithMsg from "../components/common/NSLoaderWithMsg";
import HomeBrandUpdates from "../components/home/HomeBrandUpdates";
import HomeHighlights from "../components/home/HomeHighlights";
import HomeRecentVisits from "../components/home/HomeRecentVisits";
import NSButton from "../components/common/NSButton";
import ConfirmationModal from "../components/auth/ConfirmationModal";
import AddBrandModal from "../components/auth/AddBrandModal";
import { fetchBrandsProductListingData } from "../actions/SalesPricingIntel.action";

const Home = ({ homeDetails, loader }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openAddBrandModal, setOpenAddBrandModal] = useState(false);
  const [brandList, setBrandList] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchBrandsProductListingData({ setBrandList: setBrandList });
  }, []);

  const Heading = ({ title, subTitle, isAddBrand = false }) => (
    <div className="flex justify-between items-center mb-2">
      <div className=" flex justify-center items-center">
        <h1 className="text-[1.3rem] mb-0 font-interBold">{title}</h1>
        {isAddBrand && (
          <NSButton
            title="Add Brands"
            className="h-8 flex justify-center items-center ml-6"
            onClick={() => setOpenAddBrandModal(true)}
          />
        )}
      </div>
      <h3 className="text-[1.1rem] text-[#005f86] font-interMedium cursor-pointer">
        {subTitle}
      </h3>
    </div>
  );

  return (
    <NSLayout loader={false}>
      <ConfirmationModal
        open={openModal}
        setOpen={setOpenModal}
        title="Are you sure. Do you want to delete the Brand?"
      />
      <AddBrandModal
        open={openAddBrandModal}
        setOpen={setOpenAddBrandModal}
        title="Add New Brands"
        brandList={brandList}
        setBrandList={setBrandList}
        data={data}
        setData={setData}
      />
      <div className="grid grid-cols-4 gap-3">
        <div className="col-span-3">
          <Heading title="Key Highlights" subTitle="Explore" />

          <HomeHighlights homeDetails={homeDetails} loader={loader} />

          <div className="my-3">
            <Heading
              title="Suggested Brand Updates"
              subTitle="Explore"
              isAddBrand={true}
            />
            {loader ? (
              <NSLoaderWithMsg withMessage={false} />
            ) : (
              <HomeBrandUpdates
                homeDetails={homeDetails}
                loader={loader}
                setOpen={setOpenModal}
              />
            )}
          </div>
        </div>

        <HomeRecentVisits />
      </div>
    </NSLayout>
  );
};

export default Home;
