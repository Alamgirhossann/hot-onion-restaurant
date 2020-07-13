import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import AboutUs from './Component/AboutUs/AboutUs';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';
import AddCart from './Component/AddCart/AddCart';
import { AuthContextProvider } from './Component/useAuth/useAuth';
import DeliveryDetail from './Component/DeliveryDetail/DeliveryDetail';
import Map from './Component/Map/Map';





function App() {
  const [cart, setCart]= useState([]);
  const [product, setProduct] = useState([])
  
  return (
    <div >
      <AuthContextProvider>
        <Header cart={cart}
        ></Header>
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/aboutUs">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signUp">
              <SignUp></SignUp>
            </Route>
            <Route path="/addCart/:id">
              <AddCart cart={cart}
              setCart={setCart}
             ></AddCart>
            </Route>
            <Route path="/deliveryDetail">
              <DeliveryDetail
               product={product}
               setProduct={setProduct}
               cart={cart}
               setCart={setCart}
              ></DeliveryDetail>
            </Route>
            <Route path="/map">
              <Map></Map>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
      
     
    </div>
  );
}

export default App;
