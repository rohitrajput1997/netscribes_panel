import React, { useMemo, useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker/dist/entry.nostyle";
import NSDropdown from "./NSDropdown";
import moment from "moment";

const now = new Date();
const yesterdayBegin = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate() - 1
);
const todayEnd = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
  23,
  59,
  59,
  999
);

function CustomDatePicker({
  options,
  date,
  setDate,
  setDatePicker,
  setCustomOpen,
  customOpen,
  setFromDate,
  setToDate,
  setFromTo,
}) {
  const [value, onChange] = useState([yesterdayBegin, todayEnd]);

  const handleChange = useMemo(() => {
    const today = moment().format("YYYY-MM-DD");
    if (date) {
      if (date === "thisMonth") {
        const startOfMonth = moment().startOf("month").format("YYYY-MM-DD");
        setFromDate(today);
        setToDate(startOfMonth);
        setFromTo({
          toDate: today,
          fromDate: startOfMonth,
        });
      }
      if (date === "lastMonth") {
        const endOfMonth = moment(moment())
          .subtract(1, "months")
          .endOf("month")
          .format("YYYY-MM-DD");
        const startOfMonth = moment(moment())
          .subtract(1, "months")
          .startOf("month")
          .format("YYYY-MM-DD");
        setFromDate(startOfMonth);
        setToDate(endOfMonth);
        setFromTo({
          fromDate: startOfMonth,
          toDate: endOfMonth,
        });
      }
    }
  }, [date]);

  return (
    <>
      <NSDropdown
        className="min-w-[300px] dd"
        placeholder="Select Period"
        options={options}
        value={date}
        onChange={(e) => {
          // setFromDate(undefined);
          // setToDate(undefined);
          setDate(e);
          setDatePicker(e);
          setCustomOpen(e === "customRange");
          onChange([todayEnd, todayEnd]);
        }}
        isMultiple={false}
        defaultValue="thisMonth"
      />
      <div className="absolute">
        {date === "customRange" && (
          <DateRangePicker
            onChange={(e) => {
              let from_date = e?.[0];
              let to_date = e?.[1];
              setFromDate(moment(from_date).format("MMM DD, YYYY"));
              setToDate(moment(to_date).format("MMM DD, YYYY"));
              setFromTo({
                fromDate: moment(from_date).format("MMM DD, YYYY"),
                toDate: moment(to_date).format("MMM DD, YYYY"),
              });
              setCustomOpen(false);
              setDate(
                `${moment(from_date).format("MMM DD, YYYY")} - ${moment(
                  to_date
                ).format("MMM DD, YYYY")}`
              );
              onChange([from_date, to_date]);
            }}
            style={{
              width: "0px",
              height: 0,
              padding: 0,
              position: "absolute",
              left: "50px",
              opacity: 0,
            }}
            value={value}
            isOpen={customOpen}
            maxDate={new Date()}
            onClick={() => {
              setCustomOpen(true);
            }}
            onOpenChange={() => {
              setCustomOpen(false);
              setToDate(undefined);
              setFromDate(undefined);
              setDate("");
              onChange([yesterdayBegin, todayEnd]);
            }}
          />
        )}
      </div>
    </>
  );
}

export default CustomDatePicker;
