const config = require("../src/config");
const expect = require("chai").expect;

describe("configuration", () => {
  it("must have production enabled", () => {
    expect(config.isProd).to.be.equal(true);
  });
});
