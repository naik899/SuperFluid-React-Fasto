import React,{Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import {Dropdown, Modal} from 'react-bootstrap';
import { TabContent, TabPane, } from 'reactstrap';
import classnames from 'classnames';
import swal from "sweetalert";
import PerfectScrollbar from "react-perfect-scrollbar";

import {addTodo, deleteTodo} from '../../../store/actions/index';
import {useSelector, useDispatch} from 'react-redux';
//import ImageBlog from '../Fasto/Contacts/ImageBlog';
import ContactsData from '../Fasto/Contacts/ContactsData';

//Images
import user from './../../../images/contacts/user.jpg';
import contact12 from './../../../images/contacts/Untitled-12.jpg';
import contact11 from './../../../images/contacts/Untitled-11.jpg';
import contact10 from './../../../images/contacts/Untitled-10.jpg';
import contact9 from './../../../images/contacts/Untitled-9.jpg';
import contact8 from './../../../images/contacts/Untitled-8.jpg';
import contact7 from './../../../images/contacts/Untitled-7.jpg';
import contact6 from './../../../images/contacts/Untitled-6.jpg';
import contact5 from './../../../images/contacts/Untitled-5.jpg';
import contact4 from './../../../images/contacts/Untitled-4.jpg';
import contact3 from './../../../images/contacts/Untitled-3.jpg';
import contact2 from './../../../images/contacts/Untitled-2.jpg';
import contact1 from './../../../images/contacts/Untitled-1.jpg';

const initialList =[
	//{ id:1,  image: contact12, username: 'Nindy Leeacovic', occupation: 'Zero Two Studios'  },
	//{ id:2,  image: contact11, username: 'Ivankov Shee', occupation: 'Beep Beep Inc'  },
	//{ id:3,  image: contact10, username: 'Henry Charlotte', occupation: 'UI Designer'  },
	//{ id:4,  image: contact9 , username: 'Geovanny', occupation: 'UI Designer'  },
	//{ id:5,  image: contact8 , username: 'Franklin Jr.', occupation: 'Zero Two Studios'  },
	{ id:6,  image: contact7 , username: 'Engeline O’conner.', occupation: 'Beep Beep Inc'  },
	{ id:7,  image: contact6, username: 'Nindy Leeacovic', occupation: 'Zero Two Studios'  },
	{ id:8,  image: contact5, username: 'Ivankov Shee', occupation: 'Beep Beep Inc'  },
	{ id:9,  image: contact4, username: 'Henry Charlotte', occupation: 'UI Designer'  },
	{ id:10,  image: contact3 , username: 'Geovanny', occupation: 'UI Designer'  },
	{ id:11,  image: contact2 , username: 'Franklin Jr.', occupation: 'Zero Two Studios'  },
	{ id:12,  image: contact1 , username: 'Engeline O’conner.', occupation: 'Beep Beep Inc'  },
];

const Contacts = () =>{
	//tab function 
	const [activeTab, setActiveTab] = useState('1');
	const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
	
	// This is Model function
	const [addContact, setAddContact] = useState(false);
	
	//Remove and delete List from Blog 'function'
	const [data, setData] = useState(initialList);
	function handleRemove(id){
		const newList = data.filter((item) => item.id !== id);
		setData(newList); 
	}
    
	
	// This is load more function 
	const [refresh, setRefresh] = useState(false);
	const onClick = () => {
		setRefresh(true);
		setTimeout(() => {
		  setData([
			...data,
			data[Math.floor(Math.random() * Math.floor(data.length - 1))],
		  ]);
		  setRefresh(false);
		}, 1000);
	};
	

	//Add and delete data from list
	const dispatch = useDispatch();	
    let list = useSelector((state) => state.todoReducers.list);
	const [list_name, setInputData] = useState('');
	const [list_occupation, setInputData1] = useState('');
	
	const dataArr = [];
	
	
	//console.log(list);
	 
	//Error message 
	function onAddData(e){
		e.preventDefault();
		var error = false;
		var errorMsg = '';
		if(list_name === ''){
			error = true;
			errorMsg = 'Please fill name.';
		}else if(list_occupation === ''){
			error = true;
			errorMsg = 'Please fill occupation.';
		}
	  
		if(!error){
			//fetch data from Form
			dataArr.list_name =  list_name;
			dataArr.list_occupation =  list_occupation;
			dataArr.file =  file;
		  
			dispatch(addTodo(dataArr));
            setInputData('');
            setInputData1('');
			setAddContact(false);
			swal('Good job!', 'Successfully Added', "success");
		}else{
			swal('Oops', errorMsg, "error");
		}
    }
	
	//For Image upload in ListBlog
	const [file, setFile] = React.useState(null)
    console.log(file);
    const fileHandler = (e) => {
        setFile(e.target.files[0])
    }
	
	
	return(
		<Fragment>
			<div className="project-nav">
				<div className="card-action card-tabs  mr-auto">
					<ul className="nav nav-tabs style-2">
						<li className="nav-item">
							<Link to ={"#"} className= {classnames({ active : activeTab === '1'}) + ' nav-link'} onClick={() => { toggle('1'); }}>All Contacs
								<span className="ml-1 badge badge-primary shadow-primary">154</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to ={"#"} className= {classnames({ active : activeTab === '2'}) + ' nav-link'} onClick={() => { toggle('2'); }}>Pending Invitation
								<span className="ml-1 badge shadow-warning  badge-warning">6</span>
							</Link>
						</li>	
					</ul>
				</div>
				<div className="d-flex align-items-center">
					<Link to={"#"} id="btn-add-contact" onClick={()=> setAddContact(true)} className="btn btn-primary rounded text-white">+ New Contacts</Link>
					<div className="switch">
						<Link to={"#"} className="mx-4  view-list active-view">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M3.99976 7H19.9998C20.7954 7 21.5585 6.68393 22.1211 6.12132C22.6837 5.55871 22.9998 4.79565 22.9998 4C22.9998 3.20435 22.6837 2.44129 22.1211 1.87868C21.5585 1.31607 20.7954 1 19.9998 1H3.99976C3.20411 1 2.44104 1.31607 1.87844 1.87868C1.31583 2.44129 0.999756 3.20435 0.999756 4C0.999756 4.79565 1.31583 5.55871 1.87844 6.12132C2.44104 6.68393 3.20411 7 3.99976 7Z" fill="#CBCBCB"/>
								<path d="M19.9998 9H3.99976C3.20411 9 2.44104 9.31607 1.87844 9.87868C1.31583 10.4413 0.999756 11.2044 0.999756 12C0.999756 12.7956 1.31583 13.5587 1.87844 14.1213C2.44104 14.6839 3.20411 15 3.99976 15H19.9998C20.7954 15 21.5585 14.6839 22.1211 14.1213C22.6837 13.5587 22.9998 12.7956 22.9998 12C22.9998 11.2044 22.6837 10.4413 22.1211 9.87868C21.5585 9.31607 20.7954 9 19.9998 9Z" fill="#CBCBCB"/>
								<path d="M19.9998 17H3.99976C3.20411 17 2.44104 17.3161 1.87844 17.8787C1.31583 18.4413 0.999756 19.2044 0.999756 20C0.999756 20.7956 1.31583 21.5587 1.87844 22.1213C2.44104 22.6839 3.20411 23 3.99976 23H19.9998C20.7954 23 21.5585 22.6839 22.1211 22.1213C22.6837 21.5587 22.9998 20.7956 22.9998 20C22.9998 19.2044 22.6837 18.4413 22.1211 17.8787C21.5585 17.3161 20.7954 17 19.9998 17Z" fill="#CBCBCB"/>
							</svg>
						</Link>
						<Link to={"#"} className=" view-grid">
							<svg className="primary-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8 1H4C2.34315 1 1 2.34315 1 4V8C1 9.65685 2.34315 11 4 11H8C9.65685 11 11 9.65685 11 8V4C11 2.34315 9.65685 1 8 1Z" fill="#43DC80"/>
								<path d="M20 1H16C14.3431 1 13 2.34315 13 4V8C13 9.65685 14.3431 11 16 11H20C21.6569 11 23 9.65685 23 8V4C23 2.34315 21.6569 1 20 1Z" fill="#43DC80"/>
								<path d="M8 13H4C2.34315 13 1 14.3431 1 16V20C1 21.6569 2.34315 23 4 23H8C9.65685 23 11 21.6569 11 20V16C11 14.3431 9.65685 13 8 13Z" fill="#43DC80"/>
								<path d="M20 13H16C14.3431 13 13 14.3431 13 16V20C13 21.6569 14.3431 23 16 23H20C21.6569 23 23 21.6569 23 20V16C23 14.3431 21.6569 13 20 13Z" fill="#43DC80"/>
							</svg>
						</Link>
					</div>
				</div>
				{/* <!-- Modal --> */}
				<Modal className="modal fade" id="addContactModal"  show={addContact} onHide={setAddContact}>
					<div className="" role="document">
						<div className="">
							<form id="addContactModalTitle" onSubmit={onAddData}>
								<div className="modal-header">
									<h4 className="modal-title fs-20">Add Contact</h4>
									<button type="button" className="close" onClick={()=> setAddContact(false)} data-dismiss="modal"><span>&times;</span>
									</button>
								</div>
								<div className="modal-body">
									<i className="flaticon-cancel-12 close" data-dismiss="modal"></i>
									<div className="add-contact-box">
										<div className="add-contact-content">
											<div className="image-placeholder">	
												<div className="avatar-edit">
													<input type="file" onChange={fileHandler} id="imageUpload"
														onClick={(event) => setFile(event.target.value)}
													/> 					
													<label htmlFor="imageUpload" name=''  ></label>
												</div>
												<div className="avatar-preview">
													<div id="imagePreview">
														<img src={file? URL.createObjectURL(file) : user} alt={file? file.name : null}/>
													</div>
												</div>
												{/*<ImageBlog></ImageBlog>*/}
											</div>
											<div className="form-group">
												<label className="text-black font-w500">Name</label>
												<div className="contact-name">
													<input type="text" id="c-name" className="form-control"  autocomplete="off"
														value={list_name}
														onChange={(event) => setInputData(event.target.value)}
														placeholder="Name"
													/>
													<span className="validation-text"></span>
												</div>
											</div>
											<div className="form-group">
												<label className="text-black font-w500">Occupation</label>
												<div className="contact-occupation">
													<input type="text"  id="c-occupation" autocomplete="off"
														value={list_occupation} 
														onChange={(event) => setInputData1(event.target.value)}
														className="form-control" placeholder="Occupation" 
													/>
												</div>
											</div>
											
										</div>
									</div>
								</div>
								<div className="modal-footer">
									{/*<button type="submit" id="btn-edit" className="float-left btn btn-primary">Save</button>*/}
									<button type="button"  className="btn btn-danger" onClick={()=> setAddContact(false)}> <i className="flaticon-delete-1"></i> Discard</button>
									<button id="btn-add" className="btn btn-primary">Add</button> 
								</div>
							</form>
						</div>
					</div>
				</Modal>				
			</div>	
			<div className="tab-content">
				<div className="tab-pane fade show active" id="navpills-1" >
					<TabContent activeTab={activeTab}>
						<TabPane tabId="1">
							<PerfectScrollbar className="row dz-scroll  loadmore-content searchable-items list" id="allContactListContent">
								<div className="items items-header-section">
								</div>
								
								{data.map((item)=>(	
									<div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items" key={item.id}>
										<div className="card contact-bx item-content">
											<div className="card-header border-0">
												<div className="action-dropdown">
													<Dropdown className="">
														<Dropdown.Toggle variant="" as="div" className="i-false">
															<Link to={"#"} data-toggle="dropdown" aria-expanded="false">
																<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
																	<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
																	<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
																</svg>
															</Link>
														</Dropdown.Toggle>	
														<Dropdown.Menu className="dropdown-menu-right" alignRight={true}>
															<Dropdown.Item className="delete text-danger"  onClick={() => handleRemove(item.id)}>Delete</Dropdown.Item>
														</Dropdown.Menu>
													</Dropdown>
												</div>
											</div>
											<div className="card-body user-profile">
												<div className="image-bx">
													<img src={item.image}  alt="" className="rounded-circle" />
													<span className="active"></span>
												</div>
												<div className="media-body user-meta-info">
													<h6 className="fs-20 font-w500 my-1"><Link to={"./app-profile"} className="text-black user-name" data-name="Engeline O’conner">{item.username}</Link></h6>
													<p className="fs-14 mb-3 user-work" data-occupation="UI Designer">{item.occupation}</p>
													<ul>
														<li><Link to={"#"}><i className="fa fa-phone" aria-hidden="true"></i></Link></li>
														<li><Link to={"./messages"}><i className="las la-sms"></i></Link></li>
														<li><Link to={"#"}><i className="fa fa-video-camera" aria-hidden="true"></i></Link></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								))}
								
								{ list.map((elem) =>{return(
									<div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items" key={elem.id}>
										<div className="card contact-bx item-content">
											<div className="card-header border-0">
												<div className="action-dropdown">
													<Dropdown className="">
														<Dropdown.Toggle variant="" as="div" className="i-false">
															<Link to={"#"} data-toggle="dropdown" aria-expanded="false">
																<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
																	<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
																	<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
																</svg>
															</Link>
														</Dropdown.Toggle>	
														<Dropdown.Menu className="dropdown-menu-right" alignRight={true}>
															<Dropdown.Item className="delete text-danger" onClick={() => dispatch(deleteTodo(elem.id))}>Delete</Dropdown.Item>
														</Dropdown.Menu>
													</Dropdown>
												</div>
											</div>
											<div className="card-body user-profile">
												<div className="image-bx">
													<img src={(elem.data.file)? URL.createObjectURL(elem.data.file) : user}  alt="" className="rounded-circle" />
													<span className="active"></span>
												</div>
												<div className="media-body user-meta-info">
													<h6 className="fs-20 font-w500 my-1"><Link to={"./app-profile"} className="text-black user-name" data-name="Alan Green">{elem.data.list_name}</Link></h6>
													<p className="fs-14 mb-3 user-work" data-occupation="UI Designer">{elem.data.list_occupation}</p>
													<ul>
														<li><Link to={"#"} ><i className="fa fa-phone" aria-hidden="true"></i></Link></li>
														<li><Link to={"./messages"}><i className="las la-sms"></i></Link></li>
														<li><Link to={"#"}><i className="fa fa-video-camera" aria-hidden="true"></i></Link></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								)})}
							</PerfectScrollbar>
							<div className="row">
								<div className="col-xl-12 d-flex justify-content-center">
									<Link to={"#"} className="btn btn-outline-primary dz-load-more"  onClick={() => onClick()}>
										Load More<span>&#187;</span>{" "}
										{refresh && <i className="fa fa-refresh"></i>}
									</Link>
								</div>
							</div>
						</TabPane>	
						<TabPane tabId="2">
							<ContactsData />
						</TabPane>
					</TabContent> 	
				</div>
			</div>		
		</Fragment>
	)
}
export default Contacts;