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
import FetchLocation from '../components/FetchLocation'

var dataArray = [
  {
    title: 'FlatList Demo',
    key: 'flatlistdemo'
  },
  {
    title: 'Login Demo',
    key: 'login'
  },
  {
    title: 'Signup Demo',
    key: 'signup'
  },
  {
    title: 'Get Location',
    key: 'get_location'
  },
  {
    title: 'Chat Demo',
    key: 'chat_demo'
  }
];

export default class Home extends Component<{}> {
  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged:(r1,r2) => r1.guid != r2.guid}
    );
    this.state = {
      dataSource: dataSource.cloneWithRows(dataArray)
    }
  }

  onRowPressed = (key) => {
    switch(key) {
      case 'login':
        Actions.login();
        break;
      case 'signup':
        Actions.signup();
        break;
      case 'flatlistdemo':
        Actions.flatlist_demo();
        break;
      case 'get_location':
        Actions.get_location();
        break;
      case 'chat_demo':
        Actions.chat_demo();
        break;l
    }
  }

  renderRow( rowData, sectionID, rowID) {
    return (
      <TouchableHighlight
        underlayColor='#dddddd'
        onPress={()=>this.onRowPressed(rowData.key)}
        style={styles.listRow}>
        <View>
          <Text style={{fontSize: 20, color: '#000000'}} numberOfLines={1}>{rowData.title}</Text>
          <View style={{height: 1, backgroundColor: '#dddddd'}}/>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.container}>
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
    flexGrow: 0,
    width: '90%'
  }
})
