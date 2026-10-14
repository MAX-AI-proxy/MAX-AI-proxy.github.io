import test from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { validateRelease } from "./release-policy.mjs";

const pdf = Buffer.from("%PDF-fixture");
const review = {
  approved: true,
  owner: "MAX-AI-proxy",
  url: "https://max-ai-proxy.github.io/",
  sha256: createHash("sha256").update(pdf).digest("hex"),
};
test("Ohne ausdrückliche Freigabe darf keine Veröffentlichung erfolgen", () => {
  assert.throws(
    () => validateRelease({ ...review, approved: false }, pdf),
    /Freigabe/,
  );
  assert.throws(
    () => validateRelease({ ...review, approved: undefined }, pdf),
    /Freigabe/,
  );
});
test("Nachträgliche Änderungen der PDF verhindern die Veröffentlichung", () => {
  assert.throws(
    () => validateRelease(review, Buffer.from("%PDF-changed")),
    /überein/,
  );
});
test("Falsches Konto und falsche Zieladresse werden abgelehnt", () => {
  assert.throws(
    () => validateRelease({ ...review, owner: "other" }, pdf),
    /GitHub/,
  );
  assert.throws(
    () => validateRelease({ ...review, url: "https://other.invalid/" }, pdf),
    /GitHub/,
  );
});
test("Eine fehlende oder ungültige PDF wird abgelehnt", () => {
  assert.throws(() => validateRelease(review), /PDF/);
  assert.throws(() => validateRelease(review, Buffer.from("not a pdf")), /PDF/);
});
test("Nur die unveränderte freigegebene PDF besteht die Prüfung", () => {
  assert.equal(validateRelease(review, pdf), review.sha256);
});
