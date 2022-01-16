import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

function Header  () {
    return (
        <div className ="header" >
           <Link to='/'>
            <img className ="header__icon"
            src ="https://i.pinimg.com/originals/2e/cf/73/2ecf7364cd78b7222311518159a72179.jpg"
            alt =""></img>
            </Link>

                  

            <div className ='header__center'>
            
           
            <input type ="text"/>
            <SearchIcon/>

            </div>
            <div className ="header__right" >
                <p>Login</p>
                <ExpandMoreIcon/>
                <AccountCircleIcon/>
            </div>
        </div>
    )
}

export default Header
