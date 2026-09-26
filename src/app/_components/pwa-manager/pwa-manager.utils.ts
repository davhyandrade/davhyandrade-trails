export const isStandalone = () => {
  const isStandaloneDisplay = window.matchMedia(
    '(display-mode: standalone)',
  ).matches;
  const iosNavigator = navigator as Navigator & { standalone?: boolean };
  const isStandaloneOnIOS = Boolean(iosNavigator.standalone);

  return isStandaloneDisplay || isStandaloneOnIOS;
};

export const isUpdateReady = (worker: ServiceWorker) =>
  worker.state === 'installed' && Boolean(navigator.serviceWorker.controller);

export const watchForUpdates = (
  registration: ServiceWorkerRegistration,
  onUpdateReady: (worker: ServiceWorker) => void,
) => {
  registration.addEventListener('updatefound', () => {
    const newWorker = registration.installing;

    if (!newWorker) return;

    newWorker.addEventListener('statechange', () => {
      if (isUpdateReady(newWorker)) onUpdateReady(newWorker);
    });
  });
};
