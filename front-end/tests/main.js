import App from "@/src/main";
import { expect } from "chai";

describe("configuration", () => {
  it("must have production enabled", () => {
    expect(App.isProd).to.be.equal(true);
  });
});
