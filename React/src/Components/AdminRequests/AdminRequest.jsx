import React from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default function Layout() {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header text-white  bg-info">
                                <h1 className='text-center'>Requests</h1>
                            </div>
                            <div className="card-body">
                                <table className="table table-hover">
                                    <thead>
                                        <tr className="">
                                            <th scope="col">Details</th>
                                            <th scope="col">Duration</th>
                                            <th className='text-center' scope="col ">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Repeat this tr for each request */}
                                        <tr>
                                            <td>
                                                <div className="font-weight-bold">John Doe</div>
                                                <div>Hilton Alex, Single Room</div>
                                            </td>
                                            <td>
                                                12 Mar 2021 - 15 Mar 2021
                                            </td>
                                            <td className="text-center">
                                                <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} className="mr-2 cursor-pointer me-3" />
                                                <FontAwesomeIcon icon={faTimesCircle} style={{ color: 'red' }} className="cursor-pointer" />
                                            </td>
                                        </tr>
                                        {/* End repeat */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
