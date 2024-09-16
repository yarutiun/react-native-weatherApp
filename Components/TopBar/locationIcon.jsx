import React from 'react';
import { Image, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import getPermissions from '../utils/getPermissions';

const LocationIcon = ({ setLatLong }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => getPermissions({ setLatLong })}>
        <Image source={require('../../imgs/location.png')} style={styles.icon} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: -25,
    // bottom: 0,
    width: 40,
    height: 40,
    marginLeft: 25,
  }
});

export default LocationIcon;
