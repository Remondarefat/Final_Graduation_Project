import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AddHotel from './Components/AddHotel/AddHotel';
import Layout from './Components/AdminLayout/Layout';
import AddRoom from './Components/AddRoom/AddRoom';
import Checkout from './Components/Checkout/Checkout';
import EditProfile from './Components/EditProfile/EditProfile';
import Reigster from './Components/Reigster/Reigster';
import AllHotels from './Components/AllHotels/AllHotels';
import Payment from './Components/Payment/Payment';

function App() {
  let routers = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { path: '/addhotel', element: <AddHotel /> },
        { path: '/addroom', element: <AddRoom /> },
        { path: '/allhotel', element: <AllHotels /> },
      ]
    },
    { path: '/checkout', element: <Checkout /> },
    { path: '/editprofile', element: <EditProfile /> },
    { path: '/register', element: <Reigster /> },
    { path: '/payment', element: <Payment /> },


  ]);
  return <RouterProvider router={routers} />
}

export default App;
