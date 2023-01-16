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
    icon: <MdHomeFilled size={20} />,
    route: "/",
    key: "/",
  },
  {
    label: "Sales/Pricing Intel",
    value: "selesPricingIntel",
    icon: <BsFillTagsFill size={20} />,
    route: "/sales-pricing-intel",
    key: "/sales-pricing-intel",
  },
  {
    label: "Inventory Watch",
    value: "inventory-watch",
    icon: <IoCartSharp size={20} />,
    route: "/inventory-watch",
    key: "/inventory-watch",
  },
  {
    label: "Compititor Capture",
    value: "compititorCapture",
    icon: <IoCartSharp size={20} />,
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
    icon: <RiRecycleFill size={20} />,
    route: "/business-trends",
    key: "/business-trends",
  },
  {
    label: "Dashboard Demo Video",
    value: "dashboardDemoVedio",
    icon: <BsYoutube size={20} />,
    route: "/dashboardDemoVedio",
    key: "/dashboardDemoVedio",
  },
]

export default PanelMenu
