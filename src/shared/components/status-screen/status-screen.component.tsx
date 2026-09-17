'use client';

import { Box, Stack, Typography, useMediaQuery } from '@mui/material';

import TrailLandscape from '@/shared/components/trail-landscape/trail-landscape.component';

import type { StatusScreenProps } from './status-screen.types';

function StatusScreen({
  icon,
  eyebrow,
  title,
  description,
  actions,
}: StatusScreenProps) {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  const viewportMode = isMobile ? 'mobile' : 'desktop';

  return (
    <Stack
      component="main"
      sx={theme => ({
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        isolation: 'isolate',
        overflow: 'hidden',
        backgroundImage: `radial-gradient(ellipse at 50% 45%, ${theme.palette.background.paper} 10%, transparent 65%)`,
        minHeight: `calc(100dvh - ${theme.mixins.navigationBar.height[viewportMode]}px)`,
        px: 4,
        py: 6,
      })}
    >
      <Box
        sx={theme => ({
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          minWidth: 720,
          zIndex: -2,
          pointerEvents: 'none',
          maskImage: `linear-gradient(to bottom, transparent, ${theme.palette.background.default} 60%)`,
        })}
      >
        <TrailLandscape opacity={0.85} />
      </Box>

      <Stack
        sx={{
          alignItems: 'center',
          textAlign: 'center',
          mb: { xs: 0, md: '35vh' },
        }}
      >
        <Stack
          sx={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            bgcolor: 'secondary.main',
            color: 'primary.main',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon}
        </Stack>

        {eyebrow && (
          <Typography
            sx={{
              mt: 3,
              color: 'text.secondary',
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: '.16em',
              textTransform: 'uppercase',
            }}
          >
            {eyebrow}
          </Typography>
        )}

        <Typography
          component="h1"
          sx={{
            mt: eyebrow ? 1 : 3,
            maxWidth: 400,
            color: 'text.primary',
            fontFamily: 'var(--font-display)',
            fontSize: { xs: 38, sm: 48 },
            lineHeight: 1.1,
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          sx={{ mt: 2, maxWidth: 400, color: 'text.secondary' }}
        >
          {description}
        </Typography>

        <Box sx={{ mt: 4 }}>{actions}</Box>
      </Stack>
    </Stack>
  );
}

export default StatusScreen;
