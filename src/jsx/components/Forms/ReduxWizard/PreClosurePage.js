import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import validate from "./validate";
import renderField from "./renderField";

import Web3 from "web3";

import LoanRequest  from  "../../../../contracts/LoanRequest.json";

const colors = ['Loan Account 1', 'Loan Account 2', 'Loan Account 3', 'Loan Account 4'];

const renderColorSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select className="form-control" {...input}>
      <option value="">Select a Loan Account</option>
      {colors.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

const PreClosurePage = props => {
  const { handleSubmit } = props;
  return (
		<form onSubmit={handleSubmit}>
			<div className="validate-redux-form row">


                <div className="col-sm-8">
                    <div className="form-group">
                        <Field name="favoriteColor" component={renderColorSelector} />
                    </div>
                    
                </div>
                <div className="col-sm-4">
                
                    
                </div>

          
				<div className="col-sm-8">
					<Field name="amount" type="text" component={renderField} label="Outstanding amount in ETH"/>
				</div>	
				<div className="col-sm-4">
                    
                    
                </div>

               



				

				<div className="col-sm-12 mt-4 ">
					<button  type="submit" className="next btn btn-primary"> Submit</button>
				</div>
			</div>
		</form>
  );
};

export default compose(
	connect((state, props) => {
    return {
		initialValues: {
		
			amount: "225"

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
    let web3 = new Web3(Web3.givenProvider);
    let walletAddress =  localStorage.getItem('walletAddress');
    const coinContract = new web3.eth.Contract(LoanRequest.abi, "0xb471ADA73d8F8479579fBdD165412aDf945A308E");
   let data =  await coinContract.methods.getLoanDetails().call({from: walletAddress});
   debugger;
   console.log(data);
    // let finalValue = await coinContract.loanDuration.call({from: walletAddress});
    // console.log(finalValue);



    // coinContract.deploy({
    //                         data: LoanRequest.bytecode,
    //                         arguments:[
    //                             "Gyan Lakshmi","a@b.com", "AXXXXXXXXX","173117411731", "Testing", "1231232131", 240, 290, 60//                 -9_token
    //                         ]
    //                         }).send({from: walletAddress}, function(error, transactionHash){ console.log("Tx has:" + transactionHash); })
    //                         .on('error', function(error){ console.log(error); })
    //                         .on('transactionHash', function(transactionHash){ console.log("New Tx: " + transactionHash) })
    //                         .on('receipt', function(receipt){
    //                           console.log("Received");
    //                            console.log(receipt.contractAddress) // contains the new contract address
    //                         })
    //                         .on('confirmation', function(confirmationNumber, receipt){ console.log("Confirmation:" + confirmationNumber + " , Receipt: " + receipt
    //                         )})
    //                         .then(function(newContractInstance){
    //                             console.log(newContractInstance.options.address) // instance with the new contract address
    //                         });
                          },
    enableReinitialize: true
  })
)(PreClosurePage);