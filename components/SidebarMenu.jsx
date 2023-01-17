/** @format */

import { Menu } from "antd";
import Image from "next/image";
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
        selectedKeys={[router?.pathname]}
      >
        {PanelMenu.map((item) => (
          <Menu.Item key={item.key} onClick={() => router.push(item.route)}>
            <div className="flex items-center">
              <Image src={item.icon} alt={item.label} width={20} height={20} className='filter invert' />
              <div className="ml-4 font-MontRegular">{item.label}</div>
            </div>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default SidebarMenu;
