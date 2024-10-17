import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  ImageBackground,
  ActivityIndicator,
  Image,
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
  const [todayChart, setTodayChart] = useState([]);
  const [weeklyChart, setWeeklyChart] = useState({ minData: [], maxData: [] });
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
              setWeeklyChart={setWeeklyChart}
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
              setWeeklyChart={setWeeklyChart}
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
              {/* VictoryChart for Today's Temperature */}
              {todayChart.length > 0 && (
                <VictoryChart theme={VictoryTheme.material}>
                  <VictoryLine
                    data={todayChart}
                    style={{
                      data: { stroke: "#c43a31" },
                      parent: { border: "1px solid #ccc" },
                    }}
                  />
                </VictoryChart>
              )}
              <ScrollView horizontal={true} style={styles.scrollView}>
                {todayWeather.hours.map((hour, index) => (
                  <View key={index} style={styles.weatherItem}>
                    <Text style={styles.hour}>{hour}</Text>
                    <Text style={styles.desc}>
                      {todayWeather.description[index]}
                    </Text>
                    <Text style={styles.emoji}>
                      {todayWeather.emoji[index]}
                    </Text>
                    <Text style={styles.temp}>
                      {todayWeather.temp[index]}°C
                    </Text>
                    <View style={styles.windContainer}>
                      <Text style={styles.wind}>
                        <Image
                          style={styles.windIcon}
                          source={require("./imgs/wind.png")}
                        />
                        {todayWeather.windSpeed[index]} km/h
                      </Text>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          ) : null}

          {/* Weekly Weather */}
          {when === "Weekly" && weeklyWeather.date.length > 0 ? (
            <View>
              {/* VictoryChart for Weekly Min and Max Temperature */}
              {weeklyChart.minData.length > 0 &&
                weeklyChart.maxData.length > 0 && (
                  <VictoryChart theme={VictoryTheme.material}>
                    {/* Min Temperature Line */}
                    <VictoryLine
                      data={weeklyChart.minData}
                      style={{
                        data: { stroke: "#043c61" }, // Blue for min temperatures
                        parent: { border: "1px solid #ccc" },
                      }}
                    />
                    {/* Max Temperature Line */}
                    <VictoryLine
                      data={weeklyChart.maxData}
                      style={{
                        data: { stroke: "#e74c3c" }, // Red for max temperatures
                        parent: { border: "1px solid #ccc" },
                      }}
                    />
                  </VictoryChart>
                )}
              {/* Weekly weather details */}
              <ScrollView horizontal={true} style={styles.scrollView}>
                {weeklyWeather.date.map((day, index) => (
                  <View key={index} style={styles.weatherItem}>
                  <Text style={styles.hour}>{day}</Text>
                  <Text style={styles.emojiIcon}>
                    {weeklyWeather.icon[index]}
                  </Text>
                  <Text style={styles.max}>
                    {weeklyWeather.max[index]}°C max
                  </Text>
                  <Text style={styles.min}>
                    {weeklyWeather.min[index]}°C min
                  </Text>
                </View>
                ))}
              </ScrollView>
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
