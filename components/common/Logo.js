import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux'

export default class Logo extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress="Actions.goBack">
        <Image style={{width:100,height:100}}
        source={{uri: 'https://pbs.twimg.com/profile_images/763061332702736385/KoK6gHzp_400x400.jpg'}}/>
        <Text style={styles.logoText}>Welcome to My app.</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoText: {
    fontSize: 18,
    color: 'rgba(255,255,255,.7)'
  }
})
