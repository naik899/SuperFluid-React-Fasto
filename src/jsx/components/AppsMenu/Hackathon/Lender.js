import React, { Fragment } from "react";

import PageTitle from "../../../layouts/PageTitle";
import PrePaymentPage from "../../Forms/ReduxWizard/PrePaymentPage";

const Lender = props =>  {

  
  return (
    <Fragment>
      <PageTitle activeMenu="Applications" motherMenu="Lender" />
      <PrePaymentPage></PrePaymentPage>
    
    </Fragment>
  );
};

export default Lender;