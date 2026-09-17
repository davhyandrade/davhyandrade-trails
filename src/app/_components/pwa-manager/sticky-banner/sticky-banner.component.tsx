'use client';

import { Slide, Stack, Typography, useScrollTrigger } from '@mui/material';

import { stickyBannerStyles } from './sticky-banner.styles';
import type { StickyBannerProps } from './sticky-banner.types';

function StickyBanner({
  open,
  icon,
  action,
  severity = 'warning',
  threshold = 100,
  slotProps,
}: StickyBannerProps) {
  const triggered = useScrollTrigger({ disableHysteresis: true, threshold });

  if (!open) return null;

  return (
    <>
      <Stack
        direction="row"
        aria-hidden={triggered}
        sx={{
          ...stickyBannerStyles.root,
          bgcolor: `${severity}.main`,
          visibility: triggered ? 'hidden' : 'visible',
        }}
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            color: 'common.white',
          }}
        >
          {icon}

          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            {slotProps.default.text}
          </Typography>

          {action}
        </Stack>
      </Stack>

      <Slide direction="down" in={triggered} mountOnEnter unmountOnExit>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            ...stickyBannerStyles.root,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            color: 'common.white',
            px: 2,
            bgcolor: `${severity}.main`,
          }}
        >
          <Stack
            direction="row"
            sx={{
              width: { xs: '100%', sm: 'auto' },
              justifyContent: { xs: 'space-between', sm: 'center' },
              alignItems: 'center',
            }}
          >
            <Typography
              variant="body2"
              sx={{ textAlign: action ? 'left' : 'center', width: '100%' }}
            >
              {slotProps.compact?.text ?? slotProps.default.text}
            </Typography>

            {action}
          </Stack>
        </Stack>
      </Slide>
    </>
  );
}

export default StickyBanner;
