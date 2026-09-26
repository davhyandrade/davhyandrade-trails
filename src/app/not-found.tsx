'use client';

import { Button } from '@mui/material';
import { ArrowLeft, MapPinOff } from 'lucide-react';

import StatusScreen from '@/shared/components/status-screen/status-screen.component';

function NotFoundPage() {
  return (
    <StatusScreen
      icon={<MapPinOff size={32} aria-hidden="true" />}
      eyebrow="Erro 404"
      title="Página não encontrada"
      description="Este caminho não existe ou mudou de endereço. Volte ao início para encontrar suas trilhas."
      actions={
        <Button
          href="/"
          variant="rounded"
          size="large"
          color="primary"
          startIcon={<ArrowLeft size={18} />}
        >
          Voltar ao início
        </Button>
      }
    />
  );
}

export default NotFoundPage;
