module.exports = async function (taskArgs, hre) {
    const LayerZeroNFT = await ethers.getContract("LayerZeroNFT")
    console.log(`[source] LayerZeroNFT.address: ${LayerZeroNFT.address}`)

    try {
        let tx = await (await LayerZeroNFT.startMint()).wait()
        console.log(`✅ [${hre.network.name}] mint start()`)
        console.log(` tx: ${tx.transactionHash}`)
    } catch (e) {
        console.log(e)
    }
}