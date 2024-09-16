import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import Search from "./Components/TopBar/search";
import SearchIcon from "./Components/TopBar/searchIcon";
import LocationIcon from "./Components/TopBar/locationIcon";
import Footer from "./Components/BottomBar/bottomBar";

const App = () => {
  const [lat_long, setLatLong] = useState({ lat: 0.0, long: 0.0 });
  const [when, setWhen] = useState('Currently');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={{marginTop: 30}}>
          <SearchIcon style={styles.searchIcon}/>
        </View>
        <Search style={styles.search} />
        <View style={{marginTop: 30}}>
          <LocationIcon setLatLong={setLatLong}/>
        </View>      
      </View>
      <ScrollView contentContainerStyle={styles.center}>
        <Text style={styles.when}> { when } </Text>
        <Text style={styles.where}>{lat_long.lat !== 0 && lat_long.long !== 0 ? `${lat_long.lat}  ${lat_long.long}` : ''}</Text>
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
    // alignContent: "center",
    // alignItems: "center", 
    paddingHorizontal: "5%", 
    // position: 'relative', // Ensure this container is relative for the icons
  },
  search: {
    position: "absolute", // Ensure this container is relative for the icons
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
    flex: 3,
    marginBottom: '100%',
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  when: {
    marginBottom: 20,
    fontSize: 30,
  },
  where: {
    fontSize: 20,
  },
});

export default App;