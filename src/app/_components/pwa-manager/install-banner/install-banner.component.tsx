'use client';

import {
  Box,
  Button,
  IconButton,
  Paper,
  Slide,
  Stack,
  Typography,
} from '@mui/material';
import { Download, Share, X } from 'lucide-react';
import Image from 'next/image';

import { installBannerStyles } from './install-banner.styles';
import type { InstallBannerProps } from './install-banner.types';

function InstallBanner({
  open,
  canInstall,
  onInstall,
  onClose,
}: InstallBannerProps) {
  return (
    <Slide direction="up" in={open} mountOnEnter unmountOnExit>
      <Paper
        component="aside"
        aria-label="Instalar o aplicativo Trilhas"
        elevation={20}
        sx={installBannerStyles.root}
      >
        <IconButton
          aria-label="Fechar aviso de instalação"
          onClick={onClose}
          sx={installBannerStyles.close}
        >
          <X size={18} />
        </IconButton>

        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ pr: 4 }}>
          <Image src="/favicon.svg" alt="" width={52} height={52} />
          <Box>
            <Typography
              sx={{
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: '.12em',
                mb: 0.5,
              }}
            >
              TRILHAS NO SEU CELULAR
            </Typography>
            <Typography component="h2" sx={installBannerStyles.heading}>
              Sua próxima aventura,
              <br />a um toque.
            </Typography>
          </Box>
        </Stack>

        <Typography sx={installBannerStyles.description}>
          Adicione o Trilhas à tela inicial e tenha seus caminhos sempre por
          perto.
        </Typography>

        {canInstall ? (
          <Button
            fullWidth
            variant="contained"
            startIcon={<Download size={18} />}
            onClick={onInstall}
            sx={installBannerStyles.button}
          >
            Instalar Trilhas
          </Button>
        ) : (
          <Stack
            direction="row"
            spacing={1}
            sx={installBannerStyles.instructions}
          >
            <Share size={18} style={{ flexShrink: 0, marginTop: 3 }} />
            <Typography variant="inherit">
              Toque em <strong>Compartilhar</strong> e depois em{' '}
              <strong>Adicionar à Tela de Início</strong>.
            </Typography>
          </Stack>
        )}
      </Paper>
    </Slide>
  );
}

export default InstallBanner;
