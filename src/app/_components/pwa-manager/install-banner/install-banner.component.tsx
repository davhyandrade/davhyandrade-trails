'use client';

import { Button, IconButton, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Download, X } from 'lucide-react';
import Image from 'next/image';

import { shapeStyle } from './install-banner.styles';
import type { InstallBannerProps } from './install-banner.types';

function InstallBanner({ open, onInstall, onClose }: InstallBannerProps) {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  if (!open) return null;

  return (
    <Stack
      component="aside"
      aria-label="Instalar o aplicativo Minhas Trilhas"
      sx={theme => ({
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 'appBar',
        isolation: 'isolate',
        overflow: 'hidden',
        bgcolor: 'primary.main',
        backgroundImage: `radial-gradient(ellipse at 85% 0%, ${alpha(theme.palette.secondary.main, 0.18)}, transparent 65%)`,
        color: 'primary.contrastText',
        borderBottom: 1,
        borderColor: 'divider',
        px: { xs: 2, sm: 4 },
        pb: { xs: 2, sm: 3 },
        pt: {
          xs: `calc(${theme.spacing(2)} + env(safe-area-inset-top))`,
          sm: `calc(${theme.spacing(4)} + env(safe-area-inset-top))`,
        },
        ...shapeStyle(theme),
      })}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{
          maxWidth: 'lg',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
          <Stack
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              padding: 1.7,
              bgcolor: 'background.paper',
              borderRadius: 4,
            }}
          >
            <Image src="/favicon.svg" alt="" width={32} height={32} />
          </Stack>

          <Stack spacing={0.5}>
            <Typography
              sx={{
                color: 'secondary.main',
                fontSize: 10,
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
              sx={theme => ({
                display: { xs: 'none', sm: 'block' },
                mt: 0.5,
                color: alpha(theme.palette.primary.contrastText, 0.8),
                fontSize: 12,
                lineHeight: 1.4,
              })}
            >
              Acesse elas direto no seu dispositivo, sem precisar abrir o
              navegador.
            </Typography>
          </Stack>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: 'center',
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            size={isMobile ? 'small' : 'medium'}
            startIcon={<Download size={18} />}
            onClick={onInstall}
          >
            Baixar
          </Button>

          <IconButton
            aria-label="Fechar aviso de instalação"
            onClick={onClose}
            sx={theme => ({
              flexShrink: 0,
              color: alpha(theme.palette.primary.contrastText, 0.8),
              '&:hover': {
                bgcolor: alpha(theme.palette.primary.contrastText, 0.1),
                color: 'primary.contrastText',
              },
            })}
          >
            <X size={18} />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default InstallBanner;
