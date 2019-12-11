import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
        <Route exact path='/' component={Home}/>
        </Switch>
        <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
