import { Table, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";
import {
  fetchBrandsProductListingData,
  fetchProductListings,
  fetchProductListingsPrice,
  fetchRepricingRules,
  setProductListingRule,
} from "../../../actions/SalesPricingIntel.action";
import NSDropdown from "../../common/NSDropdown";
import NSInput from "../../common/NSInput";
import NSTableTooltipTitle from "../../common/NSTableTooltipTitle";
import PricingRules from "./PricingRules";
import ProductListing from "./ProductListing";
import NSLoaderWithMsg from "../../common/NSLoaderWithMsg";

const MainProductListingPage = ({ setSelectedTab }) => {
  const [activeStar, setActiveStar] = useState(false);
  const [popoverOne, setPopoverOne] = useState(1);
  const [popoverTwo, setPopoverTwo] = useState(1);
  const [loader, setLoader] = useState(false);
  const [listingLoader, setListingLoader] = useState(false);
  const [newPricingLoader, setNewPricingLoader] = useState(false);
  const [productListingDetails, setProductListingDetails] = useState([]);
  const [competitorSku, setCompetitorSku] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [pricingRuleData, setPricingRuleData] = useState([]);
  const [pricingRuleFullData, setPricingRuleFullData] = useState([]);
  const [SelectedPricingRule, setSelectedPricingRule] = useState("NetsPrice");
  const [newPrice, setNewPrice] = useState("");
  const [addOrEditRule, setAddOrEditRule] = useState(false);
  const [brandList, setBrandList] = useState([]);
  const [pricingIndex, setPricingIndex] = useState(null);

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
    {
      title: "Product Name",
      dataIndex: "Product_Name",
      key: "Product_Name",
      render: (data) => {
        return (
          <>
            <Tooltip title={data}>
              <p className="font-interRegular truncate w-[150px]">{data}</p>
            </Tooltip>
          </>
        );
      },
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
              if (e.target.value !== "") {
                fetchProductListingsPrice({
                  competitor_sku: e.target.value?.split(","),
                }).then((data) => {
                  const list = { ...productListingDetails };
                  list.product_list[index].cp_selected =
                    data?.data?.competitor_pricing;
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
      title: "Stock Status",
      dataIndex: "Stock_Status",
      key: "Stock_Status",
      render: (data) => {
        return <span>{data.split("_").join(" ")}</span>;
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
      title: "Add Custom Tags/Labels",
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
      title: "Re-pricing Rule",
      dataIndex: "rpr",
      key: "rpr",
      render: (data, record, index) => {
        return (
          <NSDropdown
            options={pricingRuleData}
            className="w-32"
            value={data}
            onChange={(e, idx, data) => {
              setSelectedPricingRule(e);
              setPricingIndex(index);
            }}
            onSelect={(e, data) => {
              handleFetchNewPrice(data, record).then((data) => {
                const list = { ...productListingDetails };
                list.product_list[index].new_price = data?.new_price;
                setProductListingDetails(list);
              });
            }}
            defaultValue="NetsPrice"
          />
        );
      },
    },
    {
      title: "New Price",
      dataIndex: "new_price",
      key: "new_price",
      render: (data, record, index) => {
        return (
          <>
            {newPricingLoader && pricingIndex === index && (
              <NSLoaderWithMsg loaderSize="small" />
            )}
            <p>{data}</p>
          </>
        );
      },
    },
  ];

  const handleFetchNewPrice = (data, record) => {
    return setProductListingRule({
      rule_id: data?.key || 4,
      price: record?.Price || 0,
      setNewPrice: setNewPrice,
      setNewPricingLoader: setNewPricingLoader,
    });
  };

  useEffect(() => {
    fetchProductListings({
      setLoader: setListingLoader,
      setProductListingDetails,
    });
  }, []);

  useEffect(() => {
    fetchRepricingRules({
      setPricingRuleData: setPricingRuleData,
      setPricingRuleFullData: setPricingRuleFullData,
      setLoader: setLoader,
    });
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
        loader={listingLoader}
        setSelectedTab={setSelectedTab}
        rowKey={(record) => record.ASIN_details}
        pricingRuleData={pricingRuleData}
      />
    </>
  );
};

export default MainProductListingPage;
