const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const requiredFiles = [
  "index.html",
  "README.md",
  "CHANGELOG.md",
  "MAINTENANCE.md",
  "LICENSE",
  "package.json",
  "vercel.json",
  ".github/workflows/ci.yml",
];

const missing = requiredFiles.filter((file) => !fs.existsSync(path.join(root, file)));
if (missing.length > 0) {
  console.error(`missing_files=${missing.join(",")}`);
  process.exit(1);
}

const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const requiredHtmlSnippets = [
  '<html lang="zh-CN">',
  '<meta charset="UTF-8">',
  "<title>材料加工 · 记忆宫殿</title>",
  "知识卡片",
  "翻牌自检",
  "对比",
  "自测",
  "难点",
  "铸造基础",
  "锻压",
  "机械加工",
];

const missingHtmlSnippets = requiredHtmlSnippets.filter((snippet) => !html.includes(snippet));
if (missingHtmlSnippets.length > 0) {
  console.error(`missing_html_snippets=${missingHtmlSnippets.join(",")}`);
  process.exit(1);
}

const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");
const requiredReadmeSnippets = [
  "https://memory-palace-five.vercel.app",
  "## Features",
  "## Checks",
  "## Maintenance",
  "## Related Work",
  "MIT",
];

const missingReadmeSnippets = requiredReadmeSnippets.filter((snippet) => !readme.includes(snippet));
if (missingReadmeSnippets.length > 0) {
  console.error(`missing_readme_snippets=${missingReadmeSnippets.join(",")}`);
  process.exit(1);
}

console.log("public_page_ok=true");
