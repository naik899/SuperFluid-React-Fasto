import React, { Fragment } from "react";

import PageTitle from "../../../layouts/PageTitle";
import PreClosurePage from "../../Forms/ReduxWizard/PreClosurePage";

const PreClosure = props =>  {

   

    
  
  return (
    <Fragment>
      <PageTitle activeMenu="Pre Closure" motherMenu="Transaction" />
      <PreClosurePage></PreClosurePage>
    
    </Fragment>
  );
};

export default PreClosure;