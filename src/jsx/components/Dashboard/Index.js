import React,{Fragment,useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import Donut from '../Fasto/Home/Donut';
import { ThemeContext } from "../../../context/ThemeContext";
import {ProjectBlog, titleBlog} from '../Fasto/Home/IndexData';

//Images
import untital1 from './../../../images/profile/Untitled-1.jpg';
import untital2 from './../../../images/profile/Untitled-2.jpg';
import untital3 from './../../../images/profile/Untitled-3.jpg';
import untital4 from './../../../images/profile/Untitled-4.jpg';
import untital5 from './../../../images/profile/Untitled-5.jpg';
import untital6 from './../../../images/profile/Untitled-6.jpg';
import untital7 from './../../../images/profile/Untitled-7.jpg';
import EmiTable from '../table/EmiTable';


const ChartTimeline = loadable(() =>
	pMinDelay(import("../Fasto/Home/ChartTimeline"), 1000)
);
const WidgetChart1 = loadable(() =>
	pMinDelay(import("../Fasto/Home/WidgetChart1"), 1000)
);
const RadialChart = loadable(() =>
	pMinDelay(import("../Fasto/Home/RadialChart"), 1000)
);
const WidgetChart2 = loadable(() =>
	pMinDelay(import("../Fasto/Home/WidgetChart2"), 1000)
);

let applications = [];
let walletAddress = localStorage.getItem("walletAddress");
applications = JSON.parse(localStorage.getItem("loanApplications"));


let totalBorrowedLoans = 0;
let totalBorrowedMoney = 0;
if(applications != null)
{
	let totalBorrowedLoansByUser = applications.filter(s=> s.borrower == walletAddress);
	totalBorrowedLoans = totalBorrowedLoansByUser.length;
	if(totalBorrowedLoans != 0)
	{
		totalBorrowedLoansByUser.forEach(element => {
			totalBorrowedMoney = totalBorrowedMoney + parseFloat(element.outStanding);
		});
		
	}
}

let totalLoansLent = 0;
let totalMoneyLent = 0;
if(applications != null)
{
	let totalLoansLentByUser = applications.filter(s=> s.lender == walletAddress);
	totalLoansLent = totalLoansLentByUser.length;
	if(totalLoansLent != 0)
	{
		totalLoansLentByUser.forEach(element => {
			totalMoneyLent = totalBorrowedMoney + parseFloat(element.outStanding);
		});
		
	}
}
	



const Index = () =>{
	const { changeBackground, background } = useContext(ThemeContext);
	useEffect(() => {
		changeBackground({ value: "light", label: "Light" });
	}, []);
	return(
		<Fragment>
			<div className="row">
			<div className="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
						<div className="card card-bd">
						<div className="bg-secondary card-border" />
							<div className="card-body">
								<div className="media align-items-center">
									<div className="media-body mr-3">
										<h2 className="num-text text-black font-w700">{totalBorrowedLoans}</h2>
										<span className="fs-14">Total Loans Applied</span>
									</div>
								</div>
							</div>
						</div>
					</div>


					<div className="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
						<div className="card card-bd">
						<div className="bg-secondary card-border" />
							<div className="card-body">
								<div className="media align-items-center">
									<div className="media-body mr-3">
										<h2 className="num-text text-black font-w700">{totalLoansLent}</h2>
										<span className="fs-14">Total Loans Lent</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
						<div className="card card-bd">
						<div className="bg-secondary card-border" />
							<div className="card-body">
								<div className="media align-items-center">
									<div className="media-body mr-3">
										<h2 className="num-text text-black font-w700">{totalBorrowedMoney}</h2>
										<span className="fs-14">Total Outstanding Balance</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
						<div className="card card-bd">
						<div className="bg-secondary card-border" />
							<div className="card-body">
								<div className="media align-items-center">
									<div className="media-body mr-3">
										<h2 className="num-text text-black font-w700">{totalMoneyLent}</h2>
										<span className="fs-14">Total Money Lent</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					
			</div>	

			<EmiTable></EmiTable>
		</Fragment>
	)
}
export default Index;	