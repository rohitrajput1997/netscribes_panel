import NSToaster from "../components/common/NSToaster";
import apis from "../pages/api";

export const fetchMarketPlaceTracks = async ({
  brand1,
  brand2,
  setTilesData,
  setLoader,
}) => {
  setLoader(true);
  try {
    await apis
      .fetchMarketPlaceTrackData({ brand1: brand1, brand2: brand2 })
      .then(({ data }) => {
        if (data?.status_code === 200) {
          NSToaster.success(data?.status_message);
          setTilesData && setTilesData(data?.data);
        } else {
          NSToaster.error(data?.status_message);
        }
      })
      .catch((err) => {
        NSToaster.error(err);
      })
      .finally(() => {
        setLoader(false);
      });
  } catch (err) {
    throw new Error("Something went wrong", err);
  }
};

export const fetchMarketPlaceTracksBrands = async ({ setBrandList, setselectedBrand1, setselectedBrand2 }) => {
  try {
    await apis
      .fetchMarketPlaceTrackBrands()
      .then(({ data }) => {
        if (data?.status_code === 200) {
          const brands = [];
          NSToaster.success(data?.status_message);

          data?.data?.suggested_brands?.map((b) => {
            brands.push({ label: b?.Brand, value: b?.Brand });
          });

          setselectedBrand1 && setselectedBrand1(brands[0]?.value);
          setselectedBrand2 && setselectedBrand2(brands[1]?.value);

          setBrandList && setBrandList(brands);
        } else {
          NSToaster.error(data?.status_message);
        }
      })
      .catch((err) => {
        NSToaster.error(err);
      })
      .finally(() => {});
  } catch (err) {
    throw new Error("Something went wrong", err);
  }
};
