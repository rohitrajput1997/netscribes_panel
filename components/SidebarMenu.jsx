import { Menu } from "antd";
import { useRouter } from "next/router";
import React from "react";
import PanelMenu from "./json/PanelMenu";

const SidebarMenu = () => {
  const router = useRouter();

  return (
    <div>
      <Menu
        mode="inline"
        // defaultSelectedKeys={useRouter?.pathname}
        style={{ height: "100vh" }}
      >
        {PanelMenu.map((item) => (
          <Menu.Item key={item.key} onClick={() => router.push(item.route)}>
            <div className="flex items-center">
              {item.icon}
              <div className="ml-4">{item.label}</div>
            </div>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default SidebarMenu;
