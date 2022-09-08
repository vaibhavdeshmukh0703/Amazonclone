import React from 'react'
import './SecondSubHeaderNavLink.css';
function SecondSubHeaderNavLink({navlink}) {
    return (
        <div className='SecondSubHeader__navbar'>
             <span className="SecondSubHeader__navLink">{navlink}</span>
        </div>
    )
}

export default SecondSubHeaderNavLink;