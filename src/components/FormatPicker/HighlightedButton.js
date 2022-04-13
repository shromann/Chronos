import { styled } from '@mui/material/styles';
import FormatButton from './FormatButton';

const HighlightedButton = styled(FormatButton)(({ theme }) => ({
  background: '#E5E5E5',
}))

export default HighlightedButton;
