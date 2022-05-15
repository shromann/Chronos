import React from "react";

import { NUM_HOURS } from "../utils/constants";
import Block from "./Block";

const RowBlocks = ({ width }) => {
  const allBlocks = [];

  for (let i = 0; i < NUM_HOURS; i++) {
    allBlocks.push(<Block key={i} hour={i}/>);
  }

  return <>{allBlocks}</>;
};

export default RowBlocks;
