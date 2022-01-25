import AdminPage from "./Components/AdminPage";
import Home from "./Components/Home";
import Login from "./Components/Auth/Login";
import MyOrders from "./Components/MyOrders";
import Order from "./Components/Order";
import Product from "./Components/Products/Product";
import Products from "./Components/Products/Products";
import Signup from "./Components/Auth/Signup";
import Navbar from "./Layouts/Navbar";
import { Routes, Route } from "react-router";
import PrivateRoute from "./Routing/PrivateRoute";
import Footer from "./Layouts/Footer";
import { Toaster } from 'react-hot-toast'
import Admin from "./Components/Admin/Admin";

const App = () => {
  return (

    <div>
      <div><Toaster /></div>
      <Navbar />
      <Routes>
       
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Products />} />
        <Route path='/shop/:productId' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/admin' element={<Admin />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;