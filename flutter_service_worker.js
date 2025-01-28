'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0b58c554b9bca00564e6db1141c4d71c",
"version.json": "21136a33248c4f443ffcbce5bd85cbcf",
"index.html": "a72720c46d5bbe46b93be5873eaf6019",
"/": "a72720c46d5bbe46b93be5873eaf6019",
"main.dart.js": "42624abe34e00665812aa2547b72dfc3",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8c1a4cd12250bc44a8cd6e9437c4ef6d",
".git/config": "b2282c40dda2658e332eedc9fdbfb2a5",
".git/objects/61/c3c1660ca62a57f15139161b65933e268cb33b": "f95615e21f1d44031c5faa296530aad4",
".git/objects/0c/167df123b662dc4f91bba3cd935401bb2d9584": "246f8601e4b9058caa9080c20c25325b",
".git/objects/3e/abe1e9bebf5f70ec72c98e0a2bcd6d21e02beb": "dc26229534ffda3d4756b6587f251e45",
".git/objects/9e/def458636cb86813fa966b47452ab6e37354d4": "17aa60be9b567f3d3df9a01d2f333824",
".git/objects/04/7dcdab5ec78d3bbaacbbfe0ba757a3ddfbcbc1": "455c89ab12f13d28db664568e8d06da5",
".git/objects/3d/6156328423e17b4d5d3ab75eed372f9fcf257b": "de181a0984997b691ba02e10c39af6fc",
".git/objects/34/3d780198cfbbc79192ab2caab6d2f6fd584343": "2fc661cbfba02ff4dbd5b97a162daef6",
".git/objects/9c/d99ccb63adb84d6438993f84d8dfa3507b066e": "e7688de414f303ecbc2a49d4614905e4",
".git/objects/ac/df022cb93255240a5fd42638b1845d411a9fe6": "aca27db7d023dbcf79d60d92a520689b",
".git/objects/ac/f0760308b7aa1cb8cfcb37eb183edd977c66a1": "db7d54c14e19dd3aa82f22a1417ea78a",
".git/objects/d1/bf19f79c4a58b1e4a4b5471bb02cc6bbc9adef": "741d5696d1d03f0d3c39515daadf7f22",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/a053554e93d85a4ca3073d093a8a3816bd28fd": "e8e6ef0219aee2f8bd3a237428c7d698",
".git/objects/f3/5e1cee36d7ff1709b0890f36fa954ffb3afd6d": "6822d91a47e6f61d1e07c2515d6180d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/4e/f03dbb0d55e2515190c18c46bce426abd766c1": "3f69137cef00622af3d3db1013989c04",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/7c/d32697af981a35dff5b74d067caca07f9211d9": "239b0db0d6faace9ec2055e4c2b1a610",
".git/objects/45/e214b9a552ca833be6a065e39f287731e04495": "cb4d164b011d20b2ad1ff9ade3ef5d0e",
".git/objects/1f/a436f9d5ee323b69b25985dbc3a0f5e2f22003": "5e263283ef79ce95a6e1e88db13721ad",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/2a7209f03049ae8c31f57deb6c076352f5890d": "36b8628b40c72dbb3f40ccb70940efe7",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/73/f1fb4cc14fa5891b78bc6b2122ee3ee2ff79ba": "2f1d85d38599dc7b57547984df2c28f9",
".git/objects/87/427d91eb174ea84a3495c43ed46ab4c24e77f1": "57604387d950ffb44aa13a70fed44ef2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/2a/bd8143a2a9447eee2dd8bc81361a708f4fbfd3": "844e25cc2cfb05df82fd3dcb3f5aac1f",
".git/objects/88/fe4bf7815e38587ac1b23d0066bc3b381614bd": "98c289d54789716ccb4410d5428d8268",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/6e9bcf39f4578daaf482fb94f4fb2f03618959": "9d4de37b22121254fc8319c0639b6730",
".git/objects/09/53a09f0fdbb59d188db2590e4cbb1e24fee8ac": "ae80ec12d31cad2ebc6d157b8cb7f1ce",
".git/objects/54/08aa8585b297d58f61e94dcea804949f2a979f": "2dc57a7bbeee8f5ed2d49f816b60d011",
".git/objects/98/27f79a22f16bfb2ec6586d1ad0cafebff8da67": "510c84457f437b7225a292b704bc8b09",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/3b851805ebc742c1fcdb2178c106f1e0beb4dd": "b2b6640ccce3f03041907f59750fec91",
".git/objects/6d/6e57ec3d407f4904c2897c89f1f2115a5873fb": "1aada675f49d88cfa0f9df115dd5f1a9",
".git/objects/01/df5b5c537b989d23d9285e5afad44036c0edf1": "a0f0a06aadf4041f7c2f727ab2c4f50e",
".git/objects/39/217f7303f6701991377303da6e6369096a91d1": "82ee2a745d2afd2a09042bd1348f8acc",
".git/objects/99/832990a0fa6a867129c0d5cd80e4cb26f823c1": "65b63eb231412c938a9999ef756b2628",
".git/objects/97/e9d039fba0d47be9e57cfe37e79ea642867d5d": "99efddd588f496aff9d48a5f18704f7f",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/f9/9f12b9960a953e02db6a7d05f3fc38503bd508": "8dfd564aa0ef9ae1448ac3ec0b664a54",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/d0630e3f85d800344423102f33fc30cf155035": "97b72a2613542f5626048a8ae4a024c5",
".git/objects/1c/d4f2b8214b736e003ca0f1f01489d7f1104bc1": "3c167edd020921ccbe19141105ed340f",
".git/objects/7a/70a98fb7b8c1d515e87efefa4f7ea2083f2a90": "7568e13d081c89e888bfb65731e56fa9",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ee9e373b332411c33388eb5afa655175",
".git/logs/refs/heads/main": "5e2f57058cdeb659b85fd945bcc01c57",
".git/logs/refs/remotes/origin/main": "aa0927f20d4d14a90a4a902c71a07a55",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "4c5a0393ef57dd7fa9c11d725848f81c",
".git/refs/remotes/origin/main": "4c5a0393ef57dd7fa9c11d725848f81c",
".git/index": "e42ed3024fe80d01824bf6d304a8cf4f",
".git/COMMIT_EDITMSG": "cd260a5da9ea921bc36f1f7194679f68",
"assets/AssetManifest.json": "3c0402211d00a4244188864b510ea4a5",
"assets/NOTICES": "6ba06ae920638a737494bd2e2251d446",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "cb1ce9a48841e22365b52def25a4b552",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "da0e81a1390a722c30156a0ff871a0a9",
"assets/fonts/MaterialIcons-Regular.otf": "80b6d95b61db98832e754d95d2b9edcb",
"assets/assets/servicio1.jpeg": "111d6db49b49dcc5106cbfedaeab1c56",
"assets/assets/Logo.png": "6625dbd6d60d9d3305eb0629273b9e50",
"assets/assets/fondo.jpeg": "bb64224bc6ee06a068fff300e11a7a49",
"assets/assets/servicio2.jpeg": "d4bc363ac1e69926d23ace28baeef33e",
"assets/assets/fondo.jpg": "0c9846454b5492ab8fc6e95d6da6edc9",
"assets/assets/servicio3.jpeg": "d9d7c790bb0294860aff44e1d8c24869",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
