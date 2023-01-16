/** @format */

import { Layout } from "antd"
import ProfileFooterMenuJson from "../../components/json/ProfileFooterMenuJson"

import Image from "next/image"
import React from "react"
import NSButton from "./NSButton"
const { Content, Footer, Sider, Header } = Layout
function NSProfileLayout({ children }) {
  return (
    <Layout className="layout overflow-hidden">
      <Header>
        <div className="grid grid-cols-6 h-[80px] bg-[var(--pure)]">
          <div className="col-span-1 flex justify-center items-center border-r-[1px] border-gray-800">
            <Image src="./images/logo.svg" alt="" width={200} height={200} />
          </div>
          <div className="col-span-3 col-end-6 h-full flex justify-end items-center mr-5">
            <ul className="flex font-MontMedium">
              <li className="min-w-[100px] text-center cursor-pointer">Solutions</li>
              <li className="min-w-[100px] text-center cursor-pointer">Why Us</li>
              <li className="min-w-[100px] text-center cursor-pointer">About us</li>
              <li className="min-w-[100px] text-center cursor-pointer">Blogs</li>
              <li className="min-w-[100px] text-center cursor-pointer">Case studies</li>
            </ul>
          </div>
          <div className="col-span-1 col-end-7 flex items-center mt-0 border-l-[1px] border-gray-800">
            <NSButton title="Logout" className="text-white ml-5 py-0 flex justify-center items-center" style={{width: '100px', padding: 0, height: '40px'}} />
          </div>
        </div>
      </Header>
      <Content className="max-h-[90vh] overflow-y-scroll">
        {" "}
        <div className="p-2">{children}</div>
      </Content>
      <Footer>
        <div className="h-[70px] bg-[#005f86] flex justify-center">
          <div className="flex items-center justify-center">
            {ProfileFooterMenuJson.map((_, index) => (
              <h1
                className={`min-w-[150px] text-[var(--pure)] text-[.9rem] cursor-pointer ${
                  index === 0 ? "" : "border-l-2"
                } border-white text-center`}
                key={index}
              >
                {_.label}
              </h1>
            ))}
          </div>
        </div>
      </Footer>
    </Layout>
  )
}

export default NSProfileLayout
