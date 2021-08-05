import React, { Fragment } from "react";

import PageTitle from "../../../layouts/PageTitle";
import PrePaymentPage from "../../Forms/ReduxWizard/PrePaymentPage";

const PrePayment = props =>  {

   

    
  
  return (
    <Fragment>
      <PageTitle activeMenu="Pre Payment" motherMenu="Transaction" />
      <PrePaymentPage></PrePaymentPage>
    
    </Fragment>
  );
};

export default PrePayment;