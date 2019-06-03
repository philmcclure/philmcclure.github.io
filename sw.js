/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
     http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
  '/thermocouple_identification/img/r.png',
  '/thermocouple_identification/img/e-iec.png',
  '/thermocouple_identification/img/j.png',
  '/thermocouple_identification/img/k-iec.png',
  '/thermocouple_identification/img/s-iec.png',
  '/thermocouple_identification/img/n.png',
  '/thermocouple_identification/img/e.png',
  '/thermocouple_identification/img/t.png',
  '/thermocouple_identification/img/appicon.png',
  '/thermocouple_identification/img/k.png',
  '/thermocouple_identification/img/s.png',
  '/thermocouple_identification/img/n-iec.png',
  '/thermocouple_identification/img/j-iec.png',
  '/thermocouple_identification/img/r-iec.png',
  '/thermocouple_identification/img/t-iec.png',
  '/thermocouple_identification/index.html',
  '/thermocouple_identification/js/script.js',
  '/thermocouple_identification/css/style.css',
  '/conduit_fill/img/appicon.png',
  '/conduit_fill/index.html',
  '/conduit_fill/js/script.js',
  '/conduit_fill/css/style.css',
  '/transformer_calculator/img/appicon.png',
  '/transformer_calculator/index.html',
  '/transformer_calculator/js/script.js',
  '/transformer_calculator/css/style.css',
  '/motor_sizing/img/appicon.png',
  '/motor_sizing/index.html',
  '/motor_sizing/js/script.js',
  '/motor_sizing/css/style.css',
  '/parts_list/css/style.css',
  '/parts_list/data/parts_list.json',
  '/parts_list/img/appicon.png',
  '/parts_list/js/fuse.js',
  '/parts_list/js/jquery.js',
  '/parts_list/js/jquery.mark.js',
  '/parts_list/js/search.js',
  '/parts_list/index.html',
  '/equipment_list/css/style.css',
  '/equipment_list/data/equipment_list.json',
  '/equipment_list/img/appicon.png',
  '/equipment_list/js/fues.js',
  '/equipment_list/js/jquery.js',
  '/equipment_list/js/jquery.mark.js',
  '/equipment_list/js/search.js',
  '/equipment_list/index.html',
  'css/style.css',
  'img/appicon.png',
  'index.html'
];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});
