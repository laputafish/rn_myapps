import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  ListView,
  StatusBar
} from 'react-native';

import {Actions} from 'react-native-router-flux'
import Login from './Login.js'
import Signup from './Signup.js'

var superheroArray = [
  'Superman',
  'Batman',
  'Wonder Woman',
  'The Flash',
  'Aquaman',
  'Green Lantern'
];

export default class Home extends Component<{}> {
  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged:(r1,r2) => r1.guid != r2.guid}
    );
    this.state = {
      dataSource: dataSource.cloneWithRows(superheroArray)
    }
  }

  login() {
    Actions.login()
  }

  signup() {
    Actions.signup()
  }

  renderRow( rowData, sectionID, rowID) {
    return (
      <TouchableHighlight underlayColor='#dddddd' style={styles.listRow}>
        <View>
          <Text style={{fontSize: 20, color: '#000000'}} numberOfLines={1}>{rowData}</Text>
          <View style={{height: 1, backgroundColor: '#dddddd'}}/>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <TouchableOpacity onPress={this.login}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listviewContainer}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}>
        </ListView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center'

  },
  listRow: {
    borderWidth: 1,
    backgroundColor:'lightgray',
    height:44,
    marginTop:5,
    padding:5,
    
    justifyContent: 'center',
    flexDirection:'column'
  },
  toolbar: {

  },
  listview: {
    flexGrow: 1
  },
  listviewContainer: {
    flexGrow: 1,
    width: '80%'
  }
})
