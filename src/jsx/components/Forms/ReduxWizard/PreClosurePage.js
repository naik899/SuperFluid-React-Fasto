import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import validate from "./validate";
import renderField from "./renderField";

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
	onSubmit:() =>{
		//apply for loan
		console.log("Pre Closure");
	},
    enableReinitialize: true
  })
)(PreClosurePage);