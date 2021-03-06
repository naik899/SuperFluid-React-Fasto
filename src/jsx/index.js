import React, { lazy, useContext } from "react";

/// React router dom
import {Redirect, BrowserRouter as Router, Switch, Route } from "react-router-dom";

/// Css
import "./index.css";
import "./chart.css";
import "./step.css";

/// Layout
import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";
/// Dashboard
import Index from "./components/Dashboard/Index";

/* const Index = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/Dashboard/Index')), 500);
  });
});
 */
import Index2 from "./components/Dashboard/Index2";
import Project from "./components/Dashboard/Project";
import Contacts from "./components/Dashboard/Contacts";
import Kanban from "./components/Dashboard/Kanban";
import DashboardCalendar from "./components/Dashboard/DashboardCalendar";
import Messages from "./components/Dashboard/Messages";
import ChatBox from "./components/Dashboard/ChatBox";
//import Home2 from "./components/Dashboard/Home2";

/// App
import AppProfile from "./components/AppsMenu/AppProfile/AppProfile";
import Compose from "./components/AppsMenu/Email/Compose/Compose";
import Inbox from "./components/AppsMenu/Email/Inbox/Inbox";
import Read from "./components/AppsMenu/Email/Read/Read";
import Calendar from "./components/AppsMenu/Calendar/Calendar";
import PostDetails from "./components/AppsMenu/AppProfile/PostDetails";

/// Product List
import ProductGrid from "./components/AppsMenu/Shop/ProductGrid/ProductGrid";
import ProductList from "./components/AppsMenu/Shop/ProductList/ProductList";
import ProductDetail from "./components/AppsMenu/Shop/ProductGrid/ProductDetail";
import Checkout from "./components/AppsMenu/Shop/Checkout/Checkout";
import Invoice from "./components/AppsMenu/Shop/Invoice/Invoice";
import ProductOrder from "./components/AppsMenu/Shop/ProductOrder";
import Customers from "./components/AppsMenu/Shop/Customers/Customers";

/// Charts
import SparklineChart from "./components/charts/Sparkline";
import ChartJs from "./components/charts/Chartjs";
import Chartist from "./components/charts/chartist";
import RechartJs from "./components/charts/rechart";
import ApexChart from "./components/charts/apexcharts";

/// Bootstrap
import UiAlert from "./components/bootstrap/Alert";
import UiAccordion from "./components/bootstrap/Accordion";
import UiBadge from "./components/bootstrap/Badge";
import UiButton from "./components/bootstrap/Button";
import UiModal from "./components/bootstrap/Modal";
import UiButtonGroup from "./components/bootstrap/ButtonGroup";
import UiListGroup from "./components/bootstrap/ListGroup";
import UiMediaObject from "./components/bootstrap/MediaObject";
import UiCards from "./components/bootstrap/Cards";
import UiCarousel from "./components/bootstrap/Carousel";
import UiDropDown from "./components/bootstrap/DropDown";
import UiPopOver from "./components/bootstrap/PopOver";
import UiProgressBar from "./components/bootstrap/ProgressBar";
import UiTab from "./components/bootstrap/Tab";
import UiPagination from "./components/bootstrap/Pagination";
import UiGrid from "./components/bootstrap/Grid";
import UiTypography from "./components/bootstrap/Typography";

/// Plugins
import Select2 from "./components/PluginsMenu/Select2/Select2";
import Nestable from "./components/PluginsMenu/Nestable/Nestable";
import MainNouiSlider from "./components/PluginsMenu/Noui Slider/MainNouiSlider";
import MainSweetAlert from "./components/PluginsMenu/Sweet Alert/SweetAlert";
import Toastr from "./components/PluginsMenu/Toastr/Toastr";
import JqvMap from "./components/PluginsMenu/Jqv Map/JqvMap";
import Lightgallery from "./components/PluginsMenu/Lightgallery/Lightgallery";
import Todo from "./pages/Todo";
import Posts from "./pages/Posts/Posts";
import createPost from "./pages/CreatePost/CreatePost";
import EditPost from "./pages/EditPost/EditPost";
import SinglePost from "./pages/SinglePost/SinglePost";
import loginPage2 from "./pages/loginPage2";

