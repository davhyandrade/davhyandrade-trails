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
  const trackWorker = (worker: ServiceWorker) => {
    if (isUpdateReady(worker)) {
      onUpdateReady(worker);
      return;
    }

    worker.addEventListener('statechange', () => {
      if (isUpdateReady(worker)) onUpdateReady(worker);
    });
  };

  if (registration.installing) trackWorker(registration.installing);

  registration.addEventListener('updatefound', () => {
    if (registration.installing) trackWorker(registration.installing);
  });
};
