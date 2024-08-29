import React, { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import useAuth from "../../../../hooks/useAuth";
import "./style.css";

const Sidebar = () => {
  const { logOut } = useContext(AuthContext);
  const { user } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <nav class="main-menu">
      <ul>
        <li class="has-subnav">
          <img
            src={user?.photoURL}
            width="15%"
            style={{ borderRadius: "50%", margin: " 10px" }}
          />
        </li>
        <li class="has-subnav">
          <a href="/">
            <i class="fa fa-home fa-2x"></i>
            <span class="nav-text">Home</span>
          </a>
        </li>
        <li>
          <a href="/menu">
            <i class="fa fa-book fa-2x"></i>
            <span class="nav-text">Menu</span>
          </a>
        </li>
        <li>
          <a href="/order/salad">
            <i class="fa fa-check-circle" aria-hidden="true"></i>
            <span class="nav-text">Order</span>
          </a>
        </li>
        <li>
          <a href="/dashboard/cart">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            <span class="nav-text">Cart</span>
          </a>
        </li>
        <li>
          <a href="/book-table">
          <i class="fa fa-table" aria-hidden="true"></i>
            <span class="nav-text">Book Table</span>
          </a>
        </li>
        <li>
          <a href="dashboard/users">
            <i class="fa fa-info fa-2x"></i>
            <span class="nav-text">Dashboard</span>
          </a>
        </li>
      </ul>
      <ul class="logout">
        {user?
        <li onClick={handleLogOut}>
          <a>
            <i class="fa fa-power-off fa-2x"></i>
            <span class="nav-text">Logout</span>
          </a>
        </li>:
        <li >
          <a href="/login">
            <i class="fa fa-power-off fa-2x"></i>
            <span class="nav-text">Login</span>
          </a>
        </li>}
      </ul>
    </nav>
  );
};

export default Sidebar;
