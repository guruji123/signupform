import React, {Component} from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import LogIn from './Client/LogIn';
import SignupForm from './Client/SignupForm';

import './App.css';



class App extends Component {
  render() {
  return (
    <div className="container">
      <BrowserRouter>
    
      <div className="container">
      <Switch>
        <Route exact path='/' component={SignupForm} />
        <Route path='/Login' component={LogIn} />
        
      </Switch>

      </div>
    </BrowserRouter>
      
    </div>
    )
  }
}

export default App;
