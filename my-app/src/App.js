import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import { getCurrentLocation } from './Location.js';
import Adver from './adver.jsx';
import Gk from './gk.jsx';
import Cart from './cart.jsx';
import CartProvider from './cartcontext';
import DBE from './dbe.jsx';
import Meat from './meat.jsx';
import Footer from './footer.jsx';
import Alogin from './alogin.jsx';
import Snacks from './snacks.jsx';
import CoolDrinks from './cooldrinks.jsx';
import ReadyMadeItems from './breakfast.jsx';
import OnlineFoods from './fastfood.jsx';
import TeaPowder from './tea.jsx';
import IceCream from './ice.jsx';
import FrozenFoods from './frozen.jsx';
import Biscuits from './biscuits.jsx';
import Checkout from './checkout.jsx';
import Admin from './admin.jsx';
import Orders from './orders.jsx';
import AdminUsers from './adminusers.jsx';
import TLogin from './tlogin.jsx';
import Signup from './signup.jsx';
import Payment from "./payment.jsx";
import PaymentGet from './phis.jsx';
import AboutMe from './aboutme.jsx';



function App() {
  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <CartProvider>
      <Router>
        
        <Home />
        <Routes>
          <Route path='/tlogin' element={<TLogin/>}/>
          <Route path="/adver" element={<Adver />} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/alogin' element={<Alogin/>}/>
          <Route path="/gk" element={<Gk />} />
          <Route path="/DBE" element={<DBE />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Meat" element={<Meat />} />
          <Route path='/snacks' element={<Snacks />}/>
          <Route path='/cooldrinks' element={<CoolDrinks />}/>
          <Route path='/breakfast' element={<ReadyMadeItems />}/>
          <Route path='/fastfood' element={<OnlineFoods />}/>
          <Route path='/tea' element={<TeaPowder />}/>
          <Route path='/ice' element={<IceCream />}/>
          <Route path='/frozen' element={<FrozenFoods/>}/>
          <Route path='/biscuits' element={<Biscuits/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/adminusers' element={<AdminUsers/>}/>
          <Route path='/tlogin' element={<TLogin/>}/>
          <Route path="/payment" element={<Payment />} />
          <Route path='/phis' element={<PaymentGet/>}/>
          <Route path='/aboutme' element={<AboutMe/>}/>
          
          
         
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
    
  );
}

export default App;
