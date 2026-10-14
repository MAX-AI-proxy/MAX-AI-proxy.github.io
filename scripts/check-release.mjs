import { readFileSync } from "node:fs";
import { validateRelease } from "./release-policy.mjs";

try {
  const review = JSON.parse(
    readFileSync(new URL("../docs/cv-review.json", import.meta.url), "utf8"),
  );
  // Check consent before reading or including any PDF.
  if (!review.approved) validateRelease(review);
  const pdf = readFileSync(
    new URL("../public/lebenslauf.pdf", import.meta.url),
  );
  console.log(
    "Veröffentlichung freigegeben. PDF SHA-256:",
    validateRelease(review, pdf),
  );
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
