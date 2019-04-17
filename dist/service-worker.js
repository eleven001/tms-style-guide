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
    "revision": "2325d7fc772efdefa3d50ca044ab1dbb"
  },
  {
    "url": "assets/css/0.styles.4c88b043.css",
    "revision": "a23527200aae9924a7c38d351c4590df"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.781fb45f.js",
    "revision": "ff40d09ceaa5c61244d386e5cce1f9c5"
  },
  {
    "url": "assets/js/2.922974e1.js",
    "revision": "cd2c45b2c122f743fa69d53b46133aad"
  },
  {
    "url": "assets/js/3.316fc3f9.js",
    "revision": "bf07708fa035a2434aaeba07cc4562e6"
  },
  {
    "url": "assets/js/4.3cb97118.js",
    "revision": "08a954b1ae1d15469d43b9935d0bcf02"
  },
  {
    "url": "assets/js/5.03feed1a.js",
    "revision": "9e5a5aa4349990fa8b8b675a01531005"
  },
  {
    "url": "assets/js/6.0372fbf3.js",
    "revision": "11c9270edac6b0eafc14a3913ca4b0d8"
  },
  {
    "url": "assets/js/7.586ccadb.js",
    "revision": "6a39de7af2176e9ed74f82d3d6a6571d"
  },
  {
    "url": "assets/js/8.8a406180.js",
    "revision": "fe7f54be59ad962ed1f506b509bc6f44"
  },
  {
    "url": "assets/js/9.f0936f80.js",
    "revision": "1a4a1c14153c8d6a579f85cd99f8171e"
  },
  {
    "url": "assets/js/app.f24c7d18.js",
    "revision": "c18042b028f4121604b16fd565c38ab2"
  },
  {
    "url": "css/index.html",
    "revision": "a14dba1ca79f0c84fe710b9970b7c3ca"
  },
  {
    "url": "git/index.html",
    "revision": "9d94476763351b12e5e4cbef1f26824f"
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
    "revision": "a237fcf738b4a13e3132f97c519a5f26"
  },
  {
    "url": "js/index.html",
    "revision": "bf7ab69d57e0e9fac0d0fc53348ca0e0"
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
