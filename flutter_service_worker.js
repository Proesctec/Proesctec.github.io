'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "16c21af00035703fc2222e09df469a34",
"version.json": "21136a33248c4f443ffcbce5bd85cbcf",
"index.html": "b81e27a76e10f07ba1e3eb206d80e25d",
"/": "b81e27a76e10f07ba1e3eb206d80e25d",
"main.dart.js": "b717a7b3f7ce69a03cbb6ef810f38676",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"Logo.png": "6625dbd6d60d9d3305eb0629273b9e50",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8c1a4cd12250bc44a8cd6e9437c4ef6d",
".git/ORIG_HEAD": "5179a3d662b053def095ec8e26681b42",
".git/config": "b2282c40dda2658e332eedc9fdbfb2a5",
".git/objects/61/c3c1660ca62a57f15139161b65933e268cb33b": "f95615e21f1d44031c5faa296530aad4",
".git/objects/95/6c2135d28339324bbe0097e0d35bc3608ce373": "3b7ced26aab701ab2608eb283c4d504a",
".git/objects/95/eb05961a105a5a9e63966c48a2a749cf0c2c55": "eff2343e2fd8132c94a72b1e4432f77b",
".git/objects/0c/d6b720a0dc41280c2679ade2df56e7ee91942f": "f2234b1cd97d653221e6c06bc7bc1d77",
".git/objects/0c/167df123b662dc4f91bba3cd935401bb2d9584": "246f8601e4b9058caa9080c20c25325b",
".git/objects/0c/164c33e46f28d6a962461d018bf40e5bd31ff5": "da79d09caab3b82d90efb8593b9a8a70",
".git/objects/66/f053f1b466ca42d86191ca72a6f56eba82a448": "7d2cd95450a16e46b047e32cf0e15546",
".git/objects/3e/b1224e6cfa60f194d49b714a49e0e99ba41787": "8d461369ee6a6a99d2417bc2b51e8157",
".git/objects/3e/abe1e9bebf5f70ec72c98e0a2bcd6d21e02beb": "dc26229534ffda3d4756b6587f251e45",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/3b/c52e86b9f53482d5d3567bf8181fae27134f03": "3a73c2c5b793ac9cfcaac6d0e556ad2a",
".git/objects/6f/31236a4d7cee8917b127af9c2a26dd7bfcc205": "c90be15330d51db01a3f798749cbb965",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/dedb5597b3fca118b154cd8708a2cab31f9cfc": "e5acae66bf0d1d18ab93f2f335becef5",
".git/objects/9e/def458636cb86813fa966b47452ab6e37354d4": "17aa60be9b567f3d3df9a01d2f333824",
".git/objects/9e/5567d0bdfbe46b3ede066ec0d073eacd51623d": "08b717b20a57b7bca1e9eab9837bf494",
".git/objects/04/7dcdab5ec78d3bbaacbbfe0ba757a3ddfbcbc1": "455c89ab12f13d28db664568e8d06da5",
".git/objects/35/334f19db039eb3b8deb6c976c296a09496db56": "48688ae49515b415f4700c60a1786f8b",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/69/e2419da0e281fa758926f0cdcd571942ba92dc": "b9756b3872077a49a02f9bc81eb60227",
".git/objects/3c/6375574836b76ee78519c437abea51a70b467d": "c3c091495878b6eabd92875a5e861b4a",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/3c/a49e5e555793d2f9a650446ca2b5fa354e874a": "5c42cf35dba58cc62c7ab9aca5261388",
".git/objects/51/fffd4f42f08ea4f51f7a9713f512367ac831a2": "41f2fc6c16c3719a1a1cb9550270ca4a",
".git/objects/3d/6156328423e17b4d5d3ab75eed372f9fcf257b": "de181a0984997b691ba02e10c39af6fc",
".git/objects/58/11d6ffdc47e3288c657df720f11bcd95879224": "bdf87eda05c751c0f783594eaa17886f",
".git/objects/0b/a3f5837c8c6324d856d4b00d2fda299507d2ed": "fa420bb629d451319150ec132ad7a9d7",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0b/87136dbce4d750bd8626e67dce825525b1649a": "3942ab1238783ead36bc8145eb680b63",
".git/objects/60/7604e59cc03c16f3ad4d62a56250f0b9702556": "b60b4e75856bdc3d350337c820ab8cc3",
".git/objects/34/3d780198cfbbc79192ab2caab6d2f6fd584343": "2fc661cbfba02ff4dbd5b97a162daef6",
".git/objects/34/6ad4edeb58411a5adadffc82a799ca8abec3fc": "33fcf34642f49d8ade64929ba50b3dc2",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/5f/ca3feca8e251efdde26e8377e8d39edafec0da": "85e492621499428c63fde7e155333772",
".git/objects/9d/d9f9e494e3d8bc6e5633d7512fbf723b351134": "542380c96fa134a6cfb773bfea67bc70",
".git/objects/9c/d99ccb63adb84d6438993f84d8dfa3507b066e": "e7688de414f303ecbc2a49d4614905e4",
".git/objects/9c/b622580d103ab13dca48ad5d3cfeae4f9317b9": "08062943a749829c00b5f0cecfd91f0f",
".git/objects/02/ed6c047aed0cb894cf9d2396b194aa58a5435b": "d15bbdc247ad2453b8c12bd794b0bbfc",
".git/objects/a4/fc8207b2e960391a001619041c6ad268da363c": "7c801b421a47213eea3906a9540d640d",
".git/objects/b5/e9c69dbd8378649d8e32f3def99f5f7230a532": "0c908875e6f85ac67f1a99394afeac29",
".git/objects/b2/fd04d7ea9d41557469270aee60c37f3de824fd": "9a40595a98eeab50c89bf34aae2b1dd6",
".git/objects/b2/7551994cda747dc3cc19b8a43f69bd36aab0a8": "16622ed1443af34c040944995c6327f0",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/6929342b3dad6c561c91e81c5b74f5ce7a6048": "34e87f632cba56bdf03d097e56230f66",
".git/objects/ac/894c7956f66288f52640393d96b06f9721321f": "09ca110e7a02976e9cc9e0d258bb4a58",
".git/objects/ac/df022cb93255240a5fd42638b1845d411a9fe6": "aca27db7d023dbcf79d60d92a520689b",
".git/objects/ac/f0760308b7aa1cb8cfcb37eb183edd977c66a1": "db7d54c14e19dd3aa82f22a1417ea78a",
".git/objects/ad/d6cf0860702df2e60a13bc30b33ec25f9c0716": "7b71964a5e1aedb9e8730ab00035fb6d",
".git/objects/ad/640cf56cf4cfd00f210a8d9b32ea91a649845d": "b4e4bde7704dbe83121c9ea21a56ada1",
".git/objects/df/af28c88af577f20416d6b8844e6c891ec411b6": "7f88904ddf76686c7389ba0223c2241e",
".git/objects/df/73753ea652d7661b56bd8cb327914e19e8c4fc": "679f3f1052077ccc21f75371df4f2ced",
".git/objects/da/004d7c5506fb743a7d26ef29012693d0c8a38b": "bfad751eb4cb172246ef54346a961d01",
".git/objects/b4/700708912e9c8f2ae4a227780018abe5282a46": "0a88509d6a7400414beaf25b1077e4d5",
".git/objects/b4/53dc92ddce2b89e65605806a1e8048dc6bab74": "af277a48b6499c9ec869035e4cca3640",
".git/objects/a2/40f604bc761293a414cbe6d69bcd6f5a2f3e3a": "a3c9c3e08b435f11af27af72f28b6f4b",
".git/objects/a5/f43bfc4b68b41943e5c252ec92a8e13c9af253": "d575cee0cec2d01627f032bf9ec745ed",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6a19699fa18e3fe28757ee44948de64b9bf4ee": "a58fa341e7f42548d2c83b60c7ba1f2d",
".git/objects/bd/598e246626f70a62bcc038ededf95c8e3133d0": "2e275c9c20adf367aeae4d09279c91bc",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d1/bf19f79c4a58b1e4a4b5471bb02cc6bbc9adef": "741d5696d1d03f0d3c39515daadf7f22",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/e52c8522fec2805544aa81a88b5efbb33af8b1": "d2d96cc811f4c9e1ec48a240d51d23c0",
".git/objects/bc/a053554e93d85a4ca3073d093a8a3816bd28fd": "e8e6ef0219aee2f8bd3a237428c7d698",
".git/objects/ae/e508da97a8d60abcba89506fec58495ce59113": "92e4594a939a4593e854c0bf6b457e57",
".git/objects/d8/d9a185a047a9e10c2738600ee5ebdfda656cfa": "ca003c2c74a690722f5d42191c7cb6ef",
".git/objects/ab/cc2ce671e574424d6cc4f4c79332cef03f1f61": "706c145ba790faf4b4dce85b3b2731d8",
".git/objects/e5/ea5c99642e66b234760d79e8fbc02b0a47dcc6": "1bbc67ecc9c650881efc142dd74a4d16",
".git/objects/e2/159f47cf1752a1138f768d9e97000860304176": "4675869274db9913f0823e2c96bc5028",
".git/objects/f3/5e1cee36d7ff1709b0890f36fa954ffb3afd6d": "6822d91a47e6f61d1e07c2515d6180d1",
".git/objects/f3/d51d16d1c17cb3ded32f832d9fcf1cff8ee19c": "b7cadc09ceb9cc36c33903b3f6451c89",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/970a3643d56df503df43e3366ce3b768d054c7": "52d476cda7f2977f3b6cd0f18ffccb7e",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/c9/9fa29c19a43ba4b140bb79d9510d61c1e164b7": "4457f84c2d85c06c616b8476b1dc968c",
".git/objects/fc/cf2af744cdb3c9ecfeda2fc5c3b179a2060091": "c5d154f443286c8b78d6e6ac63707341",
".git/objects/fc/b88532dc8e6407e3554bdb4892b2a97a7d0551": "4e6212a5b40429580e6226ab677953b3",
".git/objects/fd/fe4669e8cf932757b0e9ace13a8eb2e6d8b9c6": "e2a8cd03faec73b97513fa3976b2ffec",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/292719963860bc0b859e577ee7b4a571249b71": "e469a181b518fd17c55b94f82816500f",
".git/objects/f5/82b85746753f0e00ed3dc78db5d4f9f45022a3": "4375ee16af5451bd46c33394f2acfd5d",
".git/objects/f5/b88daf76d981d74deb22c763e685e05e0c2bd4": "2464bb66fa653042fbb4567c08b5287c",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e3/30e18b2bfc99666c18b7a26d97a33d9f82267d": "9331a07a1dc17d0a8d6db7cbb9465f15",
".git/objects/e3/a1b121301c53492b66582e74ffaef8780182bd": "512a4442543ef67c4af06b07d8d96cd3",
".git/objects/e3/ec88f7312088fc95535515e0b546262e246e69": "1bb21313ccd8377e1c85a11982599350",
".git/objects/cf/b56f4d35563519da5b7dfa979e2faf0ffe766a": "2c5c9de6249c56bacd841b376704a852",
".git/objects/e4/910d78294e033f9bdd2297ce234bdf70c5933c": "db3b5abe5c3eb8d30bc434439e433dcf",
".git/objects/fe/d0e7884e784b0eee96d46989a8e83bc56afc62": "7c74d6046f785d9497e237e9776cc703",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/fb/6213f7dc31a86492feb3375c007a87e965114e": "2210f16b952abe9aa754dae97f3f3b2c",
".git/objects/fb/1475ca67b07ec82e42c4c664f1769a29fe4fc9": "7ae562df8374ad306c7fe8a129d2a2af",
".git/objects/c6/24d2cc4f25c34f1bd1c523b6f5ac06142c6a94": "0197ceaeffbc44f9c38e20c31ac75984",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/4e/f03dbb0d55e2515190c18c46bce426abd766c1": "3f69137cef00622af3d3db1013989c04",
".git/objects/27/a57b4038d7dbac26200a5c7a2f623e61d53308": "39e2649900d0a4e0ecc1d698d925a064",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/11/13ded21206159cd1440ada59d472068adf1aa7": "99208dfcdc97a4d2c8db3bebd903d988",
".git/objects/7d/d671c71e7ae7dd2c37119f7e4878c696efc19e": "d354cb349727111563716709e6683c6c",
".git/objects/7c/bde9d95e5159fc91a7ab5215331357f2c00b21": "7a2b43043982b5898c7ab8f746ff54b1",
".git/objects/7c/8ceb8e1eff9d029046dd2a48ad70864c17a3e3": "a36a5ff179c9ca7241eb4fe6188bc24b",
".git/objects/7c/d32697af981a35dff5b74d067caca07f9211d9": "239b0db0d6faace9ec2055e4c2b1a610",
".git/objects/7c/693e545f391d6925c0ce39644d9ece55f4cd4e": "4ae44b03dd996d0f87050a5ce90fcda0",
".git/objects/89/54377bd5d0ea9fbb4b9db93329d0e990f4f17e": "b22faaa979f6144dab66916c6ba29380",
".git/objects/89/15916230db26dae73e73504bb0be3243014959": "c920af18446f7fa37fbb8fdd3f221bc5",
".git/objects/45/dc6c51b341afef22e8348e1048c8a5e67aa50a": "57e2b563ce11b6c4ac3d740d4418769e",
".git/objects/45/56d06d55dfdf7454236e8823ea2c81b482fa79": "efcca0f491e2ca90603b77f58fc08777",
".git/objects/45/e214b9a552ca833be6a065e39f287731e04495": "cb4d164b011d20b2ad1ff9ade3ef5d0e",
".git/objects/1f/a436f9d5ee323b69b25985dbc3a0f5e2f22003": "5e263283ef79ce95a6e1e88db13721ad",
".git/objects/1f/fa0501da3e230007b4bc77fbd19f86b2c704b2": "938e0fc366f3002419b1e8b806e74eb9",
".git/objects/1f/f2bfa21464d03a69873266b9acf9e2c160e8d1": "ef6b2334a5418a5fa31633e12f9a50cb",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/2a7209f03049ae8c31f57deb6c076352f5890d": "36b8628b40c72dbb3f40ccb70940efe7",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/73/09fe4c14ddd2f958957e939283d3ed6cae878f": "9d1ec4183afee0599de4dd15b704732d",
".git/objects/73/f1fb4cc14fa5891b78bc6b2122ee3ee2ff79ba": "2f1d85d38599dc7b57547984df2c28f9",
".git/objects/87/427d91eb174ea84a3495c43ed46ab4c24e77f1": "57604387d950ffb44aa13a70fed44ef2",
".git/objects/80/388761ecce50a6ca13c5bf9095cd35f161358f": "bc9232f70c724c1de324ed37798f8a9f",
".git/objects/80/241e34576b6d87036c228ead23e3aeb89024c1": "eea3711cb194c63c184c73a112ab2a44",
".git/objects/74/85b95a03d1507bb2f2cf1eb13a0a075aa15f01": "e98a325be8f65075733ead32d3d52799",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/17/4bc23b149d0e2062fb3281e18132f61a2cfbff": "57c1263c81cb9000ec0c0437d34a4912",
".git/objects/17/a90ec83bb58121421a1abc82ab509b499ae81b": "90c4571a93809e3786f23102cfaeda2d",
".git/objects/17/d610abc0137be952800cd57040ba6e52f75b1e": "65c305d714d494a979f8f9f6922c1727",
".git/objects/7b/921211eaa233c18430ec7d17cf1d4f3362b1f4": "c5e19b05f4099b8cf7587575c7da03dc",
".git/objects/8f/4900cc93bebdabaaf9b64935c071ed29b012ee": "8cb4b08353ac860c01a101a5b6b11bdf",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/5f9b4e26d00452a44be04e355462d7e49b470e": "bd318d18afa67f5a0de9e3a00a75cea9",
".git/objects/8a/d23e5090958c76ea946e23ed9f5fef3f808a68": "1ac90bef17c200a9e5412093b62e6c61",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/6d79584a3542f3f86dbdbc4358adb3cb8e2d5f": "194ca3fddc1aab25caa1b75b98d6a9be",
".git/objects/10/36d1f9925204c0a8020ad10c808d3134636577": "c7b51d677cdc909818a821e7496e60a0",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4d/5441f3efe91468f6095522bc433bb119d29d03": "284d8418b96211110bebcb29c37ca399",
".git/objects/75/1e8c9dc2b811f34aa0679cf66c853480968f57": "65a8bf1c75d57d60739c110a040afe01",
".git/objects/81/98c10b8ff720b9a218a5085a4d44bc21e34fd1": "8f99c2230515c4639fe2a6450ac1190c",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/44/485761c52e732b3d6145aef1decdaf6e9eb8ce": "8427ed3af15f131c5adf8097d5ab7fe0",
".git/objects/2a/bd8143a2a9447eee2dd8bc81361a708f4fbfd3": "844e25cc2cfb05df82fd3dcb3f5aac1f",
".git/objects/88/fe4bf7815e38587ac1b23d0066bc3b381614bd": "98c289d54789716ccb4410d5428d8268",
".git/objects/88/e3102c3b5ebf72caf1be8fbbb5f663c57299ff": "a4086006fd1334aec03d76d0cb4029eb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/5a122216a143ab162f9c7928e9e01683aa38aa": "4aa96c9361849b46c88f1148100a03c1",
".git/objects/9f/a29b34c5edd3bdd88868cb33d2b892643c83ff": "9aabec8f2903b26a9fcda6998f64fbaa",
".git/objects/6b/3ab9c2961e044d720efb28aab096157f1bd1ab": "48870504ea410f36acc7e13ec3e6fee9",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/6e9bcf39f4578daaf482fb94f4fb2f03618959": "9d4de37b22121254fc8319c0639b6730",
".git/objects/9a/cd1a120d740d42cd060cc04d88c0c9e3537eab": "64807eb5a2871c7f0e89a203b15070fa",
".git/objects/09/53a09f0fdbb59d188db2590e4cbb1e24fee8ac": "ae80ec12d31cad2ebc6d157b8cb7f1ce",
".git/objects/5d/7840e762fa05d9a4fa87c4bf91af8f804ad3f0": "eb9d3c8acc4b9bb0bbbe93dfe4321a7f",
".git/objects/31/f190b5fedf3f74b7a98ba4bca8dc5e2ecf0953": "6eef8feb24b822cc18903f1c90b979ae",
".git/objects/31/4846e2d9eadb99944704605265861e2e544e9b": "6d1b6255fa823c5de55aae0a0b990e3f",
".git/objects/91/c59833cc0046d00906794fbef59b2f2b6e5c33": "cec0532c4a97f6cf7b4844e08de9e269",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/62/56e71ef63b2ab0493f13e9cf3ca62fc0a36267": "d962c3c08108a83425c0b92e6dbb1b0c",
".git/objects/96/3f0aef4955572b712e550ccb7a570ec1adcbdd": "f90336145a21c5a5141920033043c5f5",
".git/objects/3a/16e20d62dd93dcd1cf9d1044333c80339ce789": "2b03995ccdd06ad2e44dc8f48d5d3ca4",
".git/objects/54/08aa8585b297d58f61e94dcea804949f2a979f": "2dc57a7bbeee8f5ed2d49f816b60d011",
".git/objects/98/27f79a22f16bfb2ec6586d1ad0cafebff8da67": "510c84457f437b7225a292b704bc8b09",
".git/objects/98/3dfe009d42c44339540dedcbb27f17ba64be8e": "88d4d4a90ddbb84d15874a8bf995f02c",
".git/objects/98/c8873d5199ad86524cd41903b3ab16e4ce94b1": "02421d3847888a897c2a843d6e1038de",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/30/70ab4d22a9ccb574c9dc0fce8bdf444e529f47": "58952bbf8f27ed32ef22a14c5447cdf4",
".git/objects/5e/a03ae062b4dbddb217215b54a21cbbff76261a": "74b455ef79a3903c7c050b1e89793535",
".git/objects/37/3ed69189f6068fa94c9b6fc6c7276979cefb70": "35d5f507569ff84b0dea79f15bbd0efa",
".git/objects/08/0b72e72e4b840728eb9ff21615658985027abe": "81e4cccc97f023203bf12845c30b417c",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/1b9d5985f0e3d78a6d18b68c99545071aa9743": "8a67fe08e91c07c29e25d75ad6303b4a",
".git/objects/6d/3b851805ebc742c1fcdb2178c106f1e0beb4dd": "b2b6640ccce3f03041907f59750fec91",
".git/objects/6d/6e57ec3d407f4904c2897c89f1f2115a5873fb": "1aada675f49d88cfa0f9df115dd5f1a9",
".git/objects/6d/5013647b538e85d5a1230caf2ebcb4535d61ab": "5691621db6f0dd711bdfe4ede30a8ee6",
".git/objects/01/df5b5c537b989d23d9285e5afad44036c0edf1": "a0f0a06aadf4041f7c2f727ab2c4f50e",
".git/objects/06/1ca90afa025f324f103e6d0b360e31b8c738ad": "4b97a55e0307f49c0093bf6fb50eba13",
".git/objects/39/217f7303f6701991377303da6e6369096a91d1": "82ee2a745d2afd2a09042bd1348f8acc",
".git/objects/99/832990a0fa6a867129c0d5cd80e4cb26f823c1": "65b63eb231412c938a9999ef756b2628",
".git/objects/52/a08cd64cce68b5839e0f9f8281550ff97bc115": "89c7792f4b8f116dd8de5caae50c0266",
".git/objects/97/f455d27470b2281c70c451b69b960f5768b6a1": "8065bfa7b70b668b02cdb49065ce191b",
".git/objects/97/e9d039fba0d47be9e57cfe37e79ea642867d5d": "99efddd588f496aff9d48a5f18704f7f",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/97/9b88048d1b9296700ab19a2b7350da0ff8b513": "2ab8f70507f49e0d49c9e4d24f098938",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/3436236ca31b42f515d2cf0b1ac62dc3b41c29": "259327ed78458e851a3a32019adf5882",
".git/objects/b8/3524273f26be1ac7d066cbcb91cfe5a186df20": "f049d39413fb457630a57402451aca83",
".git/objects/b8/a1a56095fbd72ffb76c24b3bea35cc9e7b9158": "0c17050eccab332196da4f0badb9c61a",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/0b72fe7b43a55bfaa85f5cab9b4d316410695e": "ce7e5b2da6343a87dd36e235b96a4b70",
".git/objects/dd/eb45d7c75f0e28378aa4584e2915c3e5f92c7c": "0582a5bb21c0514a497544c0122a89ae",
".git/objects/dd/2b5ae6d027da57a84f28738a15b128231f3c2c": "7c74f74814f05996d3bf06196032ede0",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/a9/b17b1ab2fcec894a0ffbe1361b343f1eb891d9": "7660645000e0669ae58c0f38e6df5362",
".git/objects/d2/46813172bfbc1f9883163b7872be01582dc6d6": "fa7c265b9b6c9eb30852d96f5a7b3962",
".git/objects/d2/119fddbf1cfb1713ded2d53fa17dde3b52fd7d": "25628f910a345a1c1f63557e8d9430f1",
".git/objects/aa/9d5ae82c199d10e4eb2b9812d093d47dfb77f2": "2c33bb876026b6757793d4da41229142",
".git/objects/aa/3633d9aeb1cea8260a2514a004d04a62a36b96": "0b462417ec73db7288f16d2030a84108",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/af/dd9f777266b33b09d79e0da890955d422ecf84": "ccc4ac6c9ad3d013433314d2e440868f",
".git/objects/af/3fb39f07026932e0d930133eee7a7a8ccc1531": "2d690788a3b05e2051a82d0b866d0892",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/23d8953295ecad44cdc4c266f837cf3594de87": "97668d28eb3002c28c1034a19fed3ba5",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/ba0298a48115262176955997c54e99c1eaa7a1": "ef07232056c05d539055e4c5355cb02b",
".git/objects/b0/935b7f4480e5995f9e48d6241314759723d210": "91abe352d92dbec66b9ac6bac28ac323",
".git/objects/b0/acd2d93ce4b28cf37d802755f063c1754d48a3": "5e7cf43dc5611d347d5903bad1fa8d92",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/8bc001e401fdd09ff52dd702a9f99b4dd80905": "9b2c4a83088f7ac8c6a0d1922ea57065",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/a1/c0d3220a99be093c6d9d308d413d2049ad31c1": "931f086f2015aa329156dcffc9dd2634",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/ea/e771e1ad0eaf060a3b8f71a8f3a64a4e30a0da": "488f12c0ee781f37ff377922df2368c6",
".git/objects/ea/bd96e13cedd9c811e38f898432afa3d1a14d26": "893bef7040c44e74ff8252fa3995c570",
".git/objects/ea/1fdbb298360410bc6b5be17ff4ed613747770c": "48e35a693f7e35d43eb8e30c5bf2f346",
".git/objects/e1/e7f111bbfb5ce266b4cc658c1b4be97657e0fb": "e1465fdc10ac019a35df937b050df4b6",
".git/objects/cd/5138aec75b7c21a6ade7679cf472625f2d582a": "92cf4b21cdf722cf0966ab71f657bad9",
".git/objects/f9/2f9da0b91bbb4988ed4b1f078f6ae8184172c4": "3068e18b8a71aef9479bd9e506aec9a0",
".git/objects/f9/9f12b9960a953e02db6a7d05f3fc38503bd508": "8dfd564aa0ef9ae1448ac3ec0b664a54",
".git/objects/f7/9b1b3bd636fdb8a8f176a77b6d4dd1825a460e": "c93a284ca0a7fc57d1af43bf86ff730a",
".git/objects/f6/1ef78d3d1f8d5efbf9ff9e1d27ff6c19475b5a": "caeee40564d6466571c8265e418b716d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e0/6bf4cba6739b4ddafd7e0cfacb6e30074631b9": "9a03d6e69d8b157d52b45f2b14c5f979",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/46/193557b42a477518103980330ad7404fb1e131": "b6e70220fdbc4704bb180056aa5e22bc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/4795fe5c9b4f57dbdc1bde08e9d2f990fdf855": "64892e2ff6573a590ce33017ba21b009",
".git/objects/46/2ddc9e1f85f50c37b059a650806b72a1c506e7": "bc9f298fff98dbc37313e82786d522d0",
".git/objects/79/0702280803b32d8220633b610422caf73b7b73": "4191a27e69749acaf9f796e63f4207f6",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/41/c7508e2ab9c1c6e319a92cc46b34d94a73bfb9": "05b07a33990e13f11fad0bbc8eed325b",
".git/objects/83/bdc282fd0c5568b5aea83d3f724a59ff8aadf0": "3c4d9eff62cc73e166cad718fb38173a",
".git/objects/1b/91c2164792efd4272c894a5c8717e6fc8acc74": "d4e1ef5024f9d487043ce11cdd50c831",
".git/objects/1b/19f366011597c8b63c9da8a5d42ee070337e42": "e6cd44cf2073938f0bc85168e64789c4",
".git/objects/77/5613f04ef33e58361c633e3e31da45e6df22a1": "cf41464b92492810f89d02d79751099a",
".git/objects/48/ab47bbedf2373f4e53c73ba4b2629684fd5f74": "2604570de6d1b33ab2918c8ff2be5513",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/bdecb7a8b0de091763e126a49ce1d4a0726dbf": "2c6bbb49b08afe4df01192e9ff2d71be",
".git/objects/1e/873ccbf5e1c6f27da2a4e79ae350378dc4715a": "87f2e877b4ed57185ef7e3c04028debf",
".git/objects/1e/4c38f9076a07d1fd6081d39648a03a71b16fac": "a7adb8f44551ea2100020978ef4f8dad",
".git/objects/1e/88998c0e8c625c5e8b520872ef937cdb47816e": "7ff6499a0b125813c1f04eadd9b7ba25",
".git/objects/84/42704db58fb982f0346f497b186530928352a8": "aab27f27411be75b036850e59c2adcfe",
".git/objects/23/26e5177ac0ab6348d6dca358fea09aeb50d22d": "2b2bfc79d8f0b9941581b8a323585ff2",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/15/580a188779d50f888fce2d8a780a3ceab884ca": "96c961281081930ff5a2f82c673fc00c",
".git/objects/85/24f35e2b33bef575038bce1d4f5cbb895390ec": "89ac8aace857d6f12d20dcd1a46c819a",
".git/objects/85/1a6322b0f10b9d1b36aec3e145d29ee7856a2a": "11b51bc46be5707a78a0d789dc350567",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/d0630e3f85d800344423102f33fc30cf155035": "97b72a2613542f5626048a8ae4a024c5",
".git/objects/76/5eafd21932da79000d4f69845d415794bffd07": "f67b9ef33534d85b26847c02422fc0d3",
".git/objects/1c/48c98fc2d77410a30e2d1745fc3acc2a73af41": "06d90f7fe28f6c53b4d19c846645c99a",
".git/objects/1c/d4f2b8214b736e003ca0f1f01489d7f1104bc1": "3c167edd020921ccbe19141105ed340f",
".git/objects/1c/332a3fb40e91c23f715a739aa680dfc907acf1": "f25a6a9a6e50296c183898328193b9ec",
".git/objects/82/ec3393b9faa5cbfbc7525d7269975f8f6d06e9": "1603857e061fe995219a2a816144280d",
".git/objects/49/0a2b8b2bc30ba8764f1d07b6e292d8eb2a5bd6": "c624a692d6d0d6d9abecdf6f6142f428",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/78/c87fb0886edf53e91d482c86ff586832c7d765": "1148fe528da944614ad6519f39e82006",
".git/objects/13/6bcb4af2842e867abe4bed7ba48eb2e2ae0ab3": "770f567549333d2f3b8a3b6f318b86d4",
".git/objects/7f/ad82a5dbf8902c888bf94a79ab25a79af03c82": "8902ccb067de6c88dea6f11ec902f7d8",
".git/objects/7a/70a98fb7b8c1d515e87efefa4f7ea2083f2a90": "7568e13d081c89e888bfb65731e56fa9",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cee80acac0946c23300a0ad0110e7482",
".git/logs/refs/heads/main": "36b67b858cbcf053a0a2217f353cecdb",
".git/logs/refs/remotes/origin/main": "327fcc44b09b4ed8d1e935db0007cf8c",
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
".git/refs/heads/main": "3103077cb693cf77cd1c8c01f9558241",
".git/refs/remotes/origin/main": "3103077cb693cf77cd1c8c01f9558241",
".git/index": "c3a0e0092126a0673fb8daceeaa80411",
".git/COMMIT_EDITMSG": "93ecc25a32e063b13ba8a394f4c08e2d",
".git/FETCH_HEAD": "342164ca53562e780b58908808c3c623",
"assets/AssetManifest.json": "79e79cc65c69f6852636ce2c37fdd725",
"assets/NOTICES": "b40a885bc14520687682cda92c054823",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "44f2c7db5a16c452e0835d7442a3ed94",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c7b8ff1cdd3d87b4d19439cd34d24ebd",
"assets/fonts/MaterialIcons-Regular.otf": "3731a3cb4ed3170c717de0667ebb6efc",
"assets/assets/laboratorio_background.jpg": "aa2e02ee8e7f5a6fec7d516bb3d518b0",
"assets/assets/fondo2.jpeg": "94b174c3f28a86b12690490cb0a6a6a0",
"assets/assets/servicio.jpeg": "4dfc8c61794746c415c1b61fce1485e1",
"assets/assets/servicio1.jpeg": "111d6db49b49dcc5106cbfedaeab1c56",
"assets/assets/Logo.png": "6625dbd6d60d9d3305eb0629273b9e50",
"assets/assets/fondo.jpeg": "bb64224bc6ee06a068fff300e11a7a49",
"assets/assets/servicio2.jpeg": "d4bc363ac1e69926d23ace28baeef33e",
"assets/assets/videoFondo.mp4": "710350e2955c36ddfd44461de9bb84d9",
"assets/assets/fondo.jpg": "0c9846454b5492ab8fc6e95d6da6edc9",
"assets/assets/servicio3.jpeg": "d9d7c790bb0294860aff44e1d8c24869",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
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
