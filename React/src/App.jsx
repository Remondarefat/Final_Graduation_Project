import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import RegionHotels from './Components/RegionHotels/RegionHotels';
import Register from './Components/Register/Register';
import Layout from './Components/AdminLayout/Layout';
// Import other necessary components
import logo from './logo.svg';
import './App.css';
import AddHotel from './Components/AddHotel/AddHotel';
import AddRoom from './Components/AddRoom/AddRoom';
import Checkout from './Components/Checkout/Checkout';
import EditProfile from './Components/EditProfile/EditProfile';
import AllHotels from './Components/AllHotels/AllHotels';
import AdminRequest from './Components/AdminRequests/AdminRequest';



// Separate routes for admin and general users
const adminRoutes = [
  { path: '/addhotel', element: <AddHotel /> },
  { path: '/addroom', element: <AddRoom /> },
  { path: '/allhotel', element: <AllHotels /> },
  { path: '/adminrequest', element: <AdminRequest /> },
];

const generalRoutes = [
  { path: '/home', element: <HomePage /> },
  { path: '/region/:regionName', element: <RegionHotels /> },
  { path: '/register', element: <Register /> },
  // Include other routes as necessary
];

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: adminRoutes,
  },
  ...generalRoutes,
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
