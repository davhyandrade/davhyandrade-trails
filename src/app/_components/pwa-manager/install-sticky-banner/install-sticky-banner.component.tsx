'use client';

import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import { Download, X } from 'lucide-react';
import Image from 'next/image';

import type { InstallStickyBannerProps } from './install-sticky-banner.types';

function InstallStickyBanner({
  open,
  onInstall,
  onClose,
}: InstallStickyBannerProps) {
  if (!open) return null;

  return (
    <Box
      component="aside"
      aria-label="Instalar o aplicativo Minhas Trilhas"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 'appBar',
        isolation: 'isolate',
        overflow: 'hidden',
        bgcolor: '#173E29',
        backgroundImage:
          'radial-gradient(ellipse at 85% 0%, rgba(171,204,136,.18), transparent 65%)',
        color: '#FFFDF5',
        borderBottom: '1px solid rgba(218,235,188,.2)',
        boxShadow: '0 6px 24px rgba(17,45,30,.12)',
        px: { xs: 2, sm: 4 },
        pb: { xs: 1.75, sm: 2 },
        pt: {
          xs: 'calc(14px + env(safe-area-inset-top))',
          sm: 'calc(16px + env(safe-area-inset-top))',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          zIndex: -1,
          pointerEvents: 'none',
          width: 260,
          height: 260,
          right: '12%',
          top: -180,
          borderRadius: '50%',
          border: '1px solid rgba(218,235,188,.1)',
          boxShadow:
            '0 0 0 24px rgba(218,235,188,.04), 0 0 0 48px rgba(218,235,188,.03)',
        },
      }}
    >
      <Stack
        direction="row"
        sx={{
          maxWidth: 1136,
          mx: 'auto',
          alignItems: 'center',
          gap: { xs: 1.25, sm: 2 },
        }}
      >
        <Box
          sx={{
            display: 'grid',
            placeItems: 'center',
            flexShrink: 0,
            width: { xs: 48, sm: 56 },
            height: { xs: 48, sm: 56 },
            bgcolor: '#FFFDF5',
            borderRadius: '14px',
            border: '1px solid rgba(255,255,255,.5)',
            boxShadow: '0 4px 12px rgba(0,0,0,.12)',
          }}
        >
          <Image src="/favicon.svg" alt="" width={36} height={36} />
        </Box>

        <Box
          sx={{
            flex: 1,
            minWidth: 0,
          }}
        >
          <Typography
            sx={{
              mb: 0.5,
              color: '#C3D6A9',
              fontSize: { xs: 9, sm: 10 },
              fontWeight: 700,
              letterSpacing: '.16em',
              lineHeight: 1.2,
            }}
          >
            INSTALE O APP
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontFamily: 'var(--font-display)',
              fontSize: { xs: 17, sm: 24 },
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-.02em',
              textWrap: 'balance',
            }}
          >
            Minhas Trilhas
          </Typography>

          <Typography
            sx={{
              display: { xs: 'none', sm: 'block' },
              mt: 0.5,
              color: '#CFDCCD',
              fontSize: 12,
              lineHeight: 1.4,
            }}
          >
            Acesse elas direto no seu dispositivo, sem precisar abrir o
            navegador.
          </Typography>
        </Box>

        <Button
          variant="contained"
          size="small"
          startIcon={<Download size={18} />}
          onClick={onInstall}
          sx={{
            flexShrink: 0,
            minHeight: 44,
            px: { xs: 1.5, sm: 2.5 },
            borderRadius: '12px',
            bgcolor: '#D9EDB8',
            color: '#173E29',
            fontSize: { xs: 12, sm: 14 },
            fontWeight: 800,
            textTransform: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,.1)',
            '& .MuiButton-startIcon': { mr: { xs: 0.75, sm: 1 } },
            '&:hover': {
              bgcolor: '#E6F4CE',
              boxShadow: '0 4px 12px rgba(0,0,0,.15)',
            },
            '&.Mui-focusVisible': {
              outline: '2px solid #FFFDF5',
              outlineOffset: 3,
            },
          }}
        >
          Baixar
        </Button>

        <IconButton
          aria-label="Fechar aviso de instalação"
          onClick={onClose}
          sx={{
            flexShrink: 0,
            width: 44,
            height: 44,
            color: '#CFDCCD',
            '&:hover': { bgcolor: 'rgba(255,255,255,.1)', color: '#FFFDF5' },
            '&.Mui-focusVisible': {
              outline: '2px solid #D9EDB8',
              outlineOffset: 2,
            },
          }}
        >
          <X size={18} />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default InstallStickyBanner;
