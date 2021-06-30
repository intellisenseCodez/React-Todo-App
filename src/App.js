import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dateview from "./components/DateView";
import Navbar from "./components/Navbar";
import './App.css'
import './index.css'
import Cards from "./components/Cards";
import AddBtn from "./components/AddBtn";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Developer from "./components/pages/Developer";


class App extends React.Component{
  render(){
    return (
      <>
       
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" exact component={About}/>
              <Route path="/developer" exact component={Developer}/>
            </Switch>
          </Router>
      
      </>
    );
  }
}

export default App;
