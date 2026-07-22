const http = require("http");
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const port = Number(process.env.PORT || 5175);
const host = process.env.HOST || "0.0.0.0";

const types = {
  ".html": "text/html;charset=utf-8",
  ".css": "text/css;charset=utf-8",
  ".js": "application/javascript;charset=utf-8",
  ".json": "application/json;charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".pdf": "application/pdf"
};

const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url, `http://${req.headers.host || host}`);
  const url = decodeURIComponent(requestUrl.pathname);
  const target = path.normalize(path.join(root, url === "/" ? "index.html" : url));

  if (!target.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.stat(target, (error, stat) => {
    if (error || !stat.isFile()) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    const headers = {
      "Content-Type": types[path.extname(target).toLowerCase()] || "application/octet-stream",
      "Accept-Ranges": "bytes"
    };

    if (requestUrl.searchParams.get("download") === "1") {
      headers["Content-Disposition"] = `attachment; filename="${encodeURIComponent(path.basename(target))}"`;
    }

    const range = req.headers.range;
    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = Number.parseInt(parts[0], 10);
      const end = parts[1] ? Number.parseInt(parts[1], 10) : stat.size - 1;

      if (Number.isNaN(start) || Number.isNaN(end) || start >= stat.size || end >= stat.size) {
        res.writeHead(416, { "Content-Range": `bytes */${stat.size}` });
        res.end();
        return;
      }

      res.writeHead(206, {
        ...headers,
        "Content-Range": `bytes ${start}-${end}/${stat.size}`,
        "Content-Length": end - start + 1
      });
      fs.createReadStream(target, { start, end }).pipe(res);
      return;
    }

    headers["Content-Length"] = stat.size;
    res.writeHead(200, headers);
    fs.createReadStream(target).pipe(res);
  });
});

server.listen(port, host, () => {
  console.log(`Portfolio server running at http://${host}:${port}/`);
});
