import React from "react";
import Login from "../../pages/login";
import NSCookies from "../../components/common/NSCookies";

function Auth({ children, access }) {
  let token = NSCookies.getToken();

  if (access) {
    return children;
  } else if (token) {
    return children;
  } else {
    return <Login token={true} />;
  }
}

export default Auth;
