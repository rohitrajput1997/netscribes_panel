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
      return Cookies.set("mtoken", token);
    },
    getToken() {
      return Cookies.get("mtoken");
    },

    clearCookies() {
      Cookies.remove("mtoken");
      Cookies.remove("userDetails");
    },
  };
};

export default NSCookies();
