import React from 'react'
import {Link} from 'react-router-dom';
import './SubHeaderNavLink.css';

function SubHeaderNavLink({link,linkName}) {
    
    return (
        <div className="SubHeader__navbar">   
          <Link to={link}><span className="SubHeader__navLink">{linkName}</span></Link>
        </div>
    )
}

export default SubHeaderNavLink;
