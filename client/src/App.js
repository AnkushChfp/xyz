import React from 'react';
import Home from "./Pages/Home";
import Header from "./component/HeaderC/Header";
import Login from "./Pages/Login";
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import "./App.css";

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
    
    </>
  );
}

export default App;
