











                  'tabs for this page are closed. See http://bit.ly/CRA-PWA.'
                'New content is available and will be used when all ' +
                config.onSuccess(registration);
                config.onUpdate(registration);
              'worker. To learn more, visit http://bit.ly/CRA-PWA'
              );
              // "Content is cached for offline use." message.
              // At this point, everything has been precached.
              // At this point, the updated precached content has been fetched,
              // Execute callback
              // Execute callback
              // It's the perfect time to display a
              // but the previous service worker will still serve the older
              // content until all client tabs are closed.
              console.log(
              console.log('Content is cached for offline use.');
              if (config && config.onSuccess) {
              if (config && config.onUpdate) {
              }
              }
            'This web app is being served cache-first by a service ' +
            if (navigator.serviceWorker.controller) {
            window.location.reload();
            }
            } else {
          );
          console.log(
          if (installingWorker.state === 'installed') {
          registration.unregister().then(() => {
          return;
          }
          });
        'No internet connection found. App is running in offline mode.'
        (contentType != null && contentType.indexOf('javascript') === -1)
        // Add some additional logging to localhost, pointing developers to the
        // Is not localhost. Just register service worker
        // No service worker found. Probably a different app. Reload the page.
        // Service worker found. Proceed as normal.
        // This is running on localhost. Let's check if a service worker still exists or not.
        // service worker/PWA documentation.
        checkValidServiceWorker(swUrl, config);
        const installingWorker = registration.installing;
        if (installingWorker == null) {
        installingWorker.onstatechange = () => {
        navigator.serviceWorker.ready.then(() => {
        navigator.serviceWorker.ready.then(registration => {
        registerValidSW(swUrl, config);
        registerValidSW(swUrl, config);
        response.status === 404 ||
        }
        });
        });
        };
      ) {
      );
      // Ensure service worker exists, and that we really are getting a JS file.
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      console.error('Error during service worker registration:', error);
      console.log(
      const contentType = response.headers.get('content-type');
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
      if (
      if (isLocalhost) {
      registration.onupdatefound = () => {
      registration.unregister();
      return;
      }
      }
      } else {
      } else {
      };
    )
    .catch(() => {
    .catch(error => {
    .register(swUrl)
    .then(registration => {
    .then(response => {
    // 127.0.0.1/8 is considered localhost for IPv4.
    // The URL constructor is available in all browsers that support SW.
    // [::1] is the IPv6 localhost address.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
    navigator.serviceWorker.ready.then(registration => {
    window.addEventListener('load', () => {
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(
    }
    })
    })
    });
    });
    });
    });
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl)
  if ('serviceWorker' in navigator) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  navigator.serviceWorker
  window.location.hostname === 'localhost' ||
  }
  }
);
// This lets the app load faster on subsequent visits in production, and gives
// This optional code is used to register a service worker.
// To learn more about the benefits of this model and instructions on how to
// existing tabs open on the page have been closed, since previously cached
// it offline capabilities. However, it also means that developers (and users)
// opt-in, read http://bit.ly/CRA-PWA
// register() is not called by default.
// resources are updated in the background.
// will only see deployed updates on subsequent visits to a page, after all the
const isLocalhost = Boolean(
export function register(config) {
export function unregister() {
function checkValidServiceWorker(swUrl, config) {
function registerValidSW(swUrl, config) {
}
}
}
}
