// 哈萨克语 TTS 模型资源的持久缓存 Service Worker。
// 仅拦截 /onnx/、/piper/ 以及 HuggingFace piper-voices 的资源请求，
// 采用 cache-first 策略，使 onnxruntime wasm 等由库内部加载的大文件也只下载一次。

const CACHE_NAME = "kazakh-tts-sw-v1"

self.addEventListener("install", () => {
  self.skipWaiting()
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(
        keys
          .filter((key) => key.startsWith("kazakh-tts-sw") && key !== CACHE_NAME)
          .map((key) => caches.delete(key)),
      )
      await self.clients.claim()
    })(),
  )
})

function shouldCache(url) {
  if (url.origin === self.location.origin) {
    return url.pathname.includes("/onnx/") || url.pathname.includes("/piper/")
  }
  return url.hostname.endsWith("huggingface.co") && url.pathname.includes("/piper-voices/")
}

self.addEventListener("fetch", (event) => {
  const { request } = event

  if (request.method !== "GET" || request.headers.has("range")) return

  let url
  try {
    url = new URL(request.url)
  } catch (error) {
    return
  }

  if (!shouldCache(url)) return

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME)
      const cached = await cache.match(request)
      if (cached) return cached

      const response = await fetch(request)
      if (response && response.status === 200) {
        try {
          await cache.put(request, response.clone())
        } catch (error) {
          // 忽略缓存写入失败（存储受限等）。
        }
      }
      return response
    })(),
  )
})
