import React, { Fragment } from "react";

import PageTitle from "../../../layouts/PageTitle";
import PrePaymentPage from "../../Forms/ReduxWizard/PrePaymentPage";

const LendMoney = props =>  {

  
  return (
    <Fragment>
      <PageTitle activeMenu="Lend Money" motherMenu="Lender" />
      <PrePaymentPage></PrePaymentPage>
    
    </Fragment>
  );
};

export default LendMoney;