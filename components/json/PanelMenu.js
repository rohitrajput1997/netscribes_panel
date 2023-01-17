/** @format */

import { BsFillTagsFill, BsYoutube } from "react-icons/bs"
import { FaRunning } from "react-icons/fa"
import { IoCartSharp } from "react-icons/io5"
import { MdHomeFilled } from "react-icons/md"
import { RiRecycleFill } from "react-icons/ri"

const PanelMenu = [
  {
    label: "Home",
    value: "home",
    icon: './assets/home.svg',
    route: "/",
    key: "/",
  },
  {
    label: "Sales/Pricing Intel",
    value: "selesPricingIntel",
    icon: './assets/tags.svg',
    route: "/sales-pricing-intel",
    key: "/sales-pricing-intel",
  },
  {
    label: "Inventory Watch",
    value: "inventory-watch",
    icon: './assets/shopping-cart.svg',
    route: "/inventory-watch",
    key: "/inventory-watch",
  },
  {
    label: "Compititor Capture",
    value: "compititorCapture",
    icon: './assets/running.svg',
    route: "/compititorCapture",
    key: "/compititorCapture",
  },
  {
    label: "Marketplace Track",
    value: "marketplace-track",
    icon: <FaRunning size={20} />,
    route: "/marketplace-track",
    key: "/marketplace-track",
  },
  {
    label: "360 Business Trends",
    value: "business-trends",
    icon: './assets/recycle.svg',
    route: "/business-trends",
    key: "/business-trends",
  },
  {
    label: "Dashboard Demo Video",
    value: "dashboardDemoVedio",
    icon: './assets/XMLID_184_.svg',
    route: "/dashboardDemoVedio",
    key: "/dashboardDemoVedio",
  },
]

export default PanelMenu
