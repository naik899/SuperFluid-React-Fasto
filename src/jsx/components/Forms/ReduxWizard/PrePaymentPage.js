import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import validate from "./validate";
import renderField from "./renderField";
import Web3 from "web3";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loan  from "../../../../contracts/Loan.json";


const applications = JSON.parse(localStorage.getItem("loanApplications"));
const walletAddress = (localStorage.getItem("walletAddress"));
let loanApplication = [];
if(applications != null )
{
 
  loanApplication = applications
  .filter((d) => d.borrower == walletAddress)
  .map((d) => d.loanId);

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

const PrePaymentPage = props => {
  const { handleSubmit } = props;
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
                        <Field name="loanSelector" component={renderColorSelector} />
                    </div>
                    
                </div>
                <div className="col-sm-4">
                    
                    
                </div>

          
				<div className="col-sm-8">
					<Field name="amount" type="text" component={renderField} label="Partial Payment Amount"/>
				</div>	
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
		
			amount: "0.163"

		}
    };
  }),
  reduxForm({
    form: "wizard", //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
	onSubmit:async () =>{
		//apply for loan
		
    let loanId = document.getElementsByName("loanSelector")[0].value;
    let loanAmount = document.getElementsByName("amount")[0].value;

    let applications = [];
    applications = JSON.parse(localStorage.getItem("loanApplications"));

    let details = applications.filter(s=> s.loanId == loanId);
    details = details[0];


    let web3 = new Web3(Web3.givenProvider);
		let walletAddress =  localStorage.getItem('walletAddress');
		const lendContract = new web3.eth.Contract(Loan.abi, details.contractAddress);


    //reduce payoff amount  
    let tokenId = "0x5943F705aBb6834Cad767e6E4bB258Bc48D9C947";
    const transactionParameters = {
      to: details.lender, // Required except during contract publications.
      from: walletAddress, // must match user's active address.
      gas: '0x76c0', // 30400
      gasPrice: '0x9184e72a000', // 10000000000000
      value: '244140625000000', //2441406250
      data: lendContract.methods
        .partPayment("1130000000000000000",60, 2441406250)
        .encodeABI(),
    };
  
    try {
    
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });


      details.outStanding = details.outStanding - 0.163;
      let index = applications.findIndex(s=> s.loanId == details.loanId);
      if(index > -1)
      {
        applications.splice(index, 1); 
        localStorage.setItem("loanApplications", JSON.stringify(applications));

        applications.push(details);
        localStorage.setItem("loanApplications", JSON.stringify(applications));
      }
      
      
      

      
      
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
	},
    enableReinitialize: true
  })
)(PrePaymentPage);