import React, { useState} from "react";
import Web3 from "web3";
import LoanRequest from "../../../contracts/LoanRequest.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SuperfluidSDK  from "@superfluid-finance/js-sdk";
// import data from "./tableData.js";

const PatientTable = () => {
  let applications = [];
  applications = JSON.parse(localStorage.getItem("loanApplications"));
  const [appfromlocalStorage, setAppfromlocalStorage] = useState(applications);

 

  async function lendMoney(details) {
    let web3 = new Web3(Web3.givenProvider);
		let walletAddress =  localStorage.getItem('walletAddress');
		const lendContract = new web3.eth.Contract(LoanRequest.abi, details.contractAddress);

    let tokenId = "0x5943F705aBb6834Cad767e6E4bB258Bc48D9C947";
    const transactionParameters = {
      to: details.borrower, // Required except during contract publications.
      from: walletAddress, // must match user's active address.
      gas: '0x76c0', // 30400
      gasPrice: '0x9184e72a000', // 10000000000000
     // value: (parseFloat(details.amount) * Math.pow(10, 18)).toString(), //2441406250
     value: "1220703125000000",
      data: lendContract.methods
        .lendEther()
        .encodeABI(),
    };
  
    try {
    
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });


      details.status = "Disbursed";
      details.lender = walletAddress;
      details.outStanding = 1.57;

      let index = applications.findIndex(s=> s.loanId == details.loanId);
      if(index > -1)
      {
        applications.splice(index, 1); 
        localStorage.setItem("loanApplications", JSON.stringify(applications));

        applications.push(details);
        localStorage.setItem("loanApplications", JSON.stringify(applications));
      }
      

      let queueItem = [];
      queueItem = JSON.parse(localStorage.getItem("installmentQueue"));
      if(queueItem == null)
        queueItem= [];

      let queueItemObject = { "borrower": details.borrower, "loanId": details.loanId, "status": "start" };
      queueItem.push(queueItemObject);
      localStorage.setItem("installmentQueue", JSON.stringify(queueItem));
      
      toast.success("Transaction is successful", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});

     

      
    } catch (error) {
      
      toast.error("Failed with error: " + error.message, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});
    }
    
  }

  return (
    <>
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
                      Name
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
                      Loan Amount
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Doctor Assgined: activate to sort column ascending"
                      style={{ width: 120 }}
                    >
                      Loan Tenure
                    </th>

                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Doctor Assgined: activate to sort column ascending"
                      style={{ width: 120 }}
                    >
                      Loan Status
                    </th>

                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Doctor Assgined: activate to sort column ascending"
                      style={{ width: 120 }}
                    >
                      Lend Money
                    </th>

                   
                    
                  </tr>
                </thead>
                <tbody>
                  {(() => {
                    if (applications) {
                      {
                        return( applications.map((numList, i) => (

                          <tr role="row" data-item={numList} className="odd" key={i}>
                            {<td key={i}>{numList.loanId}</td>}
                            {<td key={i}>{numList.name}</td>}

                            {<td key={i}>{numList.amount}</td>}
                            {<td key={i}>{numList.loanTenure}</td>}
                            {<td key={i}>{numList.status}</td>}
                            {<td key={i}><button id={numList.loanId} className="btn btn-primary" onClick={() => lendMoney(numList)}>Lend Money</button></td>}
                           
                          </tr>
                        )))
                      }
                    }
                  })()}

                  {/* <tr role="row"  >
                   
             

                    <td >#P-00001</td>
                    <td>26/02/2020, 12:42 AM</td>
                    <td>Tiger Nixon</td>
                    <td>Dr. Cedric</td>
                    <td>Cold &amp; Flu</td>
                    <td>
                      <span className="badge light badge-danger">
                        <i className="fa fa-circle text-danger mr-1" />
                        New Patient
                      </span>
                    </td>
                    <td>AB-001</td>
                    <td>
                      <Dropdown className="dropdown ml-auto text-right">
                        <Dropdown.Toggle
                          variant=""
                          className="btn-link i-false"
                          data-toggle="dropdown"
                        >
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <circle fill="#000000" cx={5} cy={12} r={2} />
                              <circle fill="#000000" cx={12} cy={12} r={2} />
                              <circle fill="#000000" cx={19} cy={12} r={2} />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item>Accept Patient</Dropdown.Item>
                          <Dropdown.Item>Reject Order</Dropdown.Item>
                          <Dropdown.Item>View Details</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PatientTable;
