import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3C6E71",
  },
  viewContainer: {
    flexDirection: "row",
    paddingHorizontal: "5%", 
  },
  search: {
    // position: "absolute", 
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    width: "100%",
  },
  footer: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    fontSize: '40px',
    // flex: 3,
    marginBottom: '100%',
    flexGrow: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  when: {
    marginBottom: 20,
    fontSize: 30,
  },
  where: {
    fontSize: 20,
  },
  weatherItem: {
    fontSize: 16,
    marginBottom: 10,
  }
});

export default App;
