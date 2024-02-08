//asignar un nombre y versio al cache
const CACHE_NAME = "v1_cache_sw_pwa",
  urlsToCache = [
    "./",
    "https://fonts.googleapis.com/css?family=Raleway:400,700",
    "https://fonts.gstatic.com/s/raleway/v12/1Ptrg8zYS_SKggPNwJYtWqZPAA.woff2",
    "https://use.fontawesome.com/releases/v5.0.7/css/all.css",
    "https://use.fontawesome.com/releases/v5.0.6/webfonts/fa-brands-400.woff2",
    "./style.css",
    "./script.js",
    "./img/programacion.png",
  ];

//durante la fase de instalacion, generalmente se almacenan en cache los archivos estaticos
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache).then(() => self.skipWaiting());
      })
      .catch((err) => console.log("Fallo registro de cache ", err))
  );
});

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexion
self.addEventListener("activate", (e) => {
  const cacheWhiteList = [CACHE_NAME];

  e.waitUntil(
    caches
      .keys()
      .then((cachesNames) => {
        cachesNames.map((cacheName) => {
          //Eliminando lo que ya no se necesita en cache
          if (cacheWhiteList.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        });
      })
      //Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  );
});

//cuando el navegador recupera una url
self.addEventListener("fetch", (e) => {
  //Responde ya sea con el objeto en cache o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request).then((res) => {
      if (res) {
        //recupera del cache
        return res;
      }
      return fetch(e.request);
    })
  );
});
