import moment from "moment";
import React, { useMemo, useState } from "react";
import CustomDatePicker from "../../common/CustomDatePicker";
import NSButton from "../../common/NSButton";
import NSCard from "../../common/NSCard";

function MarketOverview({ setFromTo, handleApply }) {
  const [date_picker, setDatePicker] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [customOpen, setCustomOpen] = useState(false);
  const [date, setDate] = useState(
    date_picker === "customRange"
      ? `${moment(fromDate).format("MMM DD, YYYY")} - ${moment(toDate).format(
          "MMM DD, YYYY"
        )}`
      : "thisMonth"
  );
  const options = [
    { label: "This Month", value: "thisMonth" },
    { label: "Last Month", value: "lastMonth" },
    { label: "Custom Range", value: "customRange" },
  ];

  return (
    <NSCard className="w-full market_overview">
      <div className="flex items-center flex-wrap justify-between">
        <h1 className="w-[200px] text-[1.2rem] text-[var(--secondary)] font-interSemiBold">
          Market Overview
        </h1>
        <div className="flex items-center relative">
          <CustomDatePicker
            options={options}
            setDate={setDate}
            setDatePicker={setDatePicker}
            setCustomOpen={setCustomOpen}
            date={date}
            customOpen={customOpen}
            setFromDate={setFromDate}
            setToDate={setToDate}
            setFromTo={setFromTo}
          />
          <NSButton
            title="Cancel"
            bgBordered
            className="ml-2 font-interMedium"
            onClick={() => {
              setDate("thisMonth");
              handleApply(true);
            }}
          />
          <NSButton
            title="Apply"
            bgPrimary
            className="ml-2 font-interMedium"
            onClick={() => handleApply()}
          />
        </div>
      </div>
    </NSCard>
  );
}

export default MarketOverview;
