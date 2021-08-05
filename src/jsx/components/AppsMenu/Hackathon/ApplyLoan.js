import React, { Fragment, useEffect } from "react";
import { Field, reduxForm } from 'redux-form';

import PageTitle from "../../../layouts/PageTitle";

const ApplyLoan = props =>  {

    const { handleSubmit, pristine, reset, submitting } = props;
	
    useEffect(() => {
        applyForLoan();
      });
  
    async function applyForLoan() {
      
      }

    
  
  return (
    <Fragment>
      <PageTitle activeMenu="Apply Loan" motherMenu="Transaction" />

    
    </Fragment>
  );
};

export default ApplyLoan;