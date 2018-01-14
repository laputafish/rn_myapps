import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux'

export default class PageOne extends Component {
  render() {
    return (
      <View><Text>Page 1</Text>
        <TouchableOpacity onPress={Actions.page2()}>
          <Text>Page 2</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
