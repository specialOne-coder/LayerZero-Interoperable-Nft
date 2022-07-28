const hre = require("hardhat");

const LZ_ENDPOINTS = require('./layerzeroEndpoints.json')
const ONFT_ARGS = require("./onftArgs.json");

const lzEndpointAddress = LZ_ENDPOINTS[hre.network.name];
const onftArgs = ONFT_ARGS[hre.network.name];

module.exports = [
    "ipfs://QmYNFecm44RXRr1zicJd3tkt8bDVsQGv1Ytcdy7V1QH4w6/",
    "ipfs://QmR9T4ZBLtZeu446S9gRUArvQMPGeXyo9DztMZPTVzjtZ1",
    lzEndpointAddress,
    onftArgs.startId,
    onftArgs.maxSupply
]