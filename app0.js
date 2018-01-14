/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import Bananas from './components/Bananas';
import FetchLocation from './components/FetchLocation';
import Blink from './components/Blink';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Login from './pages/Login'
import Signup from './pages/Signup'

const MyStatusBar = ({backgroundColor, ...pros}) => (
    <View style={[styles.statusBar, { backgroundColor}]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...pros}/>
    </View>
);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

export default class App extends Component<{}> {
  getUserLocationHandler = () => {
    console.log( 'click the button' );
  }
  /* #1c313a */
  render() {
    return (
      <View style={styles.container}>
        // <MyStatusBar backgroundColor="red"
        // barStyle="light-content"/>
        // <View style={styles.navBar}>
        //   <Image source={require('./images/logo.png')} style={styles.logo}/>
        //   <View style={styles.rightNav}>
        //     <TouchableOpacity>
        //       <Icon style={styles.navItem} name="search" size={25}/>
        //     </TouchableOpacity>
        //     <TouchableOpacity>
        //       <Icon style={styles.navItem} name="account-circle" size={25}/>
        //     </TouchableOpacity>
        //   </View>
        // </View>
        <View style={styles.body}>
          <Login/>
        </View>
        // <View style={styles.tabBar}>
        //   <TouchableOpacity style={styles.tabItem}>
        //     <Icon name="home" size={25}/>
        //     <Text style={styles.tabTitle}>Home</Text>
        //   </TouchableOpacity>
        //   <TouchableOpacity style={styles.tabItem}>
        //     <Icon name="whatshot" size={25}/>
        //     <Text style={styles.tabTitle}>Trending</Text>
        //   </TouchableOpacity>
        //   <TouchableOpacity style={styles.tabItem}>
        //     <Icon name="subscriptions" size={25}/>
        //     <Text style={styles.tabTitle}>Subscriptions</Text>
        //   </TouchableOpacity>
        // </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'blue'
  },
  logo: {
    width: 98,
    height: 22,
    resizeMode: 'contain'
  },
  container: {
    flex: 1,

    backgroundColor: '#455a64'
  },
  navBar: {
    height: APPBAR_HEIGHT,
    backgroundColor: 'yellow',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rightNav: {
    flexDirection: 'row'
  },
  navItem: {
    marginLeft: 25
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1
    flex:1
  },
  statusBar: {
      backgroundColor: '#1c313a',
      height: STATUSBAR_HEIGHT
  },
  tabBar: {
    backgroundColor: 'white',
    height: 60,
    borderTopWidth: 0.5,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabTitle: {
    fontSize: 11,
    color: '#3c3c3c'
  }
});
