const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NftCollection", function () {
  let NftCollection, nft, owner, addr1, addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    const NftCollectionFactory = await ethers.getContractFactory("NftCollection");
    nft = await NftCollectionFactory.deploy();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await nft.owner()).to.equal(owner.address);
    });
    it("Should return the correct max supply", async function () {
      expect(await nft.MAX_SUPPLY()).to.equal(100);
    });
  });

  describe("Minting", function () {
    it("Should allow owner to mint", async function () {
      await nft.safeMint(owner.address, "uri");
      expect(await nft.totalSupply()).to.equal(1);
      expect(await nft.ownerOf(0)).to.equal(owner.address);
    });
    it("Should fail if non-owner tries to mint", async function () {
      await expect(
        nft.connect(addr1).safeMint(addr1.address, "uri")
      ).to.be.revertedWithCustomError(nft, "OwnableUnauthorizedAccount");
    });
  });

  describe("Transfers", function () {
    it("Should transfer tokens correctly", async function () {
      await nft.safeMint(owner.address, "uri");
      await nft.transferFrom(owner.address, addr1.address, 0);
      expect(await nft.ownerOf(0)).to.equal(addr1.address);
    });
  });
});