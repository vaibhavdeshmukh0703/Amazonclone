import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import './App.css';

import Headers from './React_Component/Header';
import Orders from './React_Component/Body_component/Orders';
import Footer from './React_Component/Footer_component/Footer';
import Home from './React_Component/Body_component/Home';
import Mobiles from './React_Component/Body_component/Mobiles';
import SellerDashboard from './React_Component/Seller_Dashboard_Component/SellerDashboard';
import SellerLogin from './React_Component/Seller_Dashboard_Component/Seller_Login';
import UploadProduct from './React_Component/Seller_Dashboard_Component/UploadProduct';
function App() {
  return (
    <Router>

      <div className="App">

      
        <Switch>
        
          <Route path="/orders">
          <Headers/>
            <Orders />
            <Footer />
          </Route>

          <Route path="/sell">
            <SellerLogin />
          </Route>

          <Route path="/dashboard">
            <SellerDashboard />
          </Route>

          <Route path="/mobiles">
            <Mobiles />
          </Route>

          <Route path='/'>
           <Headers/>
            <Home />
          <Footer/>
          </Route> 
          

        </Switch>
       
      </div>
    </Router>
  );
}

export default App;
