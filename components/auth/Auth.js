import React from "react";
import Login from "../../pages/login";
import NSCookies from "../../components/common/NSCookies";

function Auth({ children, access }) {
  let token = NSCookies.getToken();
  const allowedRoutes = ["/forgot-password", "/resetpass"];

  if (access) {
    return children;
  } else if (token) {
    return children;
  } else if (!token && allowedRoutes.includes(window.location.pathname)) {
    return children;
  } else {
    return <Login token={true} />;
  }
}

export default Auth;
