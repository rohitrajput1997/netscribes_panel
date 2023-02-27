/** @format */

import "antd/dist/reset.css"
import { useEffect, useState } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "tailwindcss/tailwind.css"
import Auth from "../components/auth/Auth"
import "../styles/globals.scss"

const IntialLoadComponent = () => {
  return (
    <div className="snippet">
      <div className="stage">
        <div className="dot-pulse"></div>
      </div>
    </div>
  )
}

export default function App({ Component, pageProps, router }) {
  // const router = useRouter()
  // const allowRoutes = ["/login", "/forgot-password", "/resetpass"]
  // const pathName = router.pathname
  const [isHydrated, setIsHydrated] = useState(false)
  let access = false

  // if (allowRoutes.includes(pathName) === true) {
  //   access = true;
  // }

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return (
    <>
      {isHydrated ? (
        <Auth access={access} router={router}>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={true}
            theme="colored"
          />

          <Component {...pageProps} />
        </Auth>
      ) : (
        <IntialLoadComponent />
      )}
    </>
  )
}
