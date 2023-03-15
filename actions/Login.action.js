import NSCookies from "../components/common/NSCookies";
import NSToaster from "../components/common/NSToaster";
import apis from "../pages/api";

export const handleLogin = ({
  email,
  password,
  setValidate,
  setUser,
  setToken,
  setLoader,
  router,
}) => {
  setValidate(true);
  if (!email || email === "" || !password || password === "") {
    return;
  }
  setValidate(false);
  setLoader(true);

  apis
    .login({ email: email, password: password, removetoken: 1 })
    .then(({ data }) => {
      if (data?.access_token !== undefined) {
        NSToaster.success("Login successfully!");
        NSCookies.setUser(data.user);
        NSCookies.setToken(data.access_token);
        router.push("/");
      } else {
        NSToaster.error(data?.message);
      }
    })
    .catch(() => {
      NSToaster.error("Something went to wrong, Please try after sometime.");
    })
    .finally(() => {
      setLoader(false);
    });
};
