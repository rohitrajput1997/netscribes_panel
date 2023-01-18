/** @format */

import "antd/dist/reset.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "tailwindcss/tailwind.css"
import Auth from "../components/auth/Auth"
import "../styles/globals.scss"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Auth>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
          theme="colored"
        />

        <Component {...pageProps} />
      </Auth>
    </>
  )
}

