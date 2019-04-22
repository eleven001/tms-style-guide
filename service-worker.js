/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "17fd885332f7cdd7870b41976814a015"
  },
  {
    "url": "assets/css/0.styles.50eb672f.css",
    "revision": "9abafbf4d7054d476d9d592c59dfdf6e"
  },
  {
    "url": "assets/img/lint.69c5a4f3.svg",
    "revision": "69c5a4f331509def27a31465524fa8c4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1f49ec7b.js",
    "revision": "dde571cbb1f898864b552130a37bc9c6"
  },
  {
    "url": "assets/js/11.e8b3da3b.js",
    "revision": "5c3a07fc90012b9430f446c91b213089"
  },
  {
    "url": "assets/js/12.71f00825.js",
    "revision": "5c16a4d457a086f5b80cce76fefab98e"
  },
  {
    "url": "assets/js/13.d72600a1.js",
    "revision": "9a21addccdf89c10a9b13a8237db14c4"
  },
  {
    "url": "assets/js/2.ddf7138d.js",
    "revision": "66abe1a2435d53c411cafed0d8cb40ce"
  },
  {
    "url": "assets/js/3.35929b5d.js",
    "revision": "43894f86175cc6997cd557b907312cdd"
  },
  {
    "url": "assets/js/4.cfbb840d.js",
    "revision": "762d7680a06c558c61975bcf798b9be4"
  },
  {
    "url": "assets/js/5.cada48df.js",
    "revision": "76b74d6bddf0485f3a618e170d1c7ef6"
  },
  {
    "url": "assets/js/6.96f1da38.js",
    "revision": "61698893ce8865f1e77c56898fa1704e"
  },
  {
    "url": "assets/js/7.5f89c14b.js",
    "revision": "34861776258d3f4ea220f11ca006cb52"
  },
  {
    "url": "assets/js/8.629c56f3.js",
    "revision": "19872fb89db11fa25b5077d86edbabdf"
  },
  {
    "url": "assets/js/9.7c2c0003.js",
    "revision": "7b410b497f282be042a3f9a36834dc6e"
  },
  {
    "url": "assets/js/app.5eb1428a.js",
    "revision": "b532c921f2c07deb5f985ccbbb9a65da"
  },
  {
    "url": "css/index.html",
    "revision": "000e42bc5b6d75a013fe7714b37d959d"
  },
  {
    "url": "css/less.html",
    "revision": "05d9b2395e5c1c27726e48ae002d69fd"
  },
  {
    "url": "git/index.html",
    "revision": "4c4b39e483321d01b2e6535c66c07306"
  },
  {
    "url": "guide/index.html",
    "revision": "73102f481cc4b8ff769e27f915e54172"
  },
  {
    "url": "icon_logo.png",
    "revision": "d399277c55733b0fa33b794d4c84505d"
  },
  {
    "url": "icons/logo.png",
    "revision": "d399277c55733b0fa33b794d4c84505d"
  },
  {
    "url": "index.html",
    "revision": "6d0d5ad37832800442bef599623d3d2d"
  },
  {
    "url": "js/index.html",
    "revision": "55ee3651c46c7fa8aa97e5113a734ab0"
  },
  {
    "url": "js/vue.html",
    "revision": "b19cbf9e3984e2ed485f4c4f028cbb07"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
