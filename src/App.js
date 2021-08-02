import React from 'react';
import './App.css';
import Registration from "./components/registration/Registration";
import { HashRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import ListUsers from "./components/listusers/ListUsers";
import Login from "./components/login/Login";
import Header from "./components/Header/Header";
import NotFound from "./components/Not-found/Not-found";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: localStorage.getItem('user')
    }
  }
  render() {
    return <div>
      <Header/>
    <Router basename={process.env.PUBLIC.URL}>
      <Switch>
        {this.state.user && <Route exact path="/" component={ListUsers} />}
        {!this.state.user && <Route path="/registration" component={Registration} />}
        {!this.state.user && <Route path="/login" component={Login} />}
        <Route  component={NotFound} />
      </Switch>
    </Router>
    </div>
  };
}


export default App;


