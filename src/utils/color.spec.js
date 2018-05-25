import { rgba } from "./color";
import Color from "color";

describe("color", () => {
    it("rgba", () => {
        expect(rgba("#000", 0.96)).toBe("rgba(0, 0, 0, 0.96)");
    });
});
