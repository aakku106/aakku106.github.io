#!/usr/bin/env bun
"use strict";

/** Static preview server for the generated root, using Bun.serve. */

const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const PORT = Number(process.env.PORT || 8000);

Bun.serve({
  port: PORT,
  async fetch(request) {
    const url = new URL(request.url);

    let pathname;
    try {
      pathname = decodeURIComponent(url.pathname);
    } catch {
      return new Response("Bad Request", { status: 400 });
    }

    if (pathname.endsWith("/")) pathname += "index.html";

    const filePath = path.resolve(ROOT, `.${pathname}`);
    if (!filePath.startsWith(`${ROOT}${path.sep}`)) {
      return new Response("Forbidden", { status: 403 });
    }

    const file = Bun.file(filePath);
    if (!(await file.exists())) {
      return new Response("Not Found", { status: 404 });
    }

    return new Response(file);
  },
});

console.log(`Serving ${ROOT} at http://localhost:${PORT}`);
