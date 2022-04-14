// const { assert } = require("chai");
// require("chai").use(require("chai-as-promised")).should();

const Kryptobirdz = artifacts.require("Kryptobirdz");

contract("Kryptobirdz", (accounts) => {
  let kryptobirdz;

  beforeEach(async () => {
    kryptobirdz = await Kryptobirdz.new();
  });

  it("contract has a name", async () => {
    const name = await kryptobirdz.name();
    assert.equal(name, "Kryptobird");
  });
  it("creat a new token", async () => {
    const hx = await kryptobirdz.safeMint(accounts[1], "birdz1");
    const totalsupply = await kryptobirdz.totalSupply();
    assert.equal(totalsupply, 1);
    assert.equal(await kryptobirdz.ownerOf(0), accounts[1]);
  });
});
