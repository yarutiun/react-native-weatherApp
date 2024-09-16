import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import styles from "./Components/Style/appStyle";
import Search from "./Components/TopBar/search";
import SearchIcon from "./Components/TopBar/searchIcon";
import LocationIcon from "./Components/TopBar/locationIcon";
import Footer from "./Components/BottomBar/bottomBar";
import getCurrentWeather from "./Components/utils/getCurrentWeather";

const App = () => {
  const [lat_long, setLatLong] = useState({ lat: 0.0, long: 0.0 });
  const [searchLat_long, setSearchLatLong] = useState({ lat: 0.0, long: 0.0 });
  const [city, setCity] = useState('');
  const [when, setWhen] = useState('Currently');
  const [currentWeather, setCurrentWeather] = useState({});
  const [todayWeather, setTodayWeather] = useState({
    hours: [],
    temp: [],
    description: [],
    windSpeed: []
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={{marginTop: 30}}>
          <SearchIcon style={styles.searchIcon} city={city} lat_long={searchLat_long} setCurrentWeather={setCurrentWeather} setTodayWeather={setTodayWeather}/>
        </View>
        <Search style={styles.search} city={city} setCity={setCity} setSearchLatLong={setSearchLatLong}/>
        <View style={{marginTop: 30}}>
          <LocationIcon setLatLong={setLatLong} lat_long={lat_long} setCurrentWeather={setCurrentWeather} setTodayWeather={setTodayWeather}/>
        </View>      
      </View>
      
      <ScrollView contentContainerStyle={styles.center}>
        <Text style={styles.when}> { when } </Text>
        {when === 'Currently' && currentWeather ? (
          <Text style={styles.where}>
            {currentWeather.temp} {currentWeather.description} {currentWeather.windSpeed}
          </Text>
        ) : ''}
        
        {when === 'Today' && todayWeather.hours.length > 0 ? (
          <View>
            {todayWeather.hours.map((hour, index) => (
              <Text key={index} style={styles.weatherItem}>
                {hour}, Temp: {todayWeather.temp[index]}°C, 
                Weather: {todayWeather.description[index]}, 
                Wind: {todayWeather.windSpeed[index]} km/h
              </Text>
            ))}
          </View>
        ) : ''}

        {when === 'Weekly' ? <Text style={styles.where}>Weekly weather</Text> : ''}
      </ScrollView>
      
      <Footer style={styles.footer} setWhen={setWhen}/>
    </SafeAreaView>
  );
};

export default App;