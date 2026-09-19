import { createTheme, type Shadows } from '@mui/material/styles';

const shadows = createTheme().shadows.slice() as Shadows;

shadows[1] = '0 16px 44px rgba(29,55,38,.08)'; // card em repouso
shadows[3] = '0 20px 60px rgba(29,55,38,.1)'; // formulário
shadows[5] = '0 22px 56px rgba(29,55,38,.14)'; // card em hover

export { shadows };
