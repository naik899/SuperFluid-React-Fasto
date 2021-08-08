import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import validate from "./validate";
import renderField from "./renderField";
import Web3 from "web3";
import LoanRequest from "../../../../contracts/LoanRequest.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const WizardFormFirstPage = props => {
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
				<div className="col-sm-6">
					<Field name="fullName" type="text" component={renderField} label="Full Name"/>
				</div>	
				<div className="col-sm-6">
					<Field name="email"  type="text" component={renderField} label="Email"/>
				</div>	


				<div className="col-sm-6">
					<Field name="loanAmount" type="text" component={renderField} label="Loan Amount in ETH"/>
				</div>	
				<div className="col-sm-6">
					<Field name="guarantorMobileNumber"  type="number" component={renderField} label="Guarantor Mobile number"/>
				</div>	
				

				<div className="col-sm-6">
					<Field name="panCard" type="text" component={renderField} label="Pan Card"/>
				</div>	
				<div className="col-sm-6">
				<Field name="uid"  type="number" component={renderField} label="Aadhar Card"/>
				</div>	

			
				<div className="col-sm-6">
				<Field name="loanTenure"  type="number" component={renderField} label="Loan Tenure in Months"/>
				</div>

				<div className="col-sm-6">
				<Field name="installment"  type="number" component={renderField} label="Installment Frequency in days"/>
				</div>

				<div className="col-sm-12">
				<label class="font-w600">Loan Purpose</label>
					<Field name="loanPurpose" className="form-control" component="textarea" label="Loan Purpose"/>
				</div>	

				

				<div className="col-sm-6">
				<br/>
				  <Field
					name="employed"
					id="employed"
					component="input"
					type="checkbox"
				  />
					<label className="ml-2 " htmlFor="employed">I Agree to the terms & conditions</label>
			</div>


				<div className="col-sm-12 mt-4 ">
					<button id="applyloan" type="submit" className="next btn btn-primary"> Apply For Loan</button>
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
			fullName: "Gyan Lakshmi",
			email: "naik899.crypto@gmail.com",
			panCard: "AXXXXXXXXXX",
			uid: 172117211721,
			loanAmount: "1.301",
			guarantorMobileNumber: 9999999999,
			loanPurpose: "test",
			loanTenure: 60,
			installment: 30,
			employed: true

		}
    };
  }),
  reduxForm({
    form: "wizard", //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
	onSubmit:() =>{

		document.getElementById("applyloan").disabled = true;
	
		var loanAccountNum = Math.floor(Math.random() * 90000) + 10000;
		let web3 = new Web3(Web3.givenProvider);
		let walletAddress =  localStorage.getItem('walletAddress');
		const coinContract = new web3.eth.Contract(LoanRequest.abi);

		let loanamount = document.getElementsByName("loanAmount")[0].value;
		let kyc2 = document.getElementsByName("uid")[0].value;
		let installmentTenure = document.getElementsByName("installment")[0].value;
		let loanduration = document.getElementsByName("loanTenure")[0].value; 

		
		if(loanamount == null || loanamount  == undefined)
		{
			toast.error("Loan ammount cannot be empty", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});
			document.getElementById("applyloan").disabled = false;
		}
			

		if(parseFloat(loanamount) <= 0)
		{
			
			toast.error("Loan amount must be greater than 0", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});
			document.getElementById("applyloan").disabled = false;
		}	
		else if(kyc2 == null || kyc2 == undefined)
		{
			toast.error("UID is mandatory", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});
			document.getElementById("applyloan").disabled = false;
		}
		else if(loanduration < 1 || loanduration > 60)
		{
			toast.error("Loan tenure should be min of 1 month and max of 60 months", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});
			document.getElementById("applyloan").disabled = false;
		}
			
		else if(installmentTenure <1 || installmentTenure > 30)
		{
			toast.error("Installment tenure should be min of 1 day and max of 30 days", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});
			
			document.getElementById("applyloan").disabled = false;
		}
			
		else{

			let applicantname = document.getElementsByName("fullName")[0].value;
			let applicantEmail = document.getElementsByName("email")[0].value;
			let kyc1 = document.getElementsByName("panCard")[0].value;
			let purpose = document.getElementsByName("loanPurpose")[0].value;
			let guaranteer = document.getElementsByName("guarantorMobileNumber")[0].value;
			let currentDate = new Date();
			currentDate.setMonth(currentDate.getMonth() + parseInt(loanduration));
			let loanTenure = parseInt((currentDate - new Date()) / (1000 * 60 * 60 * 24), 10); 		
			let rate = 2;
			loanamount = 1.301;
			let emi = loanamount * rate * (((1+ rate) * loanduration) / ((1+ rate)* (loanduration - 1)));
			let dailyEmi = emi/30;
			let streamAmount = dailyEmi/86400;

			let loanApplObject =  {
				loanId: loanAccountNum,
				name: applicantname,
				email: applicantEmail,
				panCard: kyc1,
				uid: kyc2,
				purpose: purpose,
				collateral: guaranteer,
				loanTenure: loanTenure,
				amount: loanamount,
				loanEndDate: currentDate,
				appliedOn: new Date(),
				streamAmount: streamAmount,
				dailyEmi: dailyEmi,
				monthlyEmi: emi,
				contractAddress: "",
				status: "",
				txHash: "", 
				borrower: walletAddress,
				lender: "" 
			}

			let applications = [];
			applications = JSON.parse(localStorage.getItem("loanApplications"));
			if(applications == null)
				applications = [];

			let isUpdated = false;
			coinContract.deploy({
									data: LoanRequest.bytecode,
									arguments:[
										applicantname, applicantEmail, kyc1, kyc2, purpose, guaranteer,1 , 2, loanTenure//                 -9_token
									]
									}).send({from: walletAddress}, function(error, transactionHash){ loanApplObject.txHash = transactionHash; })
									.on('error', function(error){
										toast.error("Failed with error: " + error.message, {
											position: "top-right",
											autoClose: 5000,
											hideProgressBar: false,
											closeOnClick: true,
											pauseOnHover: true,
											draggable: true,
										});
										 document.getElementById("applyloan").disabled = false; })
									.on('transactionHash', function(transactionHash){ loanApplObject.txHash = transactionHash })
									.on('receipt', function(receipt){
									
										if(!isUpdated)
										{
											isUpdated = true;
											loanApplObject.contractAddress = receipt.contractAddress;
											loanApplObject.status = "Applied";
	
											
											applications.push(loanApplObject);
											localStorage.setItem("loanApplications", JSON.stringify(applications));
											console.log(applications);
											document.getElementById("applyloan").disabled = false;
	
											toast.success("Loan application successfully submitted", {
												position: "top-right",
												autoClose: 5000,
												hideProgressBar: false,
												closeOnClick: true,
												pauseOnHover: true,
												draggable: true,
											});

										}
										
									})
									.on('confirmation', function(confirmationNumber, receipt){ });	
		}
	
	
	
	},
    enableReinitialize: true
  })
)(WizardFormFirstPage);