'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "575319acdc0fc971cec135f93ea4d366",
".git/config": "53cb50836ece85aba4514f7a8df4ab39",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9dbac6dfb0a8986dbd4a335710227573",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ac465d8df904605eea5b355a2b4d514a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4107cef1831a415d21ba41aff33fb1d4",
".git/logs/refs/heads/main": "dc4710d7303f36748329c6d1ff556273",
".git/logs/refs/remotes/origin/main": "1fa6c34ca52852a67416e1d12ab60b39",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/36276538d30ac09f83bdcbf0546a9590392651": "6d9f26f990ab32110c6e31504d676a16",
".git/objects/07/42cee74f940b28d627b946740f9bdea1c905fe": "938e85cde3ad819d40716f24823ab5ff",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/14/760a7fb711cef0f5213653651ab47ee4a96b46": "9046fe574b11e173443bfb2e2ce1c18a",
".git/objects/14/b9a09d9acdc609284e9908b9b0e1d92eee4a41": "f3425283a1026bb0e571f24427dd3e88",
".git/objects/14/dc856c045e27d739952eda7e9bd867a3c8bf2f": "60402ff7da30d6e4d314c80d479ed5a0",
".git/objects/17/2035170901df82af739cc4e25c037151938454": "ca5405102d0ede105dafb2271bef90d3",
".git/objects/19/98d60bea7f527b678f5d418fe2b3b32f04c9fa": "deb6db8e72e8e25ac0f6f0c68ae1eff5",
".git/objects/1a/25131273a7dafdf64266cb9087f4f2ca63fe9e": "dffe8df5422d5b06e742f6808eee750a",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/6d24a60976e662ba790be1f93c565083aca25e": "bf87ba7f3221e87114826088435cc8b6",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/29/418bc870468945b3b2b25e1e536891b084976a": "6397f7e94c93ac3c38a4701d7eae7a56",
".git/objects/2f/d3d10798510404bfecdad0585b09fb3a52f8b9": "605bb4c3acfb46d7e52ad3c11abd5288",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/7a07fe226a0d13dd78a95642a04fab9a4032db": "ee8410b5408f8a9a794fc35d19cca348",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/20ca19e13fc5d29815513fb13117cd9d456b23": "ccc8af74a0cc68162c763e954a063b5c",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/8235bb7be59122c5a27ec083a3357591d7843e": "0b92405cf04c59b39644127c27b9d760",
".git/objects/4d/b5fc05d087e357a07fa2b6b3342e4b34bff024": "a66e0756ea7ad34523f7bc7ef4ea35d5",
".git/objects/53/ffe70fc09e88a6f0a7d09edfe1307b71cc69af": "161946c30f446e50927ae6f6d380b799",
".git/objects/54/6421296ccc02b2715f29d19d781d0e559c217d": "ac29624aaf27ea4b5fd0d8911b0875d1",
".git/objects/57/1e5de398f5620ff407a77237590d20f2b98381": "0a0d3312b48bc835a3514744dadba071",
".git/objects/5d/70a6fb5d3d04864346f6708311e2fa82fca2b4": "6da7f3979b9e4cd0fb6ab58bf9c75c27",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/7b/59cf6a7e4dafecfb769ac937c5e66bf8682f29": "d6f91b87e6e2847906114744aa5b237b",
".git/objects/7b/69d1f6c2010701272fa8999e0d7f575996c973": "37c05aa9159a49c85313700d0e014277",
".git/objects/80/6725bc00be6f59f80bc1ec3f2681f34ba1f739": "e32b4fb0dcd2d24d93234085b5f5f5b4",
".git/objects/83/51929f7949ce3ceb2fce253ea0e9eb11144324": "5db662a6dc0b8528964b459953cf6f4b",
".git/objects/83/5d912502e80fdf97307e907f5ba1534bc80e82": "00007bbf4b34fe40a01a449685a04253",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/ab60d7dc9692b553f377be3daa1403ba7400d1": "c5da898b55e413ce6fb448ef643611e8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/aa36a51604a390933d0e2b23d6d928c1db6304": "43a912494ea640f765aa6830be744b30",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/94/3f1d6abd72fa2192e21f6fa8719ad4ee91653e": "72878d880707478861b19a6cf1f637e1",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9f/77b3a28dd2b73323a0a5d6bbcfeee5aafe1458": "3133dea35ab0fd76117a957c19aa8a3a",
".git/objects/a0/43453f91d2c28c7d35ba996ba0b7de76b5cbbb": "83b19ecff3dd688e4b8252d0d504c925",
".git/objects/a2/6fab916598ca0271b9b0c9137df4ba3f31515a": "982f351af0308b311cb820c4747a9923",
".git/objects/a4/8e36876c1b765632decbc7b53f9983875d1b07": "f0a37cdc9cecd45186425b87c67398e9",
".git/objects/ab/3e7f74bace5877a33329efe6977f9abe43e4c8": "1a515c4693f5f0fe59c6792e0d17382d",
".git/objects/ad/72652153798599f823204d3bc149a77fbfcd94": "21ad4bb69c2e770d91b9fd9a8b80c87d",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b4/1bd6ffd4ef212fa33b156e2a1f5eaad07718f3": "cd42488528a8d56dc94f300b713eefbb",
".git/objects/b4/31472dafae7e7446ab49a266403701aedd2dc0": "8284725b09981371142526c3060c543c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2b2f1350f3c42794ee67ef0d7eab349acaf7eb": "9f3aa7b3e8cb2f86178a78d22825f697",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6309e8edfcb8bba8d11878c5690291ae8eb853": "2d8913aeaac085a53a02e615b80ac939",
".git/objects/b9/9e09a10dbab213020db0997f84e608e7e32589": "bcbc63c4b0192aaccc42a7c4179605d7",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c1/c0667beb21bc185a48e1e2893b581860cf33b7": "2b719f1eddcf0f42ca8f67d38d217981",
".git/objects/c6/8bca6fdf17141268d10ec6332802ea6432d568": "48d3c07063550e3d9f0cfea0692ff89d",
".git/objects/ca/e3b8d43a31aa2b0a45621b4920419a8c263274": "4305478077ffa1147b6ada319ab516d1",
".git/objects/cb/cd73367d0f625d58094c455d258fa384912ec9": "c055cbeb78e7e6038e43b3961e29668d",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/db4dd5d632b17916b02e2a59265f3af2029e72": "46e24bb628eb13360fca7633aabd66c8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/e05ba4a55838927098cb4946bc631befa9ed59": "29777c8f800f8efeae41e05cf4587aba",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/4d25699db2b4a928b48eba50a80ee0a9d0696a": "db48a1529f00cf6fff004a88b4b3776f",
".git/objects/e5/581fc8c1ea1a1a147f07ae302f562c839d649a": "e5205e7ebfad47954f58ec34d4fcbbbd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/1f5a1c456ad841286eba59f2e0606ee2c71a4d": "7110aebb4ba16215498e210169fb155a",
".git/objects/ed/653750c25f7af09b1c3d04ba3b274ee56685f8": "705b6ddaf184302bad6b9aa61effc283",
".git/objects/ef/e56f3f7833d036392991cff21876d666fec37d": "d114524a750d4878d49cef601e835dbe",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fa/38e011277406ceea5af7bac9c78f7ed547a170": "3d8f1ac4ac91e7ee6de29641441b1d45",
".git/objects/fc/7c9692677de884385f2e5a97883370e7e2b9d1": "00cf08aab5b03578c0f26399040e1601",
".git/ORIG_HEAD": "1a212c97b0ef568034913ee575284758",
".git/refs/heads/main": "44effd9bda9aca48efe80efa95b2b37c",
".git/refs/remotes/origin/main": "44effd9bda9aca48efe80efa95b2b37c",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "610c0cf5b51647ccbc3487055aee1057",
"assets/NOTICES": "389bb83e9ddac1b61fab4367f0211c3c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "824eb33224b958114122f14e2622110b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "04e175231a3c5287b3d9d5bdc3e49b53",
"/": "04e175231a3c5287b3d9d5bdc3e49b53",
"main.dart.js": "4f26c58c654733f5fe7465a98f858382",
"manifest.json": "ca185fe8b7bcdeb7a7c1eb24906bf2ed",
"version.json": "d0baaa2da3068eb2a00057666943fcf7"};
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
