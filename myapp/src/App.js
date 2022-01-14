import AdminPage from "./Components/AdminPage";
import Home from "./Components/Home";
import Login from "./Components/Login";
import MyOrders from "./Components/MyOrders";
import Order from "./Components/Order";
import Product from "./Components/Product";
import Products from "./Components/Products";
import Signup from "./Components/Signup";

const App = () => {
  return (
    <div>
      <Home />
      <Login />
      <Signup />
      <Products />
      <Product />
      <Order />
      <MyOrders />
      <AdminPage />

    </div>
  );
}

export default App;