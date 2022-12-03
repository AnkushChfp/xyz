import React from 'react';
import Home from "./Pages/Home";
import Header from "./component/HeaderC/Header";
import Login from "./Pages/Login";
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import "./App.css";
import PostJobs from './Pages/PostJobs';

function App() {
  return ( 
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/postedjob" component={PostJobs}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
