import React,{useState} from 'react';

import { BrowserRouter as Router,
  Routes,
  Route
  
  } from "react-router-dom"

  // importing screens...
import Landingpage from '../screens/Landingpage';
import Sales from '../screens/Sales/Sales';
import Summer from '../screens/Summer/Summer';
import Winter from '../screens/Winter/Winter';
import Accessories from '../screens/Accessories/Accessories';
import About from '../screens/About/About';
import Cart from '../screens/Cart/Cart';
import Wishlist from '../screens/Wishlist/Wishlist';
import Login from '../screens/Login/Login';
import Profile from '../screens/Profile/Profile';
import ProductView from '../screens/Product-view/Productview';

function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landingpage/>} />
          <Route path='/sales' element={<Sales/>} />
          <Route path='/winter' element={<Winter/>} />
          <Route path='/accessories' element={<Accessories/>} />
          <Route path='/summer' element={<Summer/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/wishlist' element={<Wishlist/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/productView' element={<ProductView/>} />

     
        </Routes>
      </Router>
     
    </>
    
  );
}

export default App;