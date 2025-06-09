'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9acd31f8c315b15fa7b0ec883b45e5f6",
"version.json": "b0cd4a7a7785d88aa7be5a0d841a526e",
"index.html": "e1d7d167e1c07a35e19ee3fa2081fd6a",
"/": "e1d7d167e1c07a35e19ee3fa2081fd6a",
"styles.css": "6c2b43f0041b86564309b89c86806194",
"main.dart.js": "a6c73034a289d12db6e1f2fa93541fc6",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"drop_header_desktop.webp": "d95a01e8489486fec07193ce6900ba83",
"drop_init.js": "4eeb70096b06bdc6a8b2c4b07072d441",
"favicon.png": "b38b3762e618b0dedd1243d73eb47907",
"icons/apple-touch-icon.png": "b38b3762e618b0dedd1243d73eb47907",
"icons/Icon-192.png": "38a3389c92a40c9e5e9ed41aeaa59b72",
"icons/Icon-maskable-192.png": "bc8cb720e136efe95e0296e439dafcd6",
"icons/Icon-maskable-512.png": "2d21a459c0f27fb2eaa0e64e24cf4a2a",
"icons/Icon-512.png": "0c8b28dabdd0831ac4341e3ff9fb55ec",
"manifest.json": "8b16a4b910f19988f773ce3c4f727a4c",
"assets/AssetManifest.json": "382a376cc19162a1c0b1f639a7114d54",
"assets/NOTICES": "749db6adf14c72d31a8567d96935d872",
"assets/FontManifest.json": "135d2f113bd6753343c1a93f287d84ed",
"assets/AssetManifest.bin.json": "72af40679197e5c3be4cc494faadb3a3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c8bee8e48a41f98b147229658190e502",
"assets/fonts/MaterialIcons-Regular.otf": "64c65c8578de6873a0ca8604c612e815",
"assets/assets/email.png": "33f87581e9d31899e8a6949890e0d063",
"assets/assets/Payables.png": "0faadaabe62a699e5c40c1290f5eac9d",
"assets/assets/AilaHeader.png": "0e60a1f7d8f334506cb584270895cf35",
"assets/assets/M2.png": "6386ef4568106a275deb7759c0c838ad",
"assets/assets/signals.png": "5ef2ff817daeafc6c0e08a65edacb5a4",
"assets/assets/meeting.png": "75801d5c1e6441bd8e8c0bbea689953a",
"assets/assets/arrow_right.png": "3fa6296d8a76128ca26712868afb45a8",
"assets/assets/Valuation.png": "280b6baf2c498b95ebe0bab99d898d18",
"assets/assets/trendster.png": "94a2cd1d86a33f986df4dde4c299d261",
"assets/assets/Campaigns.png": "e35c3341e8ce39483effb02c42a739c1",
"assets/assets/Archives.png": "06fd9a5b52a8b6e14f82e81364c31bf8",
"assets/assets/M1.png": "bdb3476db49a2911d70bbef3f199cbf8",
"assets/assets/WashDrop.png": "1c026dac31f056d6ace8946d3cd2dcc0",
"assets/assets/cashy.png": "bc93b9e26aaaaea676c29f961f8df61a",
"assets/assets/sms.png": "71773391bf7ea45e7a383de135aabf23",
"assets/assets/Stocks.png": "ccc0125c6e825a0cb33f7dc9a4177b21",
"assets/assets/inventory.png": "c482effa713fddb734ef13dcb21f0b65",
"assets/assets/Layer4.png": "9b4be6891d532dc2de6ce188b002269b",
"assets/assets/dropfm.png": "ef32561047c814fd00093cf30eb18f81",
"assets/assets/google-search-console.png": "281b76544bc0b515a751d5016513e262",
"assets/assets/review.png": "3e4f13406c8ae16cb950f462e953bda8",
"assets/assets/Invest.json": "f91c89ead1a6dd58683cd105026c1046",
"assets/assets/tech-support.png": "4bbfa70284c49d429fa8c8412e8592c6",
"assets/assets/Attend.png": "04ddf02bb9f3757841da96e0eae787a3",
"assets/assets/google-analytics.png": "0f3db6142820bf2e76e466b2b94f323a",
"assets/assets/po.png": "84c4a65c95c3eb1e16c896d6d94de856",
"assets/assets/FinanicalAccounts.png": "257d83712556b3a69adcc5e0725b6749",
"assets/assets/meta-ads-manager.png": "196012dd1188b0e8f84f9e6a6f9fcb70",
"assets/assets/Invest2.json": "90127742c5027452a031b465ebd9d850",
"assets/assets/vendors.png": "0a0a84fab9abe441777e54ab0b8a6ef6",
"assets/assets/logout.png": "bc4fb2a31e4c0bedd306fa28950511fe",
"assets/assets/tasks.png": "2dc064dc54c2fe5aa249a4787280a6bf",
"assets/assets/washdrop-subscription.png": "3a68945ebac3deee903f10f7d15199e7",
"assets/assets/Dividends.png": "62b206c2bf9b3df2f08a2bf46cac1518",
"assets/assets/AddTask1.png": "09baa999fe646947ecb86648340afe2b",
"assets/assets/GarageClosed.png": "f2efb4babbd09f57e5b6569123db1239",
"assets/assets/loading.gif": "c8ee855696cf0f4a3e3533d7ebd1082c",
"assets/assets/S1.png": "ed9f7b2d8d9947682efa3a019024dd28",
"assets/assets/S3.png": "221216562477a9454832b3ae6e1420b6",
"assets/assets/signals-subscription.png": "086790fa94973952cd54422c10fb2712",
"assets/assets/AddTask2.png": "e5378cc988f55ec156a4872db1aac810",
"assets/assets/appstore.png": "83d2980d75a0e187ce9e7c2b695327ed",
"assets/assets/equipment.png": "ad4452c21051d83738684caf762e6927",
"assets/assets/Resume.png": "4296122be023e1ba7df3fe052ab54af8",
"assets/assets/Work.json": "1d78e67c764aff76ec9a12e59ba5b109",
"assets/assets/S2.png": "d913bac06807fc6440ea4a42c4f0b3cc",
"assets/assets/Exploring.png": "8b45e1a8e03a7fbfdf6755adb562afd9",
"assets/assets/journal.png": "5a4c65ed0b51ad21f34f3a75898d4fc4",
"assets/assets/DropShop.png": "2702904dfb7dc941fdf3759ebed34f9a",
"assets/assets/FundingRound1.png": "efa8177e2b228755843ed8491f981cab",
"assets/assets/Splash.png": "f116c057f7918e48f67f38cf1caf7277",
"assets/assets/Header.png": "42547b60013f1ac129f4ec0756cdf5a2",
"assets/assets/Valuation2.png": "45bc339ab6117e410c0fe7de33358152",
"assets/assets/Aila_Logo.png": "ce6d3ecd5853f2c4b5b55703324951c4",
"assets/assets/supplier.png": "6b99e6a05f930a39a421264777c7a62d",
"assets/assets/login.gif": "8eeaf6dc1a0d0c4565f175a120146266",
"assets/assets/app_management.png": "73e031f86196edd78481181b21285cde",
"assets/assets/hr.png": "d8539e9e440fcdd3e27d3a6a200812e1",
"assets/assets/drop_board_logo.png": "e5fb8608d8f645e3af594e08be8ada56",
"assets/assets/data.png": "25d0224293dfc9bff6d21ec26144908f",
"assets/assets/operations.png": "3a490f7d7511439b99d1412083d33878",
"assets/assets/calendar.png": "a1c1d2a862d02fa4ccfd73b354a39a88",
"assets/assets/marketing.png": "5ef4670d58d9d9d99de39164f89428ca",
"assets/assets/icons/users-white.png": "d7683836ebbdd9c74e4b457902e43063",
"assets/assets/icons/hours-white.png": "f10f38757832e3b0b778102958dcb083",
"assets/assets/icons/home-white.png": "f6acd9191f8ef62f8bbb25c726e5aa5b",
"assets/assets/icons/billing-white.png": "cf753ed45f8b57d4111701e3dbb8c99f",
"assets/assets/icons/orders-black.png": "70601d03c1fba978c0b2d80ca5b249d0",
"assets/assets/icons/locations-white.png": "927ee1e620c28bee6ea344ae22ad6a2e",
"assets/assets/icons/items-black.png": "df1514d349ed62e9a56c14155ccb28d1",
"assets/assets/icons/users-black.png": "7714816ad8f96c5096de609fdf877004",
"assets/assets/icons/hours-black.png": "fca91d692ba1a441571096bc9fa3b5f0",
"assets/assets/icons/home-black.png": "1fd72a0b4ab396a013402e6f5a5bccd6",
"assets/assets/icons/billing-black.png": "ef2271ec1886062269dd309bfeef437e",
"assets/assets/icons/locations-black.png": "45865d83b00eb19f16e4e5988575660d",
"assets/assets/icons/orders-white.png": "06eab7dc6bed5416a5e221e619ac3940",
"assets/assets/icons/items-white.png": "671aba67524b6a45c31bf41e834ee11f",
"assets/assets/Dividends.json": "a46f146b1622f3559bd0db0a713f024f",
"assets/assets/Addtask.png": "dfcc92ebfa998514b541dff61a129d57",
"assets/assets/BurgerBackBlue.png": "9a5765b8ecf38fe24292b039bff73793",
"assets/assets/playstore.png": "0ffbf9184fc96e7856a7c4b2f19fc636",
"assets/assets/Track.json": "156a2dc716ca1b6e36c0543988f2423a",
"assets/assets/Invest.png": "ca2a2df709c1ecd2659c2707a24ede00",
"assets/assets/Careers.png": "584ba3bc3bca7624d20d4ba430c55374",
"assets/assets/handle@1x.png": "0c9dacc400d80b7161e45f327cb3f571",
"assets/assets/fonts/RidleyGroteskRegular.ttf": "32c79a7ff9b61e91d8fd2674657fe2cb",
"assets/assets/fonts/RidleyGroteskMedium.ttf": "1ee712a561445efefe8af0a53e7a3069",
"assets/assets/fonts/RidleyGroteskBold.ttf": "66ae001ab729e9988ede1104fb56a364",
"assets/assets/MeetingRoom1.html": "1fdd3112680acfd2a85da1735b060502",
"assets/assets/notification.png": "20c59f82e1aa2f2542a33c1e37e027ce",
"assets/assets/Receivables.png": "aefcb08593a1c9d829682b105f0ea775",
"assets/assets/BurgerBack.png": "938f95c4c2471c03b55fa16db3992d53",
"assets/assets/Garage.png": "650e95385a3a01a37e6ff44cd303bd0c",
"assets/assets/Burger.png": "323aaea4fbd6bad75478a0714a865ca2",
"assets/assets/appstore.webp": "899965c4f643930fe79fe6833dfaa90e",
"assets/assets/arrow_down.json": "d522c774520046b5414635e1bf0a6323",
"assets/assets/ledger.png": "d29a20376c03e5a0acce17dc00d16d79",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
