import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';


const FormatButton = styled(Button)(({ theme }) => ({
  border: '1px solid #B9B9B9',
  color: 'grey',
  '&:hover': {
    background: '#E5E5E5',
    border: '1px solid #B9B9B9',
  }
}));

export default FormatButton;