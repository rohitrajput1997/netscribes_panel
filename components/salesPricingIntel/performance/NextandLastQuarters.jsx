import React from "react";
import NSCard from "../../common/NSCard";
import PerformanceNextAndLastQuaters from "../../json/PerformanceNextAndLastQuaters";
import QuaterResults from "./QuaterResults";

function NextandLastQuarters({
  last_quarter_result,
  next_quarter_result,
  selectedFilter,
}) {
  return (
    <div className="col-span-1 row-span-1">
      <NSCard>
        <h1 className="text-xl font-interBold">Key Highlights</h1>
        <hr className="my-3 border-b-0 border-[var(--bg-main)]" />

        <QuaterResults
          header={`Last ${selectedFilter || "Week"} Results`}
          childs={PerformanceNextAndLastQuaters({ last_quarter_result }).last}
        />
        <QuaterResults
          header={`Next ${selectedFilter || "Week"} Results`}
          childs={PerformanceNextAndLastQuaters({ next_quarter_result }).next}
        />
      </NSCard>
    </div>
  );
}

export default NextandLastQuarters;
