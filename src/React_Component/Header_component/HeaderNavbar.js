import React from 'react'
import './HeaderNavbar.css';
function HeaderNavbar({optionLineOne, optionLineTwo,optionClassName,productCount,optionLineOneCartCount}) {
  
    return (
        <React.Fragment>
        <div className="header__navbar ">
            <div className={`header__option ${optionClassName}`}>
            { productCount ? <><div className={optionLineOneCartCount}>
              <span className="header__productCount">{productCount}</span>
            <span className="header__optionLineOne"> {optionLineOne}</span>
             </div>  <span className="header__optionLineTwo"> {optionLineTwo}</span></>: 
             <>
              <span className="header__optionLineOne"> {optionLineOne}</span>
            <span className="header__optionLineTwo"> {optionLineTwo}</span>
             </>
              
               }
            </div>
      </div>
        </React.Fragment>
    )
}

export default HeaderNavbar
