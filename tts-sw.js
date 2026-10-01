// 哈萨克语 TTS 模型资源的持久缓存 Service Worker。
// 仅拦截本站 /onnx/、/piper/ 的资源请求，采用 cache-first 策略，
// 使 onnxruntime wasm 等由库内部加载的大文件也只下载一次。
// 远程音色（ModelScope / HuggingFace）由 piperEngine.js 自行写入 Cache Storage，这里不重复缓存。

const CACHE_NAME = "kazakh-tts-sw-v2"

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
  if (url.origin !== self.location.origin) return false
  return url.pathname.includes("/onnx/") || url.pathname.includes("/piper/")
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
