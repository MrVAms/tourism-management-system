import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SendIcon from "@mui/icons-material/Send";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <div className="header">
      <Link to="/home">
        <div>
          <img src="./assets/logo.png" alt="" />
        </div>
      </Link>

      <div className="header__center">
        <input type="text" className="header__search" />
        <Link to="/search">
          <SearchIcon />
        </Link>
      </div>
      <Link to="/Login">
        <div className="header__middlecenter">
          <AccountCircleIcon />
        </div>
      </Link>
      <Link to="/Checkout">
        <div>
          <ShoppingCart />
          <span>{basket.length}</span>
        </div>
      </Link>

      <Link to="/contact">
        <div classname="header__right">
          <SendIcon />
        </div>
      </Link>
    </div>
  );
}

export default Header;
