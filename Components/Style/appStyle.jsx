import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
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
  },
  curTemp: {
    fontSize: 40,
    color: "orange",
  },
  curWeather: {
    fontSize: 40,
    color: "orange",
    marginTop: 10,
  },
  curWind: {
    fontSize: 40,
    flex: 2,
    color: "orange",
  },
  a: {
    marginTop: '20%',
  }
});

export default styles;