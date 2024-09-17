import React from 'react';
import { Image, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import getCurrentWeather from '../utils/getCurrentWeather';
import getTodayWeather from '../utils/getTodayWeather';
import getWeeklyWeather from '../utils/getWeeklyWeather';

const SearchIcon = ({ city, setCurrentWeather, lat_long, setTodayWeather, setWeeklyWeather}) => {
  
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => {
        if (city.length < 3) {
          alert('Please enter a valid city name');
          return;
        }
        getCurrentWeather(lat_long.lat, lat_long.long, setCurrentWeather);
        getTodayWeather(lat_long.lat, lat_long.long, setTodayWeather);
        getWeeklyWeather(lat_long.lat, lat_long.long, setWeeklyWeather);
      }}>
        <Image source={require('../../imgs/search.png')} style={styles.icon} />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative', // Ensure parent has relative positioning
  },
  icon: {
    position: 'absolute',
    top: -25, // Adjust as needed
    width: 40,
    height: 40,
    marginRight: 5,
    zIndex: 10, // Ensure the icon stays on top of other elements
  }
});

export default SearchIcon;
