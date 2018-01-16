import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/common/Logo'
import LoginForm from '../components/common/LoginForm'

import {Actions} from 'react-native-router-flux'

export default class Signup extends Component<{}> {
  login() {
    Actions.login();
  }
  render() {
    return (
      <View style={styles.container}>
        <Logo/>
        <LoginForm type="Signup"/>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already have an account?</Text>
          <TouchableOpacity
            onPress={this.login}>
            <Text style={styles.signupButton}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginVertical: 16,
    flexDirection: 'row'
  },

  signupText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16
  },

  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500'
  }
})
