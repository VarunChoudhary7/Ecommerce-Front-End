import AdminPage from "./Components/AdminPage";
import Home from "./Components/Home";
import Login from "./Components/Login";
import MyOrders from "./Components/MyOrders";
import Order from "./Components/Order";
import Product from "./Components/Product";
import Products from "./Components/Products";
import Signup from "./Components/Signup";
import Navbar from "./Layouts/Navbar";
import { Routes, Route } from "react-router";
import PrivateRoute from "./Routing/PrivateRoute";
import Footer from "./Layouts/Footer";
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (

    <div>
      <div><Toaster /></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<PrivateRoute child={<Login />} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Product />} />
        <Route path="/admin" element={<AdminPage />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;