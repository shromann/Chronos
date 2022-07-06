import React from "react";
import Current from "./Current";
import Upcoming from "./Upcoming";
import Weather from "./Weather";

export default function Header() {
  return (
    <div>
      <div className="bg-gray-300 h-14 items-center flex justify-around">
        <Weather />
        <Current />
        <Upcoming />
        <div className="absolute right-5 w-10 h-10 bg-gray-400 rounded-xl"></div>
      </div>
    </div>
  );
}
