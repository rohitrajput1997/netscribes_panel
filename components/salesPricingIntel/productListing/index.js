import { Table } from "antd";
import { useEffect, useState } from "react";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";
import {
  fetchProductListings,
  fetchRepricingRules,
  setProductListingRule,
} from "../../../actions/SalesPricingIntel.action";
import NSDropdown from "../../common/NSDropdown";
import NSInput from "../../common/NSInput";
import NSTableTooltipTitle from "../../common/NSTableTooltipTitle";
import PricingRules from "./PricingRules";
import ProductListing from "./ProductListing";

const MainProductListingPage = () => {
  const [activeStar, setActiveStar] = useState(false);
  const [popoverOne, setPopoverOne] = useState(1);
  const [popoverTwo, setPopoverTwo] = useState(1);
  const [loader, setLoader] = useState(false);
  const [productListingDetails, setProductListingDetails] = useState([]);
  const [competitorSku, setCompetitorSku] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [enableSettings, setEnableSettings] = useState(false);
  const [pricingRuleData, setPricingRuleData] = useState([]);
  const [SelectedPricingRule, setSelectedPricingRule] = useState("NetsPrice");
  const [newPrice, setNewPrice] = useState("");

  const columns = [
    {
      title: "",
      dataIndex: "",
      key: "name",
      render: () => (
        <>
          {activeStar ? (
            <IoStarSharp
              size={20}
              onClick={() => setActiveStar(!activeStar)}
              className="cursor-pointer"
              color="#005f86"
            />
          ) : (
            <IoStarOutline
              size={20}
              onClick={() => setActiveStar(!activeStar)}
              className="cursor-pointer"
            />
          )}
        </>
      ),
    },
    Table.SELECTION_COLUMN,
    {
      title: "",
      dataIndex: "",
      key: "name",
    },
    {
      title: "Product Name",
      dataIndex: "Product_Name",
      key: "Product_Name",
      width: 200,
    },
    {
      title: "SKU",
      dataIndex: "ASIN_details",
      key: "ASIN_details",
    },
    {
      title: (
        <NSTableTooltipTitle tooltip="Marketplace" title="Competitor Pricing" />
      ),
      dataIndex: "competitor_prcing",
      key: "competitor_prcing",
      render: (data) => {
        return <p className="text-blue-500">{data}</p>;
      },
    },
    {
      title: "Competitor SKU",
      dataIndex: "cp",
      key: "cp",
      render: (data, record, index) => {
        return (
          <NSInput
            type="text"
            style={{ height: "30px", backgroundColor: "white", width: "200px" }}
            value={data}
            onChange={(e) => {
              const list = { ...productListingDetails };
              list.product_list[index].cp = e.target.value;
              // setCompetitorSku(e.target.value);
            }}
            onBlur={(e) => {
              if (e) {
                fetchProductListingsPrice({
                  competitor_sku: e.target.value?.split(","),
                }).then((data) => {
                  const list = { ...productListingDetails };
                  list.product_list[index].cp_selected =
                    data.data.competitor_pricing;
                  setProductListingDetails(list);
                });
              }
            }}
          />
        );
      },
    },
    {
      title: (
        <NSTableTooltipTitle
          tooltip="Competing Products if selected"
          title="Competitor Pricing"
        />
      ),
      dataIndex: "cp_selected",
      key: "cp_selected",
      width: 200,
    },
    {
      title: "Cost",
      dataIndex: "Cost",
      key: "Cost",
      render: (data) => {
        return (
          <NSInput
            type="text"
            style={{ height: "30px", backgroundColor: "white", width: "200px" }}
            // value={competitorSku}
            // onChange={(e) => setCompetitorSku(e.target.value)}
            // onBlur={() => alert('')}
          />
        );
      },
    },
    {
      title: "MinPrice",
      dataIndex: "minPrice",
      key: "minPrice",
      render: (data) => {
        return (
          <NSInput
            type="text"
            style={{ height: "30px", backgroundColor: "white", width: "200px" }}
            // value={competitorSku}
            // onChange={(e) => setCompetitorSku(e.target.value)}
            // onBlur={() => alert('')}
          />
        );
      },
    },
    {
      title: "Price",
      dataIndex: "Price",
      key: "Price",
    },
    {
      title: "Stock",
      dataIndex: "Stock_Status",
      key: "Stock_Status",
    },
    {
      title: "Re-pricing Rule",
      dataIndex: "rpr",
      key: "rpr",
      render: (data, record, index) => {
        return (
          <NSDropdown
            options={pricingRuleData}
            className="w-32"
            value={data}
            onChange={(e, index, data) => {
              setSelectedPricingRule(e);
            }}
            onSelect={(e, data) => {
              handleFetchNewPrice(data, record).then((data) => {
                const list = { ...productListingDetails };
                list.product_list[index].np = data?.new_price;
                console.log("******^^^^^^", index);
                setProductListingDetails(list);
              });
            }}
            defaultValue="NetsPrice"
          />
        );
      },
    },
    {
      title: (
        <NSTableTooltipTitle
          tooltip="Shipping, Support, etc."
          title="Other Costs"
        />
      ),
      dataIndex: "oc",
      key: "oc",
      render: (data) => {
        return (
          <NSInput
            type="text"
            style={{ height: "30px", backgroundColor: "white", width: "200px" }}
            // value={competitorSku}
            // onChange={(e) => setCompetitorSku(e.target.value)}
            // onBlur={() => alert('')}
          />
        );
      },
    },
    {
      title: "Custom Tags/Labels",
      dataIndex: "ct",
      key: "ct",
      render: (data) => {
        return (
          <NSInput
            type="text"
            style={{ height: "30px", backgroundColor: "white", width: "200px" }}
            // value={competitorSku}
            // onChange={(e) => setCompetitorSku(e.target.value)}
            // onBlur={() => alert('')}
          />
        );
      },
    },
    {
      title: "New Price",
      dataIndex: "np",
      key: "np",
    },
  ];

  const handleFetchNewPrice = (data, record) => {
    return setProductListingRule({
      rule_id: data?.key || 4,
      price: record?.Price || 0,
      setNewPrice: setNewPrice,
    });
  };

  useEffect(() => {
    fetchProductListings({ setLoader, setProductListingDetails });
  }, []);

  useEffect(() => {
    fetchRepricingRules({ setPricingRuleData: setPricingRuleData });
  }, []);

  const handleTableFilter = () => {
    return productListingDetails?.product_list?.filter(
      (item) => item?.[selectedFilter] === true
    );
  };

  useEffect(() => {
    handleTableFilter();
  }, [selectedFilter]);

  return (
    <>
      {enableSettings ? (
        <PricingRules setEnableSettings={setEnableSettings} />
      ) : (
        <ProductListing
          productListingDetails={productListingDetails}
          setSelectedFilter={setSelectedFilter}
          selectedFilter={selectedFilter}
          popoverOne={popoverOne}
          popoverTwo={popoverTwo}
          setPopoverOne={setPopoverOne}
          setPopoverTwo={setPopoverTwo}
          handleTableFilter={handleTableFilter}
          columns={columns}
          loader={loader}
          setEnableSettings={setEnableSettings}
        />
      )}
    </>
  );
};

export default MainProductListingPage;
