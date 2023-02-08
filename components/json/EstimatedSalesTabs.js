// const EstimatedSalesTabs = [
//   {
//     label: "Week",
//     value: "week",
//     key: "week",
//   },
//   {
//     label: "Month",
//     value: "month",
//     key: "month",
//   },
//   {
//     label: "Quarter",
//     value: "quarter",
//     key: "quarter",
//   },
//   {
//     label: "Sales",
//     value: "sales",
//     key: "sales",
//   },
//   {
//     label: "Unit Sold",
//     value: "unitSold",
//     key: "unit_sold",
//   },
// ];

const EstimatedSalesTabs = (days) => {
  return [
    {
      label: "Week",
      value: "week",
      key: "week_graph",
    },
    days >= 30 && {
      label: "Month",
      value: "month",
      key: "month_graph",
    },
    days >= 90 && {
      label: "Quarter",
      value: "quarter",
      key: "quarter",
    },
    // {
    //   label: "Sales",
    //   value: "sales",
    //   key: "sales",
    // },
    // {
    //   label: "Unit Sold",
    //   value: "unitSold",
    //   key: "unit_sold",
    // },
  ].filter(Boolean);
};

export default EstimatedSalesTabs;
