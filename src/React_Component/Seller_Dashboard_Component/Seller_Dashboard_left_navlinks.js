import React from 'react'

function Seller_Dashboard_left_navlinks({icon,linkname}) {
    return (
        <>      
                {icon}<span className="sellerDashboard__linkName"> {linkname}</span>  
        </>
    )
}

export default Seller_Dashboard_left_navlinks