/// Widget
import Widget from "./pages/Widget";

/// Table
import DataTable from "./components/table/DataTable";
import BootstrapTable from "./components/table/BootstrapTable";
import SortingTable from "./components/table/SortingTable/SortingTable";
import FilteringTable from "./components/table/FilteringTable/FilteringTable";

/// Form
import ReduxForm from "./components/Forms/ReduxForm/ReduxForm";
import WizardForm from "./components/Forms/ReduxWizard/Index";
import Element from "./components/Forms/Element/Element";
import Wizard from "./components/Forms/Wizard/Wizard";
import SummerNote from "./components/Forms/Summernote/SummerNote";
import Pickers from "./components/Forms/Pickers/Pickers";
import jQueryValidation from "./components/Forms/jQueryValidation/jQueryValidation";


/// Pages
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import LockScreen from "./pages/LockScreen";
import Error400 from "./pages/Error400";
import Error403 from "./pages/Error403";
import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";
import Error503 from "./pages/Error503";
import Setting from "./layouts/Setting";
import { ThemeContext } from "../context/ThemeContext";

import ScrollToTop from './layouts/ScrollToTop';
import CreateFlow from "./components/AppsMenu/Hackathon/CreateFlow";
import ApplyLoan from "./components/AppsMenu/Hackathon/ApplyLoan";
import StreamAdjustment from "./components/AppsMenu/Hackathon/StreamAdjustment";
import PreClosure from "./components/AppsMenu/Hackathon/PreClosure";
import PrePayment from "./components/AppsMenu/Hackathon/PrePayment";
import LogOut from "./components/AppsMenu/Hackathon/LogOut";
import Logout from "./layouts/nav/Logout";
import LendMoney from "./components/AppsMenu/Hackathon/LendMoney";
import Lender from "./components/AppsMenu/Hackathon/Lender";

const Markup = () => {
  const { menuToggle } = useContext(ThemeContext);
  const routes = [
    /// Dashboard
    { url: "index", component: Index },
    { url: "", component: Index },
    { url: "create-flow", component: CreateFlow },
    { url: "apply-loan", component: ApplyLoan },
    { url: "stream-adjustment", component: StreamAdjustment },
    { url: "pre-payment", component: PrePayment },
    { url: "pre-closure", component: PreClosure },
    { url: "messages", component: Messages },
    { url: "logout", component: LogOut },
    { url: "lend-money", component: LendMoney },
    { url: "lender", component: Lender },
    { url: "account-statement", component: Lender },
    
    
  

    /// pages
    { url: "page-register", component: Registration },
    { url: "page-lock-screen", component: LockScreen },
    { url: "page-login", component: Login },
    { url: "page-forgot-password", component: ForgotPassword },
    { url: "page-error-400", component: Error400 },
    { url: "page-error-403", component: Error403 },
    { url: "page-error-404", component: Error404 },
    { url: "page-error-500", component: Error500 },
    { url: "page-error-503", component: Error503 },
  ];
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];
   
  let pagePath = path.split("-").includes("page");
 
  return (
    <>
      <div
        id={`${!pagePath ? "main-wrapper" : ""}`}
        className={`${!pagePath ? "show" : "mh100vh"}  ${
          menuToggle ? "menu-toggle" : ""
        }`}
      >
        {!pagePath && <Nav />}

        <div className={`${!pagePath ? "content-body" : ""}`}>
          <div
            className={`${!pagePath ? "container-fluid" : ""}`}
            style={{ minHeight: window.screen.height - 60 }}
          >
            <Switch>
              {routes.map((data, i) => (
                <Route
                  key={i}
                  exact
                  path={`/${data.url}`}
                  component={data.component}
                />
               
              ))}
			 
            </Switch>
          </div>
        </div>
        {!pagePath && <Footer />}
      </div>
      <Setting />
	  <ScrollToTop />
    </>
  );
};

export default Markup;
