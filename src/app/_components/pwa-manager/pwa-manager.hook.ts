import { useEffect, useRef, useState } from 'react';

import type { BeforeInstallPromptEvent } from './pwa-manager.types';
import { isStandalone, watchForUpdates } from './pwa-manager.utils';

const INSTALL_BANNER_DISMISSED_KEY = 'pwa:install-banner-dismissed';

export function usePwaManager() {
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isOffline, setIsOffline] = useState(false);
  const [installBannerDismissed, setInstallBannerDismissed] = useState(true);
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(
    null,
  );

  const updateRequestedRef = useRef(false);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    const handleAppInstalled = () => setInstallPrompt(null);
    const handleControllerChange = () => {
      if (updateRequestedRef.current) window.location.reload();
    };
    const handleInstallPrompt = (event: Event) => {
      event.preventDefault();

      if (!isStandalone()) {
        setInstallPrompt(event as BeforeInstallPromptEvent);
      }
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    window.addEventListener('beforeinstallprompt', handleInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    const initialStateFrame = window.requestAnimationFrame(() => {
      setIsOffline(!navigator.onLine);

      try {
        setInstallBannerDismissed(
          sessionStorage.getItem(INSTALL_BANNER_DISMISSED_KEY) === 'true',
        );
      } catch {
        setInstallBannerDismissed(false);
      }
    });

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener(
        'controllerchange',
        handleControllerChange,
      );

      navigator.serviceWorker
        .register('/sw.js', { scope: '/', updateViaCache: 'none' })
        .then(registration => {
          if (registration.waiting) setWaitingWorker(registration.waiting);

          watchForUpdates(registration, setWaitingWorker);
        })
        .catch(error => {
          console.error('Failed to register the service worker.', error);
        });
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('beforeinstallprompt', handleInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      window.cancelAnimationFrame(initialStateFrame);

      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.removeEventListener(
          'controllerchange',
          handleControllerChange,
        );
      }
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;

    await installPrompt.prompt();
    await installPrompt.userChoice;

    setInstallPrompt(null);
  };

  const handleDismissInstallBanner = () => {
    setInstallBannerDismissed(true);

    try {
      sessionStorage.setItem(INSTALL_BANNER_DISMISSED_KEY, 'true');
    } catch (error) {
      console.error('Failed to persist the install banner dismissal.', error);
    }
  };

  const handleUpdate = () => {
    if (!waitingWorker) return;

    updateRequestedRef.current = true;
    waitingWorker.postMessage({ type: 'SKIP_WAITING' });
  };

  return {
    installPrompt,
    isOffline,
    installBannerDismissed,
    waitingWorker,
    handleInstall,
    handleDismissInstallBanner,
    handleUpdate,
  };
}
