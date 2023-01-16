import { MdHomeFilled } from "react-icons/md";
import { BsFillTagsFill } from "react-icons/bs";
import { IoCartSharp } from "react-icons/io5";
import { FaRunning } from "react-icons/fa";
import { RiRecycleFill } from "react-icons/ri";
import { BsYoutube } from "react-icons/bs";

const PanelMenu = [
  {
    key: "home",
    label: "Home",
    value: "home",
    icon: <MdHomeFilled size={20} />,
    route: "/",
  },
  {
    key: "sales-pricing-intel",
    label: "Sales/Pricing Intel",
    value: "selesPricingIntel",
    icon: <BsFillTagsFill size={20} />,
    route: "/sales-pricing-intel",
  },
  {
    key: "inventory-watch",
    label: "Inventory Watch",
    value: "inventory-watch",
    icon: <IoCartSharp size={20} />,
    route: "/inventory-watch",
  },
  {
    key: "compititorCapture",
    label: "Compititor Capture",
    value: "compititorCapture",
    icon: <IoCartSharp size={20} />,
    route: "/",
  },
  {
    key: "marketplace-track",
    label: "Marketplace Track",
    value: "marketplace-track",
    icon: <FaRunning size={20} />,
    route: "/marketplace-track",
  },
  {
    key: "business-trends",
    label: "360 Business Trends",
    value: "business-trends",
    icon: <RiRecycleFill size={20} />,
    route: "/business-trends",
  },
  {
    key: "dashboardDemoVedio",
    label: "Dashboard Demo Video",
    value: "dashboardDemoVedio",
    icon: <BsYoutube size={20} />,
    route: "/",
  },
];

export default PanelMenu;
