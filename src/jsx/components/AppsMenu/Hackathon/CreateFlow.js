import React, { Fragment, useEffect } from "react";

import PageTitle from "../../../layouts/PageTitle";

import SuperfluidSDK from "@superfluid-finance/js-sdk";
import Web3 from "web3";

const CreateFlow = () => {
	
    useEffect(() => {
        initSuperFluid();
      });
  
    async function initSuperFluid() {
        let walletAddress = "";
        async function initialisation() {
          window.init = true;
          const sf = new SuperfluidSDK.Framework({
            web3: new Web3(window.ethereum),
          });
    
          await sf.initialize();
          const walletAddress1 = await window.ethereum.request({
            method: "eth_requestAccounts",
            params: [
              {
                eth_accounts: {},
              },
            ],
          });
          walletAddress = walletAddress1[0];
    
          const carol = sf.user({
            address: walletAddress,
            token: "0x5943F705aBb6834Cad767e6E4bB258Bc48D9C947",
          });
        
    
          let result = await carol.flow({
            recipient: "0x696912BD2e03a17DCc5D7e28bC505eFCA8469843",
            flowRate: "000000000802469",
          });

          console.log(result);
    
          const details = await carol.details();
          console.log(details);
        }
        await initialisation()
      }

    
  
  return (
    <Fragment>
      <PageTitle activeMenu="Create Flow" motherMenu="Transaction" />

    
    </Fragment>
  );
};

export default CreateFlow;
