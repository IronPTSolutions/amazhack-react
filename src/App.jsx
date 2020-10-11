import './App.css';
import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import ProductList from './components/product-list/ProductList';
import AuthenticatorRouter from './components/authenticator/AuthenticatorRouter'
import Header from './components/header/Header';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';



function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const loggedIn = (loggedUser) => {
    localStorage.setItem('user', JSON.stringify(loggedUser))
    setUser(loggedUser)
  }

  const loggedOut = () => {
    localStorage.removeItem('user')
    setUser(undefined)
  }


  return (
    <div className="App">
     <ScopedCssBaseline />
      <Header user={user} logOut={loggedOut} />

      <Switch>
        <AuthenticatorRouter path="/products" user={user} render={(props) => <ProductList {...props} user={user} logOut={loggedOut} />} />

        <Route path="/login" render={(props) => <Login {...props} user={user} logIn={loggedIn} />} />

        <Redirect to="/products" />
      </Switch>
    </div>
  );
}

export default App;
