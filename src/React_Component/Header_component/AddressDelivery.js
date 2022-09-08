import React from 'react'
import './AddressDelivery.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { IconButton } from '@material-ui/core';

function AddressDelivery({ username, city, pincode}) {
    return (
        <div className="header__address">
            {/* delivery icon */}
                <IconButton><LocationOnIcon style={{ fontSize: 30 }}/></IconButton>
            {/* delivery address */}
                <div className="header__deliveryAddress">
                    { username ? <span className="header__deliveryAddressLineOne">Delivery To {username}</span> : <span className="header__deliveryAddressLineOne">Hello User</span>}
                    {city && pincode ? <span className="header__deliveryAddressLineTwo">{city} {pincode}</span> : <span className="header__deliveryAddressLineTwo">Select Your Location</span>}

                 </div>
        </div>    
    )
}

export default AddressDelivery;