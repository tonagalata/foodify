import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Home from '../Home/Home'
import Restaurants from '../Restaurants/Restaurants'
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App-outer-container">
        <Navbar />
        <div className="App-inner-container">
          <Switch>
            <Route
              exact 
              path="/"
              render={props => 
                <Home/>
              }
            />
            <Route
              exact 
              path="/restaurants"
              render={props => 
                <Restaurants />
              }
            />
          </Switch>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default App;
