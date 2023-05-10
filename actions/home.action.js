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

export const addBrands = async ({ brands }) => {
  try {
    await apis
      .addBrand()
      .then(({ data }) => {
        if (data?.status_code === 200) {
          NSToaster.success(data?.status_message);
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
    throw new Error("", err);
  }
};
