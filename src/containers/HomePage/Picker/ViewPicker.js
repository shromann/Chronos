import React from "react";
import {
  DAY_VIEW,
  WEEK_VIEW,
  MONTH_VIEW,
} from "../../../components/utils/constants";

export default function ViewPicker({ currView, setWeek, setDay, setMonth }) {
  return (
    <div>
      <div className="flex justify-center bg-gray-200 p-1 rounded-xl h-10">
        <button
          className={
            currView === DAY_VIEW ? "button-view button-active" : "button-view"
          }
          onClick={setDay}
        >
          Day
        </button>
        <button
          className={
            currView === WEEK_VIEW ? "button-view button-active" : "button-view"
          }
          onClick={setWeek}
        >
          Week
        </button>
        <button
          className={
            currView === MONTH_VIEW
              ? "button-view button-active"
              : "button-view"
          }
          onClick={setMonth}
        >
          Month
        </button>
      </div>
    </div>
  );
}
