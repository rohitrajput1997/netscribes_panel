/** @format */

import NSToaster from "../components/common/NSToaster";
import apis from "../pages/api";

export const fetchSalesAndPricingIntelDetails = async ({
  setOnGoingContractDetails,
  period,
  setOngoingContractsLoader,
  fromDate,
  toDate,
}) => {
  try {
    setOngoingContractsLoader(true);

    await apis
      .fetchOngoingContracts({ period, from: fromDate, to: toDate })
      .then(({ data }) => {
        if (data?.status_code === 200) {
          NSToaster.success(data?.status_message);
          setOnGoingContractDetails && setOnGoingContractDetails(data?.data);
        } else {
          NSToaster.error(data?.status_message);
        }
      })
      .catch((err) => {
        NSToaster.error(data?.status_message);
      })
      .finally(() => {
        setOngoingContractsLoader(false);
      });
  } catch (err) {
    throw new Error("", err);
  }
};

export const fetchPerformanceReportsData = async ({
  setPerformanceDetails,
  setLoader,
  selectedFilter,
}) => {
  setLoader(true);

  try {
    await apis
      .fetchPerformanceReports({ period: selectedFilter })
      .then(({ data }) => {
        if (data?.status_code === 200) {
          NSToaster.success(data?.status_message);
          setPerformanceDetails && setPerformanceDetails(data?.data);
        } else {
          NSToaster.error(data?.status_message);
        }
      })
      .catch((err) => {
        NSToaster.error(data?.status_message);
      })
      .finally(() => {
        setLoader(false);
      });
  } catch (err) {
    throw new Error("", err);
  }
};

export const fetchProductListings = async ({
  setLoader,
  setProductListingDetails,
}) => {
  setLoader(true);

  try {
    await apis
      .fetchProductListingData()
      .then(({ data }) => {
        if (data?.status_code === 200) {
          NSToaster.success(data?.status_message);
          setProductListingDetails && setProductListingDetails(data?.data);
        } else {
          NSToaster.error(data?.status_message);
        }
      })
      .catch((err) => {
        NSToaster.error(data?.status_message);
      })
      .finally(() => {
        setLoader(false);
      });
  } catch (err) {
    throw new Error("", err);
  }
};

export const fetchProductListingsPrice = async ({
  // setLoader,
  competitor_sku,
}) => {
  // setLoader(true);

  try {
    let listingDetails = null;

    await apis
      .fetchProductListingPrice({ competitor_sku: competitor_sku })
      .then(({ data }) => {
        if (data?.status_code === 200) {
          NSToaster.success(data?.status_message);
          listingDetails = data;
        } else {
          NSToaster.error(data?.status_message);
        }
      })
      .catch((err) => {
        NSToaster.error(data?.status_message);
      })
      .finally(() => {
        // setLoader(false);
      });

    return listingDetails;
  } catch (err) {
    throw new Error("", err);
  }
};
