'use client';

import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material';
import { ArrowLeft, MapPinOff } from 'lucide-react';

import TrailLandscape from '@/shared/components/trail-landscape/trail-landscape.component';

function NotFoundPage() {
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
          maxWidth: 400,
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
          <MapPinOff size={32} aria-hidden="true" />
        </Stack>

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
          Erro 404
        </Typography>

        <Typography
          component="h1"
          sx={{
            mt: 1,
            color: 'text.primary',
            fontFamily: 'var(--font-display)',
            fontSize: { xs: 38, sm: 48 },
            lineHeight: 1.1,
            fontWeight: 700,
          }}
        >
          Página não encontrada
        </Typography>

        <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary' }}>
          Este caminho não existe ou mudou de endereço. Volte ao início para
          encontrar suas trilhas.
        </Typography>

        <Button
          href="/"
          variant="rounded"
          size="large"
          color="primary"
          startIcon={<ArrowLeft size={18} />}
          sx={{ mt: 4 }}
        >
          Voltar ao início
        </Button>
      </Stack>
    </Stack>
  );
}

export default NotFoundPage;
