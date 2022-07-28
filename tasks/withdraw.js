
module.exports = async function (taskArgs, hre) {
    const LayerZeroNFT = await ethers.getContract("LayerZeroNFT")
    console.log(`[source] LayerZeroNFT.address: ${LayerZeroNFT.address}`)

    try {
        let tx = await LayerZeroNFT.withdraw()
        console.log(`✅ [${hre.network.name}] funds()`)
        console.log({tx})
    } catch (e) {
        console.log(e)
    }
}
