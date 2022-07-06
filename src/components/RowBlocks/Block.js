import styled from "@emotion/styled";
import Box from "@mui/material/Box";

import { CALENDAR_ROW_GAP, ROW_GAP_BORDER_SIZE } from "../utils/constants";

const Block = styled(Box)`
  height: ${CALENDAR_ROW_GAP}px;
  background-color: transparent;
  border-top: ${ROW_GAP_BORDER_SIZE}px solid #b9b9b9;
  margin: ${ROW_GAP_BORDER_SIZE}px 0px;
  width: 1fr;
  :first-of-type {
    border-top: none;
  }
`;

export default Block;
