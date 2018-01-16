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

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const MyStatusBar = ({backgroundColor, ...pros}) => (
    <View style={[styles.statusBar, { backgroundColor}]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...pros}/>
    </View>
);

const styles = StyleSheet.create( {
  statusBar: {
      backgroundColor: '#1c313a',
      height: STATUSBAR_HEIGHT
  }
});

export default MyStatusBar
