//How our smart contract is going to be deployed

var MyToken = artifacts.require("MyToken.sol");//which token we require

//funtion that call through call this deloy is asyn fun

module.exports = async function(deployer) {
    await deployer.deploy(MyToken,1000000);
}
