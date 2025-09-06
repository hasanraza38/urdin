import { expect, test } from "vitest";
import { translate } from "../src/index";

test("basic urdu to roman", () => {
  expect(translate("میرا نام حسن ہے")).toBe("mera nam hasan hai");
});
