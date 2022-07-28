const CHAIN_ID = require("../constants/chainIds.json")

module.exports = async function (taskArgs, hre) {
    const dstChainId = CHAIN_ID[taskArgs.targetNetwork]
    const tokenId = taskArgs.tokenId
    const LayerZeroNFT = await ethers.getContract("LayerZeroNFT")
    console.log(`[source] LayerZeroNFT.address: ${LayerZeroNFT.address}`)

    try {
        let tx = await (
            await LayerZeroNFT.traverseChains(
                dstChainId,
                tokenId,
                { value: ethers.utils.parseEther('1') }
            )
        ).wait()
        console.log(`✅ [${hre.network.name}] send(${dstChainId}, ${tokenId})`)
        console.log(` tx: ${tx.transactionHash}`)
    } catch (e) {
        if (e.error.message.includes("Message sender must own the OmnichainNFT.")) {
            console.log("*Message sender must own the OmnichainNFT.*")
        } else if (e.error.message.includes("This chain is not a trusted source source.")) {
            console.log("*This chain is not a trusted source source.*")
        } else {
            console.log(e)
        }
    }
}