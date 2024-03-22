import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import RegionHotels from './Components/RegionHotels/RegionHotels';
import Layout from './Components/AdminLayout/Layout';
// Import other necessary components
import logo from './logo.svg';
import './App.css';
import Profile from './Components/Profile/Profile';
import Register from './Components/Register/Register';
import AddHotel from './Components/AddHotel/AddHotel';
import AddRoom from './Components/AddRoom/AddRoom';
import Checkout from './Components/Checkout/Checkout';
import EditProfile from './Components/EditProfile/EditProfile';
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



import EditHotel from './Components/EditHotel/EditHotel';

function App() {

  let routers = createBrowserRouter([
    {
      path: '/', element: <ProtectedAdminRoute><Layout /></ProtectedAdminRoute>, children: [
        // <ProtectedAdminRoute></ProtectedAdminRoute>
        { path: '/addhotel', element: <AddHotel /> },
        { path: '/addroom/:hotelId/:hotelName', element:<ProtectedAdminRoute><AddRoom /></ProtectedAdminRoute>  },

        { path: '/allhotel', element:<ProtectedAdminRoute><AllHotels /></ProtectedAdminRoute>  },
          { path: '/adminrequest', element:<ProtectedAdminRoute><AdminRequest /> </ProtectedAdminRoute> },
      { path: '/edithotel/:id', element: <EditHotel /> },
  ]
    },
  { path: '/home', element:<ProtectedRoute><HomePage /> </ProtectedRoute>},
  { path: '/profile/:id', element:<Profile /> },
    { path: '/checkout/:hotelId/:roomId', element: <ProtectedRoute><Checkout /></ProtectedRoute> },
    { path: '/editprofile/:id', element: <ProtectedRoute><EditProfile /></ProtectedRoute> },
    { path: '/register', element: <Register /> },
    { path: '*', element: <NotFound/> },
    { path: '/payment', element: <ProtectedRoute><Payment /></ProtectedRoute> },
    { path: '/login', element: <Login /> },
    { path: '/hotelrooms/:hotelId', element: <ProtectedRoute><HotelRooms /></ProtectedRoute> },
    { path: '/roomdesc/:roomId', element: <ProtectedRoute><RoomDesc /></ProtectedRoute> },
 
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
