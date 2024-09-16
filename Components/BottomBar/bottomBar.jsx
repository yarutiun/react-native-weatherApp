import React, { useEffect } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Image } from "react-native";

const bottomBar = ({ setLatLong, setWhen }) => {

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => setWhen('Currently')}>
        <Image source={require('../../imgs/now.png')} style={styles.icon} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setWhen('Today')}>
        <Image source={require('../../imgs/today.png')} style={styles.icon} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setWhen('Weekly')}>
        <Image source={require('../../imgs/calendar.png')} style={styles.icon} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: "10%",
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default bottomBar;
