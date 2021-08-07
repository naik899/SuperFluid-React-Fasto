import React, { Fragment } from "react";

import PageTitle from "../../../layouts/PageTitle";
import PatientTable from "../../table/PatientTable";

const Lender = props =>  {

  
  return (
    <Fragment>
      <PageTitle activeMenu="Applications" motherMenu="Lender" />
     <PatientTable></PatientTable>
    
    </Fragment>
  );
};

export default Lender;