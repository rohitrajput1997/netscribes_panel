import "../styles/globals.scss";
import "antd/dist/reset.css";
import "tailwindcss/tailwind.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Auth, ProtectRoute } from "../components/context/Auth";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Auth>
        <ProtectRoute>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={true}
            theme="colored"
          />
          <Component {...pageProps} />;
        </ProtectRoute>
      </Auth>
    </>
  );
}
