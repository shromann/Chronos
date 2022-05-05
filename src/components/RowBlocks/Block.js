import styled from '@emotion/styled';
import Box from '@mui/material/Box';

import {
  CALENDAR_ROW_GAP,
  ROW_GAP_BORDER_SIZE,
  DAY_CALENDAR_WIDTH
} from '../utils/constants';

const Block = styled(Box)`
  width: ${DAY_CALENDAR_WIDTH}px;
  height: ${CALENDAR_ROW_GAP}px;
  background-color: transparent;
  border-top: ${ROW_GAP_BORDER_SIZE}px solid #B9B9B9;
  margin: ${ROW_GAP_BORDER_SIZE}px 0px
`;

export default Block;