import api from "./apiServices";

const login = (payload) => api.post("/api/login", payload);
const fetchHomeDetails = (payload) => api.post("/api/home_details", payload);
const fetchOngoingContracts = (payload) =>
  api.post("/api/pricing_intel", payload);
const fetchMarketPlaceTrackData = (payload) =>
  api.post("/api/marketplace_track_differance", payload);
const fetchMarketPlaceTrackBrands = () => api.post("/api/get_brands");
const resetPassword = (payload) => api.post("/api/reset_pass", payload);
const forgetPassword = (payload) => api.post("/api/forgot_password", payload);
const fetchPerformanceReports = (payload) =>
  api.post("/api/pricing_intel_performance", payload);
const fetchProductListingData = () => api.post("/api/product_listing");
const fetchProductListingPrice = (payload) =>
  api.post("/api/get_price", payload);
const fetchRepricingRulesData = () => api.get("/api/get_pricing_rule");

const apis = {
  login,
  fetchHomeDetails,
  fetchOngoingContracts,
  fetchMarketPlaceTrackData,
  fetchMarketPlaceTrackBrands,
  resetPassword,
  forgetPassword,
  fetchPerformanceReports,
  fetchProductListingData,
  fetchProductListingPrice,
  fetchRepricingRulesData,
};

export default apis;
