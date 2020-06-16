import React from 'react';

import './App.css';
import Header from './Header/Header';
import LogIn from './LogIn/LogIn';
import SignUp from './SignUp/SignUp';
import Footer from './Footer/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CompanyProvides from './CompanyProvides/CompanyProvides';

import Land from './land/Land';
import ProductHeader from './ProductHeader/ProductHeader';
import BreakfastShop from './BreakfastShop/BreakfastShop';







function App() {


  return (
    <div >
      
      
      <Router>
        <Switch>
          <Route path='/login'>
            <LogIn></LogIn>
          </Route>
          <Route path='/signUp'>
            <SignUp></SignUp>
          </Route>
          <Route path='/land' >
           <Land></Land>
          </Route>
        </Switch>
      </Router>
      <Header></Header>
      <ProductHeader></ProductHeader>
      <BreakfastShop ></BreakfastShop >
      <CompanyProvides></CompanyProvides>
      <Footer></Footer>
   
   
   
    </div>
  );
}

export default App;
