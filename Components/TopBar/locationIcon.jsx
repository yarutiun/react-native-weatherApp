import React from 'react';
import { Image, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import getPermissions from '../utils/getPermissions';
import getCurrentWeather from '../utils/getCurrentWeather';
import getTodayWeather from '../utils/getTodayWeather';
import getWeeklyWeather from '../utils/getWeeklyWeather';

const LocationIcon = ({ setLatLong, lat_long, setCurrentWeather, setTodayWeather, setWeeklyWeather, setCity }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => {
        getPermissions({ setLatLong, setCity });
        getCurrentWeather(lat_long.lat, lat_long.long, setCurrentWeather);
        getTodayWeather(lat_long.lat, lat_long.long, setTodayWeather);
        getWeeklyWeather(lat_long.lat, lat_long.long, setWeeklyWeather);
          }}>
        <Image source={require('../../imgs/location.png')} style={styles.icon} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: -25,
    width: 40,
    height: 40,
    marginLeft: 25,
  }
});

export default LocationIcon;
