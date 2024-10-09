// SearchIcon.js

import React from 'react';
import { Image, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import getCurrentWeather from '../utils/getCurrentWeather';
import getTodayWeather from '../utils/getTodayWeather';
import getWeeklyWeather from '../utils/getWeeklyWeather';

const SearchIcon = ({
  city,
  setCurrentWeather,
  lat_long,
  setTodayWeather,
  setWeeklyWeather,
  setTodayChart,
}) => {
  // Handler for search icon press
  const handleSearchPress = async () => {
    if (city.length < 3) {
      alert('Please enter a valid city name');
      return;
    }

    try {
      // Fetch current weather
      await getCurrentWeather(lat_long.lat, lat_long.long, setCurrentWeather);

      // Fetch today's weather and chart data
      await getTodayWeather(lat_long.lat, lat_long.long, setTodayWeather, city, setTodayChart);

      // Fetch weekly weather
      await getWeeklyWeather(lat_long.lat, lat_long.long, setWeeklyWeather);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      alert('Failed to fetch weather data. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleSearchPress}>
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
