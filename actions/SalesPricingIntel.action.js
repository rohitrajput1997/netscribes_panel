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

export const fetchRepricingRules = async ({
  setPricingRuleData,
  setPricingRuleFullData,
}) => {
  // setLoader(true);

  try {
    await apis
      .fetchRepricingRulesData()
      .then(({ data }) => {
        if (data?.status_code === 200) {
          let dropdownData = [];
          NSToaster.success(data?.status_message);

          data?.data?.map((item) => {
            dropdownData?.push({
              label: item?.title,
              value: item?.title,
              id: item?.id,
            });
          });

          setPricingRuleData && setPricingRuleData(dropdownData);
          setPricingRuleFullData && setPricingRuleFullData(data?.data);
        } else {
          NSToaster.error(data?.status_message);
        }
      })
      .catch((err) => {
        NSToaster.error(err);
      })
      .finally(() => {
        // setLoader(false);
      });
  } catch (err) {
    // throw new Error("", err);
    console.log("******", err);
  }
};

export const setProductListingRule = async ({
  price,
  rule_id,
  setNewPrice,
}) => {
  // setLoader(true);

  try {
    let listingDetails = null;

    await apis
      .setRule({ rule_id: rule_id, price: price })
      .then(({ data }) => {
        if (data?.status_code === 200) {
          NSToaster.success(data?.status_message);
          setNewPrice && setNewPrice(data?.data?.new_price);
          listingDetails = data?.data;
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

export const addPricingRuleData = async ({
  payload,
  setPricingRuleData,
  setPricingRuleFullData,
  setAddOrEditRule,
}) => {
  try {
    await apis
      .addPricingRule(payload)
      .then(({ data }) => {
        if (data?.status_code === 200) {
          NSToaster.success(data?.status_message);
          fetchRepricingRules({
            setPricingRuleData: setPricingRuleData,
            setPricingRuleFullData: setPricingRuleFullData,
          });
          setAddOrEditRule(false);
        } else {
          NSToaster.error(data?.status_message);
        }
      })
      .catch((err) => {
        NSToaster.error(data?.status_message);
      })
      .finally(() => {});
  } catch (err) {
    // throw new Error("", err);
    console.log("$$$$$$", err);
  }
};

export const fetchBrandsProductListingData = async ({ setBrandList }) => {
  try {
    await apis
      .fetchBrandsProductListing()
      .then(({ data }) => {
        if (data?.status_code === 200) {
          let dropdownData = [];

          data?.data?.suggested_brands?.map((item, index) => {
            dropdownData?.push({
              label: item?.Brand,
              value: item?.Brand,
              id: index,
            });
          });

          NSToaster.success(data?.status_message);
          setBrandList && setBrandList(dropdownData);
        } else {
          NSToaster.error(data?.status_message);
        }
      })
      .catch((err) => {
        NSToaster.error(data?.status_message);
      })
      .finally(() => {});
  } catch (err) {
    throw new Error("", err);
  }
};

export const getPricingRuleById = async ({ id, setDataToEdit }) => {
  try {
    await apis
      .getPricingRuleById({ id: id })
      .then(({ data }) => {
        if (data?.status_code === 200) {
          NSToaster.success(data?.status_message);
          setDataToEdit && setDataToEdit(data?.data);
        } else {
          NSToaster.error(data?.status_message);
        }
      })
      .catch((err) => {
        NSToaster.error(data?.status_message);
      })
      .finally(() => {});
  } catch (err) {
    throw new Error("", err);
  }
};

export const deletePricingRuleById = async ({
  id,
  setPricingRuleFullData,
  setAddOrEditRule,
  setLoading,
}) => {
  setLoading(true);

  try {
    await apis
      .deletePricingRuleById({ id: id })
      .then(({ data }) => {
        if (data?.status_code === 200) {
          NSToaster.success(data?.status_message);
          fetchRepricingRules({
            setPricingRuleFullData: setPricingRuleFullData,
            setAddOrEditRule: setAddOrEditRule,
          });
        } else {
          NSToaster.error(data?.status_message);
        }
      })
      .catch((err) => {
        NSToaster.error(data?.status_message);
      })
      .finally(() => {
        setLoading(false);
      });
  } catch (err) {
    throw new Error("", err);
  }
};
