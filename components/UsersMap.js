import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const usersMap = props => {
  return (
      <View style={styles.mapContainer}>
        <MapView
          initialRegion={{
            latitude: 22.407277,
            longitude: 114.152411,
            latitudeDelta: 0.0622,
            longitudeDelta: 0.0421
          }}
          region={props.userLocation}
          style={styles.map}></MapView>
      </View>
  );
};
const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    flexGrow: 1,
    padding: 5
},
  map: {
    width: '100%',
    flexGrow: 1
  }
});

export default usersMap;
