// App.js

import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import styles from "./Components/Style/appStyle";
import Search from "./Components/TopBar/search";
import SearchIcon from "./Components/TopBar/searchIcon";
import LocationIcon from "./Components/TopBar/locationIcon";
import Footer from "./Components/BottomBar/bottomBar";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";

const App = () => {
  // State hooks for various data
  const [lat_long, setLatLong] = useState({ lat: 0.0, long: 0.0 });
  const [searchLat_long, setSearchLatLong] = useState({ lat: 0.0, long: 0.0 });
  const [city, setCity] = useState("");
  const [when, setWhen] = useState("Currently");
  const [currentWeather, setCurrentWeather] = useState({});
  const [todayWeather, setTodayWeather] = useState({
    hours: [],
    temp: [],
    description: [],
    windSpeed: [],
  });
  const [todayChart, setTodayChart] = useState([]); // Initialize as empty array
  const [weeklyWeather, setWeeklyWeather] = useState({
    date: [],
    min: [],
    max: [],
    description: [],
  });
  const [loading, setLoading] = useState(false); // For loading indicator

  return (
    <ImageBackground
      source={require("./imgs/background.png")} // Path to your background image
      style={styles.background}
      resizeMode="cover" // Adjusts the image to cover the entire view
    >
      <SafeAreaView style={styles.container}>
        {/* Top Bar: Search Icon, Search Input, Location Icon */}
        <View style={styles.viewContainer}>
          <View style={{ marginTop: 30 }}>
            <SearchIcon
              style={styles.searchIcon}
              city={city}
              lat_long={searchLat_long}
              setCurrentWeather={setCurrentWeather}
              setTodayWeather={setTodayWeather}
              setTodayChart={setTodayChart}
              setWeeklyWeather={setWeeklyWeather}
            />
          </View>
          <Search
            style={styles.search}
            city={city}
            setCity={setCity}
            setSearchLatLong={setSearchLatLong}
          />
          <View style={{ marginTop: 30 }}>
            <LocationIcon
              setLatLong={setLatLong}
              lat_long={lat_long}
              setCurrentWeather={setCurrentWeather}
              setTodayWeather={setTodayWeather}
              setWeeklyWeather={setWeeklyWeather}
              setCity={setCity}
              setTodayChart={setTodayChart}
            />
          </View>
        </View>

        {/* Main Content: Weather Information and Chart */}
        <ScrollView contentContainerStyle={styles.center}>
          <Text style={styles.when}>{city}</Text>

          {/* Loading Indicator */}
          {loading && <ActivityIndicator size="large" color="#0000ff" />}

          {/* Currently Weather */}
          {when === "Currently" &&
          currentWeather &&
          Object.keys(currentWeather).length > 0 ? (
            <View style={styles.where}>
              <View style={styles.a}>
                <Text style={styles.curTemp}>{currentWeather.temp}°C</Text>
              </View>
              <View style={styles.a}>
                <Text style={styles.curWeather}>
                  {currentWeather.description}
                </Text>
              </View>
              <View style={styles.a}>
                <Text style={styles.curWind}>
                  Wind: {currentWeather.windSpeed} km/h
                </Text>
              </View>
            </View>
          ) : null}

          {/* Today's Weather */}
          {when === "Today" && todayWeather.hours.length > 0 ? (
            <View>
              {/* {todayWeather.hours.map((hour, index) => (
                <Text key={index} style={styles.weatherItem}>
                  {hour}, Temp: {todayWeather.temp[index]}°C, Weather:{" "}
                  {todayWeather.description[index]}, Wind: {todayWeather.windSpeed[index]} km/h
                </Text>
              ))} */}

              {/* VictoryChart for Today's Temperature */}
              {todayChart.length > 0 && (
                <VictoryChart theme={VictoryTheme.material}>
                  <VictoryLine
                    data={todayChart}
                    style={{
                      data: { stroke: "#c43a31" },
                      parent: { border: "1px solid #ccc"}
                    }}
                    // style={{
                    //   data: { stroke: "#c43a31", strokeWidth: 2 }, // Set the line color and thickness
                    // }}
                    // interpolation="linear" // Change to "natural" for smooth lines
                  />
                </VictoryChart>
              )}
            </View>
          ) : null}

          {/* Weekly Weather */}
          {when === "Weekly" && weeklyWeather.date.length > 0 ? (
            <View>
              {weeklyWeather.date.map((day, index) => (
                <Text key={index} style={styles.weatherItem}>
                  {day}, Min: {weeklyWeather.min[index]}°C, Max:{" "}
                  {weeklyWeather.max[index]}°C, Weather:{" "}
                  {weeklyWeather.description[index]}
                </Text>
              ))}
            </View>
          ) : null}
        </ScrollView>

        {/* Bottom Bar: Footer */}
        <Footer style={styles.footer} setWhen={setWhen} />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default App;
