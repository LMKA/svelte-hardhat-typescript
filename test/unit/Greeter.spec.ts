import { expect } from "chai";
import { ethers } from "hardhat";

describe("Greeter", () => {
  it("Should return the new greeting once it's changed", async () => {
    const GreeterFactory = await ethers.getContractFactory("Greeter");
    const greeter = await GreeterFactory.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Bonjour, tout le monde!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Bonjour, tout le monde!");
  });
});
