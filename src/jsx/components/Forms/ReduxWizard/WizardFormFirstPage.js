import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import validate from "./validate";
import renderField from "./renderField";


const WizardFormFirstPage = props => {
  const { handleSubmit } = props;
  return (
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
					<Field name="guarantorMobileNumber"  type="text" component={renderField} label="Guarantor Mobile number"/>
				</div>	
				

				<div className="col-sm-6">
					<Field name="panCard" type="text" component={renderField} label="Pan Card"/>
				</div>	
				<div className="col-sm-6">
				<Field name="uid"  type="text" component={renderField} label="Aadhar Card"/>
				</div>	

				<div className="col-sm-6">
				<label class="font-w600">Loan Purpose</label>
					<Field name="loanPurpose" className="form-control" component="textarea" label="Loan Purpose"/>
				</div>	
				<div className="col-sm-6">
				<Field name="loanTenure "  type="text" component={renderField} label="Loan Tenure in Months"/>
				</div>

				<div className="col-sm-6">
				  <Field
					name="employed"
					id="employed"
					component="input"
					type="checkbox"
				  />
					<label className="ml-2 " htmlFor="employed">I Agree to the terms & conditions</label>
			</div>


				<div className="col-sm-12 mt-4 ">
					<button  type="submit" className="next btn btn-primary"> Apply For Loan</button>
				</div>
			</div>
		</form>
  );
};

export default compose(
	connect((state, props) => {
    return {
		initialValues: {
			fullName: "Gyan Lakshmi",
			email: "naik899.crypto@gmail.com",
			panCard: "AXXXXXXXXXX",
			uid: "172117211721",
			loanAmount: 25,
			guarantorMobileNumber: 9999999999,
			loanPurpose: "test",
			loanTenure: "60"

		}
    };
  }),
  reduxForm({
    form: "wizard", //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
	onSubmit:() =>{
		//apply for loan
		console.log("Applied loan");
	},
    enableReinitialize: true
  })
)(WizardFormFirstPage);