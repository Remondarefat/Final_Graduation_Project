import {React , useState , useEffect} from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function Layout() {
    const [requests, setRequests] = useState([]);
    const [isloading, setIsloading] = useState(false);

useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/request');
          setRequests(response.data);
          setIsloading(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchdata();
  }, []);
  console.log(requests);
    return <>
        {isloading? <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header text-white  bg-info">
                                <h1 className='text-center'>Reserved Rooms</h1>
                            </div>
                            <div className="card-body">
                                <table className="table table-hover">
                                    <thead>
                                        <tr className="">
                                            <th scope="col">User Name</th>
                                            <th scope="col">Hotel Name</th>
                                            <th scope="col">Room ID</th>
                                            <th scope="col">Hotel Type</th>
                                            <th scope="col">Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {requests.map((request) => (
                                        <tr>
                                            <td>
                                                <div className="font-weight-bold">{request.user.fname} {request.user.lname}</div>
                                                
                                               
                                            </td>
                                            <td>
                                                <div>{request.hotel.name}</div>
                                            </td>
                                            <td>
                                                <div>{request.room.id}</div>
                                            </td>
                                            <td>
                                                <div>{request.room.type}</div>
                                            </td>
                                            <td>
                                               {request.checkin} - {request.checkout}
                                            </td>
                                        </tr>
                                    ))}     
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>:<div className='loading-page'>
                
                </div>}
    </>
}
