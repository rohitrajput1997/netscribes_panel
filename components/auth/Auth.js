/** @format */

import { useEffect } from "react"
import NSCookies from "../../components/common/NSCookies"
import Login from "../../pages/login"

function Auth({ children, router }) {
  let token = NSCookies.getToken()
  const allowRoutes = ["/forgot-password", "/resetpass"]
  const pathName = router.pathname
  useEffect(() => {
    if (!token && !allowRoutes.includes(pathName)) {
      router.push("/login")
    }
  }, [token])
  if (token) {
    return children
  } else if (!token && allowRoutes.includes(pathName)) {
    return children
  } else {
    return <Login />
  }
}

export default Auth
