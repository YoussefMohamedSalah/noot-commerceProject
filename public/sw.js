if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const o=e=>a(e,c),d={module:{uri:c},exports:r,require:o};i[c]=Promise.all(s.map((e=>d[e]||o(e)))).then((e=>(n(...e),r)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/UTH-jGvMnp_feLDT2gYmU/_buildManifest.js",revision:"fb7fd2688bb7b1fd995b7e5fdec86f4d"},{url:"/_next/static/UTH-jGvMnp_feLDT2gYmU/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/111.4f4d90daccc492c2.js",revision:"4f4d90daccc492c2"},{url:"/_next/static/chunks/130-0c8b80127fef5762.js",revision:"0c8b80127fef5762"},{url:"/_next/static/chunks/131-526658129f1f94c9.js",revision:"526658129f1f94c9"},{url:"/_next/static/chunks/206-7b9594a75e2ddf91.js",revision:"7b9594a75e2ddf91"},{url:"/_next/static/chunks/299.450d878f2e462b65.js",revision:"450d878f2e462b65"},{url:"/_next/static/chunks/337-710d4b3208ba914f.js",revision:"710d4b3208ba914f"},{url:"/_next/static/chunks/443-87fc5bb507dd233e.js",revision:"87fc5bb507dd233e"},{url:"/_next/static/chunks/539-ee015de2c449b032.js",revision:"ee015de2c449b032"},{url:"/_next/static/chunks/598-a6056b64a47ee46f.js",revision:"a6056b64a47ee46f"},{url:"/_next/static/chunks/636.5ad3878b05f87a80.js",revision:"5ad3878b05f87a80"},{url:"/_next/static/chunks/641-ac34e42b6e5c4564.js",revision:"ac34e42b6e5c4564"},{url:"/_next/static/chunks/649-67d76efddb2798cd.js",revision:"67d76efddb2798cd"},{url:"/_next/static/chunks/692-12beced9d8a7e1f2.js",revision:"12beced9d8a7e1f2"},{url:"/_next/static/chunks/698-c3e01076b0046304.js",revision:"c3e01076b0046304"},{url:"/_next/static/chunks/708.e955fb760daa7cfb.js",revision:"e955fb760daa7cfb"},{url:"/_next/static/chunks/746.e57057bc3554b895.js",revision:"e57057bc3554b895"},{url:"/_next/static/chunks/806.ccb43f25a74e2340.js",revision:"ccb43f25a74e2340"},{url:"/_next/static/chunks/826.905f2efeca42783d.js",revision:"905f2efeca42783d"},{url:"/_next/static/chunks/83.5b3b5648b61c8d51.js",revision:"5b3b5648b61c8d51"},{url:"/_next/static/chunks/90-d16c6d95d97cbe6e.js",revision:"d16c6d95d97cbe6e"},{url:"/_next/static/chunks/952.3d0cfc9f3f8b361b.js",revision:"3d0cfc9f3f8b361b"},{url:"/_next/static/chunks/959-49be26233d9768f2.js",revision:"49be26233d9768f2"},{url:"/_next/static/chunks/984-bddeed9c8c517b8f.js",revision:"bddeed9c8c517b8f"},{url:"/_next/static/chunks/framework-cb255c3c8edfd61b.js",revision:"cb255c3c8edfd61b"},{url:"/_next/static/chunks/main-b0395e6cb5ad2f11.js",revision:"b0395e6cb5ad2f11"},{url:"/_next/static/chunks/pages/%5Bslug%5D-0b1fd5896349325e.js",revision:"0b1fd5896349325e"},{url:"/_next/static/chunks/pages/_app-9809073072a9edd9.js",revision:"9809073072a9edd9"},{url:"/_next/static/chunks/pages/_error-00cd32feea9e19df.js",revision:"00cd32feea9e19df"},{url:"/_next/static/chunks/pages/auth-d42d3913fd78c426.js",revision:"d42d3913fd78c426"},{url:"/_next/static/chunks/pages/auth/%5Bslug%5D-ba5ece5aeed39e0b.js",revision:"ba5ece5aeed39e0b"},{url:"/_next/static/chunks/pages/dashboard-75524ad8d12fbb9e.js",revision:"75524ad8d12fbb9e"},{url:"/_next/static/chunks/pages/dashboard/categories-0e29349c5bd51ae6.js",revision:"0e29349c5bd51ae6"},{url:"/_next/static/chunks/pages/dashboard/categories/%5Bid%5D-13ce88c6fc97823f.js",revision:"13ce88c6fc97823f"},{url:"/_next/static/chunks/pages/dashboard/categories/new-a5ebdbb9c1bebcee.js",revision:"a5ebdbb9c1bebcee"},{url:"/_next/static/chunks/pages/dashboard/overview-1652f4c3b735d26b.js",revision:"1652f4c3b735d26b"},{url:"/_next/static/chunks/pages/dashboard/products-aa1620e90c7d3c83.js",revision:"aa1620e90c7d3c83"},{url:"/_next/static/chunks/pages/dashboard/products/%5Bid%5D-75691ec047a88ae2.js",revision:"75691ec047a88ae2"},{url:"/_next/static/chunks/pages/dashboard/products/new-5b3c8c65c112e8b2.js",revision:"5b3c8c65c112e8b2"},{url:"/_next/static/chunks/pages/dashboard/services-4f729b76dcf94d3f.js",revision:"4f729b76dcf94d3f"},{url:"/_next/static/chunks/pages/index-5306e7e2f1247b3d.js",revision:"5306e7e2f1247b3d"},{url:"/_next/static/chunks/pages/pricing-bbc4715ae5525387.js",revision:"bbc4715ae5525387"},{url:"/_next/static/chunks/pages/pricing/OffersList-d56002554496a8e4.js",revision:"d56002554496a8e4"},{url:"/_next/static/chunks/pages/pricing/PricingBox-86b465f0dd048866.js",revision:"86b465f0dd048866"},{url:"/_next/static/chunks/pages/products-a6d13858868a7640.js",revision:"a6d13858868a7640"},{url:"/_next/static/chunks/pages/resources-7e8f586fdc7085db.js",revision:"7e8f586fdc7085db"},{url:"/_next/static/chunks/pages/templates-a00f51cb5d6cb719.js",revision:"a00f51cb5d6cb719"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-a6b5feb398500f81.js",revision:"a6b5feb398500f81"},{url:"/_next/static/css/051eb88f6007b6ed.css",revision:"051eb88f6007b6ed"},{url:"/_next/static/css/3dcaea73f4c897fb.css",revision:"3dcaea73f4c897fb"},{url:"/_next/static/media/accounts-bg.bd1bcd69.png",revision:"bcc7a263f26e09f309919b9ae0f63ca1"},{url:"/_next/static/media/example.90ed9867.png",revision:"50804963117305aa5d716634c0577b21"},{url:"/_next/static/media/logo.91e68598.png",revision:"26a8e36b05a5264575e76e3a894f5c2f"},{url:"/_next/static/media/roboto-all-300-normal.39add8fb.woff",revision:"39add8fb"},{url:"/_next/static/media/roboto-all-400-normal.2e9e9400.woff",revision:"2e9e9400"},{url:"/_next/static/media/roboto-all-500-normal.d96daa81.woff",revision:"d96daa81"},{url:"/_next/static/media/roboto-all-700-normal.ca3d0fdb.woff",revision:"ca3d0fdb"},{url:"/_next/static/media/roboto-cyrillic-300-normal.88798412.woff2",revision:"88798412"},{url:"/_next/static/media/roboto-cyrillic-400-normal.2d9c9d60.woff2",revision:"2d9c9d60"},{url:"/_next/static/media/roboto-cyrillic-500-normal.aa68ea54.woff2",revision:"aa68ea54"},{url:"/_next/static/media/roboto-cyrillic-700-normal.258a358e.woff2",revision:"258a358e"},{url:"/_next/static/media/roboto-cyrillic-ext-300-normal.cd7c5715.woff2",revision:"cd7c5715"},{url:"/_next/static/media/roboto-cyrillic-ext-400-normal.d7827ae3.woff2",revision:"d7827ae3"},{url:"/_next/static/media/roboto-cyrillic-ext-500-normal.a1b5c90d.woff2",revision:"a1b5c90d"},{url:"/_next/static/media/roboto-cyrillic-ext-700-normal.dd3651fb.woff2",revision:"dd3651fb"},{url:"/_next/static/media/roboto-greek-300-normal.25dc89b0.woff2",revision:"25dc89b0"},{url:"/_next/static/media/roboto-greek-400-normal.63e6dc18.woff2",revision:"63e6dc18"},{url:"/_next/static/media/roboto-greek-500-normal.533b03d2.woff2",revision:"533b03d2"},{url:"/_next/static/media/roboto-greek-700-normal.432b858b.woff2",revision:"432b858b"},{url:"/_next/static/media/roboto-greek-ext-300-normal.bc5ce703.woff2",revision:"bc5ce703"},{url:"/_next/static/media/roboto-greek-ext-400-normal.2b547ded.woff2",revision:"2b547ded"},{url:"/_next/static/media/roboto-greek-ext-500-normal.7ea6cffa.woff2",revision:"7ea6cffa"},{url:"/_next/static/media/roboto-greek-ext-700-normal.a8d16efd.woff2",revision:"a8d16efd"},{url:"/_next/static/media/roboto-latin-300-normal.a4eae32d.woff2",revision:"a4eae32d"},{url:"/_next/static/media/roboto-latin-400-normal.f2894edc.woff2",revision:"f2894edc"},{url:"/_next/static/media/roboto-latin-500-normal.3170fd9a.woff2",revision:"3170fd9a"},{url:"/_next/static/media/roboto-latin-700-normal.71b2beb8.woff2",revision:"71b2beb8"},{url:"/_next/static/media/roboto-latin-ext-300-normal.37d4965d.woff2",revision:"37d4965d"},{url:"/_next/static/media/roboto-latin-ext-400-normal.21abc8c8.woff2",revision:"21abc8c8"},{url:"/_next/static/media/roboto-latin-ext-500-normal.85ebfb55.woff2",revision:"85ebfb55"},{url:"/_next/static/media/roboto-latin-ext-700-normal.6af98c24.woff2",revision:"6af98c24"},{url:"/_next/static/media/roboto-vietnamese-300-normal.b3d3e960.woff2",revision:"b3d3e960"},{url:"/_next/static/media/roboto-vietnamese-400-normal.c95fc061.woff2",revision:"c95fc061"},{url:"/_next/static/media/roboto-vietnamese-500-normal.7f8c0554.woff2",revision:"7f8c0554"},{url:"/_next/static/media/roboto-vietnamese-700-normal.72bf832f.woff2",revision:"72bf832f"},{url:"/_next/static/media/tajawal-all-300-normal.2d22167b.woff",revision:"2d22167b"},{url:"/_next/static/media/tajawal-all-400-normal.70afde91.woff",revision:"70afde91"},{url:"/_next/static/media/tajawal-all-500-normal.4b7d06f7.woff",revision:"4b7d06f7"},{url:"/_next/static/media/tajawal-all-700-normal.669d3683.woff",revision:"669d3683"},{url:"/_next/static/media/tajawal-arabic-300-normal.d0f91cd5.woff2",revision:"d0f91cd5"},{url:"/_next/static/media/tajawal-arabic-400-normal.5bc59a74.woff2",revision:"5bc59a74"},{url:"/_next/static/media/tajawal-arabic-500-normal.98c1ea56.woff2",revision:"98c1ea56"},{url:"/_next/static/media/tajawal-arabic-700-normal.01499d52.woff2",revision:"01499d52"},{url:"/_next/static/media/tajawal-latin-300-normal.924d097d.woff2",revision:"924d097d"},{url:"/_next/static/media/tajawal-latin-400-normal.28c5eac4.woff2",revision:"28c5eac4"},{url:"/_next/static/media/tajawal-latin-500-normal.e1b0c32b.woff2",revision:"e1b0c32b"},{url:"/_next/static/media/tajawal-latin-700-normal.faa4bf6d.woff2",revision:"faa4bf6d"},{url:"/android-icon-144x144.png",revision:"409516812b72cd999f466592a38b519e"},{url:"/android-icon-192x192.png",revision:"21f322e8d5b9591ee53906fff62c433a"},{url:"/android-icon-36x36.png",revision:"2a1e3b5dac6b7939e1731af15949f25b"},{url:"/android-icon-48x48.png",revision:"e771b19d4a7657736bc43633be80fb23"},{url:"/android-icon-72x72.png",revision:"3c89b8497416080e5b3f90cb46fef529"},{url:"/android-icon-96x96.png",revision:"1ada83ebf36e7a6b65c7f2b45df71c86"},{url:"/apple-icon-114x114.png",revision:"b89a8f8d6c047d502551ac8680c099b6"},{url:"/apple-icon-120x120.png",revision:"186d8fedd7fb814b446c1df2a9f1bcc9"},{url:"/apple-icon-144x144.png",revision:"409516812b72cd999f466592a38b519e"},{url:"/apple-icon-152x152.png",revision:"0d8cd3d4390ef3ed4861017af555d9e5"},{url:"/apple-icon-180x180.png",revision:"84af9261d832eb245dc539543f95bd02"},{url:"/apple-icon-57x57.png",revision:"77410f2f2fc98e17c31401fc3219ab6f"},{url:"/apple-icon-60x60.png",revision:"516817804b352e59a6290cddc349ae5e"},{url:"/apple-icon-72x72.png",revision:"3c89b8497416080e5b3f90cb46fef529"},{url:"/apple-icon-76x76.png",revision:"eadebd2d32ff1458c38c77fb00f874da"},{url:"/apple-icon-precomposed.png",revision:"d8681bbc98f3741ef9cd1211172f9132"},{url:"/apple-icon.png",revision:"d8681bbc98f3741ef9cd1211172f9132"},{url:"/browserconfig.xml",revision:"97775b1fd3b6e6c13fc719c2c7dd0ffe"},{url:"/favicon-16x16.png",revision:"6598e62b1fd6d1f975549ba58ad90358"},{url:"/favicon-32x32.png",revision:"d6351332056a81ab97b2d214e63a5f94"},{url:"/favicon-96x96.png",revision:"1ada83ebf36e7a6b65c7f2b45df71c86"},{url:"/favicon.ico",revision:"6598e62b1fd6d1f975549ba58ad90358"},{url:"/icon-192x192.png",revision:"7198ad1a2823683eadffbb9867b03372"},{url:"/icon-256x256.png",revision:"413ae4deabc429ac39bbb235b538b752"},{url:"/icon-384x384.png",revision:"a717a114d25ea047872948a5e623c768"},{url:"/icon-512x512.png",revision:"b56ae3388cf94fc056260cd25847916c"},{url:"/images/accounts-bg.png",revision:"bcc7a263f26e09f309919b9ae0f63ca1"},{url:"/images/appstore.png",revision:"765fa300282fbfc0458e8962dac3331e"},{url:"/images/asten-hub.jpeg",revision:"448a0db3d6ab6267429b0533a8b6c50f"},{url:"/images/background.png",revision:"8580722932ca2da994be014fe7c8c3da"},{url:"/images/banner.png",revision:"83397a4266198b6ce5dd2bc92c1b857b"},{url:"/images/banner2.png",revision:"d2cc706378179dbc6c8f07a7500fa4e1"},{url:"/images/britishcouncil.png",revision:"710e7f210a6000a435bf41acd6430537"},{url:"/images/cambridge.png",revision:"32a31f60f150cf49a4c30eb2f1f4c6ec"},{url:"/images/circles.png",revision:"5f1f21a0fef547719b9a6d9ba1e35f68"},{url:"/images/client-1.png",revision:"e7284676c7dd2ade13d884a0649d9c57"},{url:"/images/client-2.png",revision:"2d2775fb9373defccc6fbe34e0e235e2"},{url:"/images/client-3.png",revision:"6dc1ac9cf93ca28d303f06aa4aad27ef"},{url:"/images/client-4.png",revision:"78d1726bd88a29542c022a6fb40e82cc"},{url:"/images/client-5.png",revision:"ba4faf61ad04c4c9ede14e618938c513"},{url:"/images/cobis.png",revision:"c726236d2ff18ec2b1b34f9edf62fd32"},{url:"/images/covey.png",revision:"9a1901244b94bfbeb1eaa05e4eba5b82"},{url:"/images/download.png",revision:"3f562be9f30178f6b0a2137b7395a02c"},{url:"/images/empathy.png",revision:"2a2e5f1e3d6bd6d9f17491ccae44baf7"},{url:"/images/example.png",revision:"50804963117305aa5d716634c0577b21"},{url:"/images/florida.png",revision:"ebff79b2bf0b16d2c9380ca52e8cbd40"},{url:"/images/footer-logo.png",revision:"875f1b43f227e1e86b6dc22eb22a5200"},{url:"/images/girl.jpg",revision:"370a4310159a4583f7bc60de464e2ee4"},{url:"/images/header-logo.png",revision:"66e1cd3554283d450b4fba3d696eea32"},{url:"/images/icons/BusinessIcon.png",revision:"20b93822c5bfdfcbdea870acb3a4d7e8"},{url:"/images/icons/EnterpriseIcon.png",revision:"1ee890bf0241d9c41996f4937a0f68f7"},{url:"/images/icons/PersonalIcon.png",revision:"2225b8311098a73879139509f4ca2bf6"},{url:"/images/icons/PremiumIcon.png",revision:"06bc10a68e77b2db60154e3ce259d050"},{url:"/images/icons/arrowIcon.webp",revision:"ab3e82816c65a736946f12a853c61045"},{url:"/images/icons/blue.png",revision:"6711abfb880fe3cb4c5b25b39536c0c9"},{url:"/images/icons/copyRight.svg",revision:"3c20df26fef9596a29f61f65c925b70b"},{url:"/images/icons/green.png",revision:"75c32910a753c0117968f8e9193a83ca"},{url:"/images/icons/locationIcon.svg",revision:"7912e361843225dc98368560eb1240ab"},{url:"/images/icons/reasonsIcons/1.svg",revision:"835df36ad784e80a1746eb5546a966e3"},{url:"/images/icons/reasonsIcons/10.svg",revision:"73f378ba90b2ce3d9a0dd231482adcb1"},{url:"/images/icons/reasonsIcons/11.svg",revision:"d6640f3c4c849a0a728c84cc20cd0b6b"},{url:"/images/icons/reasonsIcons/12.svg",revision:"fba21b308666d63b19b6d07b6ba0315d"},{url:"/images/icons/reasonsIcons/2.svg",revision:"2d73a6ef3c1e28e09c0bdb16a657054d"},{url:"/images/icons/reasonsIcons/3.svg",revision:"9f923d2e3dca9030fb0e75a80798b4f9"},{url:"/images/icons/reasonsIcons/4.svg",revision:"e76b35ef2aeddd40eaeb3a3cd338f0fe"},{url:"/images/icons/reasonsIcons/5.svg",revision:"f07e4013b80cc1ed500ff66208aaa14d"},{url:"/images/icons/reasonsIcons/6.svg",revision:"b7247ba8941d4660816922f766ab7282"},{url:"/images/icons/reasonsIcons/7.svg",revision:"97d45b210b0fa7d3828bf3a6e8051221"},{url:"/images/icons/reasonsIcons/8.svg",revision:"db74858582b882e6e5c9433b76effaee"},{url:"/images/icons/reasonsIcons/9.svg",revision:"5c32feed6ad8237a00809327be52333f"},{url:"/images/icons/red.png",revision:"921927ddb98b56bafac8896e3d1dc812"},{url:"/images/icons/smsIcon.svg",revision:"83554a342322af143ec1a80debeaca77"},{url:"/images/icons/socialIcons/facebook.png",revision:"9af1c372265fb6cc1c3b00cefc467ba0"},{url:"/images/icons/socialIcons/instaIcon.png",revision:"5bb8295a49011f75166bf976b2f6f818"},{url:"/images/icons/socialIcons/linked-in.png",revision:"2d5737bc34dade570293928de28d86c6"},{url:"/images/icons/socialIcons/twitter.png",revision:"eacfb8883cba463f8f8ddc280fe462b1"},{url:"/images/icons/storeIcon.png",revision:"be7df8d53298801756a74b1a158894b0"},{url:"/images/icons/websiteIcon.png",revision:"121afa47f0a1b29d045634439fc71bfd"},{url:"/images/icons/whatsappIcon.svg",revision:"7dec15c3b1f1f14ff3dfdb6bc9a54425"},{url:"/images/icons/yellow.png",revision:"d2a5f5b1949f777a5bc9c6f9141a4586"},{url:"/images/image1.jpeg",revision:"b1a510638f2c335f3613edc13e0b0e19"},{url:"/images/image2.jpeg",revision:"09598731e3055910faca4d3fa4e5159d"},{url:"/images/image3.jpeg",revision:"cd765fe5296f0b0e4f48429a182e30e7"},{url:"/images/landEffects/effect1.svg",revision:"cdd0b7dadec37b280e5881010c1e214d"},{url:"/images/landEffects/effect2.png",revision:"10ed2d46a9cb8bf4431e391b01afaa19"},{url:"/images/laptop-preview.png",revision:"80aa39bec16bca3f59e4994b2c48e812"},{url:"/images/laptop-preview.webp",revision:"b62eac0f1a5c12ede41e8ae3c6636a20"},{url:"/images/listening.png",revision:"445176edcd3569205840a313570b3553"},{url:"/images/logo-red.png",revision:"752bf51e05f2440d6b48a91fe43b5ce8"},{url:"/images/logo.png",revision:"26a8e36b05a5264575e76e3a894f5c2f"},{url:"/images/lsliders/1.jpg",revision:"e01d09e7ddf59b6009d1385be1b2dd0a"},{url:"/images/lsliders/2.jpg",revision:"9f4c5d5852d13328314555a2f938678b"},{url:"/images/lsliders/4.jpg",revision:"babf0324abda68a90add1df74f80952f"},{url:"/images/lsliders/5.jpg",revision:"a4a86e2e346f10f90fdd3ce8d3a496c1"},{url:"/images/members.png",revision:"ba08a7d61975cd8e9ff1d445b7422c13"},{url:"/images/mete.png",revision:"ab873c465e4156a8c7c9584ab3879886"},{url:"/images/microsoft.png",revision:"e52acd0b82b35b4dede1ddb7aa4d8342"},{url:"/images/msliders/1.jpg",revision:"7f04cee4072a189942cd45f9b05677e7"},{url:"/images/msliders/2.jpg",revision:"90b3e8bead29b60ed64796c5ba98c342"},{url:"/images/msliders/4.jpg",revision:"df8187afc390f29d368fa14f19acae4c"},{url:"/images/msliders/5.jpg",revision:"3af3fa093ea3c4f79c68a576096d4c15"},{url:"/images/no-limits.png",revision:"f6c81c83748ca84eff9b9b2d2b6d10bf"},{url:"/images/noot-dashboard.png",revision:"c00467ae1f0d6f7e9671bd3e38f6d3ce"},{url:"/images/ourfoundingmember.jpeg",revision:"9c24e529c743fe6d0b1d22da68973fdb"},{url:"/images/pearson.png",revision:"d64f873e8f16c97109f0f976b88ac9bb"},{url:"/images/quicklyBuild.webp",revision:"9ba8010d700feea911d6a5a63cfe09c2"},{url:"/images/respect.png",revision:"7d93db86c6487769d84aaa6e667f1f69"},{url:"/images/section1.png",revision:"dca80a08a2f5fc74f0105369209a3cba"},{url:"/images/section2.png",revision:"6cc9d6d1cd950750e11f3f7796a1b114"},{url:"/images/section3.png",revision:"a77e43a25d63bc68555f8338762a5b68"},{url:"/images/shutterstock_45.png",revision:"ada0135aea647ca995ecfda23fbf69c0"},{url:"/images/slider1-mob.png",revision:"200ae72bdf00cea5dda4813212daef83"},{url:"/images/slider1.png",revision:"3024296aa0453bfa7010e451bc481886"},{url:"/images/slider2-mob.png",revision:"016b97b7a954998b0e49f415868df910"},{url:"/images/slider2.jpeg",revision:"faef2d75d538a09bb6e8c2faf0c835a6"},{url:"/images/slider3-mob.jpg",revision:"17cb48f0a6df79be7e39c94de52a88e9"},{url:"/images/slider3.png",revision:"1ff6da4fb717ad947205dee6ec362557"},{url:"/images/slider4-mob.png",revision:"4309c17b091d68b852bcff9365777f59"},{url:"/images/slider4.jpeg",revision:"69b0cfdafcd2a66164a6dbc171f1e96e"},{url:"/images/timeBoxIcon.svg",revision:"c141fa99a477edf948e7953e1b784263"},{url:"/images/tolerance.png",revision:"78c10d3a775f8be0eff0f8654aa44913"},{url:"/images/website-template.webp",revision:"b38a7c139cf399149105842af3b2c9d6"},{url:"/images/whyNoot.webp",revision:"e2d62c4b0cb7be4509086418ec9d0143"},{url:"/manifest.json",revision:"d704e8260f3c5fafe1a52d9e4440aef4"},{url:"/ms-icon-144x144.png",revision:"409516812b72cd999f466592a38b519e"},{url:"/ms-icon-150x150.png",revision:"21dad583ac47415529e0bf27b32df622"},{url:"/ms-icon-310x310.png",revision:"d6ccac7f5cc2d01d8fdd67aa4ae01db8"},{url:"/ms-icon-70x70.png",revision:"338155bc10c8754f984f94316868b875"},{url:"/robots.txt",revision:"5d884785dc13c26056a64e4b63cd5d3c"},{url:"/sitemap.xml",revision:"db39c2d75efc2e3190ed3f6322246b6c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:s})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
