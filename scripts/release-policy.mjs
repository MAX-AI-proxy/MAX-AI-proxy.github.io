import { createHash } from "node:crypto";

export function validateRelease(review, pdf) {
  if (review.approved !== true)
    throw new Error(
      "Die ausdrückliche Freigabe der öffentlichen PDF fehlt. Veröffentlichung gesperrt.",
    );
  if (
    review.owner !== "MAX-AI-proxy" ||
    review.url !== "https://max-ai-proxy.github.io/"
  )
    throw new Error("Falsches GitHub-Konto oder falsche Zieladresse.");
  if (!pdf || !pdf.subarray(0, 5).equals(Buffer.from("%PDF-")))
    throw new Error("Die freigegebene PDF fehlt oder ist ungültig.");
  const hash = createHash("sha256").update(pdf).digest("hex");
  if (hash !== review.sha256)
    throw new Error(
      "Die PDF stimmt nicht mit der geprüften und freigegebenen Version überein.",
    );
  return hash;
}
