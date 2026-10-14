import { readFileSync } from "node:fs";

const content = readFileSync(
  new URL("../src/content.ts", import.meta.url),
  "utf8",
);
const urls = [...new Set(content.match(/https:\/\/[^'"\s]+/g))];
const results = await Promise.allSettled(
  urls.map(async (url) => {
    const response = await fetch(url, {
      signal: AbortSignal.timeout(30000),
      redirect: "follow",
      headers: { "User-Agent": "Portfolio-Link-Check" },
    });
    if (!response.ok) throw new Error(`${response.status}: ${url}`);
    console.log(`${response.status} ${url}`);
  }),
);
const errors = results.filter((result) => result.status === "rejected");
for (const error of errors) console.error(error.reason.message);
if (errors.length) process.exitCode = 1;
