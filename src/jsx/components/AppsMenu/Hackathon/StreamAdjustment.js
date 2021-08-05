import React, { Fragment } from "react";

import PageTitle from "../../../layouts/PageTitle";
import StreamAdjustmentPage from "../../Forms/ReduxWizard/StreamAdjustmentPage";

const StreamAdjustment = props =>  {

   

    
  
  return (
    <Fragment>
      <PageTitle activeMenu="Stream Adjustment" motherMenu="Transaction" />
      <StreamAdjustmentPage></StreamAdjustmentPage>
    
    </Fragment>
  );
};

export default StreamAdjustment;