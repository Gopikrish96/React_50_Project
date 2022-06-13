import React from 'react'

function Header() {
  return (
    <div className="eader">
        <div className="header__icon"></div>
        <div className="header__search"></div>
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
                <span className="nav__itemLineOne">Basket</span>
                <span className="nav__itemLineTwo">0</span>
            </div>
        </div>
    </div>
  )
}

export default Header