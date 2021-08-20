//the version of cache
const CACHE_NAME = 'v1';
//array of files you choose to cache
const urlsToCache = ['index.html', 'style.css', 'offline.html'];

const self = this;

//Install the SW
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

//Can check what is in cache by going to browser dev tools -> application tab ->
//Cache Storage -> CACHE_NAME

//Listen For Requests
self.addEventListener('fetch', (event) => {
  event.respondWith(
    //match all requests that our pages are making (i.e requests for images, api calls)
    caches.match(event.request).then(() => {
      //fetch the requests made. We are not trying to store the requests but instead make new requests
      //each time so that the data is always up to date
      return (
        fetch(event.request)
          //if cannot fetch data, respond with offline html code
          .catch(() => caches.match('offline.html'))
      );
    })
  );
});

//Activate the SW
self.addEventListener('activate', (event) => {
  //here we will be making sure to delete old verisons of the cache we no longer need
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          //if cacheName is not in the cacheWhitelist array (holding the current cache version)
          //then the instance of cacheName will be deleted. Else keep cache instance
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
