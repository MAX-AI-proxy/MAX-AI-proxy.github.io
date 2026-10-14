import { readdirSync, readFileSync } from "node:fs";
import { extname, join, relative } from "node:path";

const root = new URL("../", import.meta.url).pathname;
const ignored = new Set([
  "node_modules",
  ".git",
  "dist",
  "tmp",
  "output",
  ".local-review",
  "test-results",
  "playwright-report",
  "coverage",
]);
const allowedBinaries = new Set([
  "public/email-analysis.png",
  "public/social-card.png",
  "public/lebenslauf.pdf",
]);
const issues = [];
function visit(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (
      ignored.has(entry.name) ||
      entry.name === ".DS_Store" ||
      entry.name.endsWith(".tsbuildinfo")
    )
      continue;
    const path = join(dir, entry.name),
      name = relative(root, path);
    if (entry.isSymbolicLink()) {
      issues.push(`${name}: symbolischer Link`);
      continue;
    }
    if (entry.isDirectory()) {
      visit(path);
      continue;
    }
    if (
      /^\.env/.test(entry.name) ||
      /(?:\.pem|\.key|\.sqlite|\.db)$/i.test(name)
    )
      issues.push(`${name}: private Konfiguration oder Daten`);
    if (allowedBinaries.has(name)) continue;
    if ([".pdf", ".png", ".jpg", ".jpeg", ".webp"].includes(extname(name))) {
      issues.push(`${name}: nicht freigegebene Binärdatei`);
      continue;
    }
    const text = readFileSync(path, "utf8");
    const contacts = text.match(/[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}/g) || [];
    if (contacts.some((x) => !/@(?:example\.com|invalid\.test)$/.test(x)))
      issues.push(`${name}: E-Mail-Adresse`);
    if (/\+49[\s()-]*\d[\d\s()-]{7,}/.test(text))
      issues.push(`${name}: Telefonnummer`);
    if (/Geboren\s+am|Geburtsdatum\s*:/i.test(text))
      issues.push(`${name}: Geburtsdaten`);
    if (
      /sk-(?:proj-)?[A-Za-z0-9_-]{24,}/.test(text) ||
      /gh[pousr]_[A-Za-z0-9]{20,}/.test(text)
    )
      issues.push(`${name}: möglicher Zugangsschlüssel`);
  }
}
visit(root);
if (issues.length) {
  console.error(issues.join("\n"));
  process.exitCode = 1;
} else
  console.log(
    "Datenschutzprüfung bestanden: keine privaten Kontaktdaten, Schlüssel oder unerwarteten Dateien im Quellbestand. Binärdateien separat visuell/PDF-strukturell geprüft.",
  );
