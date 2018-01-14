import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux'
import Login from './Login.js'
import Signup from './Signup.js'

export default class Home extends Component<{}> {
  login() {
    Actions.login()
  }

  signup() {
    Actions.signup()
  }

  render() {
    return (
      <View>
      <TouchableOpacity onPress={this.login}>
        <Text>Login</Text>
      </TouchableOpacity>
      </View>
    )
  }
}
