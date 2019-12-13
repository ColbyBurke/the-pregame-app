import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import {  Route, Switch, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer"
import GetEvents from './components/GetEvents'
import EventDetails from './components/EventDetails'
import GetGroups from './components/GetGroups';
import CreateEvents from './components/CreateEvents'
import CreateGroups from './components/CreateGroups'
import GroupDetails from './components/GroupDetails'




function App() { 

    
  
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/events' component={GetEvents}></Route>
        <Route path='/events/details' component={EventDetails}></Route>
        <Route exact path='/groups' component={GetGroups}></Route>
        <Route exact path='/events/create' component={CreateEvents}></Route>
        <Route exact path='/groups/create' component={CreateGroups}></Route>
        <Route exact path='/group/:id' component={GroupDetails}></Route>
        <Route exact path='/event/:id' component={EventDetails}></Route>
        </Switch>
        <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
