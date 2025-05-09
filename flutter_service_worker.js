'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2b0cbef94d258b90f7edf4b65183a107",
"version.json": "21136a33248c4f443ffcbce5bd85cbcf",
"index.html": "b81e27a76e10f07ba1e3eb206d80e25d",
"/": "b81e27a76e10f07ba1e3eb206d80e25d",
"main.dart.js": "ff7480292a755d6d2c6eb90c1dd56060",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"Logo.png": "6625dbd6d60d9d3305eb0629273b9e50",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8c1a4cd12250bc44a8cd6e9437c4ef6d",
".git/ORIG_HEAD": "7151f33b12757d98de76d8cc915311ef",
".git/config": "b2282c40dda2658e332eedc9fdbfb2a5",
".git/objects/61/c3c1660ca62a57f15139161b65933e268cb33b": "f95615e21f1d44031c5faa296530aad4",
".git/objects/95/6c2135d28339324bbe0097e0d35bc3608ce373": "3b7ced26aab701ab2608eb283c4d504a",
".git/objects/95/eb05961a105a5a9e63966c48a2a749cf0c2c55": "eff2343e2fd8132c94a72b1e4432f77b",
".git/objects/0c/167df123b662dc4f91bba3cd935401bb2d9584": "246f8601e4b9058caa9080c20c25325b",
".git/objects/0c/164c33e46f28d6a962461d018bf40e5bd31ff5": "da79d09caab3b82d90efb8593b9a8a70",
".git/objects/66/f053f1b466ca42d86191ca72a6f56eba82a448": "7d2cd95450a16e46b047e32cf0e15546",
".git/objects/3e/abe1e9bebf5f70ec72c98e0a2bcd6d21e02beb": "dc26229534ffda3d4756b6587f251e45",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/9e/def458636cb86813fa966b47452ab6e37354d4": "17aa60be9b567f3d3df9a01d2f333824",
".git/objects/04/7dcdab5ec78d3bbaacbbfe0ba757a3ddfbcbc1": "455c89ab12f13d28db664568e8d06da5",
".git/objects/35/334f19db039eb3b8deb6c976c296a09496db56": "48688ae49515b415f4700c60a1786f8b",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3d/6156328423e17b4d5d3ab75eed372f9fcf257b": "de181a0984997b691ba02e10c39af6fc",
".git/objects/58/11d6ffdc47e3288c657df720f11bcd95879224": "bdf87eda05c751c0f783594eaa17886f",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0b/87136dbce4d750bd8626e67dce825525b1649a": "3942ab1238783ead36bc8145eb680b63",
".git/objects/34/3d780198cfbbc79192ab2caab6d2f6fd584343": "2fc661cbfba02ff4dbd5b97a162daef6",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/5f/ca3feca8e251efdde26e8377e8d39edafec0da": "85e492621499428c63fde7e155333772",
".git/objects/9c/d99ccb63adb84d6438993f84d8dfa3507b066e": "e7688de414f303ecbc2a49d4614905e4",
".git/objects/b2/7551994cda747dc3cc19b8a43f69bd36aab0a8": "16622ed1443af34c040944995c6327f0",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ac/df022cb93255240a5fd42638b1845d411a9fe6": "aca27db7d023dbcf79d60d92a520689b",
".git/objects/ac/f0760308b7aa1cb8cfcb37eb183edd977c66a1": "db7d54c14e19dd3aa82f22a1417ea78a",
".git/objects/ad/d6cf0860702df2e60a13bc30b33ec25f9c0716": "7b71964a5e1aedb9e8730ab00035fb6d",
".git/objects/ad/640cf56cf4cfd00f210a8d9b32ea91a649845d": "b4e4bde7704dbe83121c9ea21a56ada1",
".git/objects/df/73753ea652d7661b56bd8cb327914e19e8c4fc": "679f3f1052077ccc21f75371df4f2ced",
".git/objects/da/004d7c5506fb743a7d26ef29012693d0c8a38b": "bfad751eb4cb172246ef54346a961d01",
".git/objects/b4/700708912e9c8f2ae4a227780018abe5282a46": "0a88509d6a7400414beaf25b1077e4d5",
".git/objects/b4/53dc92ddce2b89e65605806a1e8048dc6bab74": "af277a48b6499c9ec869035e4cca3640",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d1/bf19f79c4a58b1e4a4b5471bb02cc6bbc9adef": "741d5696d1d03f0d3c39515daadf7f22",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/a053554e93d85a4ca3073d093a8a3816bd28fd": "e8e6ef0219aee2f8bd3a237428c7d698",
".git/objects/e5/ea5c99642e66b234760d79e8fbc02b0a47dcc6": "1bbc67ecc9c650881efc142dd74a4d16",
".git/objects/f3/5e1cee36d7ff1709b0890f36fa954ffb3afd6d": "6822d91a47e6f61d1e07c2515d6180d1",
".git/objects/f3/d51d16d1c17cb3ded32f832d9fcf1cff8ee19c": "b7cadc09ceb9cc36c33903b3f6451c89",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/9fa29c19a43ba4b140bb79d9510d61c1e164b7": "4457f84c2d85c06c616b8476b1dc968c",
".git/objects/fc/cf2af744cdb3c9ecfeda2fc5c3b179a2060091": "c5d154f443286c8b78d6e6ac63707341",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/82b85746753f0e00ed3dc78db5d4f9f45022a3": "4375ee16af5451bd46c33394f2acfd5d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e3/ec88f7312088fc95535515e0b546262e246e69": "1bb21313ccd8377e1c85a11982599350",
".git/objects/e4/910d78294e033f9bdd2297ce234bdf70c5933c": "db3b5abe5c3eb8d30bc434439e433dcf",
".git/objects/fe/d0e7884e784b0eee96d46989a8e83bc56afc62": "7c74d6046f785d9497e237e9776cc703",
".git/objects/fb/6213f7dc31a86492feb3375c007a87e965114e": "2210f16b952abe9aa754dae97f3f3b2c",
".git/objects/fb/1475ca67b07ec82e42c4c664f1769a29fe4fc9": "7ae562df8374ad306c7fe8a129d2a2af",
".git/objects/c6/24d2cc4f25c34f1bd1c523b6f5ac06142c6a94": "0197ceaeffbc44f9c38e20c31ac75984",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/4e/f03dbb0d55e2515190c18c46bce426abd766c1": "3f69137cef00622af3d3db1013989c04",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/7d/d671c71e7ae7dd2c37119f7e4878c696efc19e": "d354cb349727111563716709e6683c6c",
".git/objects/7c/bde9d95e5159fc91a7ab5215331357f2c00b21": "7a2b43043982b5898c7ab8f746ff54b1",
".git/objects/7c/d32697af981a35dff5b74d067caca07f9211d9": "239b0db0d6faace9ec2055e4c2b1a610",
".git/objects/45/e214b9a552ca833be6a065e39f287731e04495": "cb4d164b011d20b2ad1ff9ade3ef5d0e",
".git/objects/1f/a436f9d5ee323b69b25985dbc3a0f5e2f22003": "5e263283ef79ce95a6e1e88db13721ad",
".git/objects/1f/fa0501da3e230007b4bc77fbd19f86b2c704b2": "938e0fc366f3002419b1e8b806e74eb9",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/2a7209f03049ae8c31f57deb6c076352f5890d": "36b8628b40c72dbb3f40ccb70940efe7",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/73/f1fb4cc14fa5891b78bc6b2122ee3ee2ff79ba": "2f1d85d38599dc7b57547984df2c28f9",
".git/objects/87/427d91eb174ea84a3495c43ed46ab4c24e77f1": "57604387d950ffb44aa13a70fed44ef2",
".git/objects/80/388761ecce50a6ca13c5bf9095cd35f161358f": "bc9232f70c724c1de324ed37798f8a9f",
".git/objects/80/241e34576b6d87036c228ead23e3aeb89024c1": "eea3711cb194c63c184c73a112ab2a44",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/75/1e8c9dc2b811f34aa0679cf66c853480968f57": "65a8bf1c75d57d60739c110a040afe01",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/44/485761c52e732b3d6145aef1decdaf6e9eb8ce": "8427ed3af15f131c5adf8097d5ab7fe0",
".git/objects/2a/bd8143a2a9447eee2dd8bc81361a708f4fbfd3": "844e25cc2cfb05df82fd3dcb3f5aac1f",
".git/objects/88/fe4bf7815e38587ac1b23d0066bc3b381614bd": "98c289d54789716ccb4410d5428d8268",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/5a122216a143ab162f9c7928e9e01683aa38aa": "4aa96c9361849b46c88f1148100a03c1",
".git/objects/9f/a29b34c5edd3bdd88868cb33d2b892643c83ff": "9aabec8f2903b26a9fcda6998f64fbaa",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/6e9bcf39f4578daaf482fb94f4fb2f03618959": "9d4de37b22121254fc8319c0639b6730",
".git/objects/9a/cd1a120d740d42cd060cc04d88c0c9e3537eab": "64807eb5a2871c7f0e89a203b15070fa",
".git/objects/09/53a09f0fdbb59d188db2590e4cbb1e24fee8ac": "ae80ec12d31cad2ebc6d157b8cb7f1ce",
".git/objects/31/4846e2d9eadb99944704605265861e2e544e9b": "6d1b6255fa823c5de55aae0a0b990e3f",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/62/56e71ef63b2ab0493f13e9cf3ca62fc0a36267": "d962c3c08108a83425c0b92e6dbb1b0c",
".git/objects/3a/16e20d62dd93dcd1cf9d1044333c80339ce789": "2b03995ccdd06ad2e44dc8f48d5d3ca4",
".git/objects/54/08aa8585b297d58f61e94dcea804949f2a979f": "2dc57a7bbeee8f5ed2d49f816b60d011",
".git/objects/98/27f79a22f16bfb2ec6586d1ad0cafebff8da67": "510c84457f437b7225a292b704bc8b09",
".git/objects/98/3dfe009d42c44339540dedcbb27f17ba64be8e": "88d4d4a90ddbb84d15874a8bf995f02c",
".git/objects/98/c8873d5199ad86524cd41903b3ab16e4ce94b1": "02421d3847888a897c2a843d6e1038de",
".git/objects/37/3ed69189f6068fa94c9b6fc6c7276979cefb70": "35d5f507569ff84b0dea79f15bbd0efa",
".git/objects/08/0b72e72e4b840728eb9ff21615658985027abe": "81e4cccc97f023203bf12845c30b417c",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/3b851805ebc742c1fcdb2178c106f1e0beb4dd": "b2b6640ccce3f03041907f59750fec91",
".git/objects/6d/6e57ec3d407f4904c2897c89f1f2115a5873fb": "1aada675f49d88cfa0f9df115dd5f1a9",
".git/objects/01/df5b5c537b989d23d9285e5afad44036c0edf1": "a0f0a06aadf4041f7c2f727ab2c4f50e",
".git/objects/06/1ca90afa025f324f103e6d0b360e31b8c738ad": "4b97a55e0307f49c0093bf6fb50eba13",
".git/objects/39/217f7303f6701991377303da6e6369096a91d1": "82ee2a745d2afd2a09042bd1348f8acc",
".git/objects/99/832990a0fa6a867129c0d5cd80e4cb26f823c1": "65b63eb231412c938a9999ef756b2628",
".git/objects/97/e9d039fba0d47be9e57cfe37e79ea642867d5d": "99efddd588f496aff9d48a5f18704f7f",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b8/a1a56095fbd72ffb76c24b3bea35cc9e7b9158": "0c17050eccab332196da4f0badb9c61a",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/d2/46813172bfbc1f9883163b7872be01582dc6d6": "fa7c265b9b6c9eb30852d96f5a7b3962",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/23d8953295ecad44cdc4c266f837cf3594de87": "97668d28eb3002c28c1034a19fed3ba5",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/ba0298a48115262176955997c54e99c1eaa7a1": "ef07232056c05d539055e4c5355cb02b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/c0d3220a99be093c6d9d308d413d2049ad31c1": "931f086f2015aa329156dcffc9dd2634",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/ea/bd96e13cedd9c811e38f898432afa3d1a14d26": "893bef7040c44e74ff8252fa3995c570",
".git/objects/ea/1fdbb298360410bc6b5be17ff4ed613747770c": "48e35a693f7e35d43eb8e30c5bf2f346",
".git/objects/f9/9f12b9960a953e02db6a7d05f3fc38503bd508": "8dfd564aa0ef9ae1448ac3ec0b664a54",
".git/objects/f6/1ef78d3d1f8d5efbf9ff9e1d27ff6c19475b5a": "caeee40564d6466571c8265e418b716d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/0702280803b32d8220633b610422caf73b7b73": "4191a27e69749acaf9f796e63f4207f6",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/41/c7508e2ab9c1c6e319a92cc46b34d94a73bfb9": "05b07a33990e13f11fad0bbc8eed325b",
".git/objects/1b/19f366011597c8b63c9da8a5d42ee070337e42": "e6cd44cf2073938f0bc85168e64789c4",
".git/objects/77/5613f04ef33e58361c633e3e31da45e6df22a1": "cf41464b92492810f89d02d79751099a",
".git/objects/48/ab47bbedf2373f4e53c73ba4b2629684fd5f74": "2604570de6d1b33ab2918c8ff2be5513",
".git/objects/1e/4c38f9076a07d1fd6081d39648a03a71b16fac": "a7adb8f44551ea2100020978ef4f8dad",
".git/objects/1e/88998c0e8c625c5e8b520872ef937cdb47816e": "7ff6499a0b125813c1f04eadd9b7ba25",
".git/objects/23/26e5177ac0ab6348d6dca358fea09aeb50d22d": "2b2bfc79d8f0b9941581b8a323585ff2",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/85/24f35e2b33bef575038bce1d4f5cbb895390ec": "89ac8aace857d6f12d20dcd1a46c819a",
".git/objects/85/1a6322b0f10b9d1b36aec3e145d29ee7856a2a": "11b51bc46be5707a78a0d789dc350567",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/d0630e3f85d800344423102f33fc30cf155035": "97b72a2613542f5626048a8ae4a024c5",
".git/objects/1c/d4f2b8214b736e003ca0f1f01489d7f1104bc1": "3c167edd020921ccbe19141105ed340f",
".git/objects/82/ec3393b9faa5cbfbc7525d7269975f8f6d06e9": "1603857e061fe995219a2a816144280d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/7a/70a98fb7b8c1d515e87efefa4f7ea2083f2a90": "7568e13d081c89e888bfb65731e56fa9",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8ce56fcebb5ef0e5055e88f55d8a1267",
".git/logs/refs/heads/main": "f2ee70a655a9b07f9111a28332959ab7",
".git/logs/refs/remotes/origin/main": "ce060a8b3fd55d13f78bb4839d0d5430",
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
".git/refs/heads/main": "d86a133baec3fd4226df126f817d3c93",
".git/refs/remotes/origin/main": "d86a133baec3fd4226df126f817d3c93",
".git/index": "194b7dd5b9c61526dca769b7dde635b0",
".git/COMMIT_EDITMSG": "0ccd5e1c4e8009b7bab04727bbdec413",
".git/FETCH_HEAD": "342164ca53562e780b58908808c3c623",
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
