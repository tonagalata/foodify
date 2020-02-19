import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App-outer-container">
        <Navbar />
        <div className="App-inner-container">
        </div>
        <Footer/>
      </div>
    )
  }
}

export default App;
