import Image from "next/image";
import React, { useState } from "react";
import NSCard from "../components/common/NSCard";
import NSLayout from "../components/common/NSLayout";
import BTSideBar from "../components/businessTrends/BTSideBar";
import BTList from "../components/businessTrends/BTList";

const BusinessTrends = () => {
  const [selectedSideMenu, setSelectedSideMenu] = useState(11);

  return (
    <NSLayout>
      <NSCard
        className="bg-[var(--pure)]"
        style={{ padding: 0, overflow: "hidden" }}
      >
        <div className="flex w-[100%] gap-2 relative">
          {BTSideBar({
            setSelectedSideMenu: setSelectedSideMenu,
            selectedSideMenu: selectedSideMenu,
          })}

          {BTList()}
        </div>
      </NSCard>
    </NSLayout>
  );
};

export default BusinessTrends;
