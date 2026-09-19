'use client';

import { Button } from '@mui/material';
import { Info, TriangleAlert } from 'lucide-react';

import InstallStickyBanner from '@/app/_components/pwa-manager/install-sticky-banner/install-sticky-banner.component';
import StickyBanner from '@/app/_components/pwa-manager/sticky-banner/sticky-banner.component';

import { usePwaManager } from './pwa-manager.hook';

function PwaManager() {
  const {
    installPrompt,
    isOffline,
    waitingWorker,
    installBannerDismissed,
    handleInstall,
    handleDismissInstallBanner,
    handleUpdate,
  } = usePwaManager();

  return (
    <>
      <StickyBanner
        open={isOffline}
        severity="warning"
        icon={<TriangleAlert size={20} />}
        slotProps={{
          default: {
            text: 'Você está offline. Alguns conteúdos podem não estar disponíveis.',
          },
          compact: {
            text: 'Você está offline.',
          },
        }}
      />

      <StickyBanner
        open={!!waitingWorker}
        severity="info"
        icon={<Info size={20} />}
        action={
          <Button
            variant="text"
            size="small"
            color="inherit"
            onClick={handleUpdate}
          >
            Atualizar
          </Button>
        }
        slotProps={{
          default: {
            text: 'Uma nova versão do Trilhas está disponível.',
          },
        }}
      />

      <InstallStickyBanner
        open={
          Boolean(installPrompt) &&
          !installBannerDismissed &&
          !isOffline &&
          !waitingWorker
        }
        onInstall={handleInstall}
        onClose={handleDismissInstallBanner}
      />
    </>
  );
}

export default PwaManager;
