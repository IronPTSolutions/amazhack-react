import './App.css';
import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import ProductList from './components/product-list/ProductList';
import Header from './components/header/Header';

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const onLogIn = (loggedInUser) => {
    localStorage.setItem('user', JSON.stringify(loggedInUser));
    setUser(loggedInUser)
  }

  const onLogOut = () => {
    localStorage.removeItem('user')
    setUser(undefined)
  }

  return (
    <div className="App">
      <Header user={user} onLogOut={onLogOut}/>
      <Switch>
        <Route path="/login" render={(props) => <Login {...props} onLogIn={onLogIn} user={user} setUser={setUser} />} />
        <Route path="/products"  render={(props) => <ProductList {...props} user={user} onLogOut={onLogOut} />}/>{" "}
        {/* We don't wan't non-authenticated users to access the previous route! */}
        
        {!user && <Redirect to="/login" />}
      </Switch>
    </div>
  );
}

export default App;
