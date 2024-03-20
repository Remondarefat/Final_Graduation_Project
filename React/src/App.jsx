import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import AddHotel from './Components/AddHotel/AddHotel';
import Layout from './Components/AdminLayout/Layout';
import AddRoom from './Components/AddRoom/AddRoom';
import Checkout from './Components/Checkout/Checkout';
import EditProfile from './Components/EditProfile/EditProfile';
import Reigster from './Components/Reigster/Reigster';
import AllHotels from './Components/AllHotels/AllHotels';
import Payment from './Components/Payment/Payment';
import AdminRequest from './Components/AdminRequests/AdminRequest';
import NotFound from './Components/NotFound/NotFound';
import HotelRooms from './Components/HotelRooms/HotelRooms';
import RoomDesc from './Components/RoomDesc/RoomDesc';
import Login from './Components/Login/Login';
import UserContextProvider, { UserContext } from './Context/UserContext';
import { useContext, useEffect } from 'react';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ProtectedAdminRoute from './Components/ProtectedAdminRoute/ProtectedAdminRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




function App() {

  let routers = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        // <ProtectedAdminRoute></ProtectedAdminRoute>
        // { path: '/addhotel', element: <AddHotel /> },
        { path: '/addroom/:hotelId', element: <AddRoom /> },

        { path: '/allhotel', element: <AllHotels /> },
          { path: '/adminrequest', element: <AdminRequest /> },
  ]
    },
  { path: '/home', element:<ProtectedRoute><HomePage /> </ProtectedRoute>},
    { path: '/checkout/:hotelId/:roomId', element: <ProtectedRoute><Checkout /></ProtectedRoute> },
    { path: '/editprofile/:id', element: <ProtectedRoute><EditProfile /></ProtectedRoute> },
    { path: '/register', element: <Reigster /> },
    { path: '*', element: <NotFound/> },
    { path: '/payment', element: <ProtectedRoute><Payment /></ProtectedRoute> },
    { path: '/login', element: <Login /> },
    { path: '/hotelrooms', element: <ProtectedRoute><HotelRooms /></ProtectedRoute> },
    { path: '/roomdesc', element: <ProtectedRoute><RoomDesc /></ProtectedRoute> },

  ]);
  let{setUserToken}=useContext(UserContext);
  useEffect(()=>{
    if(localStorage.getItem('userToken')!==null){
      setUserToken(localStorage.getItem('userToken'));
    }
  },[]);
  return <RouterProvider router={routers} />
  
}

export default App;
