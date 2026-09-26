'use client';

import { Button, Stack } from '@mui/material';
import { CloudOff, RotateCcw } from 'lucide-react';

import StatusScreen from '@/shared/components/status-screen/status-screen.component';

function OfflinePage() {
  return (
    <StatusScreen
      icon={<CloudOff size={32} aria-hidden="true" />}
      eyebrow="Modo offline"
      title="Você está sem conexão"
      description="As trilhas já carregadas continuam disponíveis. Reconecte-se para acessar conteúdos que ainda não estão neste dispositivo."
      actions={
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button
            variant="rounded"
            size="large"
            color="primary"
            startIcon={<RotateCcw size={18} />}
            onClick={() => window.location.reload()}
          >
            Tentar novamente
          </Button>
          <Button href="/" variant="rounded" size="large" color="ghostOnLight">
            Ver trilhas salvas
          </Button>
        </Stack>
      }
    />
  );
}

export default OfflinePage;
