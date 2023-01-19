/** @format */

import { Layout } from "antd"
import Image from "next/image"
import React from "react"
import NSHeader from "../NSHeader"
import SidebarMenu from "../SidebarMenu"
const { Content, Footer, Sider } = Layout

const NSLayout = ({ children, header_sentence }) => {
  return (
    <Layout
      className="layout"
      style={{ minHeight: "100vh", overflow: "hidden" }}
    >
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
        width={230}
      >
        <div className="logo flex justify-center items-center">
          <Image src="./images/logo.svg" alt="" width={200} height={200} />
        </div>
        <SidebarMenu />
      </Sider>

      <Layout
        style={{
          height: "100vh",
          overflow: "scroll",
          backgroundColor: "var(--bg-main)",
        }}
      >
        {/* header section */}
        <NSHeader header_sentence={header_sentence} />

        <Content>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
export default NSLayout
