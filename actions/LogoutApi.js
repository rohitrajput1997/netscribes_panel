/** @format */

import NSCookies from "../components/common/NSCookies"
import NSToaster from "../components/common/NSToaster"
import apis from "../pages/api"

export const logoutApi = async () => {
  // if (sessionStorage.getItem("logout") === "true") return

  await apis
    .log_out({
      //   timer: Cookies.get("timer"),
      //   role: LoginRoles()?.toString(),
    })
    .then(({ data }) => {
      if (data.status_code === 200) {
        window.location.reload()
        window.location.href = `${window.location.origin}/login`
        sessionStorage.setItem("logout", "true")
      } else {
        NSToaster.error(data.status_message)
        window.location.href = `${window.location.origin}/login`
        sessionStorage.setItem("logout", "true")
      }
    })
    .catch((err) => {
      NSToaster.error(err)
      window.location.href = `${window.location.origin}/login`
      sessionStorage.setItem("logout", "true")
    })
    .finally(() => {
      NSCookies.clearCookies()
      sessionStorage.setItem("logout", "true")
    })
}

