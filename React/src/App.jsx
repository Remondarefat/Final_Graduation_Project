import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React, { useState } from 'react'; // Import useState
import HomePage from './Components/HomePage/HomePage';
import Checkout from './Components/Checkout/Checkout';
import Payment from './Components/Payment/Payment';
import Layout from './Components/AdminLayout/Layout';
import Profile from './Components/Profile/Profile';
import Register from './Components/Register/Register';
import AddHotel from './Components/AddHotel/AddHotel';
import AddRoom from './Components/AddRoom/AddRoom';
import EditProfile from './Components/EditProfile/EditProfile';
import AllHotels from './Components/AllHotels/AllHotels';
import AdminRequest from './Components/AdminRequests/AdminRequest';
import NotFound from './Components/NotFound/NotFound';
import HotelRooms from './Components/HotelRooms/HotelRooms';
import RoomDesc from './Components/RoomDesc/RoomDesc';
import Login from './Components/Login/Login';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ProtectedAdminRoute from './Components/ProtectedAdminRoute/ProtectedAdminRoute';
import { BrowserRouter as Router } from 'react-router-dom';
import EditHotel from './Components/EditHotel/EditHotel';
import UserContextProvider, { UserContext } from './Context/UserContext';
import { useContext, useEffect } from 'react';

function App() {
  const [checkoutData, setCheckoutData] = useState({}); // State to store checkout data

  let { setUserToken } = useContext(UserContext);
  useEffect(() => {
    if (localStorage.getItem('userToken') !== null) {
      setUserToken(localStorage.getItem('userToken'));
    }
  }, []);

  // Function to handle checkout data
  const handleCheckoutData = (data) => {
    setCheckoutData(data);
  };

  let routers = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/addhotel', element: <AddHotel /> },
        { path: '/addroom/:hotelId/:hotelName', element: <AddRoom /> },
        { path: '/allhotel', element: <AllHotels /> },
        { path: '/adminrequest', element: <AdminRequest /> },
        { path: '/edithotel/:id', element: <EditHotel /> },
      ]
    },
    { path: '/home', element: <ProtectedRoute><HomePage /></ProtectedRoute> },
    { path: '/profile/:id', element: <Profile /> },
    { path: '/checkout/:hotelId/:roomId', element: <ProtectedRoute><Checkout onCheckoutData={handleCheckoutData} /></ProtectedRoute> },
    { path: '/editprofile/:id', element: <ProtectedRoute><EditProfile /></ProtectedRoute> },
    { path: '/register', element: <Register /> },
    { path: '*', element: <NotFound /> },
    { path: '/payment', element: <ProtectedRoute><Payment {...checkoutData} /></ProtectedRoute> },
    { path: '/login', element: <Login /> },
    { path: '/hotelrooms/:hotelId', element: <ProtectedRoute><HotelRooms /></ProtectedRoute> },
    { path: '/roomdesc/:roomId', element: <ProtectedRoute><RoomDesc /></ProtectedRoute> },
  ]);

  return (
    <UserContextProvider>
      <RouterProvider router={routers} />
    </UserContextProvider>
  );
}

export default App;
