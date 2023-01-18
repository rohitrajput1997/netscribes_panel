/** @format */

import React from "react"
import Login from "../../pages/login"

function Auth({ children }) {
  let token = false
  if (token) {
    return <>{children}</>
  } else {
    return <Login token={true} />
  }
}

export default Auth
