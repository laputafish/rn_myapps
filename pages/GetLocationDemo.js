import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';

import FetchLocation from '../components/FetchLocation'
import UsersMap from '../components/UsersMap'

// google map api key for iOS:
// AIzaSyAbuAORA8x4MeAOQ19eLbtgP13sBS3tdeQ

export default class GetLocationDemo extends Component<{}> {
  state = {
    loading: false,
    data: [],
    page: 1,
    seed: 1,
    error: null,
    refreshing: false,
    userLocation: null
  };

  constructor(props) {
    super(props);
  }

  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition( position => {
      this.setState({
        userLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0421
        }
      });
      console.log( position );
    }, err => console.log( err ));
  }

  render() {
    return (
      <View style={styles.container}>
        <FetchLocation onGetLocation={this.getUserLocationHandler}/>
        <UsersMap
          userLocation={this.state.userLocation}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  }
})
