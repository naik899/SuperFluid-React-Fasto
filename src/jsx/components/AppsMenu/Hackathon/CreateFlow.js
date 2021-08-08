import React, { Fragment, useEffect, useState } from "react";

import PageTitle from "../../../layouts/PageTitle";

import SuperfluidSDK from "@superfluid-finance/js-sdk";
import Web3 from "web3";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateFlow = () => {

  let initilize = false;
  const sf = new SuperfluidSDK.Framework({
    web3: new Web3(window.ethereum),
  });
  sf.initialize();

  let queueItems = [];
  queueItems = JSON.parse(localStorage.getItem("installmentQueue"));
  const [appfromlocalStorage, setAppfromlocalStorage] = useState(queueItems);


  let walletAddress = localStorage.getItem("walletAddress");
  let userAuthorised = false;

  // async function initSuperFluid() {
  //     

     

      async function installements(loanDetails) {
        console.log("here");
        // const carol = sf.user({
        //   address: walletAddress,
        //   token: "0x5943F705aBb6834Cad767e6E4bB258Bc48D9C947",
        // });
      
  
        // let result = await carol.flow({
        //   recipient: "0xA84A00B380a010D85136343451639D29c8aef0ab",
        //   flowRate: "000000000802469",
        // });

        
      
        let index = queueItems.findIndex(s=> s.loanId == loanDetails.loanId);
        if(index > -1)
        {
          queueItems.splice(index, 1); 
          localStorage.setItem("installmentQueue", JSON.stringify(queueItems));
        }
       

        

        toast.success("Loan Disbursement is successful, Installements will start from today", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
       
      }
      
    

  
  
  return (
    <Fragment>
      <PageTitle activeMenu="Create Flow" motherMenu="Transaction" />
      
      <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
    <div className="col-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Loan Applications</h4>
        </div>
        <div className="card-body">
          <div className="w-100 table-responsive">
            <div id="patientTable_basic_table" className="dataTables_wrapper">
              <table
                id="example5"
                className="display dataTable no-footer w-100"
                style={{ minWidth: 845 }}
                role="grid"
                aria-describedby="example5_info"
              >
                <thead>
                  <tr role="row">
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Patient ID: activate to sort column ascending"
                      style={{ width: 73 }}
                    >
                      Loan A/C #
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Date Check in: activate to sort column ascending"
                      style={{ width: 100 }}
                    >
                      Status
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Patient Name: activate to sort column ascending"
                      style={{ width: 100 }}
                    >
                      Action
                    </th>
                
                  </tr>
                </thead>
                <tbody>
                  {(() => {
                    if (queueItems) {
                      {
                        return( queueItems.map((numList, i) => (

                          <tr role="row" data-item={numList} className="odd" key={i}>
                            {<td key={i}>{numList.loanId}</td>}
                            {<td key={i}>{numList.status}</td>}
                            {<td key={i}><button id={numList.loanId} className="btn btn-primary" onClick={() => installements(numList)}>Disburse</button></td>}
                          </tr>
                        )))
                      }
                    }
                  })()}

                  
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </Fragment>
  );
};

export default CreateFlow;
