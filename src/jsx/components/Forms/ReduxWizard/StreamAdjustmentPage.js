import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import validate from "./validate";
import renderField from "./renderField";
import SuperfluidSDK from "@superfluid-finance/js-sdk";
import Web3 from "web3";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loan from "../../../../contracts/Loan.json";



const applications = JSON.parse(localStorage.getItem("loanApplications"));
const walletAddress = (localStorage.getItem("walletAddress"));
let loanApplication = [];
loanApplication = JSON.parse(localStorage.getItem("loanApplications"));
if(loanApplication != null )
{
 
  loanApplication = applications
  .filter((d) => d.borrower == walletAddress)
  .map((d) => d.loanId);

}

  
  

const loanSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select className="form-control" {...input}>
      <option value="">Select a Loan Account</option>
      {loanApplication.map((val) => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

const StreamAdjustmentPage = (props) => {
  const { handleSubmit } = props;

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={handleSubmit}>
        <div className="validate-redux-form row">
          <div className="col-sm-8">
            <div className="form-group">
              <Field name="loanSelector" component={loanSelector} />
            </div>
          </div>
          <div className="col-sm-4"></div>

          <div className="col-sm-8">
            <Field
              name="loanTenure"
              type="text"
              component={renderField}
              label="Loan Tenure"
            />
          </div>
          <div className="col-sm-4"></div>

          <div className="col-sm-8">
            <Field
              name="flowRateTenure"
              type="text"
              component={renderField}
              label="Loan deduction frequency in days"
            />
          </div>
          <div className="col-sm-4"></div>

          <div className="col-sm-12 mt-4 ">
            <button type="submit" className="next btn btn-primary">
              {" "}
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default compose(
  connect((state, props) => {
    return {
      initialValues: {
        flowRateTenure: 1,
        loanTenure: "60",
      },
    };
  }),
  reduxForm({
    form: "wizard", //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
    onSubmit: async () => {
      let walletAddress = localStorage.getItem("walletAddress");
      let loanId = document.getElementsByName("loanSelector")[0].value;
      let loanTenure = document.getElementsByName("loanTenure")[0].value;
      let flowRateTenure = document.getElementsByName("flowRateTenure")[0]
        .value;

      const sf = new SuperfluidSDK.Framework({
        web3: new Web3(window.ethereum),
      });
      await sf.initialize();

      const carol = sf.user({
        address: walletAddress,
        token: "0x5943F705aBb6834Cad767e6E4bB258Bc48D9C947",
      });

      let loanInfo = [];
      loanInfo = JSON.parse(localStorage.getItem("loanApplications"));
      loanInfo = await loanInfo.filter((s) => s.loanId == loanId);

      

      
      let result = await carol.flow({
        recipient: loanInfo[0].lender,
        flowRate: "000000000802469",
      });



      loanInfo[0].outStanding = loanInfo[0].outStanding - 0.3;
      let index = applications.findIndex(s=> s.loanId == loanInfo[0].loanId);
      if(index > -1)
      {
        applications.splice(index, 1); 
        localStorage.setItem("loanApplications", JSON.stringify(applications));

        applications.push(loanInfo[0]);
        localStorage.setItem("loanApplications", JSON.stringify(applications));
      }

     
     
      


   


      toast.success("Stream Adjustment successfully completed", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
        

     
    },
    enableReinitialize: true,
  })
)(StreamAdjustmentPage);
