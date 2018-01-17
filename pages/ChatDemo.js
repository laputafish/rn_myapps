import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

export default class ChatDemo extends Component<{}> {
  state = {
    name: ''
  };

  render() {
    return (
      <View>
        <Text style={styles.title}>
          Enter your name:
        </Text>
        <TextInput
          style={styles.nameInput}
          placeholder='John Snow'
          onChangeText={(text) => {
            this.setState({name: text})
          }}
          value={this.state.name}
        />
        <Text>Name: {this.state.name}
        </Text>
        <TouchableOpacity
          onPress={() => {
            console.log( 'this.state: ', this.state );
            Actions.chat_screen(
              {contact_name: this.state.name}
            )
          }}>
          <Text style={styles.buttonText}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20
  },
  nameInput: {
    padding: 5,
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
    borderRadius: 5
  },
  buttonText: {
    marginLeft: 20,
    fontSize: 20
  }
});
