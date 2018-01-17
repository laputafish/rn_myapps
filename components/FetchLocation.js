import React from "react";
import {StyleSheet} from 'react-native';
import { Button } from "react-native-elements";

const fetchLocation = props => {
  return (
    <Button large buttonStyle={styles.buttonStyle} title="Get location" onPress={props.onGetLocation}>
    </Button>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 5
  }
})
export default fetchLocation;
