import CommaSeperator from "../../utils/commaSeperator";

const PerformanceNextAndLastQuaters = ({
  last_quarter_result,
  next_quarter_result,
}) => {
  
  return {
    last: [
      {
        icon: "./assets/Group 693.svg",
        count: CommaSeperator(last_quarter_result?.Actual_Revenue || 0),
        subTitle: "In Actual",
      },
      {
        icon: "./assets/Group 694.svg",
        count: CommaSeperator(
          last_quarter_result?.Forecasted_Revenue || 0
        ),
        subTitle: "Forecasted",
      },
      {
        icon: "./assets/Group 695.svg",
        count: CommaSeperator(
          last_quarter_result?.Forecasted_Revenue_Accuracy || 0
        ),
        subTitle: "Forecast Accuracy",
      },
    ],
    next: [
      // {
      //   icon: "./assets/Group 697.svg",
      //   count: next_quarter_result?.With_current_prices,
      //   subTitle: "With Current Prices",
      // },
      // {
      //   icon: "./assets/Group 696.svg",
      //   count: next_quarter_result?.With_suggested_prices,
      //   subTitle: "With Suggested Prices",
      // },
      {
        icon: "./assets/Group 693.svg",
        count: CommaSeperator(next_quarter_result?.Actual_Revenue || 0),
        subTitle: "In Actual",
      },
      {
        icon: "./assets/Group 694.svg",
        count: CommaSeperator(
          next_quarter_result?.Forecasted_Revenue || 0
        ),
        subTitle: "Forecasted",
      },
      {
        icon: "./assets/Group 695.svg",
        count: CommaSeperator(
          next_quarter_result?.Forecasted_Revenue_Accuracy || 0
        ),
        subTitle: "Forecast Accuracy",
      },
    ],
  };
};

export default PerformanceNextAndLastQuaters;
