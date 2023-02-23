import React from "react";
import Login from "../../pages/login";
import NSCookies from "../../components/common/NSCookies";

function Auth({ children }) {
  let token = NSCookies.getToken();

  if (token) {
    return children;
  } else {
    return <Login token={true} />;
  }
}

export default Auth;
