module.exports = async function (taskArgs, hre) {
    const LayerZeroNFT = await ethers.getContract("LayerZeroNFT")
    console.log(`[source] LayerZeroNFT.address: ${LayerZeroNFT.address}`)

    try {
        let tx = await (await LayerZeroNFT.setBaseURI("ipfs://QmZgoG3XXmLRsWbkWA6KKGCQPmWjVpuc5Mx2TjwZm7SVPu/")).wait()
        console.log(`✅ [${hre.network.name}] URI set`)
        console.log(` tx: ${tx.transactionHash}`)
        let onftTokenId = await ethers.provider.getTransactionReceipt(tx.transactionHash)
    } catch (e) {
            console.log(e)
    }
}