import React from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import './SellerDashboard.css';

import SellerDashboardleftnavlinks from './Seller_Dashboard_left_navlinks'
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import SellerImage from '../../image/profile.jpeg'

import UploadProduct from './UploadProduct';
import Profile from './Profile';
function SellerDashboard() {
    return (
        <div className="sellerDashboard">
            <Router>
            <header className="sellerDashboard__header">
                <div className="sellerDashboard__headerLeft">
                    <h3>Apal Dukaan</h3>
                </div>
                <div className="sellerDashboard__headerRight">
                   <Link to='/logout'>
                       <span className="sellerDashboard__headerRightLogoutButton">Logout</span>
                    </Link>
                </div>
                
            </header>

           <main className='sellerDashboard__main'>
                <div className="sellerDashBoard__sidebar">
                    <center>
                            <img src={SellerImage} className="seller-logo" alt="Seller"/>
                            <h3>Vaibhav Deshmukh</h3><hr/>
                    </center>    
                    <div className="sellerDashBoard__option">
                            <Link to="/seller/home"><span className="sellerDashboard__link"><SellerDashboardleftnavlinks icon={<HomeTwoToneIcon/>} linkname='Home'/></span></Link>
                            <Link to="/dashboard/profile"><span className="sellerDashboard__link"><SellerDashboardleftnavlinks icon={<PersonOutlineTwoToneIcon/>} linkname='Profile'/></span></Link>
                            <Link to="/dashboard/uploadProduct"><span className="sellerDashboard__link"><SellerDashboardleftnavlinks icon={<PersonOutlineTwoToneIcon/>} linkname='Upload Product'/></span></Link>                 
                    </div>
                </div>
                        
                    
                <div className="sellerDashboard__maincontent">
                        <Switch>
                                <Route exact path="/dashboard/uploadProduct"><UploadProduct/></Route>
                                <Route exact path="/dashboard/profile"><Profile/></Route>
                        </Switch>
                </div>
              
           </main>
           </Router>  
        </div>
    )
}

export default SellerDashboard
