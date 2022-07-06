import React from "react";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import ViewPicker from "./ViewPicker";

export default function Picker({
  handlePrevDay,
  handleNextDay,
  currView,
  setWeek,
  setDay,
  setMonth,
}) {
  return (
    <div className="flex justify-center items-center h-16 space-x-20">
      <button className="button-date" onClick={handlePrevDay}>
        <ArrowLeft fontSize="large" />
      </button>
      <ViewPicker
        currView={currView}
        setDay={setDay}
        setWeek={setWeek}
        setMonth={setMonth}
      />
      <button className="button-date" onClick={handleNextDay}>
        <ArrowRight fontSize="large" />
      </button>
    </div>
  );
}
