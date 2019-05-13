import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Registration from './components/Registration'
import Welcome from './components/Welcome'
import Login from './components/Login';
import Home from './components/Home';

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: ""
  }

  handler = (name, val) =>{
    this.setState({
      [name] : val
    })
  }
  render() {
    return (
      <BrowserRouter>
      <div className="center container">
        <h3 className="center">Madan Lohar Test</h3>
        <Switch>
          <Route exact path="/" component={Welcome} />
            <Route path="/registration" render={(routeProps) => (<Registration {...routeProps} {...this.state} handler={this.handler}/>)} />
            <Route path="/login" render={(routeProps) => (<Login {...routeProps} {...this.state} />)} />
            <Route path="/home" render={(routeProps) => (<Home {...routeProps} {...this.state} />)} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
