require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn promote just clock breeze stuff'; 
let testAccounts = [
"0xca3a5206a86a58a34230860229030a47b52b38e19803d05d0f7ec119bad42b90",
"0x5b11dfd30cd34e1814b928901d8f7a0238fdcbff00eb1fe7698ad4a1c40c425b",
"0x7d2f3f665b12fa74710b31f262b9afadaef173a4a5c68f0977627a9545fe031b",
"0xd44005f24524fffa6b1b7cb6016833a84a22273b5241627b79b3635c1a6a61be",
"0xda95ff052e5433e69520b4d97979d1da36f095538456c93b7865d29deed9815a",
"0x11e78883b2c9ca15967080e77473c15caa6d755b3f06870670756062ca2bb153",
"0xb53f2e7aa7e457773aad190caa8a780bb6a4adbc7594dc2ec19c716d458d71ec",
"0x05ab9d2df13439356431854a2ffae8e09095292e0fe591f5dd6a2c50a3af54c2",
"0x32cd7a7af41c961461b6def4c5973468a5b6ec579e9138fda1b1ebd824f52c38",
"0x2b2e577723e4dd06ab22bc696bfd01dfad03c8d1dad8024368ca3f89a7b3b02f"
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
            version: '^0.8.0'
        }
    }
};

