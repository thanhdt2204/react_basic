import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from './about/About';
import './App.scss';
import Login from './authentication/Login';
import NotFound from './error/NotFound';
import Header from './header/Header';
import Home from './home/Home';
import AddUser from './users/AddUser';
import User from './users/User';

class App extends React.Component {

  render() {
    console.log("App(isLoggedIn): ", this.props.isLoggedIn);
    return (
      <BrowserRouter>
        {this.props.isLoggedIn && <Header />}
        < Switch >
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/user" exact component={User} />
          <Route path="/user/new" component={AddUser} />
          <Route path="/login" component={Login} />
          <Route path="*" component={NotFound} />
        </Switch >
      </BrowserRouter >
    );
  }
}

const mapStateReduxToPropsOfApp = (state) => {
  return { isLoggedIn: state.isLoggedIn }
}

export default connect(mapStateReduxToPropsOfApp)(App);
