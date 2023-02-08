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
