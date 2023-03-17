import React from "react";
import { Layout } from "antd";
import Image from "next/image";
const { Header } = Layout;
import { MdKeyboardArrowDown } from "react-icons/md";
import NSSearchbar from "./common/NSSearchbar";
import { useRouter } from "next/router";
import NSCookies from "./common/NSCookies";

function NSHeader({ header_sentence, subHeaderTitle }) {
  const router = useRouter();
  const userData = NSCookies.getUser();
  const { products, avgsales, companies, marketplace, Brand } =
    header_sentence || {};

  return (
    <>
      <div className="sticky top-0" style={{ zIndex: 1000 }}>
        <Header
          style={{
            background: "#ffffff",
            height: "60px",
            overflow: "hidden",
            padding: "10px",
          }}
        >
          <div className="flex items-center w-[100%] justify-between px-3 h-[100%]">
            <div className="w-[50%] ml-[26px]">
              <NSSearchbar
                placeholder="Search for Brand, ASIN, SKU and Category"
                style={{
                  backgroundColor: "white",
                  border: "none",
                  height: "40px",
                  paddingLeft: "32px",
                  backgroundColor: "var(--bg-main)",
                }}
                SearchiconPlaceOnTop="top-6"
              />
            </div>
            <div className="flex">
              <div
                className="w-auto min-w-[220px] bg-[var(--bg-main)] flex items-center p-3"
                style={{ lineHeight: "initial" }}
              >
                <div className="w-10 h-10 bg-gray-400 rounded-full cursor-pointer">
                  <Image
                    src="./assets/avatar.svg"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <div className="ml-3">
                  <span className="text-[0.8rem] font-bold capitalize">{`${
                    userData?.first_name || ""
                  } ${userData?.last_name || ""}`}</span>
                  <br />
                  <span className="text-[0.8rem]">UI/UX Designer</span>
                </div>
              </div>
              <div className="w-[50px] p-3 flex items-center">
                <MdKeyboardArrowDown
                  size={20}
                  onClick={() => router.push("/profile")}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </Header>

        {/* <div className="w-full bg-[var(--secondary)] py-1 px-[20px] text-white flex items-center justify-between">
          <h4 className="uppercase text-[0.9rem] font-bold">
            {subHeaderTitle || "Sales/Pricing Intel"}
          </h4>
          <h6 className="uppercase text-[0.7rem] font-MontMedium">
            {`${products || 300} products matches from ${
              1 || 1
            } companies and ${marketplace || 1} marcketplace`}
          </h6>
        </div> */}
      </div>
    </>
  );
}

export default NSHeader;
