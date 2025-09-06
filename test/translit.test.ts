import { expect, test } from "vitest";
import { transliterate } from "../src/index";

test("basic urdu to roman", () => {
  expect(transliterate("میرا نام حسن ہے")).toBe("mera nam hasan hai");
});
