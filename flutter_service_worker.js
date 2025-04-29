'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "21a1f32c820a2852f24c56358894732d",
"version.json": "21136a33248c4f443ffcbce5bd85cbcf",
"index.html": "b81e27a76e10f07ba1e3eb206d80e25d",
"/": "b81e27a76e10f07ba1e3eb206d80e25d",
"main.dart.js": "adb6bf98ced45817205171176c885472",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"Logo.png": "6625dbd6d60d9d3305eb0629273b9e50",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8c1a4cd12250bc44a8cd6e9437c4ef6d",
".git/config": "b2282c40dda2658e332eedc9fdbfb2a5",
".git/objects/61/c3c1660ca62a57f15139161b65933e268cb33b": "f95615e21f1d44031c5faa296530aad4",
".git/objects/95/eb05961a105a5a9e63966c48a2a749cf0c2c55": "eff2343e2fd8132c94a72b1e4432f77b",
".git/objects/0c/167df123b662dc4f91bba3cd935401bb2d9584": "246f8601e4b9058caa9080c20c25325b",
".git/objects/66/f053f1b466ca42d86191ca72a6f56eba82a448": "7d2cd95450a16e46b047e32cf0e15546",
".git/objects/3e/abe1e9bebf5f70ec72c98e0a2bcd6d21e02beb": "dc26229534ffda3d4756b6587f251e45",
".git/objects/9e/def458636cb86813fa966b47452ab6e37354d4": "17aa60be9b567f3d3df9a01d2f333824",
".git/objects/04/7dcdab5ec78d3bbaacbbfe0ba757a3ddfbcbc1": "455c89ab12f13d28db664568e8d06da5",
".git/objects/35/334f19db039eb3b8deb6c976c296a09496db56": "48688ae49515b415f4700c60a1786f8b",
".git/objects/3d/6156328423e17b4d5d3ab75eed372f9fcf257b": "de181a0984997b691ba02e10c39af6fc",
".git/objects/58/11d6ffdc47e3288c657df720f11bcd95879224": "bdf87eda05c751c0f783594eaa17886f",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/34/3d780198cfbbc79192ab2caab6d2f6fd584343": "2fc661cbfba02ff4dbd5b97a162daef6",
".git/objects/5f/ca3feca8e251efdde26e8377e8d39edafec0da": "85e492621499428c63fde7e155333772",
".git/objects/9c/d99ccb63adb84d6438993f84d8dfa3507b066e": "e7688de414f303ecbc2a49d4614905e4",
".git/objects/b2/7551994cda747dc3cc19b8a43f69bd36aab0a8": "16622ed1443af34c040944995c6327f0",
".git/objects/ac/df022cb93255240a5fd42638b1845d411a9fe6": "aca27db7d023dbcf79d60d92a520689b",
".git/objects/ac/f0760308b7aa1cb8cfcb37eb183edd977c66a1": "db7d54c14e19dd3aa82f22a1417ea78a",
".git/objects/b4/53dc92ddce2b89e65605806a1e8048dc6bab74": "af277a48b6499c9ec869035e4cca3640",
".git/objects/d1/bf19f79c4a58b1e4a4b5471bb02cc6bbc9adef": "741d5696d1d03f0d3c39515daadf7f22",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/a053554e93d85a4ca3073d093a8a3816bd28fd": "e8e6ef0219aee2f8bd3a237428c7d698",
".git/objects/f3/5e1cee36d7ff1709b0890f36fa954ffb3afd6d": "6822d91a47e6f61d1e07c2515d6180d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/cf2af744cdb3c9ecfeda2fc5c3b179a2060091": "c5d154f443286c8b78d6e6ac63707341",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/82b85746753f0e00ed3dc78db5d4f9f45022a3": "4375ee16af5451bd46c33394f2acfd5d",
".git/objects/e4/910d78294e033f9bdd2297ce234bdf70c5933c": "db3b5abe5c3eb8d30bc434439e433dcf",
".git/objects/fb/1475ca67b07ec82e42c4c664f1769a29fe4fc9": "7ae562df8374ad306c7fe8a129d2a2af",
".git/objects/c6/24d2cc4f25c34f1bd1c523b6f5ac06142c6a94": "0197ceaeffbc44f9c38e20c31ac75984",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/4e/f03dbb0d55e2515190c18c46bce426abd766c1": "3f69137cef00622af3d3db1013989c04",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/7d/d671c71e7ae7dd2c37119f7e4878c696efc19e": "d354cb349727111563716709e6683c6c",
".git/objects/7c/d32697af981a35dff5b74d067caca07f9211d9": "239b0db0d6faace9ec2055e4c2b1a610",
".git/objects/45/e214b9a552ca833be6a065e39f287731e04495": "cb4d164b011d20b2ad1ff9ade3ef5d0e",
".git/objects/1f/a436f9d5ee323b69b25985dbc3a0f5e2f22003": "5e263283ef79ce95a6e1e88db13721ad",
".git/objects/1f/fa0501da3e230007b4bc77fbd19f86b2c704b2": "938e0fc366f3002419b1e8b806e74eb9",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/2a7209f03049ae8c31f57deb6c076352f5890d": "36b8628b40c72dbb3f40ccb70940efe7",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/73/f1fb4cc14fa5891b78bc6b2122ee3ee2ff79ba": "2f1d85d38599dc7b57547984df2c28f9",
".git/objects/87/427d91eb174ea84a3495c43ed46ab4c24e77f1": "57604387d950ffb44aa13a70fed44ef2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/75/1e8c9dc2b811f34aa0679cf66c853480968f57": "65a8bf1c75d57d60739c110a040afe01",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/2a/bd8143a2a9447eee2dd8bc81361a708f4fbfd3": "844e25cc2cfb05df82fd3dcb3f5aac1f",
".git/objects/88/fe4bf7815e38587ac1b23d0066bc3b381614bd": "98c289d54789716ccb4410d5428d8268",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/a29b34c5edd3bdd88868cb33d2b892643c83ff": "9aabec8f2903b26a9fcda6998f64fbaa",
".git/objects/07/6e9bcf39f4578daaf482fb94f4fb2f03618959": "9d4de37b22121254fc8319c0639b6730",
".git/objects/09/53a09f0fdbb59d188db2590e4cbb1e24fee8ac": "ae80ec12d31cad2ebc6d157b8cb7f1ce",
".git/objects/3a/16e20d62dd93dcd1cf9d1044333c80339ce789": "2b03995ccdd06ad2e44dc8f48d5d3ca4",
".git/objects/54/08aa8585b297d58f61e94dcea804949f2a979f": "2dc57a7bbeee8f5ed2d49f816b60d011",
".git/objects/98/27f79a22f16bfb2ec6586d1ad0cafebff8da67": "510c84457f437b7225a292b704bc8b09",
".git/objects/98/c8873d5199ad86524cd41903b3ab16e4ce94b1": "02421d3847888a897c2a843d6e1038de",
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
".git/objects/a8/ba0298a48115262176955997c54e99c1eaa7a1": "ef07232056c05d539055e4c5355cb02b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/c0d3220a99be093c6d9d308d413d2049ad31c1": "931f086f2015aa329156dcffc9dd2634",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/f9/9f12b9960a953e02db6a7d05f3fc38503bd508": "8dfd564aa0ef9ae1448ac3ec0b664a54",
".git/objects/f6/1ef78d3d1f8d5efbf9ff9e1d27ff6c19475b5a": "caeee40564d6466571c8265e418b716d",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/41/c7508e2ab9c1c6e319a92cc46b34d94a73bfb9": "05b07a33990e13f11fad0bbc8eed325b",
".git/objects/1b/19f366011597c8b63c9da8a5d42ee070337e42": "e6cd44cf2073938f0bc85168e64789c4",
".git/objects/1e/4c38f9076a07d1fd6081d39648a03a71b16fac": "a7adb8f44551ea2100020978ef4f8dad",
".git/objects/1e/88998c0e8c625c5e8b520872ef937cdb47816e": "7ff6499a0b125813c1f04eadd9b7ba25",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/85/24f35e2b33bef575038bce1d4f5cbb895390ec": "89ac8aace857d6f12d20dcd1a46c819a",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/d0630e3f85d800344423102f33fc30cf155035": "97b72a2613542f5626048a8ae4a024c5",
".git/objects/1c/d4f2b8214b736e003ca0f1f01489d7f1104bc1": "3c167edd020921ccbe19141105ed340f",
".git/objects/7a/70a98fb7b8c1d515e87efefa4f7ea2083f2a90": "7568e13d081c89e888bfb65731e56fa9",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e671f58cd04fa39991f9a0a6d68763c8",
".git/logs/refs/heads/main": "1f124335eba207ca635292254a6c2150",
".git/logs/refs/remotes/origin/main": "1c43652df59dc244b14ef6721a221772",
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
".git/refs/heads/main": "cba95561a42261df0b9f64a571649742",
".git/refs/remotes/origin/main": "cba95561a42261df0b9f64a571649742",
".git/index": "38378bd3066ebe004b56ac543508f91c",
".git/COMMIT_EDITMSG": "d68259c032f63bf0fc64cc040dd28e1c",
"assets/AssetManifest.json": "3c0402211d00a4244188864b510ea4a5",
"assets/NOTICES": "8b0f34c9ac975f814673e448358a2859",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "cb1ce9a48841e22365b52def25a4b552",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "da0e81a1390a722c30156a0ff871a0a9",
"assets/fonts/MaterialIcons-Regular.otf": "1f6126bb0256d4d525589d2c51f0783d",
"assets/assets/servicio1.jpeg": "111d6db49b49dcc5106cbfedaeab1c56",
"assets/assets/Logo.png": "6625dbd6d60d9d3305eb0629273b9e50",
"assets/assets/fondo.jpeg": "bb64224bc6ee06a068fff300e11a7a49",
"assets/assets/servicio2.jpeg": "d4bc363ac1e69926d23ace28baeef33e",
"assets/assets/fondo.jpg": "0c9846454b5492ab8fc6e95d6da6edc9",
"assets/assets/servicio3.jpeg": "d9d7c790bb0294860aff44e1d8c24869",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
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
