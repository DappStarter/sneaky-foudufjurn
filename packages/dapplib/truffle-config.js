require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name rebel saddle prosper install crew outer tourist'; 
let testAccounts = [
"0x2840978948d3109529c74b3ddf01ae7d3a20d2bfc91fa04462d2ee315dcefc54",
"0x445ff0f8fe6a39cfad45b74ea465f0fcf8924d9a2702b910d9f10f4a39b81216",
"0xcf0d63e0455834120773434137bcc98e63d532534cd18592b934e476c101a6b9",
"0x094d1d8ba98b12bfe6aed63ae806c31997c3af3dfc1b7054ee094ebfba118a8f",
"0x86d29cb808c4a4e7e6cb7e88cf1ac38e318be223e5d0787c9757ea3c1a3cf76e",
"0xe5a1f5ebb50982d56244440b7e486d2d46d800539a58720b918f93c32234a0b5",
"0xa3ccb41f30cb416c9d87057d375b0725e492f3b3fdf02d3e0e04675118e3945d",
"0x320d20327f4eae25801df9589662b4874e5671ad6a038ed16f9ab55d8716ce5f",
"0xb230cfc077ea77a5d5fdb9938dce501648ca2b68ea6c17f3d296b73ff718b023",
"0x3d154de80ecb473aba0c90ec524f8e1613755b142e9eefdf3c0c8bb951f11bd7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
