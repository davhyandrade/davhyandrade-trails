import { createTheme } from '@mui/material/styles';

const { shadows } = createTheme();

shadows[1] = '0 16px 44px rgba(29,55,38,.08)';
shadows[3] = '0 20px 60px rgba(29,55,38,.1)';
shadows[5] = '0 22px 56px rgba(29,55,38,.14)';

export { shadows };
