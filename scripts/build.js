#!/usr/bin/env node
"use strict";

/**
 * Build the deployable site at the repo root from src/.
 *
 * - HTML, CSS, and JS are minified.
 * - Images and other assets are copied byte-for-byte.
 * - SCSS sources and source maps stay in src/ and are not copied.
 * - Non-code root files (README, CNAME, robots.txt, sitemap.xml, etc.) are untouched.
 */

const fs = require("fs");
const path = require("path");
const { minify: minifyHtml } = require("html-minifier-terser");
const { minify: minifyJs } = require("terser");
const CleanCSS = require("clean-css");

const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "src");

const SOURCE_ONLY_EXTENSIONS = new Set([".scss", ".sass", ".map"]);
const IGNORED_NAMES = new Set([".DS_Store"]);

function collectFiles(directory) {
  const files = [];

  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (IGNORED_NAMES.has(entry.name)) continue;

    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectFiles(fullPath));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
}

async function transform(file) {
  const extension = path.extname(file).toLowerCase();
  const source = fs.readFileSync(file, "utf8");

  if (extension === ".html") {
    return minifyHtml(source, {
      collapseWhitespace: true,
      removeComments: true,
    });
  }

  if (extension === ".js") {
    const result = await minifyJs(source, {
      compress: true,
      mangle: true,
      format: { comments: false },
    });

    if (typeof result.code !== "string") {
      throw new Error(
        `Terser produced no output for ${path.relative(ROOT, file)}`,
      );
    }
    return result.code;
  }

  if (extension === ".css") {
    // The CSS is generated from SCSS; never ship a source-map pointer to a file
    // that does not exist in the deploy output.
    const withoutSourceMap = source.replace(
      /\/\*#\s*sourceMappingURL=[^*]*\*\//g,
      "",
    );
    const result = new CleanCSS({ rebase: false }).minify(withoutSourceMap);

    if (result.errors.length > 0) {
      throw new Error(
        `clean-css failed for ${path.relative(ROOT, file)}: ${result.errors.join("; ")}`,
      );
    }
    return result.styles;
  }

  return null;
}

async function build() {
  if (!fs.existsSync(path.join(SRC, "index.html"))) {
    throw new Error("src/index.html not found; nothing to build");
  }

  // Replace the generated top-level entries so stale files cannot survive.
  for (const entry of fs.readdirSync(SRC, { withFileTypes: true })) {
    if (IGNORED_NAMES.has(entry.name)) continue;
    fs.rmSync(path.join(ROOT, entry.name), { recursive: true, force: true });
  }

  let minified = 0;
  let copied = 0;

  for (const file of collectFiles(SRC)) {
    const relativePath = path.relative(SRC, file);
    if (SOURCE_ONLY_EXTENSIONS.has(path.extname(file).toLowerCase())) continue;

    const outputPath = path.join(ROOT, relativePath);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });

    const output = await transform(file);
    if (output === null) {
      fs.copyFileSync(file, outputPath);
      copied += 1;
    } else {
      fs.writeFileSync(outputPath, output);
      minified += 1;
    }
  }

  console.log(
    `Built ${minified} minified files and copied ${copied} assets from src/ to the repo root.`,
  );
}

build().catch((error) => {
  console.error(error.message || error);
  process.exitCode = 1;
});
