import { BigNumber } from "ethers";
import { arrayify } from "ethers/lib/utils";
const{ ethers }  = require("hardhat");
const config = require("../../config.json");


async function main() {
    let path = "m/44'/60'/1'/0/0";
    var publicKeyList = new Array(20);
    var privateKeyList = new Array;
    var privateKeyList1 = new Array;

    for(var i=0; i<1; i++) {
        let newWallet = ethers.Wallet.createRandom();
        publicKeyList[i] = newWallet.address;
        privateKeyList[i] = newWallet.privateKey;
        //privateKeyList1[i] = newWallet.mnemonic.phrase;
    }

    console.log(publicKeyList);
    console.log("===============================================");
    console.log(privateKeyList);
    //console.log(privateKeyList1);

}


main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
