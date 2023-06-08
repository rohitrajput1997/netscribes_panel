import React from "react";
import NSDropdown from "../common/NSDropdown";
import BusinessTrendsSidebar from "../json/BusinesstrendsSidebar.json";

function BTSideBar({ setSelectedSideMenu, selectedSideMenu }) {
  const dropdownData = [
    { label: "Last 15 days", value: "Last 15 days" },
    { label: "Last Month", value: "Last Month" },
    { label: "Last Quarter", value: "Last Quarter" },
    { label: "Last 6 months", value: "Last 6 months" },
    { label: "Last Year", value: "Last Year" },
    { label: "All Data", value: "All Data" },
  ];

  return (
    <>
      <div className="w-[17%] my-2 border-r border-slate-300">
        {BusinessTrendsSidebar.map((item) => {
          return (
            <>
              {item?.key === 11 && (
                <NSDropdown
                  className="w-[200px] mx-4 mb-4"
                  options={dropdownData}
                  value="Last 6 months"
                />
              )}
              <div
                key={item.key}
                className={`w-full ${
                  selectedSideMenu === item?.key
                    ? "bg-[var(--secondary)] text-white font-interSemiBold"
                    : "bg-white font-interRegular"
                } h-12 mb-2 px-4 flex items-center cursor-pointer transition-all duration-700 ease-in-out`}
                onClick={() => setSelectedSideMenu(item.key)}
              >
                <h1>{item.label}</h1>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default BTSideBar;
