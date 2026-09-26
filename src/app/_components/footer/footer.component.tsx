'use client';

import { Box, Stack, Typography } from '@mui/material';

import TrailLandscape from '@/shared/components/trail-landscape/trail-landscape.component';

const START_YEAR = 2026;

function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightYears =
    START_YEAR === currentYear ? START_YEAR : `${START_YEAR} - ${currentYear}`;

  return (
    <Stack>
      <Box
        sx={theme => ({
          position: 'relative',
          height: { xs: 170, md: 400 },
          overflow: 'hidden',
          pointerEvents: 'none',
          maskImage: `linear-gradient(to bottom, transparent, ${theme.palette.background.default})`,
          mb: {
            xs: `${theme.mixins.navigationBar.height.mobile}px`,
            md: 0,
          },
        })}
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            minWidth: 720,
          }}
        >
          <TrailLandscape opacity={0.7} />
        </Box>
      </Box>

      <Stack
        component="footer"
        sx={{
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.soft',
          borderTop: 1,
          borderColor: 'divider',
          padding: 6,
        }}
      >
        <Typography sx={{ color: 'text.secondary', fontSize: 12 }}>
          © {copyrightYears} · Minhas trilhas
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Footer;
