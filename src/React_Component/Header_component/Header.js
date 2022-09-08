import React,{useState} from "react";
import { Link } from 'react-router-dom';
import "./Header.css";

import AddressDelivery from "./AddressDelivery";
import HeaderCategorySelectBox from './HeaderCategorySelectBox'
import HeaderNavbar from './HeaderNavbar';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { IconButton } from '@material-ui/core';

// import TypeIcon from "@material-ui/icons"

export default function Header() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const categorys = ['category1', 'category2','sadasasdasasd'];
  const itemCount = 5;
  return (
    <div className="header">
      <Link to='/'>
        {/* <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Apal Dukaan"
        /> */}
        <h3 className="header__logo">Apal Dukaan</h3>

      </Link>

      { isLoggedIn ? <AddressDelivery username="Vaibhav" city="Satara" pincode="415538" /> : <AddressDelivery/>}
      

      <div className="header__search">
        <HeaderCategorySelectBox categorys={categorys} />
        <input className="header__searchInput" placeholder='' type="text" />
        {/* search icon material UI */}
        <IconButton><SearchIcon style={{ fontSize: 30 }} /></IconButton>
      </div>

      {/* Header navigation bar */}
      <div className='header__nevigationRight'>
        <HeaderNavbar optionLineOne='Hello Guest' optionLineTwo='Your Account' />
        <HeaderNavbar optionLineOne='Your' optionLineTwo='& Orders' />
        <HeaderNavbar optionLineOne={<ShoppingCartIcon style={{ fontSize: "3rem" }} />} optionClassName='optionLineOneCart' optionLineTwo='Cart' productCount={itemCount} optionLineOneCartCount='optionLineOneCartCount' />
      </div>
    </div>
  );
}
