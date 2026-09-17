'use client';

import { Button } from '@mui/material';
import { Info, TriangleAlert } from 'lucide-react';
import { usePathname } from 'next/navigation';

import InstallBanner from '@/app/_components/pwa-manager/install-banner/install-banner.component';
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
  const isOfflinePage = usePathname() === '/offline';

  return (
    <>
      <StickyBanner
        open={isOffline && !isOfflinePage}
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
            text: 'Uma nova versão do Minhas Trilhas está disponível.',
          },
        }}
      />

      <InstallBanner
        open={
          Boolean(installPrompt) &&
          !installBannerDismissed &&
          !isOffline &&
          !isOfflinePage &&
          !waitingWorker
        }
        onInstall={handleInstall}
        onClose={handleDismissInstallBanner}
      />
    </>
  );
}

export default PwaManager;
