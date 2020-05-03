import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import Restaurants from '../Restaurants/Restaurants'
import Reviews from '../Restaurants/Reviews'
import CreateRestaurantForm from '../../components/CreateRestaurantForm/CreateRestaurantForm'
import userService from '../../service/userService';
import './App.css';

class App extends Component{

  state ={
    user: userService.getUser()
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() })
  }

  handleLogout = () => {
    // we need to call userService.logout()
    userService.logout();
    // we need to set the user property on state to null
    this.setState({ user: null })
  }

  render(){
    return(
      <div className="App-outer-container">
        <Navbar 
        handleLogout={this.handleLogout}
        />
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
                userService.getUser()
                ? <Restaurants 
                {...props}
                />
                : <Redirect to='/login'/>
              }
            />
            <Route
              exact 
              path="/restaurants/:id/review"
              render={props => 
                userService.getUser()
                ? <Reviews 
                {...props}
                user={this.state.user}
                />
                : <Redirect to='/login'/>
              }
            />
            <Route
              exact 
              path="/create-restaurant"
              render={props => 
                userService.getUser()
                ? <CreateRestaurantForm 
                {...props}
                user={this.state.user}
                />
                : <Redirect to='/login'/>
              }
            />
            <Route
              exact 
              path="/login"
              render={props => 
                <Login 
                {...props}
                handleSignupOrLogin={this.handleSignupOrLogin}
                />
              }
            />
            <Route
              exact 
              path="/signup"
              render={props =>
                <Signup 
                {...props}
                handleSignupOrLogin={this.handleSignupOrLogin}
                />
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
