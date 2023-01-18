import api from "./apiServices";

const login = (payload) => api.post("/api/login", payload);

const apis = {
  login,
};

export default apis;
