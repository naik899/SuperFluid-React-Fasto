/// Menu
import MetisMenu from "metismenujs";
import React, { Component, useState, useContext, useEffect } from "react";
import {Modal} from 'react-bootstrap';
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";
import useScrollPosition from "use-scroll-position";
import { ThemeContext } from "../../../context/ThemeContext";
//import profile from "../../../images/Untitled-1.jpg";
class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new MetisMenu(this.$el);
  }
  componentWillUnmount() {
    //  this.mm("dispose");
    // console.log(this.mm);
  }
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

const SideBar = () => {
	const [newProject ,setNewProject] = useState(false);
  const {
    iconHover,
    sidebarposition,
    headerposition,
    sidebarLayout,
  } = useContext(ThemeContext);
	
  useEffect(() => {
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);
	
	//sidebar icon Heart blast
	// var handleheartBlast = document.querySelector('.heart');
  //       function heartBlast() {
  //           return handleheartBlast.classList.toggle("heart-blast");
  //       }

  //       handleheartBlast.addEventListener('click', heartBlast);
	
  }, []);
  let scrollPosition = useScrollPosition();
  /// Path
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];
  /// Active menu
  let deshBoard = [
      "",
    ],
    app = [
      "app-profile",
      "post-details",
      "app-calender",
      "email-compose",
      "email-inbox",
      "email-read",
      "ecom-product-grid",
      "ecom-product-list",
      "ecom-product-order",
      "ecom-checkout",
      "ecom-invoice",
      "ecom-customers",
      "post-details",
      "ecom-product-detail",
    ],
    email = ["email-compose", "email-inbox", "email-read"],
    shop = [
      "ecom-product-grid",
      "ecom-product-list",
      "ecom-product-list",
      "ecom-product-order",
      "ecom-checkout",
      "ecom-invoice",
      "ecom-customers",
      "ecom-product-detail",
    ],
    charts = [
      "chart-rechart",
      "chart-flot",
      "chart-chartjs",
      "chart-chartist",
      "chart-sparkline",
      "chart-apexchart",
    ],
    bootstrap = [
      "ui-accordion",
      "ui-badge",
      "ui-alert",
      "ui-button",
      "ui-modal",
      "ui-button-group",
      "ui-list-group",
      "ui-media-object",
      "ui-card",
      "ui-carousel",
      "ui-dropdown",
      "ui-popover",
      "ui-progressbar",
      "ui-tab",
      "ui-typography",
      "ui-pagination",
      "ui-grid",
    ],
    plugins = [
      "uc-select2",
      "uc-nestable",
      "uc-sweetalert",
      "uc-toastr",
      "uc-noui-slider",
      "map-jqvmap",
      "uc-lightgallery",
      "todo",
     
    ],
    redux = [
       "redux-form",
	   "redux-wizard",    
       "posts",
    ],
    widget = ["widget-basic"],
    forms = [	
      "form-element",
      "form-wizard",
      "form-editor-summernote",
      "form-pickers",
      "form-validation-jquery",
    ],
    table = [
		"table-bootstrap-basic", 
		"table-datatable-basic",
		"sorting-table",
		"filtering-table",
	],
    pages = [
      "page-register",
      "page-login",
      "page-lock-screen", 
    ],
    error = [
      "page-error-400",
      "page-error-403",
      "page-error-404",
      "page-error-500",
      "page-error-503",
    ];
  return (
    <div
      className={`deznav ${iconHover} ${
        sidebarposition.value === "fixed" &&
        sidebarLayout.value === "horizontal" &&
        headerposition.value === "static"
          ? scrollPosition > 120
            ? "fixed"
            : ""
          : ""
      }`}
    >
		{/* <!-- Add Project --> */}
		<Modal className="modal fade" id="addProjectSidebar" show={newProject} onHide={setNewProject}>
			<div className="" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Create Project</h5>
						<button type="button" className="close" onClick={() => setNewProject(false)}><span>&times;</span></button>
					</div>
					<div className="modal-body">
						<form>
							<div className="form-group">
								<label className="text-black font-w500">Project Name</label>
								<input type="text" className="form-control" />
							</div>
							<div className="form-group">
								<label className="text-black font-w500">Deadline</label>
								<input type="date" className="form-control" />
							</div>
							<div className="form-group">
								<label className="text-black font-w500">Client Name</label>
								<input type="text" className="form-control" />
							</div>
							<div className="form-group">
								<button type="button" className="btn btn-primary">CREATE</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Modal>
      <PerfectScrollbar className="deznav-scroll">
	  {/* <div className="main-profile">
			<img src={profile} alt="" />
			<Link to={"#"}><i className="fa fa-cog" aria-hidden="true"></i></Link>
			<h5 className="mb-0 fs-20 text-black "><span className="font-w400">Hello,</span> Marquez</h5>
			<p className="mb-0 fs-14 font-w400">marquezzzz@mail.com</p>
	  </div> */}

        <MM className="metismenu" id="menu">
        <li className={`${deshBoard.includes(path) ? "mm-active" : ""}`}>
            <Link to="/" className="ai-icon" >
              <i className="flaticon-047-home"></i>
              <span className="nav-text">Dashboard</span>
            </Link>
          </li>
          <li className={`${app.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="flaticon-381-upload"></i>
              <span className="nav-text">Loan</span>
            </Link>
            <ul >
              <li><Link className={`${path === "create-flow" ? "mm-active" : ""}`} to="/create-flow">Create New Flow</Link></li>
              <li><Link className={`${path === "apply-loan" ? "mm-active" : ""}`} to="/apply-loan">Apply for Loan</Link></li>
            
              <li><Link className={`${path === "stream-adjustment" ? "mm-active" : ""}`}to="/stream-adjustment">Stream Adjustment</Link></li>
              <li><Link className={`${path === "pre-payment" ? "mm-active" : ""}`}to="/pre-payment">Pre Payment</Link></li>
              <li><Link className={`${path === "pre-closure" ? "mm-active" : ""}`}to="/pre-closure">Pre Closure</Link></li>
              
            </ul>
          </li>

          <li className={`${charts.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >

              <i className="flaticon-381-transfer"></i>
              <span className="nav-text">Lender</span>
            </Link>
				<ul>
				  <li><Link className={`${path === "lender" ? "mm-active" : ""}`} to="/lender">View applications</Link></li>
				</ul>
          </li>

        
          <li className={`${charts.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="flaticon-381-help-1"></i>
              <span className="nav-text">Enquiry</span>
            </Link>
				<ul>
				  <li><Link className={`${path === "messages" ? "mm-active" : ""}`} to="/messages">Messages</Link></li>
				  <li><Link className={`${path === "chart-chartjs" ? "mm-active" : ""}`} to="/chart-chartjs">Account Statement</Link></li>
				  <li><Link className={`${path === "chart-chartist" ? "mm-active" : ""}`} to="/chart-chartist">Loan Details</Link></li>
				</ul>
          </li>

          <li className={`${widget.includes(path) ? "mm-active" : ""}`}>
            <Link to="/logout" className="ai-icon" >
              <i className="flaticon-381-exit"></i>
              <span className="nav-text">Logout</span>
            </Link>
          </li>
       
        </MM>
		{/* <div className="copyright">
			<p><strong>Fasto React Admin Dashboard</strong> © 2021 All Rights Reserved</p>
			<p className="fs-12">Made with <span className="heart"></span> by DexignZone</p>
		</div> */}
      </PerfectScrollbar>
    </div>
  );
};

export default SideBar;
