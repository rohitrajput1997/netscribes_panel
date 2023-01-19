/** @format */

export const fetchSalesAndPricingIntelDetails = ({
  setOnGoingContractDetails,
}) => {
  try {
    const onGoingContractDetails = {
      status_code: 200,
      data: {
        total_data_first_sentance: {
          products: "170",
          avgsales: "25000.0000",
          companies: 3,
          marketplace: 1,
        },
        total_revenue: {
          sales: "100000",
          total_revenue_differance: 164,
        },
        total_units: {
          units: "170",
          total_units_differance: 178,
        },
        unit: {
          units_highest: [
            {
              week: 52,
              units: "100",
              sales: "60000",
              year: 2023,
              brand: "Whirlpool",
              units_per: 178,
            },
            {
              week: 52,
              units: "60",
              sales: "30000",
              year: 2023,
              brand: "IFB",
              units_per: 166.66666666666669,
            },
          ],
          units_lowest: [
            {
              week: 52,
              units: "10",
              sales: "10000",
              year: 2023,
              brand: "Panasonic",
              units_per: 0,
            },
          ],
        },
        sales: {
          sales_highest: [
            {
              week: 52,
              units: "100",
              sales: "60000",
              year: 2023,
              brand: "Whirlpool",
              sales_per: 0,
            },
            {
              week: 52,
              units: "60",
              sales: "30000",
              year: 2023,
              brand: "IFB",
              sales_per: 133.33333333333331,
            },
          ],
          sales_lowest: [
            {
              week: 52,
              units: "10",
              sales: "10000",
              year: 2023,
              brand: "Panasonic",
              sales_per: 0,
            },
          ],
        },
        avg: {
          avg_highest: [
            {
              week: 52,
              brandcount: 1,
              sales: "60000",
              year: 2023,
              brand: "Whirlpool",
              avg_per: 0,
            },
            {
              week: 52,
              brandcount: 2,
              sales: "30000",
              year: 2023,
              brand: "IFB",
              avg_per: 100,
            },
          ],
          avg_lowest: [
            {
              week: 52,
              brandcount: 1,
              sales: "10000",
              year: 2023,
              brand: "Panasonic",
              avg_per: -183.99487836107556,
            },
          ],
        },
        graph_details: [
          {
            week: 52,
            sales: 100000,
            year: 2023,
            brand: "Whirlpool",
          },
          {
            week: 51,
            sales: 70000,
            year: 2023,
            brand: "Panasonic",
          },
          {
            week: 52,
            sales: 389815,
            year: 2022,
            brand: "Panasonic",
          },
          {
            week: 51,
            sales: 664500,
            year: 2022,
            brand: "Panasonic",
          },
          {
            week: 50,
            sales: 483955,
            year: 2022,
            brand: "Panasonic",
          },
          {
            week: 49,
            sales: 286520,
            year: 2022,
            brand: "Bosch",
          },
          {
            week: 48,
            sales: 52880,
            year: 2022,
            brand: "Whirlpool",
          },
        ],
      },
      status_message: "data get sucessfully",
    }

    setOnGoingContractDetails(onGoingContractDetails.data)
  } catch (err) {
    //
  }
}

