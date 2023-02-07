import moment from "moment";
import React, { useMemo, useState } from "react";
import CustomDatePicker from "../../common/CustomDatePicker";
import NSButton from "../../common/NSButton";
import NSCard from "../../common/NSCard";

function MarketOverview() {
  const [date_picker, setDatePicker] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [customOpen, setCustomOpen] = useState(false);
  const [date, setDate] = useState(
    date_picker === "customRange"
      ? `${moment(fromDate).format("MMM DD, YYYY")} - ${moment(toDate).format(
          "MMM DD, YYYY"
        )}`
      : ""
  );
  const options = [
    { label: "Today", value: "today" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last 7 Days", value: "lastWeek" },
    { label: "This Month", value: "thisMonth" },
    { label: "Last Month", value: "lastMonth" },
    { label: "Custom Range", value: "customRange" },
  ];

  return (
    <NSCard className="w-full market_overview">
      <div className="flex items-center flex-wrap justify-between">
        <h1 className="w-[200px] text-[1.2rem] text-[var(--secondary)]">
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
          />
          <NSButton title="Cancel" bgBordered className="ml-2" />
          <NSButton title="Apply" bgPrimary className="ml-2" />
        </div>
      </div>
    </NSCard>
  );
}

export default MarketOverview;
