
const LZ_ENDPOINTS = require('../constants/layerzeroEndpoints.json')
const LZ_ARGS = require("../constants/layerZeroArgs.json");

module.exports = async function ({ deployments, getNamedAccounts }) {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    console.log(`>>> your address: ${deployer}`)


    const lzEndpointAddress = LZ_ENDPOINTS[hre.network.name];
    const layerZeroArgs = LZ_ARGS[hre.network.name];
    console.log({ layerZeroArgs })
    console.log(`[${hre.network.name}] Endpoint Address: ${lzEndpointAddress}`)

    await deploy("LayerZeroNFT", {
        from: deployer,
        args: ["ipfs://QmYNFecm44RXRr1zicJd3tkt8bDVsQGv1Ytcdy7V1QH4w6/",
            "ipfs://QmR9T4ZBLtZeu446S9gRUArvQMPGeXyo9DztMZPTVzjtZ1",
            lzEndpointAddress,
            layerZeroArgs.startId,
            layerZeroArgs.maxSupply
        ],
        log: true,
        waitConfirmations: 1,
    })

}

module.exports.tags = ["LayerZeroNFT"];
