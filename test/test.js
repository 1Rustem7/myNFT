const { ethers } = require("hardhat");
const { assert, expect } = require("chai");

describe("NFT", function () {
  let noteFactory, contract;
  beforeEach(async function () {
    noteFactory = await ethers.getContractFactory("NFT");
    contract = await noteFactory.deploy();
  });

  
  it("Should revert if start mint without ETH", async function () {
    await expect(contract.safeMint("0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB")).to.be.revertedWith(
      "Please add valid amount of ETH"
    );
  });

  
  });