/** @format */

import { Layout } from "antd";
import Image from "next/image";
import React from "react";
import NSHeader from "../NSHeader";
import SidebarMenu from "../SidebarMenu";
import NSLoaderWithMsg from "./NSLoaderWithMsg";
import NSGlobalSpinner from "./nsglobalSpinner";
const { Content, Footer, Sider } = Layout;

const NSLayout = ({
  children,
  header_sentence,
  loader = false,
  subHeaderTitle,
  searchValue,
  searchFunc,
  onClickFunc,
  isRoute,
}) => {
  return (
    <div className="relative">
      <Layout
        className="layout"
        style={{ minHeight: "100vh", overflow: "hidden" }}
      >
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {}}
          collapsible
          onCollapse={(collapsed, type) => {}}
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
          <NSHeader
            header_sentence={header_sentence}
            subHeaderTitle={subHeaderTitle}
            searchValue={searchValue}
            searchFunc={searchFunc}
            onClickFunc={onClickFunc}
            isRoute={isRoute}
          />
          {/* {loader && <div className="absolute top-0 left-0 bg-[rgba(0,0,0,0.3)] w-[100vw] h-[100vh] z-[10000]">
            <NSGlobalSpinner isVisible={loader} />
          </div>} */}

          <Content>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              {loader ? <NSLoaderWithMsg /> : children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default NSLayout;
