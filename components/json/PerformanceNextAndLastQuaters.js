
const PerformanceNextAndLastQuaters = ({last_quarter_result, next_quarter_result}) => {
    return {
        last: [
            {
              icon: "./assets/Group 693.svg",
              count: last_quarter_result?.IN_actual,
              subTitle: "In Actual",
            },
            {
              icon: "./assets/Group 694.svg",
              count: last_quarter_result?.Forcasted,
              subTitle: "Forcasted",
            },
            {
              icon: "./assets/Group 695.svg",
              count: last_quarter_result?.Forcast_accurancy,
              subTitle: "Forcast Accuracy",
            },
          ],
          next: [
            {
              icon: "./assets/Group 697.svg",
              count: next_quarter_result?.With_current_prices,
              subTitle: "With Current Prices",
            },
            {
              icon: "./assets/Group 696.svg",
              count: next_quarter_result?.With_suggested_prices,
              subTitle: "With Suggested Prices",
            },
          ],
    }
};

export default PerformanceNextAndLastQuaters;
