import Image from "next/image";
import React, { useState } from "react";
import NSCard from "../components/common/NSCard";
import NSLayout from "../components/common/NSLayout";
import BTSideBar from "../components/businessTrends/BTSideBar";
import BTList from "../components/businessTrends/BTList";
import NSButton from "../components/common/NSButton";

const BusinessTrends = () => {
  const [selectedSideMenu, setSelectedSideMenu] = useState(11);

  return (
    <NSLayout>
      <div className="flex justify-between items-center mb-5">
        <h1 className="font-interMedium text-lg">Search page ranking as on Dec 25, 2022</h1>
        <NSButton small title="Refresh Request" className='px-3' />
      </div>
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
