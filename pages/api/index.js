/** @format */

import api from "./apiServices"

const login = (payload) => api.post("/api/login", payload)
const fetchHomeDetails = (payload) => api.post("/api/home_details", payload)
const fetchOngoingContracts = (payload) =>
  api.post("/api/pricing_intel", payload)
const fetchMarketPlaceTrackData = (payload) =>
  api.post("/api/marketplace_track_differance", payload)
const fetchMarketPlaceTrackBrands = () => api.post("/api/get_brands")
const resetPassword = (payload) => api.post("/api/reset_pass", payload)
const forgetPassword = (payload) => api.post("/api/forgot_password", payload)
const fetchPerformanceReports = (payload) =>
  api.post("/api/pricing_intel_performance", payload)
const fetchProductListingData = (payload, isDownload) => api.post("/api/product_listing", payload, { responseType: isDownload && 'arraybuffer' })
const fetchProductListingPrice = (payload) =>
  api.post("/api/get_price", payload)
const fetchRepricingRulesData = () => api.get("/api/get_pricing_rule")
const setRule = (payload) => api.post("/api/set_rule", payload)
const addPricingRule = (payload) => api.post("/api/add_pricing_rule", payload)
const fetchBrandsProductListing = () =>
  api.post("/api/get_brands_product_listing")
const getPricingRuleById = (payload) =>
  api.post("/api/get_pricing_rule_by_id", payload)
const deletePricingRuleById = (payload) =>
  api.post("/api/delete_pricing_rule_by_id", payload)
const log_out = (payload) => api.post("/api/logout", payload)
const addBrand = (payload) =>
  api.post("/api/add_brand", payload)
const getUserBrand = (payload) =>
  api.post("/api/get_user_brand", payload)


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
  setRule,
  addPricingRule,
  fetchBrandsProductListing,
  getPricingRuleById,
  deletePricingRuleById,
  log_out,
  addBrand,
  getUserBrand,
}

export default apis
