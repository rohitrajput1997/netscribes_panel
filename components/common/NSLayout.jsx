/** @format */

import { Layout } from "antd";
import Image from "next/image";
import React from "react";
import NSHeader from "../NSHeader";
import SidebarMenu from "../SidebarMenu";
import NSLoaderWithMsg from "./NSLoaderWithMsg";
import NSGlobalSpinner from "../common/NSGlobalSpinner";
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
  setOpenProfile,
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
            setOpenProfile={setOpenProfile}
          />
          {loader && <NSGlobalSpinner isVisible={loader} />}

          <Content>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              {children}
              {/* {loader ? <NSLoaderWithMsg /> : children} */}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default NSLayout;
