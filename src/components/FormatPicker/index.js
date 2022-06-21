import React from "react";
import { ToggleButtonGroup } from "@mui/material";
import FormatButton from "./FormatButton";
import {
  DAY_VIEW,
  WEEK_VIEW,
} from "../utils/constants";

export default function FormatPicker({ view, changeView }) {
  const handleChange = (e, newView) => {
    changeView(newView);
  }

  return (
    <div>
      <ToggleButtonGroup exclusive value={view} onChange={handleChange}>
        <FormatButton
          value={DAY_VIEW}
        >
          Day
        </FormatButton>
        <FormatButton
          value={WEEK_VIEW}
        >
          Week
        </FormatButton>
      </ToggleButtonGroup>
    </div>
  );
}
