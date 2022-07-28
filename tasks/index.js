// all tasks
task("LayerZeroNftSetTrustedSource", "setTrustedSource(chainId, sourceAddr) to allow the local contract to receive messages from known source contracts",
    require("./LayerZeroNftSetTrustedSource"))
    .addParam("targetNetwork", "the target network to let this instance receive messages from")

task("LayerZeroNftMint", "mint() mint l0nft", require("./LayerZeroNftMint"))

task("startMint", "setPublicSaleStartTime(newTime)", require("./startMint"))

task("setBaseURI", "setBaseURI(_baseTokenURI)", require("./setBaseURI"))

task("LayerZeroNftSend", "send an ONFT nftId from one chain to another", require("./LayerZeroNftSend"))
    .addParam("targetNetwork", "the chainId to transfer to")
    .addParam("tokenId", "the tokenId of ONFT")

task("withdraw", "get contract funds", require("./withdraw"))

// task("whiteListed", "set whitlisted user", require("./whiteListed"))
// task("whiteListedMint", "whitelist mint", require("./whiteListMint"))

//task("startWhiteListMint", "startWhiteListMint", require("./startWhiteListMint"))

task("reveal", "reveal", require("./reveal"))

