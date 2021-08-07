import React, { useState, useRef, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
// import data from "./tableData.js";

const PatientTable = () => {
  let applications = [];
  applications = JSON.parse(localStorage.getItem("loanApplications"));
  const [appfromlocalStorage, setAppfromlocalStorage] = useState(applications);

  return (
    <div className="col-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Loan Applications</h4>
        </div>
        <div className="card-body">
          <div className="w-100 table-responsive">
            <div id="patientTable_basic_table" className="dataTables_wrapper">
              <table
                id="example5"
                className="display dataTable no-footer w-100"
                style={{ minWidth: 845 }}
                role="grid"
                aria-describedby="example5_info"
              >
                <thead>
                  <tr role="row">
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Patient ID: activate to sort column ascending"
                      style={{ width: 73 }}
                    >
                      Patient ID
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Date Check in: activate to sort column ascending"
                      style={{ width: 100 }}
                    >
                      Date Check in
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Patient Name: activate to sort column ascending"
                      style={{ width: 100 }}
                    >
                      Patient Name
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Doctor Assgined: activate to sort column ascending"
                      style={{ width: 120 }}
                    >
                      Doctor Assgined
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Disease: activate to sort column ascending"
                      style={{ width: 62 }}
                    >
                      Disease
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Status: activate to sort column ascending"
                      style={{ width: 106 }}
                    >
                      Status
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Room no: activate to sort column ascending"
                      style={{ width: 66 }}
                    >
                      Room no
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Action: activate to sort column ascending"
                      style={{ width: 47 }}
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {(() => {
                    if (appfromlocalStorage) {
                      {
                        appfromlocalStorage.map((numList, i) => (
                          <tr key={i}>{<td key={i}>{numList.amount}</td>}</tr>
                        ));
                      }
                    }
                  })()}

                  {/* <tr role="row"  >
                   
             

                    <td >#P-00001</td>
                    <td>26/02/2020, 12:42 AM</td>
                    <td>Tiger Nixon</td>
                    <td>Dr. Cedric</td>
                    <td>Cold &amp; Flu</td>
                    <td>
                      <span className="badge light badge-danger">
                        <i className="fa fa-circle text-danger mr-1" />
                        New Patient
                      </span>
                    </td>
                    <td>AB-001</td>
                    <td>
                      <Dropdown className="dropdown ml-auto text-right">
                        <Dropdown.Toggle
                          variant=""
                          className="btn-link i-false"
                          data-toggle="dropdown"
                        >
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <circle fill="#000000" cx={5} cy={12} r={2} />
                              <circle fill="#000000" cx={12} cy={12} r={2} />
                              <circle fill="#000000" cx={19} cy={12} r={2} />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item>Accept Patient</Dropdown.Item>
                          <Dropdown.Item>Reject Order</Dropdown.Item>
                          <Dropdown.Item>View Details</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientTable;
