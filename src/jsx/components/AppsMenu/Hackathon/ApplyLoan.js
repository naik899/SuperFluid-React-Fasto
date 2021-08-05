import React, { Fragment, useEffect } from "react";
import { Field, reduxForm } from 'redux-form';

import PageTitle from "../../../layouts/PageTitle";
import WizardForm from "../../Forms/ReduxWizard/WizardForm"

const ApplyLoan = props =>  {

  
    
  
  return (
    <Fragment>
      <PageTitle activeMenu="Apply Loan" motherMenu="Transaction" />
      <WizardForm></WizardForm>
    
    </Fragment>
  );
};

export default ApplyLoan;