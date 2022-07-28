module.exports = async function (taskArgs, hre) {
    const LayerZeroNFT = await ethers.getContract("LayerZeroNFT")
    console.log(`[source] LayerZeroNFT.address: ${LayerZeroNFT.address}`)

    try {
        let tx = await (await LayerZeroNFT.reveal()).wait()
        console.log(`✅ [${hre.network.name}] is reveal ()`)
        console.log(` tx: ${tx.transactionHash}`)
    } catch (e) {
        console.log(e)
    }
}