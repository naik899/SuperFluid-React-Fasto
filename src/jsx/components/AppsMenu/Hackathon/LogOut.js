import { WindowScrollController } from "@fullcalendar/react";
import React, { Fragment, useEffect } from "react";

import { logout } from '../../../../store/actions/AuthActions';

const LogOut = props =>  {


    logout(props.history);
    
    window.location.reload();
    
  
  return (
    <Fragment>
     
    
    </Fragment>
  );
};

export default LogOut;