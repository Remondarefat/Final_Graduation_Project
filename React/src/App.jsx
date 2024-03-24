import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
// import RegionHotels from './Components/RegionHotels/RegionHotels';
import Layout from './Components/AdminLayout/Layout';
// Import other necessary components
// import logo from './logo.svg';
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
import RegionHotels from './Components/RegionHotels/RegionHotels';
import  { UserContext } from './Context/UserContext';
import { useContext, useEffect, useState } from 'react';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ProtectedAdminRoute from './Components/ProtectedAdminRoute/ProtectedAdminRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



import EditHotel from './Components/EditHotel/EditHotel';
// import EditTest from './Components/EditTest/EditTest';

function App() {
  // Function to handle checkout data
  const [checkoutData, setCheckoutData] = useState(null); // Define checkoutData state
  const handleCheckoutData = (data) => {
    setCheckoutData(data);
  };
  let routers = createBrowserRouter([
    {
      path: '/', element:<Layout />, children: [
        // <ProtectedAdminRoute></ProtectedAdminRoute>
        { path: '/addhotel', element: <ProtectedAdminRoute><AddHotel/></ProtectedAdminRoute> },
        { path: '/addroom/:hotelId/:hotelName', element:<ProtectedAdminRoute><AddRoom /></ProtectedAdminRoute>},

        { path: '/allhotel', element:<ProtectedAdminRoute><AllHotels /></ProtectedAdminRoute> },
        { path: '/adminrequest', element:<ProtectedAdminRoute><AdminRequest /></ProtectedAdminRoute> },
        { path: '/edithotel/:id', element: <ProtectedAdminRoute><EditHotel /></ProtectedAdminRoute> },
      ]
    },
    { path: '/home', element: <HomePage /> },
    { path: '/profile/:id', element: <Profile /> },
    { path: '/checkout/:hotelId/:roomId', element: <ProtectedRoute><Checkout onCheckoutData={handleCheckoutData} /></ProtectedRoute> },
    { path: '/editprofile/:id', element: <ProtectedRoute><EditProfile /></ProtectedRoute> },
    { path: '/register', element: <Register /> },
    { path: '*', element: <NotFound /> },
    { path: '/payment', element: <ProtectedRoute><Payment  {...checkoutData} /></ProtectedRoute> },
    { index: '/login', element: <Login /> },
    { path: '/hotelrooms/:hotelId', element: <ProtectedRoute><HotelRooms /></ProtectedRoute> },
    { path: '/roomdesc/:hotelId/:roomId', element: <ProtectedRoute><RoomDesc /></ProtectedRoute> },
    { path: '/region/:regionName', element: <ProtectedRoute><RegionHotels /></ProtectedRoute> },
  ]);
  let { setUserToken } = useContext(UserContext);
  useEffect(() => {
    if (localStorage.getItem('userToken') !== null) {
      setUserToken(localStorage.getItem('userToken'));
    }
  }, []);
  return <RouterProvider router={routers} />

}

export default App;