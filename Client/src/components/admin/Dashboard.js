//this component is not currently in use, it is just here for future updates
import React  from 'react';
import Sidebar from "./features/sidebar/Sidebar";
import Topbar from "./features/topbar/Topbar";
import "./Dashboard.css";
import Home from "./pages/home/adminHome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct  from "./pages/newProduct/NewProduct";

function AdminDashboard()
 {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/adminhome">
            <Home />
          </Route>
          {/* <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default AdminDashboard;