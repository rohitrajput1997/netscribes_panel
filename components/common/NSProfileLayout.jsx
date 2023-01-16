import Image from "next/image";
import React from "react";
import NSButton from "./NSButton";
import ProfileFooterMenuJson from "../../components/json/ProfileFooterMenuJson";

function NSProfileLayout({ children }) {
  return (
    <>
      <div className="grid grid-cols-6 h-[70px] bg-[var(--pure)] h-[100vh] relative">
        <div className="col-span-1 flex justify-center items-center border-r-[1px] border-gray-800">
          <Image src="./images/logo.svg" alt="" width={200} height={200} />
        </div>
        <div className="col-span-3 col-end-6 h-full flex justify-end items-center mr-5">
          <ul className="flex font-MontMedium">
            <li className="min-w-[100px] text-center">Solutions</li>
            <li className="min-w-[100px] text-center">Why Us</li>
            <li className="min-w-[100px] text-center">About us</li>
            <li className="min-w-[100px] text-center">Blogs</li>
            <li className="min-w-[100px] text-center">Case studies</li>
          </ul>
        </div>
        <div className="col-span-1 col-end-7 h-full flex items-center border-l-[1px] border-gray-800">
          <NSButton title="Logout" className="text-white ml-5" />
        </div>
      </div>

      <div className="p-2">{children}</div>
      <div className="h-[70px] bg-[#005f86] absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="flex items-center justify-center">
          {ProfileFooterMenuJson.map((_, index) => (
            <h1
              className={`min-w-[150px] text-[var(--pure)] text-[.9rem] ${
                index === 0 ? "" : "border-l-2"
              } border-white text-center`}
              key={index}
            >
              {_.label}
            </h1>
          ))}
        </div>
      </div>
    </>
  );
}

export default NSProfileLayout;
