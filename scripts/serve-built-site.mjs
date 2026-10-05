import http from "node:http"
import { readFile, stat } from "node:fs/promises"
import path from "node:path"

const root = path.resolve("public")
const types = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".xml": "application/xml",
  ".woff2": "font/woff2",
}
http
  .createServer(async (request, response) => {
    try {
      let pathname = decodeURIComponent(
        new URL(request.url, "http://localhost").pathname,
      )
      const prefix = process.env.PLAYWRIGHT_BASE_PATH || ""
      if (
        prefix &&
        (pathname === prefix || pathname.startsWith(`${prefix}/`))
      ) {
        pathname = pathname.slice(prefix.length) || "/"
      }
      let file = path.resolve(root, `.${pathname}`)
      if (!file.startsWith(`${root}${path.sep}`) && file !== root) {
        response.writeHead(403).end()
        return
      }
      if ((await stat(file)).isDirectory()) file = path.join(file, "index.html")
      response.setHeader(
        "Content-Type",
        types[path.extname(file)] || "application/octet-stream",
      )
      response.end(await readFile(file))
    } catch {
      response.writeHead(404, { "Content-Type": "text/html" })
      response.end(await readFile(path.join(root, "404.html")))
    }
  })
  .listen(9000, "127.0.0.1")
