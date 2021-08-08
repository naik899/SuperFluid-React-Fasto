import React, { Fragment } from "react";

import PageTitle from "../../../layouts/PageTitle";
import EmiTable from "../../table/EmiTable";

const AccountStatement = props =>  {

  
    
  
  return (
    <Fragment>
      <PageTitle activeMenu="Account Statement" motherMenu="Enquiry" />
      <EmiTable></EmiTable>
    
    </Fragment>
  );
};

export default AccountStatement;