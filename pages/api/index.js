import api from "./apiServices";

const login = (payload) => api.post("/api/login", payload);
const fetchHomeDetails = (payload) => api.post("/api/home_details", payload);
const fetchOngoingContracts = (payload) =>
  api.post("/api/pricing_intel", payload);

const apis = {
  login,
  fetchHomeDetails,
  fetchOngoingContracts,
};

export default apis;
