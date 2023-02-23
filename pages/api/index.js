import api from "./apiServices";

const login = (payload) => api.post("/api/login", payload);
const fetchHomeDetails = (payload) => api.post("/api/home_details", payload);
const fetchOngoingContracts = (payload) =>
  api.post("/api/pricing_intel", payload);
const fetchMarketPlaceTrackData = (payload) =>
  api.post("/api/marketplace_track_differance", payload);
const fetchMarketPlaceTrackBrands = () =>
  api.post("/api/get_brands");

const apis = {
  login,
  fetchHomeDetails,
  fetchOngoingContracts,
  fetchMarketPlaceTrackData,
  fetchMarketPlaceTrackBrands,
};

export default apis;
