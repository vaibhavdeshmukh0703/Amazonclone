import React from 'react';
import './SecondSubHeaderNavLink.css';

import SecondSubHeaderNavLink from "./SecondSubHeaderNavLink";

function SecondSubHeader() {
    return (
        <div className="SecondSubHeader">
          
                <SecondSubHeaderNavLink navlink="Your Apal Dukaan" />
                <SecondSubHeaderNavLink navlink="Your Browsing History" />
                <SecondSubHeaderNavLink navlink="Recomended For You" />
                <SecondSubHeaderNavLink navlink="Improve Your Recomandation" />
                <SecondSubHeaderNavLink navlink="Your Profile" />
                <SecondSubHeaderNavLink navlink="Learn More" />
            
        </div>
    )
}

export default SecondSubHeader
