import apis from "../pages/api";
import NSToaster from "../components/common/NSToaster";

export const fetchHomeDetails = async ({ setHomeDetails, setHomeLoader }) => {
  try {
    setHomeLoader(true);
    await apis
      .fetchHomeDetails()
      .then(({ data }) => {
        if (data?.status_code === 200) {
          NSToaster.success(data?.status_message);
          setHomeDetails && setHomeDetails(data?.data);
        } else {
          NSToaster.error(data?.status_message);
        }
      })
      .catch((err) => {
        NSToaster.error(err);
      })
      .finally(() => {
        setHomeLoader(false);
      });
  } catch (err) {
    throw new Error("", err);
  }
};

export const addBrands = async ({ brands, setData, setOpen, setBrands, setAddBrand, addBrand }) => {
  try {
    await apis
      .addBrand({brand: brands})
      .then(({ data }) => {
        if (data?.status_code === 200) {
          NSToaster.success(data?.status_message);
          getUserBrands && getUserBrands({setBrands, setData})
          setData(brands);
          setAddBrand && setAddBrand(!addBrand);
        } else {
          NSToaster.error(data?.status_message);
        }
      })
      .catch((err) => {
        NSToaster.error(err);
      })
      .finally(() => {
        setOpen(false);
      });
  } catch (err) {
    throw new Error("", err);
  }
};

export const getUserBrands = async ({ setBrands, setData }) => {
  try {
    await apis
      .getUserBrand()
      .then(({ data }) => {
        if (data?.status_code === 200) {
          setBrands && setBrands(data?.data);
          setData && setData(data?.data);
        } else {
          NSToaster.error(data?.status_message);
        }
      })
      .catch((err) => {
        NSToaster.error(err);
      })
      .finally(() => {
      });
  } catch (err) {
    throw new Error("Something went wrong at the end", err);
  }
};
