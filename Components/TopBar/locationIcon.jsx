import React from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import getPermissions from "../utils/getPermissions";
import getCurrentWeather from "../utils/getCurrentWeather";
import getTodayWeather from "../utils/getTodayWeather";
import getWeeklyWeather from "../utils/getWeeklyWeather";

const LocationIcon = ({
  setLatLong,
  lat_long,
  setCurrentWeather,
  setTodayWeather,
  setWeeklyWeather,
  setCity,
  setTodayChart,
}) => {
  const handlePress = async () => {
    try {
      await getPermissions({ setLatLong, setCity });
      await getCurrentWeather(lat_long.lat, lat_long.long, setCurrentWeather);
      await getTodayWeather(lat_long.lat, lat_long.long, setTodayWeather, "", setTodayChart);
      await getWeeklyWeather(lat_long.lat, lat_long.long, setWeeklyWeather);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      alert('Failed to fetch weather data. Please try again.');
    };
  };
  return (
    
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={handlePress}
      >
        <Image
          source={require("../../imgs/location.png")}
          style={styles.icon}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    top: -25,
    width: 40,
    height: 40,
    marginLeft: 25,
  },
});

export default LocationIcon;
