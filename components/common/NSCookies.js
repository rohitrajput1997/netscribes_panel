import Cookies from "js-cookie";

const NSCookies = () => {
  return {
    setUser(obj) {
      return Cookies.set("userDetails", JSON.stringify(obj));
    },
    getUser() {
      try {
        return JSON.parse(Cookies.get("userDetails"));
      } catch (e) {
        return null;
      }
    },

    setToken(token) {
      return Cookies.set("token", token);
    },
    getToken() {
      return Cookies.get("token");
    },

    clearCookies() {
      Cookies.remove("token");
      Cookies.remove("userDetails");
    },
  };
};

export default NSCookies();
