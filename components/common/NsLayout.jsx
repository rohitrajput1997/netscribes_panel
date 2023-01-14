import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import SidebarMenu from "../SidebarMenu";
import NSHeader from "../NSHeader";
const { Content, Footer, Sider } = Layout;

const NSLayout = ({ children }) => {
  return (
    <Layout className="layout">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        width={230}
      >
        <div className="logo flex justify-center items-center">
          <Image src="./images/logo.svg" alt="" width={200} height={200} />
        </div>
        <SidebarMenu />
      </Sider>

      <Layout>
        {/* header section */}
        <NSHeader />

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
  );
};
export default NSLayout;
