import React from 'react'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';
import './Styles/Header.css'

function Header() {
  return (
    <div className="header">
        <div className="header__logo">
            <StorefrontIcon fontSize='large' className='header__logoimage'></StorefrontIcon>
            <h2 className="header__logotitle">eSHOP</h2>

        </div>
        <div className="header__search">
            <input type="text" placeholder='Search' className='header__searchInput'/>
            <SearchIcon fontsize="large" className='header__searchIcon'></SearchIcon>
        </div>
        <div className="header__nav">
            <div className="nav__item">
                <span className="nav__itemLineOne">Hello Guest</span>
                <span className="nav__itemLineTwo">Sign in</span>
            </div>
            <div className="nav__item">
                <span className="nav__itemLineOne">Your</span>
                <span className="nav__itemLineTwo">Shop</span>
            </div>
            <div className="nav__item">
                <ShoppingBasketIcon fontsize="large"></ShoppingBasketIcon>
                <span className="nav__itemLineOne nav__basketCount">0</span>
            </div>
        </div>
    </div>
  )
}

export default Header