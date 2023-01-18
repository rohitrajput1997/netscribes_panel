import Cookies from "js-cookie";

const NSCookies = () => {
  return {
    setUser(obj) {
      return Cookies.set("user", JSON.stringify(obj));
    },
    setToken(token) {
      return Cookies.set("token", token);
    },
    getToken() {
      return Cookies.get("token");
    },
    clearCookies() {
      Cookies.remove("token");
      Cookies.remove("user");
    },
  };
};

export default NSCookies();
