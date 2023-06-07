import Image from "next/image";
import React from "react";
import NSCard from "../components/common/NSCard";
import NSLayout from "../components/common/NSLayout";
import BusinessTrendsSidebar from "../components/json/BusinesstrendsSidebar.json";
import NSDropdown from "../components/common/NSDropdown";

const BusinessTrends = () => {
  return (
    <NSLayout>
      <NSCard
        className="bg-[var(--pure)]"
        style={{ padding: 0, overflow: "hidden" }}
      >
        <div className="flex w-[100%] gap-2">
          <div className="w-[20%] my-2">
            {BusinessTrendsSidebar.map((item) => {
              return (
                <>
                  {item?.key === 11 && (
                    <NSDropdown className="w-[200px] mx-4 mb-2" options={[]} />
                  )}
                  <div
                    key={item.key}
                    className="w-full bg-slate-300 h-14 mb-2 px-4 font-interMedium"
                  >
                    {item.label}
                  </div>
                </>
              );
            })}
          </div>
          <div className="w-[80%] bg-cyan-100 p-2">sdsds</div>
        </div>
      </NSCard>
    </NSLayout>
  );
};

export default BusinessTrends;
