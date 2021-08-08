import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import validate from "./validate";
import renderField from "./renderField";
import SuperfluidSDK from "@superfluid-finance/js-sdk";
import Web3 from "web3";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loan  from  "../../../../contracts/Loan.json";

const applications = JSON.parse(localStorage.getItem("loanApplications"));
const walletAddress = (localStorage.getItem("walletAddress"));
let loanApplication = [];
if(applications != null )
{
 
  loanApplication = applications
  .filter((d) => d.borrower == walletAddress)
  .map((d) => d.loanId);

}

function ValueSelected()
{
  console.log("selected");
}

const renderColorSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select className="form-control" {...input}>
      <option value="">Select a Loan Account</option>
      {loanApplication.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

const PreClosurePage = props => {
  const { handleSubmit } = props;

  // let outstandingAmount = document.getElementsByName("amount")[0];
  // outstandingAmount.disabled = true;

  
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
		<form onSubmit={handleSubmit}>
			<div className="validate-redux-form row">


                <div className="col-sm-8">
                    <div className="form-group">
                        <Field name="loanId" onselect={() => ValueSelected()} component={renderColorSelector} />
                    </div>
                    
                </div>
                <div className="col-sm-4">
                
                    
                </div>

          
				{/* <div className="col-sm-8">
					<Field name="amount" type="text" component={renderField} label="Outstanding amount in ETH"/>
				</div>	 */}
				<div className="col-sm-4">
                    
                    
                </div>

               



				

				<div className="col-sm-12 mt-4 ">
					<button  type="submit" className="next btn btn-primary"> Submit</button>
				</div>
			</div>
		</form>
  
    </>
  );
};

export default compose(
	connect((state, props) => {

    return {
		initialValues: {
		
      

		}
    };
  }),
  reduxForm({
    form: "wizard", //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
	onSubmit: async () =>{
		//apply for loan
		console.log("Pre Closure");

    let loanId = document.getElementsByName("loanId")[0].value;
    let loanDetails = applications.filter(s=> s.loanId == loanId);
    
    
  //   let web3 = new Web3(Web3.givenProvider);
  //   let walletAddress =  localStorage.getItem('walletAddress');
  //   const coinContract = new web3.eth.Contract(Loan.abi, loanDetails[0].contractAddress);

 

  //  let tokenId = "0x5943F705aBb6834Cad767e6E4bB258Bc48D9C947";
  //   const transactionParameters = {
  //     to: loanDetails[0].lender, // Required except during contract publications.
  //     from: walletAddress, // must match user's active address.
  //     gas: '0x76c0', // 30400
  //     gasPrice: '0x9184e72a000', // 10000000000000
  //     value: "2441406250", //2441406250
  //     data: coinContract.methods
  //       .preClosure()
  //       .encodeABI(),
  //   };

  //   const txHash = await window.ethereum.request({
  //     method: "eth_sendTransaction",
  //     params: [transactionParameters],
  //   });



    const sf = new SuperfluidSDK.Framework({
      web3: new Web3(window.ethereum),
    });
    await sf.initialize();


    const carol = sf.user({
      address: walletAddress,
      token: "0x5943F705aBb6834Cad767e6E4bB258Bc48D9C947",
    });

    await carol.flow({
      recipient: loanDetails[0].lender,
      flowRate: "0",
    });

    loanDetails[0].outStanding = 0;
    let index = applications.findIndex(s=> s.loanId == loanDetails[0].loanId);
    if(index > -1)
    {
      applications.splice(index, 1); 
      localStorage.setItem("loanApplications", JSON.stringify(applications));
    }
  
   },
    enableReinitialize: true
  })
)(PreClosurePage);