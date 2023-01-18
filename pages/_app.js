import "antd/dist/reset.css";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";
import Auth from "../components/auth/Auth";
import "../styles/globals.scss";

const IntialLoadComponent = () => {
  return (
    <div className="snippet">
      <div className="stage">
        <div className="dot-pulse"></div>
      </div>
    </div>
  );
};

export default function App({ Component, pageProps }) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

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
  );
}
