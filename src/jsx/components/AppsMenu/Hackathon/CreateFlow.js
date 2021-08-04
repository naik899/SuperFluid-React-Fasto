import React, { Fragment, useState, useEffect } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
//** Import Image */
import profile01 from "../../../../images/profile/1.jpg";
import profile02 from "../../../../images/profile/2.jpg";
import profile03 from "../../../../images/profile/3.jpg";
import profile04 from "../../../../images/profile/4.jpg";
import profile05 from "../../../../images/profile/5.jpg";
import profile06 from "../../../../images/profile/6.jpg";
import profile07 from "../../../../images/profile/7.jpg";
import profile08 from "../../../../images/profile/8.jpg";
import profile09 from "../../../../images/profile/9.jpg";
import profile from "../../../../images/profile/profile.png";
import PageTitle from "../../../layouts/PageTitle";

import SuperfluidSDK from "@superfluid-finance/js-sdk";
import Web3 from "web3";

const CreateFlow = () => {
	
    useEffect(() => {
        initSuperFluid();
      });
  
    async function initSuperFluid() {
        let walletAddress = "";
        alert("Hello");
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
          try {
            const details = await carol.details();
            console.log(details);
          } catch (event) {
            debugger;
          }
    
          await carol.flow({
            recipient: "0x696912BD2e03a17DCc5D7e28bC505eFCA8469843",
            flowRate: "385802469135802",
          });
    
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
