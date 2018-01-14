import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
//Home, Login, Signup} from './pages';

export default class Routes extends Component<{}> {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="signup" component={Signup} title="Signup" hideNavBar/>
          <Scene key="login" component={Login} title="Login" hideNavBar/>
          <Scene key="home" component={Home} title="Home"  initial={true}/>
        </Stack>
      </Router>
    )
  }
}
