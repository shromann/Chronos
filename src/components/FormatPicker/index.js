/**
 * Use MUI: Stack -> Item 
 */

import React from 'react';
import { ButtonGroup } from '@mui/material';
import FormatButton from './FormatButton';
import HighlightedButton from './HighlightedButton';

export default function FormatPicker() {
  return (
    <div>
      <ButtonGroup direction="row" spacing={0}>
        <HighlightedButton>Day</HighlightedButton>
        <FormatButton>Week</FormatButton>
        <FormatButton>Month</FormatButton>
        <FormatButton>Year</FormatButton>
      </ButtonGroup>
    </div>
  );
}
