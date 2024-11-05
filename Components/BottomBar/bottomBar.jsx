import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Image } from "react-native";

const bottomBar = ({ setLatLong, setWhen }) => {
  const [isPressed1, setIsPressed1] = useState(true);
  const [isPressed2, setIsPressed2] = useState(false);
  const [isPressed3, setIsPressed3] = useState(false);

  const handle1 = () => {
    setWhen('Currently');
    setIsPressed1(true);
    setIsPressed2(false);
    setIsPressed3(false);
  }

  const handle2 = () => {
    setWhen('Today');
    setIsPressed1(false);
    setIsPressed2(true);
    setIsPressed3(false);
  }

  const handle3 = () => {
    setIsPressed1(false);
    setIsPressed2(false);
    setIsPressed3(true);
    setWhen('Weekly'); 
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handle1}>
        <Image source={require('../../imgs/now.png')} style={[styles.icon, isPressed1 && styles.iconPressed]} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handle2}>
        <Image source={require('../../imgs/today.png')} style={[styles.icon, isPressed2 && styles.iconPressed]} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handle3}>
        <Image source={require('../../imgs/calendar.png')} style={[styles.icon, isPressed3 && styles.iconPressed]} />
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
  iconPressed: {
    transform: [{ scale: 1.2 }],
  },
});

export default bottomBar;
