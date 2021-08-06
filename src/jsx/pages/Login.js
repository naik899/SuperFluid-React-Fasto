import React,{ useState } from "react";
import { connect, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Loader from '../pages/Loader/Loader';
import {
    loadingToggleAction,
    loginAction,
} from '../../store/actions/AuthActions';
// image
import logo from "../../images/logo-full.png";
import logo2 from "../../images/logo-full-white.png";
import login from "../../images/login-bg.jpg";

function Login(props) {
	const [email, setEmail] = useState('demo@demo.com');
    let errorsObj = { email: '', password: '' };
    const [errors, setErrors] = useState(errorsObj);
    const [password, setPassword] = useState('123456');

    const dispatch = useDispatch();
   //setEmail('');
    //setPassword('123456');
    function onLogin(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (email === '') {
            errorObj.email = 'Email is Required';
            error = true;
        }
        if (password === '') {
            errorObj.password = 'Password is Required';
            error = true;
        }
        setErrors(errorObj);
        if (error) {
			return;
		}        
		dispatch(loadingToggleAction(true));
        dispatch(loginAction(email, password, props.history));
    }

  return (
		<div className="login-wrapper">
			<div className="login-aside-left" style={{backgroundImage:"url("+ login +")"}}>
				<Link to="/" className="login-logo">
					<img src={logo2} alt="" />
				  </Link>
				<div className="login-description">
					<h2 className="text-white mb-4">Lending platform</h2>
					<ul className="social-icons mt-4">
						<li><Link to={"#"}><i className="fa fa-facebook"></i></Link></li>
						<li><Link to={"#"}><i className="fa fa-twitter"></i></Link></li>
						<li><Link to={"#"}><i className="fa fa-linkedin"></i></Link></li>
					</ul>
					<div className="mt-5">
						<Link to={"#"} className="text-white mr-4">Privacy Policy</Link>
						<Link to={"#"} className="text-white mr-4">Contact</Link>
						<Link to={"#"} className="text-white mr-4">Terms & Conditions</Link>						
					</div>
				</div>
			</div>
			<div className="login-aside-right">
				<div className="row m-0 justify-content-center h-100 align-items-center">
				  <div className="col-xl-6 col-xxl-8">
					<div className="authincation-content">
					  <div className="row no-gutters">
						<div className="col-xl-12">
						  <div className="auth-form">
							<div className=" mb-3">
							{ /*  <Link to="/">
								<img src={logo} alt="" />
                            </Link> */}
							  <h2 className="text-primary">Welcome to Fasto Lending Platform</h2>
							</div>
							<h4 className=" mb-4 ">Connect to metamask currently supports Goerli testnet and get some ETHx in your wallet to run this app</h4>
                            {props.errorMessage && (
                                <div className='text-danger'>
                                    {props.errorMessage}
                                </div>
                            )}
                            {props.successMessage && (
                                <div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
                                    {props.successMessage}
                                </div>
                            )}
							<form onSubmit={onLogin}>
                                <div className="text-center">
								<button
								  type="submit"
								  className="btn btn-primary btn-block"
								>
								  Connect to Metamask
								</button>
							  </div>
							</form>
							
						  </div>
						</div>
					  </div>
					</div>
				  </div>
				</div>
			</div>
		</div>
  );
};

const mapStateToProps = (state) => {
	console.log('state');
	console.log(state);
    return {
        errorMessage: state.auth.errorMessage,
        successMessage: state.auth.successMessage,
        showLoading: state.auth.showLoading,
    };
};
export default connect(mapStateToProps)(Login);
