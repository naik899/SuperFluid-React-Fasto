import React,{Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import { TabContent, TabPane, } from 'reactstrap';
import classnames from 'classnames';
import {projectInfo, projectInfo2, projectInfo3, projectInfo4, 
		projectInfo5, projectInfo6, projectInfo7, projectInfo8,
DropdownBlog} from '../Fasto/Project/TabData';

//import img1 from './../../../images/big/img1.jpg';



const Project = () => {
	const[newProject, setNewProject] = useState(false);
	const [activeTab, setActiveTab] = useState('5');
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
	
	/* //const[newTab, setNewTab] = useState('');
	var GridListView = document.querySelectorAll('.tab-class');
	var fch = [].slice.call(GridListView);
	for (var y = 0; y < fch.length; y++) {
            fch[y].addEventListener('click', function () { 
				Tabdatablog(this);
			});
        }
	
	function Tabdatablog(current){
		fch.forEach(el => el.classList.remove('d-none'));
		
	} */
	
	
	
	var grid = document.querySelectorAll('.tab-class');
	 
	var fch = [].slice.call(grid);
	for (var y = 0; y < fch.length; y++) {
            fch[y].addEventListener('click', function () { 
				Tabblog(this);
			});
        } 
	 
	
	function Tabblog(current){
		var list = document.querySelector('#ListViewTabLink');
		var boxed = document.querySelector('#BoxedViewTabLink');
		
		//var listing = list.classList.remove('d-none');
		//var boxing = boxed.classList.add('d-none');
		
		
		var id = current.getAttribute("id");
		console.log(id);
		
		
		
		if(id==='BoxedTab'){
			boxed.classList.remove('d-none');
			list.classList.add('d-none');
		}else if(id==='ListViewTab'){
			list.classList.remove('d-none');
			boxed.classList.add('d-none');
		}
		
		
	}
	
	return(
		<Fragment>
			<div className="project-nav">
				<div className="card-action card-tabs  mr-auto">
					<ul className="nav nav-tabs style-2 d-none" id="ListViewTabLink"  >
						<li className="nav-item">
							<Link to ={"#"} className= {classnames({ active : activeTab === '1'}) + ' nav-link'} 
								onClick={() => { toggle('1'); }}>All Projects
								<span className="ml-1 badge badge-pill shadow-primary badge-primary">8</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to ={"#"} className= {classnames({ active : activeTab === '2'}) + ' nav-link'} 
								onClick={() => { toggle('2'); }}>On Progress
								<span className="ml-1 badge badge-pill badge-info shadow-info">4</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to ={"#"} className= {classnames({ active : activeTab === '3'}) + ' nav-link'} 
								onClick={() => { toggle('3'); }}>Pending 
								<span className="ml-1 badge badge-pill badge-warning shadow-warning">2</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to ={"#"} className= {classnames({ active : activeTab === '4'}) + ' nav-link'} 
								onClick={() => { toggle('4'); }}>Closed 
								<span className="ml-1 badge badge-pill badge-danger shadow-danger">2</span>
							</Link>
						</li>
					</ul>
					<ul className="nav nav-tabs style-2 " id="BoxedViewTabLink" >
						<li className="nav-item">
							<Link to ={"#"} className= {classnames({ active : activeTab === '1'}) + ' nav-link'} 
								onClick={() => { toggle('5'); }}>All Projects
								<span className="ml-1 badge badge-pill shadow-primary badge-primary">8</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to ={"#"} className= {classnames({ active : activeTab === '2'}) + ' nav-link'} 
								onClick={() => { toggle('6'); }}>On Progress
								<span className="ml-1 badge badge-pill badge-info shadow-info">4</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to ={"#"} className= {classnames({ active : activeTab === '3'}) + ' nav-link'} 
								onClick={() => { toggle('7'); }}>Pending 
								<span className="ml-1 badge badge-pill badge-warning shadow-warning">2</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to ={"#"} className= {classnames({ active : activeTab === '4'}) + ' nav-link'} 
								onClick={() => { toggle('8'); }}>Closed 
								<span className="ml-1 badge badge-pill badge-danger shadow-danger">2</span>
							</Link>
						</li>
					</ul>
					
				</div>
				<Link to={"#"}  onClick={()=> setNewProject(true)}  className="btn btn-primary rounded text-white">+ New Project</Link>
				<div className="grid-tabs nav nav-tabs">
					<Link id="ListViewTab" to={"#"} 
						className= {classnames({ active : activeTab === '1'}) + ' tab-class nav-link'} 
						onClick={() => { toggle('1'); }}
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M3.99976 7H19.9998C20.7954 7 21.5585 6.68393 22.1211 6.12132C22.6837 5.55871 22.9998 4.79565 22.9998 4C22.9998 3.20435 22.6837 2.44129 22.1211 1.87868C21.5585 1.31607 20.7954 1 19.9998 1H3.99976C3.20411 1 2.44104 1.31607 1.87844 1.87868C1.31583 2.44129 0.999756 3.20435 0.999756 4C0.999756 4.79565 1.31583 5.55871 1.87844 6.12132C2.44104 6.68393 3.20411 7 3.99976 7Z" fill="#43DC80"/>
							<path d="M19.9998 9H3.99976C3.20411 9 2.44104 9.31607 1.87844 9.87868C1.31583 10.4413 0.999756 11.2044 0.999756 12C0.999756 12.7956 1.31583 13.5587 1.87844 14.1213C2.44104 14.6839 3.20411 15 3.99976 15H19.9998C20.7954 15 21.5585 14.6839 22.1211 14.1213C22.6837 13.5587 22.9998 12.7956 22.9998 12C22.9998 11.2044 22.6837 10.4413 22.1211 9.87868C21.5585 9.31607 20.7954 9 19.9998 9Z" fill="#43DC80"/>
							<path d="M19.9998 17H3.99976C3.20411 17 2.44104 17.3161 1.87844 17.8787C1.31583 18.4413 0.999756 19.2044 0.999756 20C0.999756 20.7956 1.31583 21.5587 1.87844 22.1213C2.44104 22.6839 3.20411 23 3.99976 23H19.9998C20.7954 23 21.5585 22.6839 22.1211 22.1213C22.6837 21.5587 22.9998 20.7956 22.9998 20C22.9998 19.2044 22.6837 18.4413 22.1211 17.8787C21.5585 17.3161 20.7954 17 19.9998 17Z" fill="#43DC80"/>
						</svg>
					</Link>
					<Link id="BoxedTab" to={"#"} 
						className= {classnames({ active : activeTab === '5'}) + ' tab-class nav-link'} 
						onClick={() => { toggle('5'); }}
					>
						<svg className="primary-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8 1H4C2.34315 1 1 2.34315 1 4V8C1 9.65685 2.34315 11 4 11H8C9.65685 11 11 9.65685 11 8V4C11 2.34315 9.65685 1 8 1Z" fill="#CBCBCB"/>
							<path d="M20 1H16C14.3431 1 13 2.34315 13 4V8C13 9.65685 14.3431 11 16 11H20C21.6569 11 23 9.65685 23 8V4C23 2.34315 21.6569 1 20 1Z" fill="#CBCBCB"/>
							<path d="M8 13H4C2.34315 13 1 14.3431 1 16V20C1 21.6569 2.34315 23 4 23H8C9.65685 23 11 21.6569 11 20V16C11 14.3431 9.65685 13 8 13Z" fill="#CBCBCB"/>
							<path d="M20 13H16C14.3431 13 13 14.3431 13 16V20C13 21.6569 14.3431 23 16 23H20C21.6569 23 23 21.6569 23 20V16C23 14.3431 21.6569 13 20 13Z" fill="#CBCBCB"/>
						</svg>
					</Link>
				</div>
				{/* <!-- Add Order --> */}
				<Modal className="modal fade" show={newProject} onHide={setNewProject}>
					<div className="" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Add Project</h5>
								<button type="button" className="close"  onClick={()=> setNewProject(false)}><span>&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<form>
									<div className="form-group">
										<label className="text-black font-w500">Project Name</label>
										<input type="text" className="form-control" />
									</div>
									<div className="form-group">
										<label className="text-black font-w500">Dadeline</label>
										<input type="date" className="form-control" />
									</div>
									<div className="form-group">
										<label className="text-black font-w500">Client Name</label>
										<input type="text" className="form-control" />
									</div>
									<div className="form-group">
										<button type="button" className="btn btn-primary">SAVE</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</Modal>
			</div>
			
			<div className="tab-content project-list-group" id="myTabContent">	
				<div className="tab-pane fade active show" id="navpills-1">
					<TabContent activeTab={activeTab}>
						<TabPane tabId="1">
							{projectInfo.map((item,index)=>(
								<div className="card" key={index}>
									<div className="project-info">
										<div className="col-xl-3 col-xxl-3 my-2 col-lg-4 col-sm-6">
											<p className="text-primary mb-2">{item.id}</p>
											<h4 className="title font-w600 mb-3"><Link to={"./post-details"} className="text-black">{item.title1}</Link></h4>
											<div className="text-dark"><i className="fa fa-calendar-o mr-3" aria-hidden="true"></i>Created on Sep 8th, 2020</div>
										</div>
										<div className="col-xl-2 my-2 col-xxl-3 col-lg-4 col-sm-6">
											<div className="d-flex align-items-center">
												<div className="project-media">
													<img src={item.image1} alt="" />
												</div>
												<div className="ml-3">
													<span>Client</span>
													<h5 className="mb-0 pt-1 fs-18 font-w50 text-black">{item.title2}</h5>
												</div>
											</div>
										</div>
										<div className="col-xl-2 my-2 col-xxl-3 col-lg-4 col-sm-6">
											<div className="d-flex align-items-center">
												<div className="project-media">
													<img src={item.image2} alt="" />
												</div>
												<div className="ml-3">
													<span>Person in charge</span>
													<h5 className="mb-0 pt-1 fs-18 font-w500 text-black">{item.title3}</h5>
												</div>
											</div>
										</div>
										<div className="col-xl-3 my-2 col-xxl-3 col-lg-6 col-sm-6">
											<div className="d-flex align-items-center">
												<div className="power-ic">
													<i className="fa fa-bolt" aria-hidden="true"></i>
												</div>
												<div className="ml-3">
													<span>Deadline</span>
													<h5 className="mb-0 pt-1 font-w500 text-black">Tuesday,Sep 29th 2020</h5>
												</div>
											</div>
										</div>
										<div className="col-xl-2 my-2 col-xxl-3 col-lg-6 col-sm-6">
											<div className="d-flex project-status align-items-center">
												{item.status}
												<DropdownBlog />
											</div>
										</div>
									</div>
								</div>
							))}	
						</TabPane>
						<TabPane tabId="2">
							{projectInfo2.map((item,index)=>(
								<div className="card" key={index}>
									<div className="project-info">
										<div className="col-xl-3 col-xxl-3 my-2 col-lg-4 col-sm-6">
											<p className="text-primary mb-2">{item.id}</p>
											<h4 className="title font-w600 mb-3"><Link to={"./post-details"} className="text-black">{item.title1}</Link></h4>
											<div className="text-dark"><i className="fa fa-calendar-o mr-3" aria-hidden="true"></i>Created on Sep 8th, 2020</div>
										</div>
										<div className="col-xl-2 my-2 col-xxl-3 col-lg-4 col-sm-6">
											<div className="d-flex align-items-center">
												<div className="project-media">
													<img src={item.image1} alt="" />
												</div>
												<div className="ml-3">
													<span>Client</span>
													<h5 className="mb-0 pt-1 fs-18 font-w50 text-black">{item.title2}</h5>
												</div>
											</div>
										</div>
										<div className="col-xl-2 my-2 col-xxl-3 col-lg-4 col-sm-6">
											<div className="d-flex align-items-center">
												<div className="project-media">
													<img src={item.image2} alt="" />
												</div>
												<div className="ml-3">
													<span>Person in charge</span>
													<h5 className="mb-0 pt-1 fs-18 font-w500 text-black">{item.title3}</h5>
												</div>
											</div>
										</div>
										<div className="col-xl-3 my-2 col-xxl-3 col-lg-6 col-sm-6">
											<div className="d-flex align-items-center">
												<div className="power-ic">
													<i className="fa fa-bolt" aria-hidden="true"></i>
												</div>
												<div className="ml-3">
													<span>Deadline</span>
													<h5 className="mb-0 pt-1 font-w500 text-black">Tuesday,Sep 29th 2020</h5>
												</div>
											</div>
										</div>
										<div className="col-xl-2 my-2 col-xxl-3 col-lg-6 col-sm-6">
											<div className="d-flex project-status align-items-center">
												{item.status}
												<DropdownBlog />
											</div>
										</div>
									</div>
								</div>
							))}
						</TabPane>
						<TabPane tabId="3">	
							{projectInfo3.map((item,index)=>(
								<div className="card" key={index}>
									<div className="project-info">
										<div className="col-xl-3 col-xxl-3 my-2 col-lg-4 col-sm-6">
											<p className="text-primary mb-2">{item.id}</p>
											<h4 className="title font-w600 mb-3"><Link to={"./post-details"} className="text-black">{item.title1}</Link></h4>
											<div className="text-dark"><i className="fa fa-calendar-o mr-3" aria-hidden="true"></i>Created on Sep 8th, 2020</div>
										</div>
										<div className="col-xl-2 my-2 col-xxl-3 col-lg-4 col-sm-6">
											<div className="d-flex align-items-center">
												<div className="project-media">
													<img src={item.image1} alt="" />
												</div>
												<div className="ml-3">
													<span>Client</span>
													<h5 className="mb-0 pt-1 fs-18 font-w50 text-black">{item.title2}</h5>
												</div>
											</div>
										</div>
										<div className="col-xl-2 my-2 col-xxl-3 col-lg-4 col-sm-6">
											<div className="d-flex align-items-center">
												<div className="project-media">
													<img src={item.image2} alt="" />
												</div>
												<div className="ml-3">
													<span>Person in charge</span>
													<h5 className="mb-0 pt-1 fs-18 font-w500 text-black">{item.title3}</h5>
												</div>
											</div>
										</div>
										<div className="col-xl-3 my-2 col-xxl-3 col-lg-6 col-sm-6">
											<div className="d-flex align-items-center">
												<div className="power-ic">
													<i className="fa fa-bolt" aria-hidden="true"></i>
												</div>
												<div className="ml-3">
													<span>Deadline</span>
													<h5 className="mb-0 pt-1 font-w500 text-black">Tuesday,Sep 29th 2020</h5>
												</div>
											</div>
										</div>
										<div className="col-xl-2 my-2 col-xxl-3 col-lg-6 col-sm-6">
											<div className="d-flex project-status align-items-center">
												{item.status}
												<DropdownBlog />
											</div>
										</div>
									</div>
								</div>
							))}
						</TabPane>
						<TabPane tabId="4">
							{projectInfo4.map((item,index)=>(
								<div className="card" key={index}>
									<div className="project-info">
										<div className="col-xl-3 col-xxl-3 my-2 col-lg-4 col-sm-6">
											<p className="text-primary mb-2">{item.id}</p>
											<h4 className="title font-w600 mb-3"><Link to={"./post-details"} className="text-black">{item.title1}</Link></h4>
											<div className="text-dark"><i className="fa fa-calendar-o mr-3" aria-hidden="true"></i>Created on Sep 8th, 2020</div>
										</div>
										<div className="col-xl-2 my-2 col-xxl-3 col-lg-4 col-sm-6">
											<div className="d-flex align-items-center">
												<div className="project-media">
													<img src={item.image1} alt="" />
												</div>
												<div className="ml-3">
													<span>Client</span>
													<h5 className="mb-0 pt-1 fs-18 font-w50 text-black">{item.title2}</h5>
												</div>
											</div>
										</div>
										<div className="col-xl-2 my-2 col-xxl-3 col-lg-4 col-sm-6">
											<div className="d-flex align-items-center">
												<div className="project-media">
													<img src={item.image2} alt="" />
												</div>
												<div className="ml-3">
													<span>Person in charge</span>
													<h5 className="mb-0 pt-1 fs-18 font-w500 text-black">{item.title3}</h5>
												</div>
											</div>
										</div>
										<div className="col-xl-3 my-2 col-xxl-3 col-lg-6 col-sm-6">
											<div className="d-flex align-items-center">
												<div className="power-ic">
													<i className="fa fa-bolt" aria-hidden="true"></i>
												</div>
												<div className="ml-3">
													<span>Deadline</span>
													<h5 className="mb-0 pt-1 font-w500 text-black">Tuesday,Sep 29th 2020</h5>
												</div>
											</div>
										</div>
										<div className="col-xl-2 my-2 col-xxl-3 col-lg-6 col-sm-6">
											<div className="d-flex project-status align-items-center">
												{item.status}
												<DropdownBlog />
											</div>
										</div>
									</div>
								</div>
							))}
						</TabPane>
						
						<TabPane tabId="5">
							<div className="row">
								{projectInfo5.map((item,index)=>(
									<div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6" key="index">
										<div className="card project-boxed">
											<div className="img-bx">
												<img src={item.imageblog} alt="" className="w-100" />
												{item.result}
											</div>
											<div className="card-header align-items-start">
												<div>
													<p className="fs-14 mb-2 text-primary">{item.id}</p>
													<h6 className="fs-18 font-w500 mb-3"><Link to={"#"} className="text-black user-name">{item.title}</Link></h6>
													<div className="text-dark fs-14 text-nowrap"><i className="fa fa-calendar-o mr-3" aria-hidden="true"></i>Created on Sep 8th, 2020</div>
												</div>
												<DropdownBlog />
											</div>
											<div className="card-body p-0 pb-3">
												<ul className="list-group list-group-flush">
													<li className="list-group-item">
														<span className="mb-0 title">Deadline</span> :
														<span className="text-black ml-2">Monday, Sep 26th 2020</span>
													</li>
													<li className="list-group-item">
														<span className="mb-0 title">Client</span> :
														<span className="text-black ml-2">Kevin Sigh</span>
													</li>
													<li className="list-group-item">
														<span className="mb-0 title">Person in charge</span> :
														<span className="text-black desc-text ml-2">Yuri Hanako</span>
													</li>
												</ul>
											</div>
											
										</div>
									</div>
								))}
							</div>	
						</TabPane>
						<TabPane tabId="6">
							<div className="row">
								{projectInfo6.map((item,index)=>(
									<div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6" key="index">
										<div className="card project-boxed">
											<div className="img-bx">
												<img src={item.imageblog} alt="" className="w-100" />
												{item.result}
											</div>
											<div className="card-header align-items-start">
												<div>
													<p className="fs-14 mb-2 text-primary">{item.id}</p>
													<h6 className="fs-18 font-w500 mb-3"><Link to={"#"} className="text-black user-name">{item.title}</Link></h6>
													<div className="text-dark fs-14 text-nowrap"><i className="fa fa-calendar-o mr-3" aria-hidden="true"></i>Created on Sep 8th, 2020</div>
												</div>
												<DropdownBlog />
											</div>	
											<div className="card-body p-0 pb-3">
												<ul className="list-group list-group-flush">
													<li className="list-group-item">
														<span className="mb-0 title">Deadline</span> :
														<span className="text-black ml-2">Monday, Sep 26th 2020</span>
													</li>
													<li className="list-group-item">
														<span className="mb-0 title">Client</span> :
														<span className="text-black ml-2">Kevin Sigh</span>
													</li>
													<li className="list-group-item">
														<span className="mb-0 title">Person in charge</span> :
														<span className="text-black desc-text ml-2">Yuri Hanako</span>
													</li>
												</ul>
											</div>
											
										</div>
									</div>
								))}
							</div>
						</TabPane>
						<TabPane tabId="7">	
							<div className="row">
								{projectInfo7.map((item,index)=>(
									<div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6" key="index">
										<div className="card project-boxed">
											<div className="img-bx">
												<img src={item.imageblog} alt="" className="w-100" />
												{item.result}
											</div>
											<div className="card-header align-items-start">
												<div>
													<p className="fs-14 mb-2 text-primary">{item.id}</p>
													<h6 className="fs-18 font-w500 mb-3"><Link to={"#"} className="text-black user-name">{item.title}</Link></h6>
													<div className="text-dark fs-14 text-nowrap"><i className="fa fa-calendar-o mr-3" aria-hidden="true"></i>Created on Sep 8th, 2020</div>
												</div>
												<DropdownBlog />
											</div>
											<div className="card-body p-0 pb-3">
												<ul className="list-group list-group-flush">
													<li className="list-group-item">
														<span className="mb-0 title">Deadline</span> :
														<span className="text-black ml-2">Monday, Sep 26th 2020</span>
													</li>
													<li className="list-group-item">
														<span className="mb-0 title">Client</span> :
														<span className="text-black ml-2">Kevin Sigh</span>
													</li>
													<li className="list-group-item">
														<span className="mb-0 title">Person in charge</span> :
														<span className="text-black desc-text ml-2">Yuri Hanako</span>
													</li>
												</ul>
											</div>
											
										</div>
									</div>
								))}
							</div>
						</TabPane>
						<TabPane tabId="8">
							<div className="row">
								{projectInfo8.map((item,index)=>(
									<div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6" key="index">
										<div className="card project-boxed">
											<div className="img-bx">
												<img src={item.imageblog} alt="" className="w-100" />
												{item.result}
											</div>
											<div className="card-header align-items-start">
												<div>
													<p className="fs-14 mb-2 text-primary">{item.id}</p>
													<h6 className="fs-18 font-w500 mb-3"><Link to={"#"} className="text-black user-name">{item.title}</Link></h6>
													<div className="text-dark fs-14 text-nowrap"><i className="fa fa-calendar-o mr-3" aria-hidden="true"></i>Created on Sep 8th, 2020</div>
												</div>
												<DropdownBlog />
											</div>
											<div className="card-body p-0 pb-3">
												<ul className="list-group list-group-flush">
													<li className="list-group-item">
														<span className="mb-0 title">Deadline</span> :
														<span className="text-black ml-2">Monday, Sep 26th 2020</span>
													</li>
													<li className="list-group-item">
														<span className="mb-0 title">Client</span> :
														<span className="text-black ml-2">Kevin Sigh</span>
													</li>
													<li className="list-group-item">
														<span className="mb-0 title">Person in charge</span> :
														<span className="text-black desc-text ml-2">Yuri Hanako</span>
													</li>
												</ul>
											</div>
											
										</div>
									</div>
								))}
							</div>
						</TabPane>
						
					</TabContent>
				</div>
			</div>		
		</Fragment>
	)
}
export default Project;