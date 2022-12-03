import React from 'react';
import Home from "./Pages/Home";
import Header from "./component/HeaderC/Header";
import Login from "./Pages/Login";
import JobDashboard from './Pages/JobDashboard';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import "./App.css";

function App() {
  return ( 
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path = "/job-dashboard" component={JobDashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
