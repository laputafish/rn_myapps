import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';

import FetchLocation from '../components/FetchLocation'

// google map api key for iOS:
// AIzaSyAbuAORA8x4MeAOQ19eLbtgP13sBS3tdeQ

export default class GetLocationDemo extends Component<{}> {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }


    getUserLocationHandler = () => {
      navigator.geolocation.getCurrentPosition( position => {
        console.log( position );
      }, err => console.log( err ));
    }

    render() {
      return (
        <View style={styles.container}>
                <FetchLocation onGetLocation={this.getUserLocationHandler}/>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {

  }
})
